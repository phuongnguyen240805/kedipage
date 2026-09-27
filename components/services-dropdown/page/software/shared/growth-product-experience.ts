/**
 * Phase 6 - semantic experience layer for growth/content/AI products.
 * Presentation only. Existing product copy and data remain untouched.
 */
export const growthProductExperienceCss = `
/* Outreach - conversation stream. */
.kedi-outreach-route .e-hero-vis::after{content:'';position:absolute;right:-3%;bottom:8%;width:34%;height:28%;z-index:6;border-radius:26px 26px 7px 26px;background:linear-gradient(145deg,rgba(255,255,255,.18),rgba(255,255,255,.06));border:1px solid rgba(255,255,255,.18);box-shadow:0 20px 60px -34px rgba(5,68,50,.7);animation:kediOutreachBubble 5.2s ease-in-out infinite;pointer-events:none}
.kedi-outreach-route .e-hero-vis::before{content:'';position:absolute;left:-2%;top:15%;width:25%;height:20%;z-index:6;border-radius:22px 22px 22px 6px;background:linear-gradient(145deg,rgba(255,255,255,.14),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.14);animation:kediOutreachBubble 5.2s ease-in-out -2.4s infinite;pointer-events:none}
.kedi-outreach-route .e-to{transition:transform .32s ease,box-shadow .32s ease}
@keyframes kediOutreachBubble{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-8px,0)}}

/* Profiles - layered browser identity stack. */
.kedi-profiles-route .e-hero-vis{perspective:1200px}
.kedi-profiles-route .e-hero-vis::after{content:'';position:absolute;inset:9% 7% 21% 15%;z-index:0;border-radius:18px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16);transform:translate3d(38px,24px,-40px) rotateY(5deg);box-shadow:0 30px 70px -42px rgba(7,22,70,.76)}
.kedi-profiles-route .e-hero-vis::before{content:'';position:absolute;inset:13% 12% 17% 9%;z-index:1;border-radius:18px;border:1px solid rgba(255,255,255,.12);transform:translate3d(-24px,12px,-20px) rotateY(-4deg)}
.kedi-profiles-route .ko-shot{transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s ease}

/* Video - editor timeline and playhead. */
.kedi-video-route .e-hero-vis::after{content:'';position:absolute;left:4%;right:4%;bottom:7%;height:52px;z-index:7;border-radius:9px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.18) 0 12%,rgba(255,255,255,.06) 12% 13%,rgba(255,255,255,.11) 13% 25%,transparent 25% 26%);border:1px solid rgba(255,255,255,.12);box-shadow:0 16px 40px -28px rgba(0,0,0,.65);pointer-events:none}
.kedi-video-route .e-hero-vis::before{content:'';position:absolute;left:28%;bottom:5%;width:2px;height:64px;z-index:8;background:linear-gradient(#fff,var(--kedi-sig-accent));box-shadow:0 0 18px var(--kedi-sig-glow);animation:kediVideoPlayhead 7s linear infinite;pointer-events:none}
@keyframes kediVideoPlayhead{0%{left:8%}100%{left:91%}}

/* POD - design to production conveyor. */
.kedi-pod-route .e-hero-vis::after{content:'';position:absolute;left:0;right:0;bottom:5%;height:16px;z-index:6;border-radius:999px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.15) 0 22px,rgba(255,255,255,.04) 22px 34px);border:1px solid rgba(255,255,255,.12);animation:kediPodConveyor 12s linear infinite;pointer-events:none}
.kedi-pod-route .ko-shot{transition:transform .35s ease,box-shadow .35s ease}
@keyframes kediPodConveyor{to{background-position:340px 0}}

/* SEO - search intelligence scan field. */
.kedi-seo-route .e-hero-vis::after{content:'';position:absolute;left:8%;right:8%;top:18%;height:2px;z-index:8;background:linear-gradient(90deg,transparent,var(--kedi-sig-accent-2),transparent);box-shadow:0 0 16px var(--kedi-sig-glow);animation:kediSeoScan 5s ease-in-out infinite;pointer-events:none}
.kedi-seo-route .e-tbl-box{overflow:hidden}
.kedi-seo-route .e-tbl-box::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,transparent 0 45%,color-mix(in srgb,var(--kedi-sig-accent) 7%,transparent) 45% 55%,transparent 55%);transform:translateY(-100%);animation:kediSeoTableScan 7s linear infinite}
@keyframes kediSeoScan{0%,100%{top:18%;opacity:.35}50%{top:72%;opacity:.9}}
@keyframes kediSeoTableScan{to{transform:translateY(100%)}}

/* Ads - campaign control room / KPI pulse. */
.kedi-ads-route .e-hero-vis::after{content:'';position:absolute;inset:12% 5% 18%;z-index:6;pointer-events:none;background:linear-gradient(180deg,transparent 80%,rgba(56,189,248,.18) 80%),linear-gradient(90deg,transparent 88%,rgba(47,115,232,.16) 88%);background-size:100% 25%,25% 100%;opacity:.7}
.kedi-ads-route .e-hero-so>div{position:relative;overflow:hidden}
.kedi-ads-route .e-hero-so>div::after{content:'';position:absolute;left:12px;right:12px;bottom:8px;height:3px;border-radius:999px;background:linear-gradient(90deg,var(--kedi-sig-accent),var(--kedi-sig-accent-2));transform:scaleX(.35);transform-origin:left;opacity:.58;animation:kediAdsKpi 4.8s ease-in-out infinite}
.kedi-ads-route .e-hero-so>div:nth-child(2)::after{animation-delay:-1.2s}.kedi-ads-route .e-hero-so>div:nth-child(3)::after{animation-delay:-2.4s}.kedi-ads-route .e-hero-so>div:nth-child(4)::after{animation-delay:-3.6s}
@keyframes kediAdsKpi{0%,100%{transform:scaleX(.3)}50%{transform:scaleX(1)}}

/* AI Flow - executable node canvas. */
.kedi-ai-flow-route .kp-visual{isolation:isolate}
.kedi-ai-flow-route .kp-visual::after{content:'';position:absolute;left:6%;right:6%;top:50%;height:2px;z-index:1;background:linear-gradient(90deg,transparent,var(--kedi-sig-accent),var(--kedi-sig-accent-2),transparent);transform-origin:left;animation:kediAiFlowEdge 4.2s ease-in-out infinite;pointer-events:none}
.kedi-ai-flow-route .kp-node{animation:kediAiFlowNode 5.2s ease-in-out infinite}.kedi-ai-flow-route .kp-node.b{animation-delay:-1.7s}.kedi-ai-flow-route .kp-node.c{animation-delay:-3.4s}
.kedi-ai-flow-route .kp-step{overflow:hidden}
.kedi-ai-flow-route .kp-step::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:3px;background:linear-gradient(90deg,var(--kedi-sig-accent),var(--kedi-sig-accent-2));transform:scaleX(.18);transform-origin:left;transition:transform .35s ease}
@keyframes kediAiFlowEdge{0%,100%{transform:scaleX(.18);opacity:.28}50%{transform:scaleX(1);opacity:.85}}
@keyframes kediAiFlowNode{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}

@media(hover:hover){
  .kedi-outreach-route .e-to:hover{transform:translateY(-5px)!important;box-shadow:0 28px 70px -42px var(--kedi-sig-glow)!important}
  .kedi-profiles-route .ko-shot:hover{transform:translateY(-8px) rotateY(0)!important;box-shadow:0 36px 80px -38px rgba(25,55,120,.62)!important}
  .kedi-pod-route .ko-shot:hover{transform:translateY(-7px)!important}
  .kedi-ai-flow-route .kp-step:hover::after{transform:scaleX(1)}
}
@media(max-width:767px){
  .kedi-outreach-route .e-hero-vis::before,.kedi-outreach-route .e-hero-vis::after,.kedi-profiles-route .e-hero-vis::before,.kedi-profiles-route .e-hero-vis::after{display:none}
  .kedi-video-route .e-hero-vis::after{height:34px}
}
@media(prefers-reduced-motion:reduce){
  .kedi-outreach-route .e-hero-vis::before,.kedi-outreach-route .e-hero-vis::after,.kedi-video-route .e-hero-vis::before,.kedi-pod-route .e-hero-vis::after,.kedi-seo-route .e-hero-vis::after,.kedi-seo-route .e-tbl-box::after,.kedi-ads-route .e-hero-so>div::after,.kedi-ai-flow-route .kp-visual::after,.kedi-ai-flow-route .kp-node{animation:none!important}
}
`;
