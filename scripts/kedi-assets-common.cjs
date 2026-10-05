const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const imageExt = /\.(png|jpe?g|webp|avif|gif|svg|ico|bmp|tiff?)$/i;
const textExt = /\.(tsx?|jsx?|css|scss|json|html)$/i;
const dirs = ['app','components','data','lib','utils','constants','contexts','hooks','public'];
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=> entry.isDirectory() ? walk(path.join(dir,entry.name)) : [path.join(dir,entry.name)]);
}
function sourceFiles() { return dirs.flatMap(dir=>walk(path.join(root,dir))).filter(file=>textExt.test(file)&&!/^kedi-assets-(?:manifest|local|variants)\.json$/.test(path.basename(file))); }
function decode(value) { return value.replace(/\\\//g,'/').replace(/&amp;|\\u0026/g,'&'); }
function remoteUrls(text) {
  const urls = new Set();
  const normalized = decode(text);
  for (const match of normalized.matchAll(/https?:\/\/[^\s"'<>`\\)]+/g)) {
    const value = match[0].replace(/[,;]+$/,'');
    try {
      const url = new URL(value);
      if (url.hostname==='assets.kedi.media') continue;
      if(value.includes('${') || /\/webfonts\//.test(url.pathname))continue;
      if (imageExt.test(url.pathname) || /^(images\.unsplash\.com|images\.pexels\.com|picsum\.photos|placehold\.co|lh3\.googleusercontent\.com|play-lh\.googleusercontent\.com)$/.test(url.hostname) || /\/image\/upload\//.test(url.pathname)) urls.add(value);
    } catch {}
  }
  // Resolve the static `${base}/file.webp` expressions used in product data.
  const variables = Object.fromEntries([...text.matchAll(/const\s+(\w+)\s*=\s*['"]([^'"]+)['"]/g)].map(m=>[m[1],m[2]]));
  for (const match of text.matchAll(/`([^`]*\$\{[^`]+)`/g)) {
    const value=match[1].replace(/\$\{(\w+)\}/g,(all,name)=>variables[name]||all);
    if(!value.includes('${')&&/^https?:/.test(value))try{if(imageExt.test(new URL(value).pathname))urls.add(value);}catch{}
    const simple=match[1].match(/^(https?:\/\/[^$]+)\$\{fileName\}$/);
    if(simple)for(const filename of text.matchAll(/['"]([^'"\/]+\.(?:png|webp|jpe?g|svg))['"]/g))urls.add(simple[1]+filename[1]);
  }
  for(const match of text.matchAll(/cloudinaryId:\s*['"]([^'"]+)['"]/g))if(match[1]!=='some-cloudinary-id')urls.add('https://res.cloudinary.com/dptsqgnaj/image/upload/'+match[1]);
  return [...urls];
}
module.exports={fs,path,ts,root,imageExt,walk,sourceFiles,remoteUrls,decode};
