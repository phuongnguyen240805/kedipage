const {fs,path,root,sourceFiles,remoteUrls}=require('./kedi-assets-common.cjs');
const urls=new Map();
const inventoryPath=path.join(root,'kedi-assest/remote-inventory.json');
if(fs.existsSync(inventoryPath))for(const [url,files]of Object.entries(JSON.parse(fs.readFileSync(inventoryPath,'utf8'))))urls.set(url,files);
for(const url of urls.keys())if(url.includes('${')||/\/webfonts\//.test(url))urls.delete(url);
for (const file of sourceFiles()) for (const url of remoteUrls(fs.readFileSync(file,'utf8'))) {
  const files=urls.get(url)||[];
  const relative=path.relative(root,file).replaceAll('\\','/');if(!files.includes(relative))files.push(relative);urls.set(url,files);
}
fs.mkdirSync(path.join(root,'kedi-assest'),{recursive:true});
fs.writeFileSync(path.join(root,'kedi-assest/remote-inventory.json'),JSON.stringify(Object.fromEntries([...urls].sort()),null,2)+'\n');
const hosts={};for(const url of urls.keys()){const host=new URL(url).hostname;hosts[host]=(hosts[host]||0)+1;}
console.log(JSON.stringify({remoteImages:urls.size,hosts},null,2));
