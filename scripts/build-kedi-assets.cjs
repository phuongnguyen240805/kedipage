const {fs,path,root,imageExt,walk}=require('./kedi-assets-common.cjs');
const crypto=require('node:crypto');
const sharp=require('sharp');
const home=path.join(root,'kedi-assest');
const dist=path.join(home,'dist');
const sources=path.join(home,'source');
const manifestPath=path.join(home,'manifest.json');
const origin='https://assets.kedi.media';
const digest=buffer=>crypto.createHash('sha256').update(buffer).digest('hex').slice(0,20);
const widths=[64,128,256,384,640,960,1280,1920];
sharp.concurrency(1);
async function pool(items,limit,fn) {
  let index=0;
  await Promise.all(Array.from({length:limit},async()=>{while(index<items.length){const i=index++;await fn(items[i],i);}}));
}
async function save(relative,buffer) {
  if(buffer.length>25*1024*1024) throw new Error(`Asset exceeds 25 MiB: ${relative}`);
  const file=path.join(dist,relative);fs.mkdirSync(path.dirname(file),{recursive:true});
  if(!fs.existsSync(file)||!buffer.equals(fs.readFileSync(file)))fs.writeFileSync(file,buffer);
  return '/'+relative.replaceAll('\\','/');
}
async function download(url) {
  const cache=path.join(sources,'remote',digest(url)+'.bin');
  if(fs.existsSync(cache)) return fs.readFileSync(cache);
  if(process.argv.includes('--offline'))throw new Error('Remote source not cached; run pnpm assets:sync');
  for(let attempt=0;attempt<2;attempt++) {
    try {
      const response=await fetch(url,{signal:AbortSignal.timeout(18000),headers:{'User-Agent':'Mozilla/5.0 KediAssetMigration/1.0','Accept':'image/avif,image/webp,image/*,*/*;q=0.8'}});
      if(!response.ok)throw new Error(`HTTP ${response.status}`);
      const type=response.headers.get('content-type')||'';
      if(/text\/html|application\/json/.test(type))throw new Error(`Not an image: ${type}`);
      if(Number(response.headers.get('content-length'))>25*1024*1024)throw new Error('Image exceeds 25 MiB');
      const buffer=Buffer.from(await response.arrayBuffer());
      if(buffer.length>25*1024*1024)throw new Error('Image exceeds 25 MiB');
      // Validate before caching; reject remote HTML/error bodies disguised as images.
      const prefix=buffer.subarray(0,1500).toString('utf8').trimStart();
      if(!(prefix.startsWith('<')&&/<svg[\s>]/i.test(prefix)))await sharp(buffer,{animated:true}).metadata();
      fs.mkdirSync(path.dirname(cache),{recursive:true});fs.writeFileSync(cache,buffer);return buffer;
    } catch(error) {if(attempt===1)throw error;}
  }
}
async function buildImage(key,buffer,localPath) {
  const hash=digest(buffer);
  const prefix=buffer.subarray(0,1500).toString('utf8').trimStart();
  const svg=prefix.startsWith('<')&&/<svg[\s>]/i.test(prefix);
  const extension=localPath ? path.extname(localPath).toLowerCase() : svg ? '.svg' : '';
  let entry;
  if(svg || extension==='.ico') {
    const output=await save(`images/${hash}${extension||'.svg'}`,buffer);
    let dimensions={width:32,height:32};
    if(svg){const meta=await sharp(buffer).metadata();dimensions={width:meta.width||32,height:meta.height||32};}
    entry={src:origin+output,...dimensions,variants:{}};
  } else {
    const meta=await sharp(buffer,{animated:true}).metadata();
    const width=meta.autoOrient?.width||meta.width||1;
    const height=meta.autoOrient?.height||meta.height||1;
    if((meta.pages||1)>1) {
      const output=await save(`images/${hash}.${meta.format==='gif'?'gif':meta.format==='png'?'png':'webp'}`,buffer);
      entry={src:origin+output,width,height:meta.pageHeight||height,variants:{}};
    } else {
      const sizes=[...new Set(widths.filter(w=>w<width).concat(Math.min(width,1920)))].sort((a,b)=>a-b);
      const variants={};
      for(const size of sizes) {
        const output=`images/${hash}-${size}.webp`;
        if(!fs.existsSync(path.join(dist,output))) {
          const optimized=await sharp(buffer).rotate().resize({width:size,withoutEnlargement:true}).webp({quality:82,effort:4}).toBuffer();
          await save(output,optimized);
        }
        variants[size]=origin+'/'+output;
      }
      entry={src:variants[sizes.at(-1)],width,height,variants};
    }
  }
  // Keep original paths on the asset host for computed URLs and old references.
  if(localPath) await save(localPath,buffer);
  return entry;
}
async function main() {
  fs.mkdirSync(dist,{recursive:true});
  const manifest=fs.existsSync(manifestPath)?JSON.parse(fs.readFileSync(manifestPath,'utf8')):{};
  const previous=structuredClone(manifest);
  const localFiles=[...walk(path.join(root,'public')).filter(f=>imageExt.test(f)),...walk(path.join(sources,'local')).filter(f=>imageExt.test(f))];
  let done=0;
  await pool(localFiles,3,async(file)=>{
    const base=file.startsWith(path.join(root,'public'))?path.join(root,'public'):path.join(sources,'local');
    const relative=path.relative(base,file).replaceAll('\\','/');
    manifest['/'+relative]=await buildImage('/'+relative,fs.readFileSync(file),relative);
    if(++done%100===0)console.log(`Local images: ${done}/${localFiles.length}`);
  });
  fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
  const inventory=JSON.parse(fs.readFileSync(path.join(home,'remote-inventory.json'),'utf8'));
  for(const key of Object.keys(manifest))if(!key.startsWith('/')&&!inventory[key])delete manifest[key];
  const oldFailures=fs.existsSync(path.join(home,'unavailable-images.json'))?JSON.parse(fs.readFileSync(path.join(home,'unavailable-images.json'),'utf8')):[];
  const failures=[];done=0;
  await pool(Object.keys(inventory),8,async(url)=>{
    try{manifest[url]=await buildImage(url,await download(url));}
    catch(error){if(!manifest[url])failures.push({url,error:process.argv.includes('--offline')?(oldFailures.find(f=>f.url===url)?.error||error.message):error.message,files:inventory[url]});}
    if(++done%25===0){console.log(`Remote images: ${done}/${Object.keys(inventory).length}; unavailable: ${failures.length}`);fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');}
  });
  fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
  const aliasPath=path.join(home,'updated-urls.json');
  const aliases=fs.existsSync(aliasPath)?JSON.parse(fs.readFileSync(aliasPath,'utf8')):{};
  for(const [key,entry]of Object.entries(manifest))if(previous[key]&&previous[key].src!==entry.src)aliases[previous[key].src]=entry.src;
  fs.writeFileSync(aliasPath,JSON.stringify(aliases,null,2)+'\n');
  fs.writeFileSync(path.join(home,'unavailable-images.json'),JSON.stringify(failures,null,2)+'\n');
  fs.writeFileSync(path.join(dist,'_headers'),`/*\n  Access-Control-Allow-Origin: *\n  X-Content-Type-Options: nosniff\n  Cache-Control: public, max-age=86400\n/images/*\n  ! Cache-Control\n  Cache-Control: public, max-age=31536000, immutable\n`);
  // Remove unused generated variants only; never delete original source files.
  const used=new Set(Object.values(manifest).flatMap(entry=>[entry.src,...Object.values(entry.variants)]).map(url=>new URL(url).pathname));
  for(const file of walk(path.join(dist,'images')))if(/^[a-f0-9]{20}(?:-\d+)?\.(?:webp|png|gif|svg|ico)$/.test(path.basename(file))) {
    const relative='/'+path.relative(dist,file).replaceAll('\\','/');
    if(!used.has(relative))fs.unlinkSync(file);
  }
  const files=walk(dist);
  if(files.length>20000)throw new Error(`Free plan file limit exceeded: ${files.length}`);
  const report={localImages:localFiles.length,remoteImages:Object.keys(inventory).length,remoteMigrated:Object.keys(inventory).length-failures.length,unavailable:failures.length,assetFiles:files.length,assetBytes:files.reduce((n,f)=>n+fs.statSync(f).size,0),canonicalBytes:Object.values(manifest).reduce((n,e)=>n+fs.statSync(path.join(dist,new URL(e.src).pathname)).size,0)};
  fs.writeFileSync(path.join(home,'build-report.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report,null,2));
}
main().catch(error=>{console.error(error);process.exitCode=1;});
