/**
 * Phase 7 - deeper visual/motion layer for vertical software solutions.
 * Existing markup and copy stay untouched.
 */
export const verticalSolutionExperienceCss = `
/* NHTQ - animated cross-border route language. */
[data-vertical-product="nhtq"] .nhtq-hero-img{position:relative;z-index:2}
[data-vertical-product="nhtq"] .nhtq-hero::after{content:'';position:absolute;left:8%;right:8%;bottom:9%;height:2px;z-index:1;background:linear-gradient(90deg,transparent,var(--vp-blue),var(--vp-accent),transparent);opacity:.35;transform-origin:left;animation:vpNhtqRoute 7.5s ease-in-out infinite}
[data-vertical-product="nhtq"] .nhtq-capture-transfer-list{position:relative;isolation:isolate}
[data-vertical-product="nhtq"] .nhtq-capture-transfer-list::before{content:'';position:absolute;left:6%;right:6%;top:50%;height:2px;z-index:0;background:linear-gradient(90deg,rgba(46,120,213,.12),rgba(255,91,88,.36),rgba(46,120,213,.12));transform:translateY(-50%)}
[data-vertical-product="nhtq"] .nhtq-capture-transfer-item{position:relative;z-index:1}
[data-vertical-product="nhtq"] .nhtq-port-item{transition:transform .5s cubic-bezier(.22,1,.36,1),filter .5s ease}
@keyframes vpNhtqRoute{0%,100%{transform:scaleX(.16);opacity:.18}50%{transform:scaleX(1);opacity:.58}}

/* SkillHub - learning path / human progress. */
[data-vertical-product="skillhub"] .banner{position:relative;isolation:isolate}
[data-vertical-product="skillhub"] .banner::after{content:'';position:absolute;left:5%;right:5%;bottom:7%;height:1px;background:linear-gradient(90deg,transparent,var(--vp-accent),var(--vp-violet),transparent);opacity:.38}
[data-vertical-product="skillhub"] .all-in-one-product-tabs{position:relative}
[data-vertical-product="skillhub"] .all-in-one-product-tabs::after{content:'';position:absolute;left:0;bottom:-12px;width:24%;height:3px;border-radius:99px;background:linear-gradient(90deg,var(--vp-accent),var(--vp-violet));animation:vpSkillProgress 8s ease-in-out infinite}
[data-vertical-product="skillhub"] .all-in-one-product-item-content{border-radius:28px!important}
[data-vertical-product="skillhub"] .skillhub-about img,[data-vertical-product="skillhub"] .all-in-one img{transition:transform .45s cubic-bezier(.22,1,.36,1)}
@keyframes vpSkillProgress{0%,100%{width:18%;opacity:.45}50%{width:78%;opacity:1}}

/* JMS - luxury retail editorial depth, using the existing article copy. */
[data-vertical-product="jms"] .blogdt-block{position:relative;overflow:hidden;isolation:isolate}
[data-vertical-product="jms"] .blogdt-block::before{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 82% 18%,rgba(212,170,87,.18),transparent 30%),linear-gradient(115deg,transparent 0 52%,rgba(255,255,255,.025) 52% 52.4%,transparent 52.4%)}
[data-vertical-product="jms"] .blogdt-block::after{content:'';position:absolute;right:7%;top:18%;width:180px;height:180px;border:1px solid rgba(212,170,87,.18);border-radius:50%;box-shadow:0 0 0 28px rgba(212,170,87,.035),0 0 0 58px rgba(212,170,87,.02)}
[data-vertical-product="jms"] .toc_widget_list a{transition:color .25s ease,transform .25s ease}
[data-vertical-product="jms"] .mona-content blockquote{border-left:3px solid var(--vp-gold)!important;background:#fcf8f0!important;border-radius:0 16px 16px 0!important;padding:20px 24px!important}
[data-vertical-product="jms"] .mona-content table{border-radius:14px;overflow:hidden;box-shadow:0 16px 50px -38px rgba(65,44,13,.42)}

/* Tools Ngon - app launcher / utility marketplace. */
[data-vertical-product="tools-ngon"] .tools-visual{isolation:isolate}
[data-vertical-product="tools-ngon"] .tools-visual::after{content:'';position:absolute;left:7%;right:7%;bottom:6%;height:54px;border-radius:18px;background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.12);box-shadow:0 20px 50px -32px rgba(0,0,0,.7)}
[data-vertical-product="tools-ngon"] .tools-visual-icon{z-index:2;animation:vpToolsLauncher 5.2s ease-in-out infinite}
[data-vertical-product="tools-ngon"] .tools-ui-board{isolation:isolate}
[data-vertical-product="tools-ngon"] .tools-ui-board::before{content:'';position:absolute;inset:5%;border-radius:22px;background-image:radial-gradient(circle at 18% 24%,rgba(69,134,255,.26) 0 7%,transparent 7.5%),radial-gradient(circle at 50% 24%,rgba(63,211,165,.22) 0 7%,transparent 7.5%),radial-gradient(circle at 82% 24%,rgba(255,185,79,.24) 0 7%,transparent 7.5%),linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:auto,auto,auto,34px 34px,34px 34px;opacity:.72}
[data-vertical-product="tools-ngon"] .tools-feature-card{overflow:hidden;position:relative}
[data-vertical-product="tools-ngon"] .tools-feature-card::after{content:'';position:absolute;left:0;right:0;bottom:0;height:3px;background:linear-gradient(90deg,#2473e8,#3dd0a2);transform:scaleX(.18);transform-origin:left;transition:transform .32s ease}
@keyframes vpToolsLauncher{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-8px) scale(1.015)}}

/* Restaurant route - warm hospitality presentation only; copy remains unchanged. */
[data-vertical-product="restaurant-ai"]{position:relative;isolation:isolate}
[data-vertical-product="restaurant-ai"]::before{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 84% 18%,rgba(180,119,71,.12),transparent 24%),radial-gradient(circle at 14% 72%,rgba(82,111,76,.1),transparent 28%)}
[data-vertical-product="restaurant-ai"]>div>div{position:relative}
[data-vertical-product="restaurant-ai"]>div>div::after{content:'';position:absolute;right:4%;top:10%;width:min(34vw,360px);aspect-ratio:1;border-radius:50% 50% 22% 50%;background:linear-gradient(145deg,rgba(70,92,64,.1),rgba(177,119,72,.12));border:1px solid rgba(89,72,48,.1);z-index:-1}

/* EduTech - learning operating system with a progress rail. */
[data-vertical-product="edutech"] .e-hero-vis{perspective:1200px}
[data-vertical-product="edutech"] .e-hero-vis::after{content:'';position:absolute;inset:9% 6% 19% 10%;z-index:0;border-radius:30px;border:1px solid rgba(255,255,255,.14);transform:translate3d(28px,18px,-20px)}
[data-vertical-product="edutech"] .e-hero-so{position:relative;overflow:hidden}
[data-vertical-product="edutech"] .e-hero-so::after{content:'';position:absolute;left:0;bottom:0;height:3px;width:38%;background:linear-gradient(90deg,#fecd1f,#f59034,#f41e92);animation:vpEduProgress 6.4s ease-in-out infinite}
[data-vertical-product="edutech"] .e-trang{transition:transform .42s cubic-bezier(.22,1,.36,1)}
@keyframes vpEduProgress{0%,100%{width:18%;opacity:.42}50%{width:92%;opacity:1}}

@media(hover:hover){
  [data-vertical-product="nhtq"] .nhtq-port-item:hover{transform:translateY(-7px);filter:drop-shadow(0 34px 44px rgba(26,67,110,.2))}
  [data-vertical-product="skillhub"] .skillhub-about img:hover,[data-vertical-product="skillhub"] .all-in-one img:hover{transform:scale(1.025)}
  [data-vertical-product="jms"] .toc_widget_list a:hover{color:var(--vp-gold)!important;transform:translateX(4px)}
  [data-vertical-product="tools-ngon"] .tools-feature-card:hover::after{transform:scaleX(1)}
}
@media(max-width:980px){
  [data-vertical-product="nhtq"] .nhtq-capture-transfer-list::before{display:none}
  [data-vertical-product="jms"] .blogdt-block::after{width:120px;height:120px;right:-30px}
  [data-vertical-product="restaurant-ai"]>div>div::after{opacity:.5;right:-8%}
}
@media(prefers-reduced-motion:reduce){
  [data-vertical-product="nhtq"] .nhtq-hero::after,[data-vertical-product="skillhub"] .all-in-one-product-tabs::after,[data-vertical-product="tools-ngon"] .tools-visual-icon,[data-vertical-product="edutech"] .e-hero-so::after{animation:none!important}
}
`;
