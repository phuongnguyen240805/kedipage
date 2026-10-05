export const productMascotSrcs = {
  'kedi-outreach': 'https://assets.kedi.media/images/9787e160bf1b0be5cc4a-1254.webp',
  'kedi-profiles': 'https://assets.kedi.media/images/b7417e3060afa231b47d-1254.webp',
  'kedi-video': 'https://assets.kedi.media/images/e9aae8a1a699079253e1-1254.webp',
  'kedi-pod': 'https://assets.kedi.media/images/ab3219a5716be94a2d57-1254.webp',
  'kedi-seo': 'https://assets.kedi.media/images/39d8f6259bf0b6baf61b-1254.webp',
  'kedi-ads': 'https://assets.kedi.media/images/36de58875ebffced9add-1254.webp',
  'kedi-crm': 'https://assets.kedi.media/images/876ae45bf4e69d827499-1254.webp',
  'kedi-commerce': 'https://assets.kedi.media/images/ba8c5415337da92c3a56-1254.webp',
  'kedi-agents': 'https://assets.kedi.media/images/9d68de671f5f43d01412-1254.webp',
  'kedi-analytics': 'https://assets.kedi.media/images/a5374844de427967edb0-1254.webp',
  'kedi-automate': 'https://assets.kedi.media/images/7e2b0638f5797a2ba3ce-1254.webp',
  'kedi-funnel': 'https://assets.kedi.media/images/36de58875ebffced9add-1254.webp',
  'kedi-os': 'https://assets.kedi.media/images/7e2b0638f5797a2ba3ce-1254.webp',
  'kedi-ai-flow': 'https://assets.kedi.media/images/9d68de671f5f43d01412-1254.webp',
} as const;

export type ProductMascotKey = keyof typeof productMascotSrcs;

export function getProductMascotSrc(slug?: string) {
  return productMascotSrcs[slug as ProductMascotKey] ?? 'https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp';
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
    ['https://assets.kedi.media/images/b8c998b835361aa6fdca-533.webp', mascotSrc],
    ['https://assets.kedi.media/images/54986f1f0efc6c552fd6-533.webp', mascotSrc],
    ['https://assets.kedi.media/images/186372e1f09dfa1a8a43-533.webp', mascotSrc],
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
