'use client';

import { useEffect, useState } from 'react';
import {
  BarChart3,
  BookOpen,
  Bot,
  Boxes,
  Camera,
  Cloud,
  CreditCard,
  Filter,
  Gem,
  Globe2,
  GraduationCap,
  LayoutGrid,
  Mail,
  Megaphone,
  Monitor,
  Network,
  Package,
  Play,
  Printer,
  Search,
  Send,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  Truck,
  UserRound,
  Users,
  Utensils,
  Video,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { Service } from './datas/services-data';

type ToneKey =
  | 'business'
  | 'selling'
  | 'platform'
  | 'ai'
  | 'growth'
  | 'production'
  | 'industry'
  | 'luxury'
  | 'hospitality'
  | 'utility'
  | 'edtech';

type VisualMeta = {
  title?: string;
  description?: string;
  icon: LucideIcon;
  tone: ToneKey;
};

const TONES: Record<
  ToneKey,
  { background: string; foreground: string; line: string; glow: string }
> = {
  business: {
    background: 'linear-gradient(145deg,#eef6ff 0%,#dbeafe 55%,#cffafe 100%)',
    foreground: '#1d4ed8',
    line: 'rgba(29,78,216,.18)',
    glow: 'rgba(14,165,233,.28)',
  },
  selling: {
    background: 'linear-gradient(145deg,#fff7ed 0%,#ffedd5 55%,#fed7aa 100%)',
    foreground: '#c2410c',
    line: 'rgba(194,65,12,.18)',
    glow: 'rgba(251,146,60,.28)',
  },
  platform: {
    background: 'linear-gradient(145deg,#eef2ff 0%,#dbeafe 58%,#cffafe 100%)',
    foreground: '#1e40af',
    line: 'rgba(30,64,175,.18)',
    glow: 'rgba(59,130,246,.3)',
  },
  ai: {
    background: 'linear-gradient(145deg,#eef2ff 0%,#ede9fe 55%,#e0f2fe 100%)',
    foreground: '#6d28d9',
    line: 'rgba(109,40,217,.18)',
    glow: 'rgba(139,92,246,.3)',
  },
  growth: {
    background: 'linear-gradient(145deg,#fdf2f8 0%,#fae8ff 50%,#ffedd5 100%)',
    foreground: '#be185d',
    line: 'rgba(190,24,93,.18)',
    glow: 'rgba(236,72,153,.3)',
  },
  production: {
    background: 'linear-gradient(145deg,#fff7ed 0%,#fef3c7 55%,#fed7aa 100%)',
    foreground: '#b45309',
    line: 'rgba(180,83,9,.18)',
    glow: 'rgba(245,158,11,.3)',
  },
  industry: {
    background: 'linear-gradient(145deg,#ecfeff 0%,#ccfbf1 55%,#dbeafe 100%)',
    foreground: '#0f766e',
    line: 'rgba(15,118,110,.18)',
    glow: 'rgba(20,184,166,.28)',
  },
  luxury: {
    background: 'linear-gradient(145deg,#18181b 0%,#27272a 58%,#3f3f46 100%)',
    foreground: '#facc15',
    line: 'rgba(250,204,21,.24)',
    glow: 'rgba(250,204,21,.2)',
  },
  hospitality: {
    background: 'linear-gradient(145deg,#fff7ed 0%,#ffedd5 58%,#fef3c7 100%)',
    foreground: '#c2410c',
    line: 'rgba(194,65,12,.18)',
    glow: 'rgba(251,146,60,.26)',
  },
  utility: {
    background: 'linear-gradient(145deg,#fffbeb 0%,#fef3c7 52%,#fde68a 100%)',
    foreground: '#92400e',
    line: 'rgba(146,64,14,.18)',
    glow: 'rgba(245,158,11,.28)',
  },
  edtech: {
    background: 'linear-gradient(145deg,#ecfdf5 0%,#ccfbf1 55%,#dbeafe 100%)',
    foreground: '#047857',
    line: 'rgba(4,120,87,.18)',
    glow: 'rgba(16,185,129,.26)',
  },
};

const META: Record<string, VisualMeta> = {
  // Business services
  'services.items.seo_service.title': {
    title: 'Dịch vụ SEO',
    description: 'Tăng hiện diện tìm kiếm, traffic và cơ hội tiếp cận khách hàng.',
    icon: Search,
    tone: 'business',
  },
  'services.items.corporate_video.title': {
    title: 'Quay video doanh nghiệp',
    description: 'Video giới thiệu thương hiệu, sản phẩm, đội ngũ và doanh nghiệp.',
    icon: Video,
    tone: 'business',
  },
  'services.items.corporate_photography.title': {
    title: 'Chụp hình doanh nghiệp',
    description: 'Hình ảnh chuyên nghiệp cho profile, truyền thông và nhận diện thương hiệu.',
    icon: Camera,
    tone: 'business',
  },
  'services.items.website_design.title': {
    title: 'Thiết kế website',
    description: 'Website doanh nghiệp tối ưu thương hiệu, trải nghiệm và chuyển đổi.',
    icon: Monitor,
    tone: 'business',
  },
  'services.items.landing_page_design.title': {
    title: 'Thiết kế landing page',
    description: 'Landing page tập trung CTA và mục tiêu chuyển đổi của từng chiến dịch.',
    icon: LayoutGrid,
    tone: 'business',
  },
  'services.items.ready_website.title': {
    title: 'Website sẵn có',
    description: 'Mẫu website triển khai nhanh, dễ tùy biến và thuận tiện vận hành.',
    icon: LayoutGrid,
    tone: 'business',
  },
  'services.items.cloud_hosting.title': {
    title: 'Cloud Hosting',
    description: 'Hạ tầng hosting ổn định, bảo mật và tối ưu hiệu suất hệ thống.',
    icon: Cloud,
    tone: 'business',
  },
  'services.items.wedding_invitation.title': {
    title: 'Mẫu Thiệp Online',
    description: 'Thiệp online hiện đại, dễ chia sẻ và phù hợp nhiều phong cách.',
    icon: Mail,
    tone: 'business',
  },
  'services.items.domain_registration.title': {
    title: 'Domain riêng',
    description: 'Tên miền riêng rõ thương hiệu, dễ nhớ và thuận tiện xây dựng hiện diện số.',
    icon: Globe2,
    tone: 'business',
  },
  'services.items.digitalTransformation.title': {
    title: 'Chuyển đổi số doanh nghiệp',
    description: 'Chuẩn hóa quy trình, dữ liệu và công cụ số cho vận hành doanh nghiệp.',
    icon: Network,
    tone: 'business',
  },
  'services.items.digital_marketing_consulting.title': {
    title: 'Tư vấn digital marketing',
    description: 'Kéo khách từ nhiều kênh, đo bằng số thật.',
    icon: Megaphone,
    tone: 'business',
  },
  'services.items.ai_video_service.title': {
    title: 'Dựng video AI',
    description: 'Dựng phim câu chuyện công ty bằng AI.',
    icon: Play,
    tone: 'business',
  },
  'services.items.custom_software_development.title': {
    title: 'Viết phần mềm theo yêu cầu',
    description: 'CRM, ERP, HRM làm riêng cho doanh nghiệp.',
    icon: Boxes,
    tone: 'business',
  },
  'services.items.custom_ai_agent.title': {
    title: 'Viết AI Agent theo yêu cầu',
    description: 'Đặt riêng một trợ lý AI cho đúng việc của mình.',
    icon: Bot,
    tone: 'business',
  },
  'services.items.ai_transformation_consulting.title': {
    title: 'Tư vấn chuyển đổi AI',
    description: 'Đưa AI vào vận hành của cả công ty.',
    icon: Workflow,
    tone: 'business',
  },

  // Selling
  'services.items.ecommerce_website.title': {
    title: 'Website bán hàng',
    description: 'Storefront bán hàng tối ưu sản phẩm, đơn hàng và trải nghiệm mua sắm.',
    icon: ShoppingBag,
    tone: 'selling',
  },
  'services.items.ecommerce_templates.title': {
    title: 'Mẫu web bán hàng',
    description: 'Kho giao diện bán hàng triển khai nhanh cho nhiều ngành và mô hình.',
    icon: LayoutGrid,
    tone: 'selling',
  },
  'services.items.brand_building.title': {
    title: 'Xây kênh TikTok',
    description: 'Xây kênh và hệ thống video ngắn để mở rộng hiện diện và tăng trưởng.',
    icon: Smartphone,
    tone: 'selling',
  },
  'services.items.warehouse_management.title': {
    title: 'Quản lý kho',
    description: 'Theo dõi nhập, xuất, tồn và quy trình vận hành kho tập trung.',
    icon: Package,
    tone: 'selling',
  },
  'services.items.wholesale_management.title': {
    title: 'Quản lý bán hàng',
    description: 'Quản lý đơn hàng, khách hàng và hoạt động bán hàng trên một hệ thống.',
    icon: ShoppingCart,
    tone: 'selling',
  },
  'services.items.printer_integration.title': {
    title: 'Tích hợp máy in',
    description: 'Kết nối quy trình bán hàng với in hóa đơn và thiết bị tại điểm bán.',
    icon: Printer,
    tone: 'selling',
  },
  'services.items.payment_gateway.title': {
    title: 'Cổng thanh toán',
    description: 'Tích hợp thanh toán online cho quy trình đặt hàng và thu tiền.',
    icon: CreditCard,
    tone: 'selling',
  },
  'services.items.agency_management.title': {
    title: 'Quản lý đại lý',
    description: 'Theo dõi mạng lưới đại lý, bán hàng và vận hành theo điểm bán.',
    icon: Store,
    tone: 'selling',
  },

  // Software routes
  '/kedi-os': {
    title: 'Kedi OS',
    description: 'Lớp điều phối trung tâm cho vận hành, dữ liệu và các module KEDI.',
    icon: Boxes,
    tone: 'platform',
  },
  '/kedi-crm': {
    title: 'Kedi CRM',
    description: 'Quản lý pipeline, khách hàng và lịch sử hoạt động bán hàng.',
    icon: Users,
    tone: 'platform',
  },
  '/kedi-commerce': {
    title: 'Kedi Commerce',
    description: 'Catalog, đơn hàng, tồn kho và lớp vận hành thương mại.',
    icon: ShoppingBag,
    tone: 'platform',
  },
  '/kedi-agents': {
    title: 'Kedi Agents',
    description: 'AI workforce hỗ trợ phân vai tác vụ và xử lý công việc lặp lại.',
    icon: Bot,
    tone: 'ai',
  },
  '/kedi-outreach': {
    title: 'Kedi Outreach',
    description: 'Prospecting, messaging và chăm sóc khách hàng theo workflow.',
    icon: Send,
    tone: 'growth',
  },
  '/kedi-profiles': {
    title: 'Kedi Profiles',
    description: 'Quản lý môi trường trình duyệt, tài khoản và nhiều profile làm việc.',
    icon: UserRound,
    tone: 'ai',
  },
  '/kedi-ai-flow': {
    title: 'Kedi AI Flow',
    description: 'Thiết kế và vận hành quy trình AI bằng workflow dạng node.',
    icon: Workflow,
    tone: 'ai',
  },
  '/kedi-video': {
    title: 'Kedi Video',
    description: 'Workflow video từ sản xuất, biên tập đến render nội dung.',
    icon: Play,
    tone: 'growth',
  },
  '/kedi-pod': {
    title: 'Kedi POD',
    description: 'Thiết kế, sản xuất và fulfillment cho mô hình Print-on-Demand.',
    icon: Shirt,
    tone: 'production',
  },
  '/kedi-funnel': {
    title: 'Kedi Funnel',
    description: 'Landing page, form và hành trình chuyển đổi tập trung.',
    icon: Filter,
    tone: 'growth',
  },
  '/kedi-seo': {
    title: 'Kedi SEO',
    description: 'Tối ưu tìm kiếm, keyword cluster và nội dung SEO/GEO.',
    icon: Search,
    tone: 'growth',
  },
  '/kedi-ads': {
    title: 'Kedi Ads',
    description: 'Quản lý chiến dịch, ngân sách và hiệu suất quảng cáo.',
    icon: Megaphone,
    tone: 'growth',
  },
  '/kedi-analytics': {
    title: 'Kedi Analytics',
    description: 'KPI, báo cáo và phân tích dữ liệu kinh doanh, marketing.',
    icon: BarChart3,
    tone: 'platform',
  },
  '/kedi-automate': {
    title: 'Kedi Automate',
    description: 'Tự động hóa quy trình đa ứng dụng bằng trigger và action.',
    icon: Zap,
    tone: 'platform',
  },
  '/nhtq/': {
    title: 'NHTQ',
    description: 'Logistics Trung Quốc – Việt Nam với kho, tracking và tuyến vận chuyển.',
    icon: Truck,
    tone: 'industry',
  },
  '/phan-mem-dao-tao-noi-bo/': {
    title: 'KEDI SkillHub',
    description: 'Đào tạo nội bộ theo khóa học, lộ trình và tiến độ nhân sự.',
    icon: GraduationCap,
    tone: 'industry',
  },
  '/phan-mem-quan-ly-tiem-vang/': {
    title: 'KEDI JMS',
    description: 'Quản lý tiệm vàng, hàng hóa, giá, tồn kho và bán hàng.',
    icon: Gem,
    tone: 'luxury',
  },
  '/select-trial': {
    title: 'Restaurant AI',
    description: 'Giải pháp hospitality cho đặt bàn, order, menu và chăm sóc khách hàng.',
    icon: Utensils,
    tone: 'hospitality',
  },
  '/tools-ngon': {
    title: 'Tools Ngon',
    description: 'Bộ công cụ tiện ích dùng nhanh cho nhiều nhu cầu triển khai.',
    icon: Wrench,
    tone: 'utility',
  },
  '/edutech/': {
    title: 'KEDI EduTech',
    description: 'Hệ sinh thái LMS, lịch học, nội dung và hành trình học viên.',
    icon: BookOpen,
    tone: 'edtech',
  },
};

const DEFAULT_META: VisualMeta = {
  icon: Boxes,
  tone: 'platform',
};

function getMeta(service: Service) {
  return (
    (service.titleKey ? META[service.titleKey] : undefined) ??
    (service.href ? META[service.href] : undefined) ??
    DEFAULT_META
  );
}

function getTone(meta: VisualMeta, groupKey?: string) {
  if (groupKey === 'business_services') return TONES.business;
  if (groupKey === 'selling') return TONES.selling;
  return TONES[meta.tone];
}

export function getServiceMenuTitle(service: Service, fallback: string) {
  return getMeta(service).title ?? fallback;
}

export function getServiceMenuDescription(service: Service, fallback: string) {
  return getMeta(service).description ?? fallback;
}


const SOFTWARE_THUMBNAIL_IMAGES: Record<string, string> = {
  '/kedi-os': '/service-menu/software-thumbnails/01-os-ecosystem-dashboard.png',
  '/kedi-crm': '/service-menu/software-thumbnails/02-crm-pipeline-dashboard.png',
  '/kedi-commerce': '/service-menu/software-thumbnails/03-commerce-ecosystem-hub.png',
  '/kedi-analytics': '/service-menu/software-thumbnails/04-analytics-dashboard.png',
  '/kedi-automate': '/service-menu/software-thumbnails/05-automation-hub-network.png',
  '/kedi-agents': '/service-menu/software-thumbnails/06-ai-agent-orchestration-hub.png',
  '/kedi-ai-flow': '/service-menu/software-thumbnails/07-ai-workflow-pipeline.png',
  '/kedi-profiles': '/service-menu/software-thumbnails/08-identity-dashboard.png',
  '/kedi-outreach': '/service-menu/software-thumbnails/09-multichannel-outreach-network.png',
  '/kedi-video': '/service-menu/software-thumbnails/10-video-editing-suite.png',
  '/kedi-funnel': '/service-menu/software-thumbnails/11-kedi-funnel.png',
  '/kedi-seo': '/service-menu/software-thumbnails/12-kedi-seo.png',
  '/kedi-ads': '/service-menu/software-thumbnails/13-kedi-ads.png',
  '/kedi-pod': '/service-menu/software-thumbnails/14-kedi-pod.png',
  '/nhtq': '/service-menu/software-thumbnails/15-nhtq.png',
  '/phan-mem-dao-tao-noi-bo': '/service-menu/software-thumbnails/16-kedi-skillhub.png',
  '/phan-mem-quan-ly-tiem-vang': '/service-menu/software-thumbnails/17-kedi-jms.png',
  '/select-trial': '/service-menu/software-thumbnails/18-restaurant-ai.png',
  '/tools-ngon': '/service-menu/software-thumbnails/19-tools-ngon.png',
  '/edutech': '/service-menu/software-thumbnails/20-kedi-edutech.png',
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

function getMenuThumbnailImage(service: Service, groupKey?: string) {
  if (service.imageUrl) return service.imageUrl;

  const softwareThumbnail = getSoftwareThumbnailImage(service);
  if (softwareThumbnail) return softwareThumbnail;

  if (groupKey !== 'business_services' && groupKey !== 'selling') return null;

  const mappedRoute =
    (service.titleKey
      ? REUSED_GENERATED_THUMBNAIL_BY_TITLE_KEY[service.titleKey]
      : undefined) ??
    REUSED_GENERATED_THUMBNAIL_BY_HREF[normalizeServiceHref(service.href)];

  return mappedRoute ? SOFTWARE_THUMBNAIL_IMAGES[mappedRoute] ?? null : null;
}

// Module scope on purpose: category hover must reuse the already decoded
// bitmap instead of starting a new request for the same thumbnail URL.
const decodedThumbnailSrcs = new Set<string>();
const thumbnailElements = new Map<string, HTMLImageElement>();

export function preloadMenuThumbnail(src: string) {
  if (typeof window === 'undefined' || !src || thumbnailElements.has(src)) return;

  const image = new Image();
  image.decoding = 'async';
  image.onload = () => {
    if (image.naturalWidth > 0) decodedThumbnailSrcs.add(src);
  };
  thumbnailElements.set(src, image);
  image.src = src;
}

function isThumbnailReady(src: string) {
  if (decodedThumbnailSrcs.has(src)) return true;
  const image = thumbnailElements.get(src);
  if (image?.complete && image.naturalWidth > 0) {
    decodedThumbnailSrcs.add(src);
    return true;
  }
  return false;
}

export function preloadServiceThumbnails(services: Service[], groupKey?: string) {
  for (const service of services) {
    const src = getMenuThumbnailImage(service, groupKey);
    if (src) preloadMenuThumbnail(src);
  }
}

export function ServiceThumbnail({
  service,
  groupKey,
  className = 'h-[58px] w-[78px]',
}: {
  service: Service;
  groupKey?: string;
  className?: string;
}) {
  const meta = getMeta(service);
  const tone = getTone(meta, groupKey);
  const Icon = meta.icon;
  const imageSrc = getMenuThumbnailImage(service, groupKey);
  const [ready, setReady] = useState(() => Boolean(imageSrc && isThumbnailReady(imageSrc)));
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!imageSrc || failed) return;

    if (isThumbnailReady(imageSrc)) {
      setReady(true);
      return;
    }

    preloadMenuThumbnail(imageSrc);
    const image = thumbnailElements.get(imageSrc);
    if (!image) return;

    const markReady = () => {
      if (image.naturalWidth <= 0) return;
      decodedThumbnailSrcs.add(imageSrc);
      setReady(true);
      setFailed(false);
    };
    const markFailed = () => setFailed(true);

    if (image.complete) {
      if (image.naturalWidth > 0) markReady();
      else markFailed();
      return;
    }

    image.addEventListener('load', markReady);
    image.addEventListener('error', markFailed);
    return () => {
      image.removeEventListener('load', markReady);
      image.removeEventListener('error', markFailed);
    };
  }, [failed, imageSrc]);

  return (
    <span
      aria-hidden="true"
      className={`relative isolate grid shrink-0 place-items-center overflow-hidden rounded-[11px] ${className}`}
      style={{
        background: tone.background,
        boxShadow: `inset 0 0 0 1px ${tone.line}`,
      }}
    >
      <span
        className="absolute -right-2 -top-2 h-9 w-9 rounded-full blur-[6px]"
        style={{ background: tone.glow }}
      />
      <span
        className="absolute bottom-[8px] left-[9px] h-[3px] w-[20px] rounded-full"
        style={{ background: tone.line }}
      />
      <span
        className="absolute bottom-[8px] right-[9px] h-[3px] w-[8px] rounded-full"
        style={{ background: tone.line }}
      />
      <Icon
        size={28}
        strokeWidth={2.15}
        style={{ color: tone.foreground }}
        className="relative z-10 transition-transform duration-300 group-hover:scale-105"
      />

      {imageSrc && !failed ? (
        <img
          src={imageSrc}
          alt=""
          decoding="async"
          draggable={false}
          className={`absolute inset-0 z-20 h-full w-full object-cover group-hover:scale-[1.035] ${
            ready
              ? 'opacity-100 transition-transform duration-300'
              : 'opacity-0 transition-opacity duration-150'
          }`}
          onLoad={() => {
            decodedThumbnailSrcs.add(imageSrc);
            setReady(true);
            setFailed(false);
          }}
          onError={() => setFailed(true)}
        />
      ) : null}
    </span>
  );
}
