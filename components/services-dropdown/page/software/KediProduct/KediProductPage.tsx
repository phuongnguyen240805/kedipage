'use client';

import React from 'react';
import type { KediProductConfig } from './product-config';

const SectionTitle = ({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) => (
  <div className="kp-heading">
    <p className="kp-eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {lead ? <p className="kp-lead">{lead}</p> : null}
  </div>
);

export default function KediProductPage({ config }: { config: KediProductConfig }) {
  const gallery = config.gallery ?? [];
  const heroImage = gallery[3]?.src ?? gallery[0]?.src;

  return (
    <main className="kp-page" style={{ ['--kp-accent' as string]: config.accent }}>
      <style jsx global>{`
        .kp-page{--ink:#16213f;--muted:#65708a;--paper:#f7f4ee;--night:#172260;--line:rgba(22,33,63,.12);overflow:hidden;background:var(--paper);color:var(--ink);font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
        .kp-wrap{width:min(1180px,calc(100% - 40px));margin:0 auto}.kp-hero h1,.kp-heading h2,.kp-final h3{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;font-weight:800}.kp-section{padding:clamp(68px,8vw,110px) 0;position:relative}.kp-eyebrow{font-size:12px;font-weight:850;letter-spacing:.16em;text-transform:uppercase;color:var(--kp-accent);margin:0 0 14px}.kp-heading h2{font-size:clamp(34px,5vw,66px);line-height:.98;letter-spacing:-.045em;max-width:980px;margin:0}.kp-lead{max-width:760px;color:var(--muted);font-size:18px;line-height:1.7;margin:22px 0 0}.kp-hero{padding:clamp(105px,12vw,165px) 0 60px;background:radial-gradient(circle at 80% 18%,color-mix(in srgb,var(--kp-accent) 26%,transparent),transparent 32%),linear-gradient(145deg,#11194b 0%,#1d2e78 58%,#202563 100%);color:#fff}.kp-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}.kp-hero h1{font-size:clamp(48px,7vw,90px);line-height:.92;letter-spacing:-.06em;margin:0;max-width:830px}.kp-hero h1 em{font-style:normal;color:#ffd54a}.kp-hero .kp-lead{color:rgba(255,255,255,.78);font-size:19px}.kp-source{display:inline-flex;gap:8px;align-items:center;margin-top:24px;padding:8px 12px;border:1px solid rgba(255,255,255,.18);border-radius:999px;color:rgba(255,255,255,.72);font-size:12px}.kp-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}.kp-btn{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 20px;border-radius:999px;background:var(--kp-accent);color:#fff;font-weight:800;text-decoration:none;border:1px solid transparent}.kp-btn--ghost{background:transparent;border-color:rgba(255,255,255,.32)}.kp-visual{position:relative;min-height:470px}.kp-visual-card{position:absolute;inset:0 4% 4% 4%;background:#fff;border-radius:30px;padding:14px;box-shadow:0 30px 70px rgba(0,0,0,.3);transform:rotate(2deg);overflow:hidden}.kp-visual-card img{width:100%;height:100%;object-fit:cover;border-radius:20px;display:block}.kp-node{position:absolute;padding:12px 16px;border-radius:14px;background:#fff;color:#172260;font-weight:850;box-shadow:0 16px 36px rgba(0,0,0,.2);font-size:13px}.kp-node.a{left:-4%;top:12%}.kp-node.b{right:-1%;top:48%}.kp-node.c{left:9%;bottom:-2%}.kp-fallback{height:100%;border-radius:20px;background:linear-gradient(135deg,var(--kp-accent),#ec5aa9);display:grid;place-items:center;font-size:58px;font-weight:900;color:#fff}.kp-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.14);margin-top:70px}.kp-stat{padding:28px;background:rgba(11,18,63,.45)}.kp-stat b{display:block;font-size:32px;color:#ffd54a}.kp-stat span{font-size:13px;color:rgba(255,255,255,.68)}.kp-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:38px}.kp-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:26px;min-height:210px;box-shadow:0 10px 30px rgba(22,33,63,.05)}.kp-card i{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;background:color-mix(in srgb,var(--kp-accent) 12%,white);color:var(--kp-accent);font-style:normal;font-weight:900;margin-bottom:42px}.kp-card h3{font-size:21px;margin:0 0 10px;letter-spacing:-.02em}.kp-card p{margin:0;color:var(--muted);line-height:1.65}.kp-dark{background:#192665;color:#fff}.kp-dark .kp-eyebrow{color:#ffd54a}.kp-dark .kp-heading h2{color:#fff}.kp-dark .kp-lead{color:rgba(255,255,255,.7)}.kp-features{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:42px}.kp-feature{padding:28px;border:1px solid rgba(255,255,255,.16);border-radius:24px;background:rgba(255,255,255,.065);min-height:190px}.kp-feature span{display:block;color:#ffd54a;font-weight:900;font-size:13px;margin-bottom:40px}.kp-feature h3{font-size:22px;margin:0 0 9px}.kp-feature p{color:rgba(255,255,255,.68);line-height:1.6;margin:0}.kp-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:44px}.kp-step{position:relative;padding:26px 24px 30px;background:#fff;border:1px solid var(--line);border-radius:22px}.kp-step strong{font-size:54px;line-height:1;color:color-mix(in srgb,var(--kp-accent) 18%,white);display:block;margin-bottom:44px}.kp-step h3{margin:0 0 10px}.kp-step p{margin:0;color:var(--muted);line-height:1.6}.kp-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:38px}.kp-shot{background:#101a4a;border-radius:22px;overflow:hidden;min-height:270px;position:relative}.kp-shot img{width:100%;height:270px;object-fit:cover;display:block}.kp-shot span{position:absolute;left:14px;bottom:14px;background:rgba(13,19,55,.78);backdrop-filter:blur(12px);padding:8px 12px;border-radius:999px;color:#fff;font-size:12px;font-weight:800}.kp-trust{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:start}.kp-trust-list{display:grid;gap:12px}.kp-trust-item{padding:24px;border-radius:20px;background:#fff;border:1px solid var(--line)}.kp-trust-item h3{margin:0 0 8px}.kp-trust-item p{margin:0;color:var(--muted);line-height:1.65}.kp-faq{display:grid;grid-template-columns:.75fr 1.25fr;gap:60px}.kp-faq details{border-top:1px solid rgba(255,255,255,.18);padding:20px 0}.kp-faq details:last-child{border-bottom:1px solid rgba(255,255,255,.18)}.kp-faq summary{cursor:pointer;font-size:18px;font-weight:800;list-style:none}.kp-faq summary::-webkit-details-marker{display:none}.kp-answer{padding:12px 0 0;color:rgba(255,255,255,.68);line-height:1.65}.kp-final{margin-top:58px;border-radius:28px;background:linear-gradient(135deg,var(--kp-accent),#ec5aa9);padding:38px;color:#fff;display:flex;justify-content:space-between;align-items:center;gap:24px}.kp-final h3{font-size:clamp(28px,4vw,48px);margin:0;letter-spacing:-.04em}.kp-final p{margin:9px 0 0;color:rgba(255,255,255,.78)}
        @media(max-width:980px){.kp-hero-grid,.kp-trust,.kp-faq{grid-template-columns:1fr}.kp-visual{min-height:390px}.kp-cards,.kp-steps{grid-template-columns:repeat(2,1fr)}.kp-features,.kp-gallery{grid-template-columns:repeat(2,1fr)}.kp-stats{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:620px){.kp-wrap{width:min(100% - 24px,1180px)}.kp-hero{padding-top:92px}.kp-cards,.kp-features,.kp-steps,.kp-gallery{grid-template-columns:1fr}.kp-stat{padding:20px}.kp-visual{min-height:320px}.kp-node{display:none}.kp-final{align-items:flex-start;flex-direction:column}.kp-heading h2{font-size:38px}}
      `}</style>

      <section className="kp-hero">
        <div className="kp-wrap">
          <div className="kp-hero-grid">
            <div>
              <p className="kp-eyebrow">{config.eyebrow}</p>
              <h1>{config.name === 'Kedi AI Flow' ? <>Tự động hóa <em>AI creation</em> theo workflow</> : config.headline}</h1>
              <p className="kp-lead">{config.lead}</p>
              <div className="kp-actions">
                <a className="kp-btn" href="#tinh-nang">{config.primaryCta}</a>
                <a className="kp-btn kp-btn--ghost" href="#lien-he">{config.secondaryCta}</a>
              </div>
              <div className="kp-source">Reference concept: {config.source} · Nội dung đã được viết lại cho hệ KEDI</div>
            </div>
            <div className="kp-visual" aria-label={`Minh họa ${config.name}`}>
              <div className="kp-visual-card">
                {heroImage ? <img src={heroImage} alt={`Minh họa workflow của ${config.name}`} loading="eager" /> : <div className="kp-fallback">{config.name}</div>}
              </div>
              <div className="kp-node a">Prompt queue</div><div className="kp-node b">AI provider</div><div className="kp-node c">Auto output</div>
            </div>
          </div>
          <div className="kp-stats">{config.stats.map((item) => <div className="kp-stat" key={item.label}><b>{item.value}</b><span>{item.label}</span></div>)}</div>
        </div>
      </section>

      <section className="kp-section"><div className="kp-wrap">
        <SectionTitle eyebrow="01 · Điểm nghẽn" title={config.painTitle} />
        <div className="kp-cards">{config.pains.map((item, i) => <article className="kp-card" key={item.title}><i>0{i + 1}</i><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </div></section>

      <section className="kp-section kp-dark" id="tinh-nang"><div className="kp-wrap">
        <SectionTitle eyebrow="02 · Khối chức năng" title={config.featureTitle} lead={config.meaning} />
        <div className="kp-features">{config.features.map((item, i) => <article className="kp-feature" key={item.title}><span>MODULE {String(i + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </div></section>

      <section className="kp-section"><div className="kp-wrap">
        <SectionTitle eyebrow="03 · Workflow" title="Từ đầu vào đến output trong bốn bước" />
        <div className="kp-steps">{config.workflow.map((item) => <article className="kp-step" key={item.step}><strong>{item.step}</strong><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </div></section>

      {gallery.length ? <section className="kp-section kp-dark"><div className="kp-wrap">
        <SectionTitle eyebrow="04 · Workflow gallery" title="Dùng ảnh demo thật thay cho hình LMS/MONA không còn liên quan" lead="Các hình dưới đây lấy từ asset URL đã thu được trong output crawl TobyFlow để kiểm tra mức độ phù hợp của layout." />
        <div className="kp-gallery">{gallery.map((item) => <figure className="kp-shot" key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><span>{item.title}</span></figure>)}</div>
      </div></section> : null}

      <section className="kp-section"><div className="kp-wrap kp-trust">
        <SectionTitle eyebrow="05 · Nền kỹ thuật" title={config.trustTitle} />
        <div className="kp-trust-list">{config.trustItems.map((item) => <article className="kp-trust-item" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </div></section>

      <section className="kp-section kp-dark" id="lien-he"><div className="kp-wrap">
        <div className="kp-faq"><SectionTitle eyebrow="06 · FAQ" title="Những câu cần chốt trước khi triển khai" />
          <div>{config.faqs.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}</summary><div className="kp-answer">{item.a}</div></details>)}</div>
        </div>
        <div className="kp-final"><div><h3>{config.name}</h3><p>{config.meaning}. Có thể triển khai theo module và mở rộng cùng hệ KEDI.</p></div><a className="kp-btn" href="/">Trao đổi phạm vi</a></div>
      </div></section>
    </main>
  );
}
