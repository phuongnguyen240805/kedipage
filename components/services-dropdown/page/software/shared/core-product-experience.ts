/**
 * Phase 5 - semantic visual/motion layer for the core KEDI product routes.
 * Presentation only: no product copy or data lives here.
 */
export const coreProductExperienceCss = `
.kedi-product-route .e-hero-vis,
.kedi-product-route .e-hero-so,
.kedi-product-route .e-ban,
.kedi-product-route .e-troi,
.kedi-product-route .e-thang{isolation:isolate}

/* Kedi OS - command center / control plane. */
.kedi-os-route .e-hero-vis::after{content:'';position:absolute;left:7%;right:7%;top:5%;height:18px;z-index:5;pointer-events:none;border-radius:999px;background:radial-gradient(circle at 9px 50%,#ff6b68 0 4px,transparent 4.5px),radial-gradient(circle at 25px 50%,#f5c451 0 4px,transparent 4.5px),radial-gradient(circle at 41px 50%,#52c97a 0 4px,transparent 4.5px),linear-gradient(90deg,rgba(255,255,255,.22),rgba(255,255,255,.05))}
.kedi-os-route .e-hero-so{box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 24px 60px -42px rgba(15,20,72,.72)}
.kedi-os-route .e-hero-so::before{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,transparent 0 49.8%,rgba(255,255,255,.08) 50%,transparent 50.2%),linear-gradient(transparent 0 49.8%,rgba(255,255,255,.06) 50%,transparent 50.2%);background-size:25% 100%,100% 50%;opacity:.5}

/* Kedi CRM - sales pipeline with a moving handoff signal. */
.kedi-crm-route .e-hero-vis::after{content:'';position:absolute;left:2%;right:3%;bottom:13px;height:2px;z-index:6;background:linear-gradient(90deg,transparent,var(--kedi-sig-accent),var(--kedi-sig-accent-2),transparent);opacity:.7}
.kedi-crm-route .e-hero-vis::before{animation:kediCrmSignal 5.8s linear infinite}
.kedi-crm-route .e-ban::after{content:'';position:absolute;width:10px;height:10px;border-radius:50%;top:8px;left:4%;background:var(--kedi-sig-accent-2);box-shadow:0 0 0 8px color-mix(in srgb,var(--kedi-sig-accent-2) 18%,transparent);animation:kediCrmTrack 6s ease-in-out infinite}
@keyframes kediCrmTrack{0%,100%{left:4%}50%{left:94%}}
@keyframes kediCrmSignal{0%,100%{filter:saturate(1)}50%{filter:saturate(1.35) brightness(1.08)}}

/* Kedi Commerce - storefront and back-office dual surface. */
.kedi-commerce-route .e-hero-vis::after{content:'';position:absolute;inset:7% -3% 16% 50%;z-index:1;border-radius:20px;background:linear-gradient(145deg,rgba(255,193,92,.16),rgba(255,255,255,.03));border:1px solid rgba(255,214,147,.18);transform:translate3d(24px,18px,0)}
.kedi-commerce-route .e-anh{position:relative;z-index:3}
.kedi-commerce-route .e-to{overflow:hidden}
.kedi-commerce-route .e-to::after{content:'';position:absolute;width:92px;height:92px;right:-36px;bottom:-38px;border-radius:28px;background:radial-gradient(circle,var(--kedi-sig-accent-2),transparent 68%);opacity:.13;pointer-events:none}

/* Kedi Agents - AI workforce cockpit. */
.kedi-agents-route .e-hero-vis::after{content:'';position:absolute;inset:-7%;z-index:0;border:1px solid rgba(111,219,255,.16);border-radius:50%;box-shadow:0 0 0 42px rgba(154,99,255,.045),0 0 0 86px rgba(53,213,255,.025);animation:kediAgentOrbit 10s linear infinite}
.kedi-agents-route .e-hero-vis::before{z-index:1;animation:kediAgentPulse 4.4s ease-in-out infinite}
.kedi-agents-route .e-to{position:relative;overflow:hidden}
.kedi-agents-route .e-to::after{content:'';position:absolute;left:18px;right:18px;bottom:12px;height:2px;background:linear-gradient(90deg,transparent,var(--kedi-sig-accent-2),transparent);opacity:.36;transform-origin:left;animation:kediAgentTask 4.8s ease-in-out infinite}
@keyframes kediAgentOrbit{to{transform:rotate(360deg)}}
@keyframes kediAgentPulse{0%,100%{opacity:.65}50%{opacity:1}}
@keyframes kediAgentTask{0%,100%{transform:scaleX(.22);opacity:.2}50%{transform:scaleX(1);opacity:.58}}

/* Kedi Funnel - conversion narrowing as the page progresses. */
.kedi-funnel-route .e-hero-vis::after{content:'';position:absolute;left:14%;right:14%;bottom:-22px;height:76px;z-index:5;pointer-events:none;background:linear-gradient(180deg,color-mix(in srgb,var(--kedi-sig-accent) 30%,transparent),transparent);clip-path:polygon(0 0,100% 0,70% 100%,30% 100%);opacity:.36}
.kedi-funnel-route .e-hero-so>div:nth-child(2){transform:scaleX(.92)}
.kedi-funnel-route .e-hero-so>div:nth-child(3){transform:scaleX(.84)}
.kedi-funnel-route .e-hero-so>div:nth-child(4){transform:scaleX(.76)}
.kedi-funnel-route .e-to{transition:width .5s ease,transform .35s ease,box-shadow .35s ease}

/* Kedi Analytics - data field and chart rhythm. */
.kedi-analytics-route .e-hero-vis::after{content:'';position:absolute;inset:13% 5% 18%;z-index:5;pointer-events:none;background:linear-gradient(180deg,transparent 92%,rgba(72,226,224,.38) 92%),linear-gradient(90deg,transparent 94%,rgba(72,226,224,.2) 94%);background-size:100% 25%,20% 100%;mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);opacity:.45}
.kedi-analytics-route .e-hero-so>div{overflow:hidden}
.kedi-analytics-route .e-hero-so>div::after{content:'';display:block;width:72%;height:3px;margin-top:12px;border-radius:99px;background:linear-gradient(90deg,var(--kedi-sig-accent-2),transparent);transform-origin:left;animation:kediAnalyticsBar 5.4s ease-in-out infinite}
.kedi-analytics-route .e-hero-so>div:nth-child(2)::after{width:54%;animation-delay:-1s}.kedi-analytics-route .e-hero-so>div:nth-child(3)::after{width:86%;animation-delay:-2s}.kedi-analytics-route .e-hero-so>div:nth-child(4)::after{width:63%;animation-delay:-3s}
@keyframes kediAnalyticsBar{0%,100%{transform:scaleX(.45);opacity:.35}50%{transform:scaleX(1);opacity:.9}}

/* Kedi Automate - event graph / connector flow. */
.kedi-automate-route .e-hero-vis::after{content:'';position:absolute;inset:5%;z-index:5;pointer-events:none;background:radial-gradient(circle at 10% 28%,var(--kedi-sig-accent-2) 0 4px,transparent 5px),radial-gradient(circle at 58% 12%,var(--kedi-sig-accent) 0 4px,transparent 5px),radial-gradient(circle at 84% 64%,var(--kedi-sig-accent-2) 0 4px,transparent 5px),radial-gradient(circle at 30% 82%,var(--kedi-sig-accent) 0 4px,transparent 5px);filter:drop-shadow(0 0 8px var(--kedi-sig-glow));animation:kediAutomateNodes 4.6s ease-in-out infinite}
.kedi-automate-route .e-troi::after{content:'';position:absolute;inset:12%;pointer-events:none;border:1px dashed color-mix(in srgb,var(--kedi-sig-accent) 32%,transparent);border-radius:26px;animation:kediAutomateFlow 11s linear infinite}
@keyframes kediAutomateNodes{0%,100%{opacity:.45}50%{opacity:1}}
@keyframes kediAutomateFlow{to{transform:rotate(360deg)}}

@media(hover:hover){
  .kedi-os-route .e-anh:hover{transform:perspective(1200px) rotateY(0) rotateX(0) translateY(-4px)}
  .kedi-commerce-route .e-to:hover,.kedi-crm-route .e-to:hover,.kedi-analytics-route .e-to:hover{transform:translateY(-5px)!important;box-shadow:0 30px 70px -40px var(--kedi-sig-glow)!important}
}
@media(max-width:767px){
  .kedi-os-route .e-hero-vis::after{left:10%;right:10%}
  .kedi-commerce-route .e-hero-vis::after,.kedi-agents-route .e-hero-vis::after{display:none}
  .kedi-funnel-route .e-hero-so>div{transform:none!important}
}
@media(prefers-reduced-motion:reduce){
  .kedi-crm-route .e-ban::after,.kedi-agents-route .e-hero-vis::after,.kedi-agents-route .e-hero-vis::before,.kedi-agents-route .e-to::after,.kedi-analytics-route .e-hero-so>div::after,.kedi-automate-route .e-hero-vis::after,.kedi-automate-route .e-troi::after{animation:none!important}
}
`;
