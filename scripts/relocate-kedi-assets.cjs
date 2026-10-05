const {fs,path,root,imageExt,walk}=require('./kedi-assets-common.cjs');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'kedi-assest/manifest.json'),'utf8'));
const publicRoot=path.resolve(root,'public');
const targetRoot=path.resolve(root,'kedi-assest/source/local');
let count=0;
for(const source of walk(publicRoot).filter(file=>imageExt.test(file))) {
  const relative=path.relative(publicRoot,source);
  const target=path.resolve(targetRoot,relative);
  if(!source.startsWith(publicRoot+path.sep)||!target.startsWith(targetRoot+path.sep))throw new Error('Image relocation must stay inside the source and asset project');
  if(!manifest['/'+relative.replaceAll('\\','/')])throw new Error(`Unmapped image: ${relative}`);
  if(fs.existsSync(target))throw new Error(`Existing source would be overwritten: ${target}`);
  fs.mkdirSync(path.dirname(target),{recursive:true});fs.renameSync(source,target);count++;
}
console.log(`Moved ${count} image originals into kedi-assest/source/local; originals remain available for rebuilding and rollback.`);
