import type { Service } from './datas/services-data';

// Use the software-thumbnails artwork before legacy service images on every menu layout.
export const SOFTWARE_THUMBNAIL_IMAGES: Record<string, string> = {
  '/kedi-os': 'https://assets.kedi.media/images/a241ea36712347159a37-1448.webp',
  '/kedi-crm': 'https://assets.kedi.media/images/7f5ff0f733f0c2639940-1448.webp',
  '/kedi-commerce': 'https://assets.kedi.media/images/e373355109502d51472c-1448.webp',
  '/kedi-analytics': 'https://assets.kedi.media/images/d4d7037142a7979dedc2-1448.webp',
  '/kedi-automate': 'https://assets.kedi.media/images/0581ffe23b72cf08557e-1448.webp',
  '/kedi-agents': 'https://assets.kedi.media/images/b2f4c57419c0472962fe-1448.webp',
  '/kedi-ai-flow': 'https://assets.kedi.media/images/75c732db00946d6f7616-1448.webp',
  '/kedi-profiles': 'https://assets.kedi.media/images/99323483c39afb2bf107-1448.webp',
  '/kedi-outreach': 'https://assets.kedi.media/images/a21342ae667ba37e80eb-1448.webp',
  '/kedi-video': 'https://assets.kedi.media/images/24f6e8a74ad4788ab7b6-1448.webp',
  '/kedi-funnel': 'https://assets.kedi.media/images/5bd2a9afed1e94d06652-1448.webp',
  '/kedi-seo': 'https://assets.kedi.media/images/af21941720b40a4053f3-1448.webp',
  '/kedi-ads': 'https://assets.kedi.media/images/f337db506a64f6a93b42-1448.webp',
  '/kedi-pod': 'https://assets.kedi.media/images/14b2498898057f336b40-1448.webp',
  '/nhtq': 'https://assets.kedi.media/images/f030c0266ef56ec1ead0-1448.webp',
  '/phan-mem-dao-tao-noi-bo': 'https://assets.kedi.media/images/4501c1d8cd8615c2d569-1448.webp',
  '/phan-mem-quan-ly-tiem-vang': 'https://assets.kedi.media/images/633a4ca7dc69ac8df34b-1448.webp',
  '/select-trial': 'https://assets.kedi.media/images/8a877b7ed7fda4c7dd20-1448.webp',
  '/tools-ngon': 'https://assets.kedi.media/images/15104d47b4891ba0aa90-1448.webp',
  '/edutech': 'https://assets.kedi.media/images/74256cd90ea4ead6b567-1448.webp',
};

function normalizeServiceHref(href?: string) {
  if (!href) return '';
  const cleanHref = href.split('?')[0]?.split('#')[0] ?? href;
  if (cleanHref.length > 1 && cleanHref.endsWith('/')) return cleanHref.slice(0, -1);
  return cleanHref;
}

function getSoftwareThumbnailImage(service: Service) {
  return SOFTWARE_THUMBNAIL_IMAGES[normalizeServiceHref(service.href)] ?? null;
}

const REUSED_GENERATED_THUMBNAIL_BY_TITLE_KEY: Record<string, string> = {
  'services.items.seo_service.title': '/kedi-seo',
  'services.items.corporate_video.title': '/kedi-video',
  'services.items.corporate_photography.title': '/kedi-profiles',
  'services.items.website_design.title': '/kedi-funnel',
  'services.items.landing_page_design.title': '/kedi-funnel',
  'services.items.ready_website.title': '/kedi-commerce',
  'services.items.cloud_hosting.title': '/kedi-os',
  'services.items.wedding_invitation.title': '/select-trial',
  'services.items.domain_registration.title': '/kedi-seo',
  'services.items.digitalTransformation.title': '/kedi-os',
  'services.items.digital_marketing_consulting.title': '/kedi-ads',
  'services.items.ai_video_service.title': '/kedi-video',
  'services.items.custom_software_development.title': '/kedi-os',
  'services.items.custom_ai_agent.title': '/kedi-agents',
  'services.items.ai_transformation_consulting.title': '/kedi-automate',
  'services.items.ecommerce_website.title': '/kedi-commerce',
  'services.items.ecommerce_templates.title': '/kedi-commerce',
  'services.items.brand_building.title': '/kedi-outreach',
  'services.items.warehouse_management.title': '/nhtq',
  'services.items.wholesale_management.title': '/kedi-commerce',
  'services.items.printer_integration.title': '/kedi-pod',
  'services.items.payment_gateway.title': '/kedi-commerce',
  'services.items.agency_management.title': '/kedi-crm',
};

const REUSED_GENERATED_THUMBNAIL_BY_HREF: Record<string, string> = {
  '/dich-vu-seo': '/kedi-seo',
  '/quay-phim-gioi-thieu-doanh-nghiep': '/kedi-video',
  '/chup-anh-profile-cong-ty': '/kedi-profiles',
  '/thiet-ke-website': '/kedi-funnel',
  '/thiet-ke-landing-page': '/kedi-funnel',
  '/web-co-san': '/kedi-commerce',
  '/cloud-hosting': '/kedi-os',
  '/mau-thiep-cuoi': '/select-trial',
  '/dang-ky-ten-mien': '/kedi-seo',
  '/chuyen-doi-so': '/kedi-os',
  '/thiet-ke-website-ban-hang': '/kedi-commerce',
  '/mau-web-danh-muc/mau-web-ban-hang': '/kedi-commerce',
  '/dich-vu-xay-kenh-tiktok': '/kedi-outreach',
  '/phan-mem-quan-ly-kho-bai-container': '/nhtq',
  '/phan-mem-quan-ly-ban-hang': '/kedi-commerce',
  '/tich-hop-thanh-toan-visa-vao-website': '/kedi-commerce',
};

export function getMenuThumbnailImage(service: Service) {
  const softwareThumbnail = getSoftwareThumbnailImage(service);
  if (softwareThumbnail) return softwareThumbnail;

  const mappedRoute =
    (service.titleKey
      ? REUSED_GENERATED_THUMBNAIL_BY_TITLE_KEY[service.titleKey]
      : undefined) ??
    REUSED_GENERATED_THUMBNAIL_BY_HREF[normalizeServiceHref(service.href)];

  return (mappedRoute ? SOFTWARE_THUMBNAIL_IMAGES[mappedRoute] : undefined) ?? service.imageUrl ?? null;
}

