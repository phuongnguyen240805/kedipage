/**
 * Phase 8 - shared quality guardrails for software solution experiences.
 * Accessibility, responsive resilience and rendering performance only.
 */
export const softwareExperienceQualityCss = `
.kedi-product-route,
.kedi-vertical-product{overflow-wrap:anywhere;-webkit-tap-highlight-color:transparent}
.kedi-product-route :where(a,button,summary,input,select,textarea),
.kedi-vertical-product :where(a,button,summary,input,select,textarea){touch-action:manipulation}
.kedi-product-route :where(a,button,summary,input,select,textarea):focus-visible,
.kedi-vertical-product :where(a,button,summary,input,select,textarea):focus-visible{outline:3px solid #f6c928;outline-offset:4px;border-radius:6px}
.kedi-product-route :where(section[id]),
.kedi-vertical-product :where(section[id]){scroll-margin-top:96px}
.kedi-product-route :where(img,video,svg),
.kedi-vertical-product :where(img,video,svg){max-inline-size:100%}
.kedi-product-route :where(h1,h2,h3),
.kedi-vertical-product :where(h1,h2,h3){text-wrap:balance}
.kedi-product-route :where(p,li,figcaption),
.kedi-vertical-product :where(p,li,figcaption){text-wrap:pretty}

/* Paint containment stays on isolated visual surfaces only. */
@supports(contain:paint){
  .kedi-product-route :where(.ko-shot,.kp-visual-card,.kp-shot),
  .kedi-vertical-product :where(.tools-visual,.tools-feature-card,.mona-featured){contain:paint}
}

/* Pointer-specific hover: touch devices keep stable geometry. */
@media(hover:none){
  .kedi-product-route :where(.e-to,.ko-shot,.kp-card,.kp-feature,.kp-step),
  .kedi-vertical-product :where(.tools-feature-card,.nhtq-port-item){transform:none!important}
}

/* Narrow-screen resilience. */
@media(max-width:640px){
  .kedi-product-route .e-wrap{padding-inline:max(16px,env(safe-area-inset-left))!important}
  .kedi-product-route .e-btn,.kedi-product-route .kp-btn{max-width:100%;white-space:normal;text-align:center}
  .kedi-product-route :where(.e-tbl-box,.ko-gallery-grid,.kp-gallery){max-width:100%;overflow-x:auto}
  .kedi-vertical-product :where(.container,.blogdt-wrap){max-width:100%;padding-left:max(16px,env(safe-area-inset-left));padding-right:max(16px,env(safe-area-inset-right))}
  [data-vertical-product="tools-ngon"] #top h1{font-size:clamp(36px,12vw,54px)!important}
  [data-vertical-product="jms"] .blog-large-content{padding:22px!important}
}

/* Strong reduced-motion guarantee over legacy GSAP/CSS animation layers. */
@media(prefers-reduced-motion:reduce){
  .kedi-product-route *,
  .kedi-product-route *::before,
  .kedi-product-route *::after,
  .kedi-vertical-product *,
  .kedi-vertical-product *::before,
  .kedi-vertical-product *::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}
  .kedi-product-route [data-fade],.kedi-product-route [data-stag],.kedi-product-route [data-pane],.kedi-product-route [data-row]{opacity:1!important;transform:none!important}
}

@media(prefers-contrast:more){
  .kedi-product-route :where(.e-btn,.kp-btn),
  .kedi-vertical-product :where(a,button){outline-offset:3px}
  .kedi-product-route :where(.e-to,.ko-shot,.kp-card,.kp-feature),
  .kedi-vertical-product :where(.tools-feature-card,.blog-large-content){border-width:2px!important}
}
`;
