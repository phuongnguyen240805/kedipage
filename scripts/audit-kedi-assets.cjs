const {fs,path,root,sourceFiles,remoteUrls}=require('./kedi-assets-common.cjs');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'kedi-assest/manifest.json'),'utf8'));
const remaining=[];
for(const file of sourceFiles()) {
  const text=fs.readFileSync(file,'utf8');
  for(const url of remoteUrls(text)) {
    if(manifest[url]&&!text.includes(url)&&url.startsWith('https://res.cloudinary.com/dptsqgnaj/image/upload/'))continue;
    remaining.push({url,migrated:!!manifest[url],file:path.relative(root,file).replaceAll('\\','/')});
  }
}
fs.writeFileSync(path.join(root,'kedi-assest/remaining-remote-references.json'),JSON.stringify(remaining,null,2)+'\n');
console.log(JSON.stringify({remaining:remaining.length,availableButUnmigrated:remaining.filter(e=>e.migrated)},null,2));
