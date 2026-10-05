const assert=require('node:assert/strict');
const {fs,path,root}=require('./kedi-assets-common.cjs');
const routes=['/','/bo-ai-agent','/kedi-profiles','/phan-mem-dao-tao-noi-bo','/nhtq','/du-an','/blog/viet-phan-mem-thoi-dai-ai','/blog-clone/viet-phan-mem-thoi-dai-ai/index.html'];
async function main(){
  const results=[];
  for(const route of routes){
    const response=await fetch('https://kedi.media'+route,{signal:AbortSignal.timeout(25000)});
    assert.equal(response.status,200,`${route}: HTTP ${response.status}`);
    const html=await response.text();
    const images=[...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/gi)].map(match=>match[1]);
    assert(images.length>0,`${route}: missing images`);
    assert(images.some(url=>url.startsWith('https://assets.kedi.media/')),`${route}: CDN not used`);
    assert(!images.some(url=>url.includes('/_next/image')),`${route}: runtime optimizer still used`);
    results.push({route,status:response.status,images:images.length,cdnImages:images.filter(url=>url.startsWith('https://assets.kedi.media/')).length});
  }
  const www=await fetch('https://www.kedi.media/',{signal:AbortSignal.timeout(25000)});
  assert.equal(www.status,200,'www domain');
  const icon=await fetch('https://assets.kedi.media/brand/kedi-app-icon.png',{method:'HEAD'});
  assert.equal(icon.status,200);assert.equal(icon.headers.get('content-type'),'image/png');
  fs.writeFileSync(path.join(root,'kedi-assest/web-verification.json'),JSON.stringify({checkedAt:new Date().toISOString(),routes:results,wwwStatus:www.status,pngIconStatus:icon.status},null,2)+'\n');
  console.log(JSON.stringify(results,null,2));
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
