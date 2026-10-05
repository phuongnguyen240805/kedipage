// One-time source migration. Run after building and validating the CDN assets.
const {fs,path,ts,root,imageExt,sourceFiles,decode}=require('./kedi-assets-common.cjs');
const origin='https://assets.kedi.media';
const manifest=JSON.parse(fs.readFileSync(path.join(root,'kedi-assest/manifest.json'),'utf8'));
const lookup=new Map(Object.entries(manifest));
const aliasPath=path.join(root,'kedi-assest/updated-urls.json');
if(fs.existsSync(aliasPath))for(const [oldSrc,src]of Object.entries(JSON.parse(fs.readFileSync(aliasPath,'utf8'))))lookup.set(oldSrc,{src});
const escape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const keys=[...lookup.keys()].sort((a,b)=>b.length-a.length);
const pattern=new RegExp(keys.map(escape).join('|'),'g');
function rewrite(text,file) {
  if(file.endsWith(path.join('BoAiAgent','content.ts'))) {
    text=text.replace(/https:\/\/mona\.media\/wp-content\/themes\/monatheme\/template\/assets\/images\/gau-webmaster\/agents\/sm\/[^\\"\s]+/g,'/software-clone/ai-agent/assets/kedi-automate.png');
    text=text.replace(/https:\/\/mona\.media\/wp-content\/themes\/monatheme\/template\/assets\/images\/gau-webmaster\/ah\/[^\\"\s]+/g,'/software-clone/ai-agent/assets/kedi-cham-soc-lead.png');
  }
  const relative=path.relative(path.join(root,'public'),file).replaceAll('\\','/');
  // Rewrite CSS and HTML relative image references before changing absolute URLs.
  if(file.startsWith(path.join(root,'public'))&&/\.(css|html)$/i.test(file)) {
    text=text.replace(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/gi,(all,quote,value)=>{
      if(/^(data:|https?:|\/\/|#)/.test(value))return all;
      const target=value.startsWith('/')?value:path.posix.resolve('/',path.posix.dirname(relative),value);
      return lookup.has(target)?`url("${lookup.get(target).src}")`:all;
    });
    text=text.replace(/\b(src|poster|data-src)=(['"])([^'"]+)\2/gi,(all,attribute,quote,value)=>{
      if(/^(data:|https?:|\/\/|#)/.test(value))return all;
      const target=value.startsWith('/')?value:path.posix.resolve('/',path.posix.dirname(relative),value);
      return lookup.has(target)?`${attribute}=${quote}${lookup.get(target).src}${quote}`:all;
    });
    text=text.replace(/\b(srcset|data-srcset)=(['"])([^'"]+)\2/gi,(all,attribute,quote,value)=>{
      const rewritten=value.split(',').map(candidate=>{
        const parts=candidate.trim().split(/\s+/);const url=parts[0];
        if(/^(data:|https?:|\/\/|#)/.test(url))return candidate.trim();
        const target=url.startsWith('/')?url:path.posix.resolve('/',path.posix.dirname(relative),url);
        if(lookup.has(target))parts[0]=lookup.get(target).src;
        return parts.join(' ');
      }).join(', ');
      return `${attribute}=${quote}${rewritten}${quote}`;
    });
  }
  // Expand known static base templates without touching dynamic runtime expressions.
  const variables=Object.fromEntries([...text.matchAll(/const\s+(\w+)\s*=\s*['"]([^'"]+)['"]/g)].map(m=>[m[1],m[2]]));
  for(const match of [...text.matchAll(/`(https?:\/\/[^$`]+)\$\{fileName\}`/g)]) {
    const prefix=match[1];
    text=text.replace(/(['"])([^'"\/]+\.(?:png|webp|jpe?g|svg))\1/g,(all,quote,filename)=>JSON.stringify(lookup.get(prefix+filename)?.src||prefix+filename));
    text=text.replace(match[0],'fileName');
  }
  text=text.replace(/`([^`]*\$\{[^`]+)`/g,(all,value)=>{
    const key=value.replace(/\$\{(\w+)\}/g,(expression,name)=>variables[name]||expression);
    return lookup.has(key)?JSON.stringify(lookup.get(key).src):all;
  });
  text=text.replace(/`(\/[^`]*\$\{[^`]+)`/g,(all,value)=>{
    const prefix=value.split('${')[0];
    return [...lookup.keys()].some(key=>key.startsWith(prefix)&&key.startsWith('/'))&&/\.(png|jpe?g|webp|avif|svg|gif)/i.test(value)?'`'+origin+value+'`':all;
  });
  text=text.replace(pattern,(key,offset,whole)=>{
    const before=whole[offset-1]||'';
    const after=whole[offset+key.length]||'';
    // Prevent partial matches in longer filenames, already migrated URLs, import
    // specifiers, or image URL comparisons with a different path prefix.
    if(key.startsWith('/')&&/[\w/:.\-]/.test(before))return key;
    if(/[\w.\-]/.test(after))return key;
    return lookup.get(key).src;
  });
  return text;
}
let changed=0;
for(const file of sourceFiles()) {
  if(file===path.join(root,'lib/cloudflare-image-loader.ts'))continue;
  let text=fs.readFileSync(file,'utf8');
  const original=text;
  if(file===path.join(root,'public/index.ts')) {
    text=text.replace(/export \{ default as (\w+) \} from ['"]\.\/([^'"]+)['"];?/g,(all,name,relative)=>{
      const entry=lookup.get('/'+relative);
      if(!entry)throw new Error(`Missing imported asset: ${relative}`);
      return `export const ${name} = ${JSON.stringify({src:entry.src,width:entry.width||32,height:entry.height||32})};`;
    });
  }
  if(file.endsWith(path.join('datas','services-data.ts'))) {
    // Materialize the Cloudinary fallback once instead of constructing a remote
    // image URL for every menu size in the browser.
    const sf=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);
    const edits=[];
    function visit(node){
      if(ts.isObjectLiteralExpression(node)&&!node.properties.some(p=>ts.isPropertyAssignment(p)&&p.name.getText(sf)==='imageUrl')) {
        const prop=node.properties.find(p=>ts.isPropertyAssignment(p)&&p.name.getText(sf)==='cloudinaryId'&&ts.isStringLiteral(p.initializer));
        const entry=prop&&lookup.get('https://res.cloudinary.com/dptsqgnaj/image/upload/'+prop.initializer.text);
        if(entry)edits.push([prop.getStart(sf),`imageUrl: ${JSON.stringify(entry.src)},\n        `]);
      }
      ts.forEachChild(node,visit);
    }
    visit(sf);for(const [start,value]of edits.sort((a,b)=>b[0]-a[0]))text=text.slice(0,start)+value+text.slice(start);
  }
  text=rewrite(text,file);
  if(/\.tsx$/.test(file)) {
    // Re-enable responsive srcset on Next Images now that resizing is offline.
    // Only remove attributes on components imported from next/image.
    const sf=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
    const imageNames=new Set();
    for(const statement of sf.statements)if(ts.isImportDeclaration(statement)&&statement.moduleSpecifier.text==='next/image'&&statement.importClause?.name)imageNames.add(statement.importClause.name.text);
    const edits=[];
    function visit(node) {
      if((ts.isJsxSelfClosingElement(node)||ts.isJsxOpeningElement(node))&&imageNames.has(node.tagName.getText(sf))) {
        for(const attr of node.attributes.properties)if(ts.isJsxAttribute(attr)&&attr.name.text==='unoptimized'&&!attr.initializer)edits.push([attr.getStart(sf),attr.end]);
      }
      ts.forEachChild(node,visit);
    }
    visit(sf);
    for(const [start,end]of edits.sort((a,b)=>b[0]-a[0]))text=text.slice(0,start)+text.slice(end);
  }
  if(text!==original){fs.writeFileSync(file,text);changed++;console.log('Updated '+path.relative(root,file).replaceAll('\\','/'));}
}
// Keep a small size index in the client loader rather than shipping the full
// migration manifest (which also includes source URLs and audit information).
const variants={};const local={};
for(const [key,entry]of lookup) {
  const match=entry.src.match(/\/images\/([a-f0-9]+)-\d+\.webp$/);
  if(match&&entry.variants)variants[match[1]]=Object.keys(entry.variants).map(Number).sort((a,b)=>a-b);
  if(key.startsWith('/'))local[key]=entry.src;
}
fs.writeFileSync(path.join(root,'lib/kedi-assets-variants.json'),JSON.stringify(variants)+'\n');
fs.writeFileSync(path.join(root,'lib/kedi-assets-local.json'),JSON.stringify(local)+'\n');
console.log(`Migrated ${changed} source files; ${Object.keys(variants).length} responsive images.`);
