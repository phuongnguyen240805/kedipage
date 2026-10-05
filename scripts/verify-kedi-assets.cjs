const assert=require('node:assert/strict');
const {fs,path,root,walk,imageExt}=require('./kedi-assets-common.cjs');
const home=path.join(root,'kedi-assest');
const dist=path.join(home,'dist');
const manifest=JSON.parse(fs.readFileSync(path.join(home,'manifest.json'),'utf8'));
const files=walk(dist);
assert(files.length<=20000,'Workers Free file limit');
for(const file of files)assert(fs.statSync(file).size<=25*1024*1024,`File too large: ${file}`);
const localSources=walk(path.join(home,'source/local')).filter(f=>imageExt.test(f));
const publicSources=walk(path.join(root,'public')).filter(f=>imageExt.test(f));
for(const file of [...localSources,...publicSources]) {
  const base=file.startsWith(path.join(root,'public'))?path.join(root,'public'):path.join(home,'source/local');
  const key='/'+path.relative(base,file).replaceAll('\\','/');assert(manifest[key],`Missing image: ${key}`);
}
for(const [key,entry]of Object.entries(manifest)) {
  for(const url of [entry.src,...Object.values(entry.variants)]) {
    assert.equal(new URL(url).origin,'https://assets.kedi.media');
    assert(fs.existsSync(path.join(dist,decodeURIComponent(new URL(url).pathname))),`Missing CDN file for ${key}: ${url}`);
  }
}
const header=fs.readFileSync(path.join(dist,'_headers'),'utf8');
assert(header.includes('max-age=31536000, immutable'));
assert(header.includes('Access-Control-Allow-Origin: *'));
const variants=JSON.parse(fs.readFileSync(path.join(root,'lib/kedi-assets-variants.json'),'utf8'));
for(const [hash,sizes]of Object.entries(variants))for(const width of sizes)assert(fs.existsSync(path.join(dist,`images/${hash}-${width}.webp`)));
console.log(`Verified ${Object.keys(manifest).length} image mappings, ${files.length} static assets, responsive variants, cache and CORS headers.`);
if(process.argv.includes('--remote')) {
  (async()=>{
    const urls=[...new Set(Object.values(manifest).map(entry=>entry.src))];
    const failures=[];let index=0;let done=0;
    await Promise.all(Array.from({length:12},async()=>{
      while(index<urls.length){const url=urls[index++];
        try{
          const response=await fetch(url,{method:'HEAD',signal:AbortSignal.timeout(20000)});
          assert.equal(response.status,200,`HTTP ${response.status}`);
          assert.match(response.headers.get('content-type')||'',/^image\//);
          assert.equal(response.headers.get('access-control-allow-origin'),'*');
          assert.match(response.headers.get('cache-control')||'',/immutable/);
        }catch(error){failures.push({url,error:error.message});}
        if(++done%200===0)console.log(`CDN checks: ${done}/${urls.length}; failures: ${failures.length}`);
      }
    }));
    fs.writeFileSync(path.join(home,'cdn-verification.json'),JSON.stringify({checkedAt:new Date().toISOString(),checked:urls.length,failures},null,2)+'\n');
    assert.equal(failures.length,0,JSON.stringify(failures));
    console.log(`Verified all ${urls.length} unique production CDN images: HTTP 200, image MIME, immutable cache and CORS.`);
  })().catch(error=>{console.error(error.message);process.exitCode=1;});
}
