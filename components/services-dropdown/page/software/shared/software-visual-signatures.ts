import { growthProductExperienceCss } from "./growth-product-experience";
import { softwareExperienceQualityCss } from "./software-experience-quality";

/**
 * Shared visual signatures for the Software Solutions family.
 *
 * Important:
 * - Presentation only. No product copy/content lives in this file.
 * - Route classes are the API between page composition and visual identity.
 * - Product pages may keep their current markup while still looking distinct.
 */
export const softwareVisualSignatureCss = `
.kedi-product-route{
  --kedi-sig-accent:#2f4fe0;
  --kedi-sig-accent-2:#7c3aed;
  --kedi-sig-ink:#12213f;
  --kedi-sig-paper:#f6f8fc;
  --kedi-sig-panel:#ffffff;
  --kedi-sig-line:rgba(18,33,63,.12);
  --kedi-sig-glow:rgba(47,79,224,.24);
  --kedi-sig-radius:28px;
  --kedi-sig-shadow:0 28px 80px -42px rgba(18,33,63,.42);
}

/* Product tokens: one KEDI family, different product identities. */
.kedi-os-route{--kedi-sig-accent:#6d5dfc;--kedi-sig-accent-2:#42a5ff;--kedi-sig-paper:#f4f3ff;--kedi-sig-glow:rgba(109,93,252,.3)}
.kedi-crm-route{--kedi-sig-accent:#2367e8;--kedi-sig-accent-2:#25b7e8;--kedi-sig-paper:#f2f7ff;--kedi-sig-glow:rgba(35,103,232,.28)}
.kedi-commerce-route{--kedi-sig-accent:#e76b2d;--kedi-sig-accent-2:#f6b73c;--kedi-sig-paper:#fff7ee;--kedi-sig-glow:rgba(231,107,45,.28)}
.kedi-agents-route{--kedi-sig-accent:#9a63ff;--kedi-sig-accent-2:#35d5ff;--kedi-sig-paper:#0b1020;--kedi-sig-panel:#121a30;--kedi-sig-ink:#f7f8ff;--kedi-sig-line:rgba(255,255,255,.12);--kedi-sig-glow:rgba(154,99,255,.34)}
.kedi-outreach-route{--kedi-sig-accent:#149d73;--kedi-sig-accent-2:#63d5a6;--kedi-sig-paper:#f1fbf6;--kedi-sig-glow:rgba(20,157,115,.25)}
.kedi-profiles-route{--kedi-sig-accent:#3478f6;--kedi-sig-accent-2:#6c63ff;--kedi-sig-paper:#f2f6ff;--kedi-sig-glow:rgba(52,120,246,.26)}
.kedi-ai-flow-route{--kedi-sig-accent:#6d5dfc;--kedi-sig-accent-2:#ed5faa;--kedi-sig-paper:#f7f4ff;--kedi-sig-glow:rgba(109,93,252,.32)}
.kedi-video-route{--kedi-sig-accent:#df4778;--kedi-sig-accent-2:#7b61ff;--kedi-sig-paper:#fff3f7;--kedi-sig-glow:rgba(223,71,120,.28)}
.kedi-pod-route{--kedi-sig-accent:#d96b32;--kedi-sig-accent-2:#ffb648;--kedi-sig-paper:#fff7ef;--kedi-sig-glow:rgba(217,107,50,.26)}
.kedi-funnel-route{--kedi-sig-accent:#754de8;--kedi-sig-accent-2:#c85af1;--kedi-sig-paper:#f8f2ff;--kedi-sig-glow:rgba(117,77,232,.28)}
.kedi-seo-route{--kedi-sig-accent:#168b68;--kedi-sig-accent-2:#65c970;--kedi-sig-paper:#f2fbf5;--kedi-sig-glow:rgba(22,139,104,.24)}
.kedi-ads-route{--kedi-sig-accent:#2f73e8;--kedi-sig-accent-2:#38bdf8;--kedi-sig-paper:#f2f7ff;--kedi-sig-glow:rgba(47,115,232,.28)}
.kedi-analytics-route{--kedi-sig-accent:#118c9b;--kedi-sig-accent-2:#36c8c8;--kedi-sig-paper:#effafa;--kedi-sig-glow:rgba(17,140,155,.24)}
.kedi-automate-route{--kedi-sig-accent:#7257d5;--kedi-sig-accent-2:#2ca7d8;--kedi-sig-paper:#f5f3ff;--kedi-sig-glow:rgba(114,87,213,.28)}

/* Shared KEDI product treatment: keeps components reusable while routes vary. */
.kedi-product-route .edu{
  --tim:var(--kedi-sig-accent);
  --tim-sang:var(--kedi-sig-accent-2);
  --nhat:var(--kedi-sig-paper);
  --vien:var(--kedi-sig-line);
  background:var(--kedi-sig-paper);
}
.kedi-product-route .edu .e-hero{
  background:
    radial-gradient(80% 72% at 82% 12%,var(--kedi-sig-glow),transparent 62%),
    radial-gradient(70% 68% at 12% 8%,color-mix(in srgb,var(--kedi-sig-accent-2) 24%,transparent),transparent 64%),
    linear-gradient(150deg,#111735 0%,color-mix(in srgb,var(--kedi-sig-accent) 38%,#121a43) 55%,#111735 100%);
}
.kedi-product-route .edu .e-hero h1 em{
  background:linear-gradient(96deg,#fff 0%,color-mix(in srgb,var(--kedi-sig-accent-2) 55%,#fff) 45%,#ffd76a 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.kedi-product-route .edu .e-hero-vis::before{
  background:radial-gradient(54% 52% at 28% 20%,var(--kedi-sig-glow),transparent 72%),radial-gradient(52% 48% at 84% 82%,color-mix(in srgb,var(--kedi-sig-accent-2) 22%,transparent),transparent 74%);
}
.kedi-product-route .edu .e-anh,
.kedi-product-route .edu .ko-shot,
.kedi-product-route .edu .e-toi,
.kedi-product-route .edu .e-ss-card{
  border-radius:var(--kedi-sig-radius);
}
.kedi-product-route .edu .e-btn:not(.e-btn--vien){
  background:linear-gradient(100deg,var(--kedi-sig-accent),var(--kedi-sig-accent-2));
}
.kedi-product-route .edu .e-eyebrow{
  background:linear-gradient(100deg,var(--kedi-sig-accent),var(--kedi-sig-accent-2));
}
.kedi-product-route .edu .e-hero .e-eyebrow{background:none}

/* 01 — OS: wide command-center composition. */
.kedi-os-route .e-hero-grid{grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);gap:clamp(38px,5vw,78px)}
.kedi-os-route .e-hero-vis{max-width:620px}
.kedi-os-route .e-anh{border-radius:18px;transform:perspective(1200px) rotateY(-3deg) rotateX(1deg);box-shadow:0 42px 100px -44px rgba(20,15,70,.95)}
.kedi-os-route .e-hero-so{border-radius:18px;overflow:hidden}

/* 02 — CRM: pipeline-like horizontal rhythm. */
.kedi-crm-route .e-hero-grid{grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr)}
.kedi-crm-route .e-hero-vis{max-width:650px}
.kedi-crm-route .e-anh{border-radius:16px;border-color:rgba(118,183,255,.38)}
.kedi-crm-route .e-hero-so>div{position:relative}
.kedi-crm-route .e-hero-so>div:not(:last-child)::after{content:'→';position:absolute;right:-8px;top:50%;transform:translateY(-50%);color:rgba(255,255,255,.28);font-weight:900}

/* 03 — Commerce: warm split-screen storefront/back-office feel. */
.kedi-commerce-route .e-hero{background:radial-gradient(80% 80% at 86% 12%,rgba(255,183,72,.24),transparent 65%),linear-gradient(145deg,#2a1830 0%,#4c2532 54%,#2c1b2b 100%)}
.kedi-commerce-route .e-hero-grid{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr)}
.kedi-commerce-route .e-anh{border-radius:30px 12px 30px 12px}

/* 04 — Agents: darker AI cockpit. */
.kedi-agents-route .edu{background:#0b1020;color:#f7f8ff}
.kedi-agents-route .edu .e-mat-nhat{background:#0e1528}
.kedi-agents-route .edu .e-mat-nhat h2,.kedi-agents-route .edu .e-mat-nhat h3{color:#f7f8ff}
.kedi-agents-route .edu .e-mat-nhat p,.kedi-agents-route .edu .e-mat-nhat .e-lead{color:#aeb8d6}
.kedi-agents-route .e-hero{background:radial-gradient(70% 60% at 72% 18%,rgba(154,99,255,.36),transparent 62%),radial-gradient(55% 48% at 18% 12%,rgba(53,213,255,.18),transparent 62%),linear-gradient(160deg,#080c18,#101a33 55%,#090d1b)}
.kedi-agents-route .e-anh{border-color:rgba(138,207,255,.24);box-shadow:0 40px 120px -44px rgba(92,63,255,.7)}

/* 05 — Funnel: focused, conversion-oriented narrower hero copy. */
.kedi-funnel-route .e-hero-grid{grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr)}
.kedi-funnel-route .e-hero-grid>div:first-child{max-width:560px}
.kedi-funnel-route .e-anh{clip-path:polygon(3% 0,97% 0,90% 100%,10% 100%);border-radius:12px}

/* 06 — Analytics: editorial data emphasis. */
.kedi-analytics-route .e-hero-grid{grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr)}
.kedi-analytics-route .e-hero-so b{font-size:clamp(34px,4vw,62px);letter-spacing:-.06em}
.kedi-analytics-route .e-hero-so{background:rgba(5,24,42,.42);backdrop-filter:blur(16px)}
.kedi-analytics-route .e-anh{border-radius:10px}

/* 07 — Automate: connector-grid visual language. */
.kedi-automate-route .e-hero::before{content:'';position:absolute;inset:0;opacity:.22;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(to bottom,#000,transparent 88%)}
.kedi-automate-route .e-anh{border-radius:24px;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 44px 110px -48px rgba(75,64,200,.95)}

/* Existing dedicated product routes get identity without changing their copy. */
.kedi-video-route .e-anh{border-radius:12px}.kedi-video-route .ko-shot{border-radius:12px}
.kedi-profiles-route .e-anh{transform:perspective(1100px) rotateY(-4deg);border-radius:18px}
.kedi-pod-route .e-anh{border-radius:36px 10px 36px 10px}
.kedi-seo-route .e-hero::before{content:'';position:absolute;inset:0;pointer-events:none;opacity:.18;background-image:radial-gradient(circle at 1px 1px,rgba(255,255,255,.7) 1px,transparent 0);background-size:22px 22px;mask-image:linear-gradient(to bottom,#000,transparent 88%)}
.kedi-ads-route .e-hero-so{background:rgba(7,22,50,.48);backdrop-filter:blur(14px)}
.kedi-outreach-route .e-anh{border-radius:26px 26px 8px 26px}

/* Dedicated KediProductPage (AI Flow) shares the same signature tokens. */
.kedi-ai-flow-route.kp-page{--kp-accent:var(--kedi-sig-accent);background:var(--kedi-sig-paper)}
.kedi-ai-flow-route .kp-hero{background:radial-gradient(circle at 76% 18%,var(--kedi-sig-glow),transparent 34%),linear-gradient(145deg,#10163e 0%,#202a70 56%,#261d61 100%)}
.kedi-ai-flow-route .kp-visual-card{border-radius:18px;transform:none;box-shadow:0 34px 90px -30px rgba(12,15,55,.82)}
.kedi-ai-flow-route .kp-node{border:1px solid color-mix(in srgb,var(--kedi-sig-accent) 35%,white);box-shadow:0 16px 40px -18px rgba(20,24,80,.7)}

@media(max-width:980px){
  .kedi-os-route .e-hero-grid,.kedi-crm-route .e-hero-grid,.kedi-commerce-route .e-hero-grid,.kedi-funnel-route .e-hero-grid,.kedi-analytics-route .e-hero-grid{grid-template-columns:1fr}
  .kedi-product-route .e-hero-vis{max-width:680px;margin:22px auto 0}
}
@media(prefers-reduced-motion:reduce){
  .kedi-os-route .e-anh,.kedi-profiles-route .e-anh{transform:none}
}
` + growthProductExperienceCss + softwareExperienceQualityCss;
