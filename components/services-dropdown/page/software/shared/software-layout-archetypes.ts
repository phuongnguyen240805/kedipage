/**
 * Structural layout archetypes for software product routes.
 * This file intentionally contains no product copy.
 * Product-specific content continues to come from the existing configs/markup.
 */
export const softwareLayoutArchetypeCss = `
.ko-section-slot{position:relative;isolation:isolate}
.ko-section-slot>section{margin:0}

/* Shared rhythm: keep section hierarchy consistent without forcing one template. */
.kedi-product-route .edu .e-wrap{width:min(100%,var(--max));}
.kedi-product-route .edu .e-sec{overflow:clip}
.kedi-product-route .edu .e-ban,
.kedi-product-route .edu .e-vs,
.kedi-product-route .edu .e-thang,
.kedi-product-route .edu .ko-gallery-grid{position:relative;z-index:2}

/* OS — control-plane / operating-system archetype. */
.kedi-os-route .e-mat-nhat::after{content:'';position:absolute;inset:0;pointer-events:none;opacity:.32;background-image:linear-gradient(var(--kedi-sig-line) 1px,transparent 1px),linear-gradient(90deg,var(--kedi-sig-line) 1px,transparent 1px);background-size:36px 36px;mask-image:linear-gradient(to bottom,transparent,#000 18%,#000 82%,transparent)}
.kedi-os-route .e-ban{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.kedi-os-route .e-to{transform:none!important;border-radius:18px!important;box-shadow:var(--kedi-sig-shadow)!important}
.kedi-os-route .e-so-grid{grid-template-columns:minmax(0,1.15fr) minmax(340px,.85fr)!important}
.kedi-os-route .e-noi{border-radius:18px!important}

/* CRM — pipeline archetype: horizontal cards + continuous reading line. */
.kedi-crm-route .e-ban{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;padding-top:34px}
.kedi-crm-route .e-ban::before{content:'';position:absolute;left:4%;right:4%;top:12px;height:2px;background:linear-gradient(90deg,transparent,var(--kedi-sig-accent),var(--kedi-sig-accent-2),transparent);opacity:.45}
.kedi-crm-route .e-to{min-height:270px;transform:none!important;border-radius:14px!important}
.kedi-crm-route .e-to:nth-child(even){margin-top:32px}
.kedi-crm-route .e-vs{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:1px!important;border-radius:16px;overflow:hidden}
.kedi-crm-route .e-vs-cot{border-radius:0!important}

/* Commerce — storefront ↔ operations: asymmetric editorial blocks. */
.kedi-commerce-route .e-ban{grid-template-columns:1.15fr .85fr!important;gap:18px!important}
.kedi-commerce-route .e-to{transform:none!important;border-radius:28px 8px 28px 8px!important}
.kedi-commerce-route .e-to:nth-child(3n){grid-column:span 2;max-width:68%;margin-left:auto}
.kedi-commerce-route .e-so-grid{grid-template-columns:.9fr 1.1fr!important}
.kedi-commerce-route .ko-gallery-grid{grid-template-columns:1.2fr .8fr!important}
.kedi-commerce-route .ko-shot:nth-child(3n){grid-column:1/-1}

/* Agents — cockpit archetype: persistent dark field and luminous modules. */
.kedi-agents-route .e-so,.kedi-agents-route .e-sec{background-color:#0d1426!important}
.kedi-agents-route .e-mat-tim,.kedi-agents-route .e-mat-tim2{background:linear-gradient(180deg,#0b1020,#111d38)!important}
.kedi-agents-route .e-ban{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.kedi-agents-route .e-to,.kedi-agents-route .e-tbl-box,.kedi-agents-route .e-vs-cot,.kedi-agents-route .ko-shot{background:rgba(255,255,255,.055)!important;border:1px solid rgba(135,194,255,.14)!important;box-shadow:0 24px 70px -38px rgba(100,80,255,.65)!important}
.kedi-agents-route .e-to{transform:none!important;color:#f7f8ff}
.kedi-agents-route .e-to p,.kedi-agents-route .e-tbl,.kedi-agents-route .e-tbl td{color:#aeb8d6!important}

/* Outreach — communication stream. */
.kedi-outreach-route .e-ban{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.kedi-outreach-route .e-to{transform:none!important;border-radius:24px 24px 6px 24px!important}
.kedi-outreach-route .e-to:nth-child(even){border-radius:24px 24px 24px 6px!important;margin-top:38px}
.kedi-outreach-route .e-thang{border-left:2px solid color-mix(in srgb,var(--kedi-sig-accent) 30%,transparent);padding-left:28px}

/* Profiles — layered profile/browser cards. */
.kedi-profiles-route .ko-gallery-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:26px!important;padding:36px 10px 18px}
.kedi-profiles-route .ko-shot{transform:perspective(1000px) rotateY(-3deg);box-shadow:0 30px 70px -36px rgba(25,55,120,.5)!important}
.kedi-profiles-route .ko-shot:nth-child(3n+2){transform:translateY(34px) perspective(1000px) rotateY(2deg)}
.kedi-profiles-route .ko-shot:nth-child(3n){transform:translateY(8px) perspective(1000px) rotateY(4deg)}
.kedi-profiles-route .e-troi{max-width:1050px;margin-inline:auto}

/* Video — editing timeline / media wall. */
.kedi-video-route .ko-gallery-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:10px!important}
.kedi-video-route .ko-shot:nth-child(1),.kedi-video-route .ko-shot:nth-child(6){grid-column:span 2}
.kedi-video-route .ko-shot:nth-child(1) img,.kedi-video-route .ko-shot:nth-child(6) img,.kedi-video-route .ko-shot:nth-child(1) video,.kedi-video-route .ko-shot:nth-child(6) video{aspect-ratio:16/8!important}
.kedi-video-route .ko-shot figcaption{background:#101321;color:#fff}
.kedi-video-route .e-thang::before{content:'';position:absolute;left:0;right:0;top:-18px;height:8px;background:repeating-linear-gradient(90deg,var(--kedi-sig-accent) 0 28px,transparent 28px 34px);opacity:.5;border-radius:99px}

/* POD — product/production tiles. */
.kedi-pod-route .e-ban{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
.kedi-pod-route .e-to{transform:none!important;border-radius:8px 34px 8px 34px!important}
.kedi-pod-route .ko-gallery-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}
.kedi-pod-route .ko-shot:nth-child(2),.kedi-pod-route .ko-shot:nth-child(5){transform:translateY(32px)}

/* Funnel — narrowing conversion journey. */
.kedi-funnel-route .e-sec:nth-of-type(2) .e-wrap{max-width:1180px}
.kedi-funnel-route .e-sec:nth-of-type(3) .e-wrap{max-width:1080px}
.kedi-funnel-route .e-sec:nth-of-type(4) .e-wrap{max-width:980px}
.kedi-funnel-route .e-sec:nth-of-type(5) .e-wrap{max-width:900px}
.kedi-funnel-route .e-ban{display:grid;grid-template-columns:1fr;max-width:880px;margin-inline:auto}
.kedi-funnel-route .e-to{transform:none!important;text-align:center!important;border-radius:20px!important}
.kedi-funnel-route .e-to:nth-child(2){width:88%;margin-inline:auto}.kedi-funnel-route .e-to:nth-child(3){width:76%;margin-inline:auto}.kedi-funnel-route .e-to:nth-child(4){width:64%;margin-inline:auto}

/* SEO — search/result intelligence grid. */
.kedi-seo-route .e-mat-nhat::before{background:radial-gradient(circle at 1px 1px,color-mix(in srgb,var(--kedi-sig-accent) 18%,transparent) 1px,transparent 0)!important;background-size:24px 24px!important;opacity:.42}
.kedi-seo-route .e-tbl-box{border-radius:16px!important;box-shadow:0 20px 70px -42px rgba(17,95,73,.42)!important}
.kedi-seo-route .ko-gallery-grid{grid-template-columns:1.3fr .7fr!important}
.kedi-seo-route .ko-shot:nth-child(3n){grid-column:1/-1}

/* Ads — campaign control room. */
.kedi-ads-route .e-tbl-box{background:#0d1b37!important;color:#fff;border-radius:16px!important}
.kedi-ads-route .e-tbl{color:#dbe7ff!important}.kedi-ads-route .e-tbl th,.kedi-ads-route .e-tbl td{border-color:rgba(255,255,255,.1)!important}
.kedi-ads-route .e-chip-bay i{background:#0d1b37!important;color:#dbe7ff!important;border-color:rgba(255,255,255,.14)!important}
.kedi-ads-route .ko-gallery-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}

/* Analytics — data-storytelling / big-number composition. */
.kedi-analytics-route .e-ban{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;border:1px solid var(--kedi-sig-line);border-radius:16px;overflow:hidden}
.kedi-analytics-route .e-to{transform:none!important;border-radius:0!important;border:0!important;border-right:1px solid var(--kedi-sig-line)!important;box-shadow:none!important}
.kedi-analytics-route .e-to-so{font-size:clamp(52px,8vw,110px)!important;line-height:.8!important;opacity:.12!important}
.kedi-analytics-route .e-tbl-box{border-radius:8px!important}

/* Automate — business event graph. */
.kedi-automate-route .e-troi{background-image:linear-gradient(var(--kedi-sig-line) 1px,transparent 1px),linear-gradient(90deg,var(--kedi-sig-line) 1px,transparent 1px);background-size:34px 34px;border-radius:24px}
.kedi-automate-route .e-nut{border-radius:12px!important;box-shadow:0 18px 50px -30px rgba(47,45,110,.55)!important}
.kedi-automate-route .e-thang{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px!important}
.kedi-automate-route .e-thang-svg{display:none!important}
.kedi-automate-route .e-buoc{position:relative!important;inset:auto!important;transform:none!important;width:auto!important}

/* AI Flow dedicated page — canvas, not generic SaaS cards. */
.kedi-ai-flow-route .kp-visual::before{content:'';position:absolute;inset:6% 0 8%;border-radius:24px;background-image:linear-gradient(rgba(89,82,180,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(89,82,180,.1) 1px,transparent 1px);background-size:28px 28px;z-index:0}
.kedi-ai-flow-route .kp-visual-card{inset:4% 2% 4% 2%;z-index:1}
.kedi-ai-flow-route .kp-node{z-index:2;border-radius:10px}
.kedi-ai-flow-route .kp-node.a{left:-1%;top:8%}.kedi-ai-flow-route .kp-node.b{right:-2%;top:46%}.kedi-ai-flow-route .kp-node.c{left:16%;bottom:-1%}
.kedi-ai-flow-route .kp-cards{grid-template-columns:repeat(2,minmax(0,1fr))}
.kedi-ai-flow-route .kp-card{min-height:0;border-radius:14px}
.kedi-ai-flow-route .kp-features{grid-template-columns:repeat(2,minmax(0,1fr))}
.kedi-ai-flow-route .kp-feature{border-radius:14px}

@media(max-width:1100px){
  .kedi-crm-route .e-ban,.kedi-analytics-route .e-ban{grid-template-columns:repeat(2,minmax(0,1fr))}
  .kedi-video-route .ko-gallery-grid,.kedi-profiles-route .ko-gallery-grid,.kedi-pod-route .ko-gallery-grid,.kedi-ads-route .ko-gallery-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
  .kedi-commerce-route .e-ban{grid-template-columns:1fr!important}.kedi-commerce-route .e-to:nth-child(3n){grid-column:auto;max-width:none}
}
@media(max-width:767px){
  .kedi-product-route .e-ban,.kedi-crm-route .e-ban,.kedi-agents-route .e-ban,.kedi-outreach-route .e-ban,.kedi-pod-route .e-ban,.kedi-analytics-route .e-ban{grid-template-columns:1fr!important}
  .kedi-video-route .ko-gallery-grid,.kedi-profiles-route .ko-gallery-grid,.kedi-pod-route .ko-gallery-grid,.kedi-ads-route .ko-gallery-grid,.kedi-seo-route .ko-gallery-grid,.kedi-commerce-route .ko-gallery-grid{grid-template-columns:1fr!important}
  .kedi-video-route .ko-shot,.kedi-profiles-route .ko-shot,.kedi-pod-route .ko-shot{grid-column:auto!important;transform:none!important}
  .kedi-crm-route .e-to:nth-child(even),.kedi-outreach-route .e-to:nth-child(even){margin-top:0}
  .kedi-funnel-route .e-to{width:100%!important}
  .kedi-automate-route .e-thang{grid-template-columns:1fr!important}
  .kedi-ai-flow-route .kp-cards,.kedi-ai-flow-route .kp-features{grid-template-columns:1fr}
}
`;
