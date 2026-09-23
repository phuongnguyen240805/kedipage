export const productMascotSrcs = {
  'kedi-outreach': '/kedi-products/outreach/mascot.png',
  'kedi-profiles': '/kedi-products/profiles/mascot.png',
  'kedi-video': '/kedi-products/video/mascot.png',
  'kedi-pod': '/kedi-products/pod/mascot.png',
  'kedi-seo': '/kedi-products/seo/mascot.png',
  'kedi-ads': '/kedi-products/ads/mascot.png',
  'kedi-crm': '/kedi-products/crm/mascot.png',
  'kedi-commerce': '/kedi-products/commerce/mascot.png',
  'kedi-agents': '/kedi-products/agents/mascot.png',
  'kedi-analytics': '/kedi-products/analytics/mascot.png',
  'kedi-automate': '/kedi-products/automate/mascot.png',
  'kedi-funnel': '/kedi-products/ads/mascot.png',
  'kedi-os': '/kedi-products/automate/mascot.png',
  'kedi-ai-flow': '/kedi-products/agents/mascot.png',
} as const;

export type ProductMascotKey = keyof typeof productMascotSrcs;

export function getProductMascotSrc(slug?: string) {
  return productMascotSrcs[slug as ProductMascotKey] ?? '/brand/kedi-icon.png';
}

export function createProductMascot(slug: ProductMascotKey, alt: string) {
  return {
    src: getProductMascotSrc(slug),
    alt,
  } as const;
}

export function replaceLegacyGoldenMascots(source: string, mascotSrc: string) {
  return [
    ['/kedi-lms/gau-lien-lac.png', mascotSrc],
    ['/kedi-lms/gau-luyen-thi.png', mascotSrc],
    ['/kedi-lms/gau-tro-giang.png', mascotSrc],
    ['/kedi-lms/kedi-lien-lac.png', mascotSrc],
    ['/kedi-lms/kedi-luyen-thi.png', mascotSrc],
    ['/kedi-lms/kedi-tro-giang.png', mascotSrc],
    ['Gấu KEDI', 'Chó Golden KEDI 3D'],
  ].reduce((result, [from, to]) => result.split(from).join(to), source);
}

export const kediMascotMotionCss = `
.kedi-product-route .ko-mascot,
.kedi-product-route .ko-pain-mascot,
.kedi-product-route .ko-faq-mascot,
.kedi-product-route .ko-cta-mascot,
.kedi-product-route .e-gau-lon,
.kedi-product-route .e-gau-muc{
  transform-origin:center bottom;
  animation:kediMascotFloat 4.8s ease-in-out infinite;
  will-change:transform;
}
.kedi-product-route .ko-pain-mascot,
.kedi-product-route .e-gau-muc{animation-duration:5.6s}
@keyframes kediMascotFloat{
  0%,100%{transform:translate3d(0,0,0) rotate(0deg)}
  50%{transform:translate3d(0,-10px,0) rotate(-1.2deg)}
}
@media (prefers-reduced-motion: reduce){
  .kedi-product-route .ko-mascot,
  .kedi-product-route .ko-pain-mascot,
  .kedi-product-route .ko-faq-mascot,
  .kedi-product-route .ko-cta-mascot,
  .kedi-product-route .e-gau-lon,
  .kedi-product-route .e-gau-muc{animation:none}
}
`;
