import { softwareExperienceQualityCss } from "./software-experience-quality";
import { verticalSolutionExperienceCss } from "./vertical-solution-experience";

/** KEDI visual skins for vertical software solutions. Content is untouched. */
export const verticalSolutionCss = `
.kedi-vertical-product{--vp-max:1320px;--vp-radius:26px;--vp-line:rgba(17,32,58,.12);--vp-shadow:0 30px 90px -48px rgba(13,30,58,.42);position:relative;isolation:isolate;overflow-x:clip}
.kedi-vertical-product img{max-width:100%;height:auto}

/* NHTQ — cross-border logistics / route system. */
[data-vertical-product="nhtq"]{--vp-accent:#ff5b58;--vp-blue:#2e78d5;background:#f5faff}
[data-vertical-product="nhtq"] .nhtq-hero{min-height:clamp(680px,82vh,940px);background:linear-gradient(180deg,#eef8ff 0%,#fff 78%);overflow:hidden}
[data-vertical-product="nhtq"] .nhtq-hero-content{position:relative;z-index:5;padding-top:clamp(84px,9vw,142px)}
[data-vertical-product="nhtq"] .nhtq-hero-header{max-width:1040px;margin-inline:auto}
[data-vertical-product="nhtq"] .nhtq-hero-tt h1{font-size:clamp(42px,6.5vw,92px);line-height:.98;letter-spacing:-.055em}
[data-vertical-product="nhtq"] .nhtq-hero-desc{max-width:720px;margin:22px auto 0;font-size:clamp(16px,1.5vw,22px);line-height:1.6}
[data-vertical-product="nhtq"] .nhtq-hero-img{max-width:min(1080px,82vw);margin:clamp(24px,4vw,58px) auto 0;filter:drop-shadow(0 38px 50px rgba(33,81,128,.18))}
[data-vertical-product="nhtq"] .nhtq-market{background:linear-gradient(180deg,#fff,#f3f8ff)}
[data-vertical-product="nhtq"] .nhtq-page-sec{padding-block:clamp(72px,8vw,120px)!important}
[data-vertical-product="nhtq"] .nhtq-capture-transfer-list{display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px!important;align-items:stretch}
[data-vertical-product="nhtq"] .nhtq-capture-transfer-item{min-width:0}
[data-vertical-product="nhtq"] .nhtq-capture-transfer-wrap{transform:none!important;width:100%!important;aspect-ratio:1;border-radius:28px!important;background:#fff!important;box-shadow:var(--vp-shadow)!important;border:1px solid rgba(46,120,213,.12)!important}
[data-vertical-product="nhtq"] .nhtq-port{overflow:clip}
[data-vertical-product="nhtq"] .nhtq-port-item{filter:drop-shadow(0 28px 38px rgba(26,67,110,.14))}

/* SkillHub — human learning / progress system. */
[data-vertical-product="skillhub"]{--vp-accent:#ff7c45;--vp-violet:#6847d9;background:#fffaf5}
[data-vertical-product="skillhub"] .banner{min-height:clamp(650px,80vh,860px);display:flex;align-items:center;background:radial-gradient(circle at 76% 20%,rgba(255,188,93,.28),transparent 34%),linear-gradient(145deg,#fff9f2,#f6f0ff)!important;overflow:hidden}
[data-vertical-product="skillhub"] .banner-flex{align-items:center!important;gap:clamp(34px,5vw,78px)}
[data-vertical-product="skillhub"] .banner-content{max-width:720px}
[data-vertical-product="skillhub"] .banner-tt{font-size:clamp(42px,6vw,82px)!important;line-height:1!important;letter-spacing:-.055em}
[data-vertical-product="skillhub"] .banner-desc{font-size:clamp(16px,1.35vw,20px)!important;line-height:1.7!important;max-width:62ch}
[data-vertical-product="skillhub"] .sec-com{padding-block:clamp(72px,8vw,118px)!important}
[data-vertical-product="skillhub"] .skillhub-about{background:#fff!important}
[data-vertical-product="skillhub"] .all-in-one{background:linear-gradient(180deg,#2a2463,#4b3d96)!important;color:#fff}
[data-vertical-product="skillhub"] .all-in-one-product-item{border-radius:var(--vp-radius)!important;overflow:hidden;box-shadow:0 30px 80px -46px rgba(18,12,72,.65)!important}
[data-vertical-product="skillhub"] .all-in-one-product-tabs{gap:8px!important;flex-wrap:wrap!important}
[data-vertical-product="skillhub"] .all-in-one-product-tab-item{border-radius:999px!important}

/* JMS — luxury retail / operational article, without rewriting article content. */
[data-vertical-product="jms"]{--vp-gold:#b88a3a;--vp-ink:#17130d;background:#f7f3eb;color:var(--vp-ink)}
[data-vertical-product="jms"] .blogdt-block{background:linear-gradient(145deg,#15120d,#2a2117)!important;color:#fff;padding:clamp(84px,9vw,136px) 0 clamp(54px,6vw,92px)!important}
[data-vertical-product="jms"] .blogdt-top{max-width:1080px;margin-inline:auto}
[data-vertical-product="jms"] .blogdt-top .title{font-family:Georgia,"Times New Roman",serif!important;font-size:clamp(42px,6vw,80px)!important;line-height:1.02!important;letter-spacing:-.045em!important;color:#fff!important}
[data-vertical-product="jms"] .blogdt-tag,[data-vertical-product="jms"] .blogdt-author{color:#d5c4a0!important}
[data-vertical-product="jms"] .sec-blogdt{background:#f7f3eb!important;padding-block:clamp(60px,7vw,108px)!important}
[data-vertical-product="jms"] .blogdt-wrap{max-width:1320px;margin-inline:auto}
[data-vertical-product="jms"] .blog-large-ctn{gap:clamp(24px,3vw,46px)!important;align-items:start}
[data-vertical-product="jms"] .blog-large-aside{position:sticky!important;top:96px!important;border:1px solid rgba(184,138,58,.2)!important;border-radius:18px!important;background:#fffdf9!important;padding:18px!important}
[data-vertical-product="jms"] .blog-large-content{background:#fff!important;border-radius:24px!important;padding:clamp(24px,4vw,54px)!important;box-shadow:var(--vp-shadow)!important}
[data-vertical-product="jms"] .mona-content h2{font-family:Georgia,"Times New Roman",serif!important;font-size:clamp(30px,3.4vw,48px)!important;line-height:1.12!important;color:#20180d!important;margin-top:1.6em!important}
[data-vertical-product="jms"] .mona-content img{border-radius:16px!important;box-shadow:0 22px 60px -36px rgba(58,39,13,.35)!important}
[data-vertical-product="jms"] .mona-featured img{border-radius:22px!important}

/* Tools Ngon — playful utility/app launcher. */
[data-vertical-product="tools-ngon"]{--vp-blue:#2473e8;background:#f4f8ff}
[data-vertical-product="tools-ngon"] #top{background:radial-gradient(circle at 80% 18%,rgba(77,214,170,.28),transparent 32%),radial-gradient(circle at 12% 8%,rgba(64,126,255,.2),transparent 34%),#f4f8ff!important}
[data-vertical-product="tools-ngon"] #top .container{max-width:1320px}
[data-vertical-product="tools-ngon"] #top h1{font-size:clamp(42px,6vw,78px)!important;line-height:1!important;letter-spacing:-.05em!important}
[data-vertical-product="tools-ngon"] .tools-visual{position:relative;min-height:480px;border-radius:34px;background:#101829;overflow:hidden;box-shadow:0 42px 100px -44px rgba(14,32,72,.7)}
[data-vertical-product="tools-ngon"] .tools-visual::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:38px 38px}
[data-vertical-product="tools-ngon"] .tools-visual-icon{position:absolute;inset:12%;display:grid;place-items:center;border-radius:30px;background:linear-gradient(145deg,rgba(255,255,255,.12),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.12)}
[data-vertical-product="tools-ngon"] .tools-visual-icon img{width:min(70%,330px);filter:drop-shadow(0 22px 36px rgba(0,0,0,.32))}
[data-vertical-product="tools-ngon"] .tools-ui-board{max-width:1120px;margin:0 auto;min-height:520px;border-radius:30px;background:linear-gradient(145deg,#101829,#17243c);box-shadow:0 34px 90px -44px rgba(22,55,100,.6);position:relative;overflow:hidden}
[data-vertical-product="tools-ngon"] .tools-ui-board::after{content:'';position:absolute;inset:10%;border-radius:24px;background:url('/service-menu/software/tools-ngon.svg') center/contain no-repeat;filter:drop-shadow(0 22px 40px rgba(0,0,0,.25))}
[data-vertical-product="tools-ngon"] .tools-feature-card{border-radius:24px!important;box-shadow:0 20px 60px -38px rgba(14,45,95,.34)!important;transition:transform .3s ease,box-shadow .3s ease}
[data-vertical-product="tools-ngon"] .tools-feature-card:hover{transform:translateY(-6px);box-shadow:0 30px 70px -36px rgba(14,45,95,.45)!important}
[data-vertical-product="tools-ngon"] .tools-feature-glyph{height:180px;border-radius:18px;background:linear-gradient(145deg,#eaf2ff,#f4fff7);display:grid;place-items:center;overflow:hidden}
[data-vertical-product="tools-ngon"] .tools-feature-glyph::after{content:'';width:86px;height:86px;background:url('/service-menu/software/tools-ngon.svg') center/contain no-repeat;filter:drop-shadow(0 16px 22px rgba(30,70,120,.18))}
[data-vertical-product="tools-ngon"] .tools-trust-leaf{display:inline-block;width:24px;height:14px;border-top:2px solid #247a5a;border-radius:100% 0 100% 0;transform:rotate(-24deg);opacity:.82}
[data-vertical-product="tools-ngon"] .tools-trust-leaf--right{transform:scaleX(-1) rotate(-24deg)}
[data-vertical-product="tools-ngon"] .tools-trust-badge{display:inline-flex;min-height:42px;align-items:center;justify-content:center;padding:0 18px;border-radius:999px;border:1px solid rgba(26,55,92,.12);background:#fff;color:#17243c;font-size:12px;font-weight:800;box-shadow:0 12px 30px -22px rgba(17,47,88,.45)}
[data-vertical-product="tools-ngon"] .tools-cta-panel{background:radial-gradient(circle at 86% 18%,rgba(76,222,173,.28),transparent 30%),linear-gradient(135deg,#10213c,#174f85 58%,#1f806a);box-shadow:0 34px 80px -42px rgba(13,44,83,.65)}
[data-vertical-product="tools-ngon"] .tools-cta-visual{min-height:280px;aspect-ratio:4/3;border-radius:20px;border:1px solid rgba(255,255,255,.14);background:linear-gradient(145deg,rgba(255,255,255,.12),rgba(255,255,255,.03)),url('/service-menu/software/tools-ngon.svg') center/46% auto no-repeat;box-shadow:inset 0 1px 0 rgba(255,255,255,.16)}
[data-vertical-product="tools-ngon"] .tools-rating-visual{position:relative;width:min(300px,84vw);height:64px;border-radius:18px;background:#fff;border:1px solid rgba(25,57,96,.1);box-shadow:0 18px 44px -30px rgba(12,43,79,.45)}
[data-vertical-product="tools-ngon"] .tools-rating-visual::before{content:'★★★★★';position:absolute;inset:0;display:grid;place-items:center;color:#f1aa17;font-size:26px;letter-spacing:7px}
[data-vertical-product="tools-ngon"] .tools-star{color:#f1aa17;font-size:17px;line-height:1}
[data-vertical-product="tools-ngon"] .tools-avatar-placeholder{border-radius:999px;background:radial-gradient(circle at 35% 30%,#fff 0 10%,transparent 11%),linear-gradient(145deg,#6da3ff,#3dd0a2);box-shadow:inset 0 0 0 1px rgba(255,255,255,.45)}

/* SelectTrial/Restaurant AI route: only presentation changes; current copy is preserved. */
[data-vertical-product="restaurant-ai"]{background:#f7f0e6;color:#2d2923;min-height:100vh}
[data-vertical-product="restaurant-ai"]>div>div{max-width:1180px!important;margin-inline:auto!important;padding:clamp(100px,12vw,160px) 24px!important;gap:24px!important}
[data-vertical-product="restaurant-ai"] h1{font-family:Georgia,"Times New Roman",serif!important;font-size:clamp(48px,7vw,88px)!important;line-height:.95!important;color:#2f392d!important;letter-spacing:-.05em!important}
[data-vertical-product="restaurant-ai"] p{font-size:18px!important;color:#6b6259!important}
[data-vertical-product="restaurant-ai"] [class*="min-h-[400px]"]{border-radius:30px!important;background:linear-gradient(145deg,#fffaf2,#efe4d6)!important;border:1px solid rgba(89,72,48,.12)!important}

/* Actual EduTech route keeps its copy but gets a cleaner learning-system frame. */
[data-vertical-product="edutech"] .kedi-lms-route .e-hero{min-height:clamp(700px,84vh,940px);display:flex;align-items:center}
[data-vertical-product="edutech"] .kedi-lms-route .e-hero-grid{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr)}
[data-vertical-product="edutech"] .kedi-lms-route .e-hero-vis{max-width:620px}
[data-vertical-product="edutech"] .kedi-lms-route .e-ban{gap:20px}

@media(max-width:980px){
  [data-vertical-product="nhtq"] .nhtq-capture-transfer-list{grid-template-columns:repeat(2,minmax(0,1fr))}
  [data-vertical-product="skillhub"] .banner-flex{display:block!important}
  [data-vertical-product="jms"] .blog-large-ctn{display:block!important}
  [data-vertical-product="jms"] .blog-large-aside{position:relative!important;top:auto!important;margin-bottom:24px}
  [data-vertical-product="edutech"] .kedi-lms-route .e-hero-grid{grid-template-columns:1fr}
}
@media(max-width:640px){
  [data-vertical-product="nhtq"] .nhtq-capture-transfer-list{grid-template-columns:1fr}
  [data-vertical-product="tools-ngon"] .tools-visual{min-height:330px}
}
` + verticalSolutionExperienceCss + softwareExperienceQualityCss;
