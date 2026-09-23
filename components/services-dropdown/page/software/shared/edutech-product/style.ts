export const kediProductTypographyCss = `
.kedi-product-route .edu{
  --ff:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
  --fm:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
  font-family:var(--ff);
  font-synthesis:none;
  text-rendering:optimizeLegibility;
  -webkit-font-smoothing:antialiased;
}
.kedi-product-route .e-rv,
.kedi-product-route .ko-cta-title,
.kedi-product-route .e-cta-hot,
.kedi-product-route .e-so-tde h2,
.kedi-product-route .e-xt h2,
.kedi-product-route .e-vs h2,
.kedi-product-route h1,
.kedi-product-route h2,
.kedi-product-route h3,
.kedi-product-route p,
.kedi-product-route li,
.kedi-product-route button,
.kedi-product-route a,
.kedi-product-route table,
.kedi-product-route summary{
  font-family:var(--ff);
}
.kedi-product-route .e-rv,
.kedi-product-route h1,
.kedi-product-route h2,
.kedi-product-route .ko-cta-title,
.kedi-product-route .e-cta-hot{font-weight:800;letter-spacing:-.035em}
`;

export const kediProductCss = kediProductTypographyCss + `
.kedi-product-route .ko-mascot,
.kedi-product-route .ko-pain-mascot,
.kedi-product-route .ko-faq-mascot,
.kedi-product-route .ko-cta-mascot{object-fit:contain;filter:drop-shadow(0 18px 22px rgba(27,42,107,.16))}
.kedi-product-route .e-hero .e-anh img{object-fit:cover;object-position:top center}
.kedi-product-route .e-hero .e-anh video{display:block;width:100%;aspect-ratio:630/394;object-fit:cover;object-position:top center;background:#eef1f8}
.kedi-product-route .e-anh-phu img,
.kedi-product-route .e-anh-phu video{display:block;width:100%;height:100%;max-width:100%;margin:0;object-fit:cover;object-position:center}
.kedi-product-route .ko-book-image{overflow:hidden;border-radius:16px;background:rgba(255,255,255,.12)}
.kedi-product-route .ko-book-image img,
.kedi-product-route .ko-book-image video{width:100%;height:100%;object-fit:cover;object-position:top center}
.kedi-product-route .ko-gallery-heading{align-items:start}
.kedi-product-route .ko-gallery-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(18px,2vw,30px);margin-top:clamp(34px,5vw,64px)}
.kedi-product-route .ko-shot{margin:0;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 18px 60px rgba(8,15,55,.18)}
.kedi-product-route .ko-shot img,
.kedi-product-route .ko-shot video{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top center;background:#eef1f8}
.kedi-product-route .ko-shot figcaption{display:flex;gap:6px;flex-direction:column;padding:16px 18px 18px;color:#1b2a6b}
.kedi-product-route .ko-shot figcaption b{font-size:16px}
.kedi-product-route .ko-shot figcaption span{font-size:13px;opacity:.72}
.kedi-product-route .ko-cta-title{font-size:clamp(28px,4vw,52px);line-height:1;letter-spacing:-.04em}
.kedi-product-route .e-trang-hinh img,
.kedi-product-route .e-trang-hinh video{display:block;max-height:150px}
.kedi-product-route .e-gau-lon{width:min(190px,16vw);height:auto;max-height:210px}
.kedi-product-route .e-gau-muc{width:min(170px,18vw);height:auto;max-height:190px}
.kedi-product-route .e-hoi-gau{width:min(220px,68%);height:auto;max-height:250px}
.kedi-product-route .ko-source-note{font-size:12px;opacity:.66;margin-top:10px}
@media(max-width:767px){
  .kedi-product-route .ko-gallery-grid{grid-template-columns:1fr}
  .kedi-product-route .e-gau-lon{width:118px}
}
`;
