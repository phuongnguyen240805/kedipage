import React from 'react';
import dynamic from 'next/dynamic';

// 🧭 Danh sách tất cả các slug cần build sẵn
const getAllSlugs = () => [
  // BẠN ĐANG MUỐN KINH DOANH DỊCH VỤ
  'dich-vu-seo',
  'quay-phim-gioi-thieu-doanh-nghiep',
  'chup-anh-profile-cong-ty',
  'thiet-ke-website-tai-hcm',
  'thiet-ke-landing-page',
  'web-co-san',
  'mau-thiep-cuoi',
    'mau-thiep',
  // BẠN ĐANG BÁN HÀNG
  'thiet-ke-website-ban-hang',
  'mau-web-danh-muc',
  'cloud-hosting',
  'phan-mem-quan-ly-kho-bai-container',
  'phan-mem-quan-ly-ban-hang',
  'tich-hop-thanh-toan-visa-vao-website',
  'dich-vu-xay-kenh-tiktok',

  // GIẢI PHÁP PHẦN MỀM
  'nhtq',
  'phan-mem-dao-tao-noi-bo',
  'phan-mem-quan-ly-tiem-vang',
  'select-trial',
  'tools-ngon',
  'edutech',

  // HỆ SẢN PHẨM KEDI
  'kedi-os',
  'kedi-crm',
  'kedi-commerce',
  'kedi-agents',
  'kedi-outreach',
  'kedi-profiles',
  'kedi-ai-flow',
  'kedi-video',
  'kedi-pod',
  'kedi-funnel',
  'kedi-seo',
  'kedi-ads',
  'kedi-analytics',
  'kedi-automate',

  // HẠ TẦNG HOSTING, VPS
  'dang-ky-ten-mien',
  'email-doanh-nghiep',
  'mua-ssl',
  'wordpress-hosting',
  'lms-hosting',
  'vps-linux',
  'vps-windows',

  // GIẢNG VIÊN
  'thiet-ke-website-ban-khoa-hoc-online',
  'learn/auth',

  // Banner service
  'poster',
];

// 🧱 Map slug → component path thực tế
const getComponentBySlug = (slug: string) => {
  const componentPaths: Record<string, () => Promise<any>> = {
    // 🌐 DỊCH VỤ WEB DESIGN
    'dich-vu-seo': () =>
      import('@/components/services-dropdown/page/web-design/SEOservices/page'),
    'chup-anh-profile-cong-ty': () =>
      import('@/components/services-dropdown/page/web-design/ChupAnhProfileCongTy/page'),
    'quay-phim-gioi-thieu-doanh-nghiep': () =>
      import('@/components/services-dropdown/page/web-design/QuayPhimGioiThieu/page'),
    'thiet-ke-website-tai-hcm': () =>
      import('@/components/services-dropdown/page/web-design/ThietKeWebsiteTaiHCM/page'),
    'thiet-ke-landing-page': () =>
      import('@/components/services-dropdown/page/web-design/thiet-ke-landing-page/page'),
    'web-co-san': () =>
      import('@/components/services-dropdown/page/web-design/web-co-san/page'),
      'mau-thiep-cuoi': () =>
      import('@/components/services-dropdown/page/web-design/mau-thiep-cuoi/page'),
      'mau-thiep': () =>
      import('@/components/services-dropdown/page/web-design/mau-thiep-cuoi/container/mau-thiep'),
       'chuyen-doi-so': () =>
      import('@/components/services-dropdown/page/web-design/chuyen-doi-so/page'),
    // 🛒 BÁN HÀNG
    'thiet-ke-website-ban-hang': () =>
      import('@/components/services-dropdown/page/sales/ThietKeWebsiteBanHang/page'),
    'mau-web-danh-muc': () =>
      import('@/components/services-dropdown/page/sales/MauWebDanhMuc/page'),
    'cloud-hosting': () =>
      import('@/components/services-dropdown/page/hosting/CloudHosting/page'),
    'phan-mem-quan-ly-kho-bai-container': () =>
      import('@/components/services-dropdown/page/sales/PhanMemQuanLyKhoBaiContainer/page'),
    'phan-mem-quan-ly-ban-hang': () =>
      import('@/components/services-dropdown/page/sales/PhanMemQuanLyBanHang/page'),
    'tich-hop-thanh-toan-visa-vao-website': () =>
      import('@/components/services-dropdown/page/sales/TichHopThanhToanVisa/page'),
    'dich-vu-xay-kenh-tiktok': () =>
      import('@/components/services-dropdown/page/sales/DichVuXayKenhTiktok/page'),

    // 💻 GIẢI PHÁP PHẦN MỀM
    nhtq: () =>
      import('@/components/services-dropdown/page/software/NHTQ/page'),
    'phan-mem-dao-tao-noi-bo': () =>
      import('@/components/services-dropdown/page/software/PhanMemDaoTaoNoiBo/page'),
    'phan-mem-quan-ly-tiem-vang': () =>
      import('@/components/services-dropdown/page/software/PhanMemQuanLyTiemVang/page'),
    'select-trial': () =>
      import('@/components/services-dropdown/page/software/SelectTrial/page'),
    'tools-ngon': () =>
      import('@/components/services-dropdown/page/software/toolsngon/HeroSection'),
    edutech: () =>
      import('@/components/services-dropdown/page/software/Edutech/page'),

    // 🧩 HỆ SẢN PHẨM KEDI — 13 route clone trực tiếp UI /edutech; Kedi AI Flow giữ layout riêng
    'kedi-os': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-os/page'),
    'kedi-crm': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-crm/page'),
    'kedi-commerce': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-commerce/page'),
    'kedi-agents': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-agents/page'),
    'kedi-outreach': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-outreach/page'),
    'kedi-profiles': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-profiles/page'),
    'kedi-ai-flow': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-ai-flow/page'),
    'kedi-video': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-video/page'),
    'kedi-pod': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-pod/page'),
    'kedi-funnel': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-funnel/page'),
    'kedi-seo': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-seo/page'),
    'kedi-ads': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-ads/page'),
    'kedi-analytics': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-analytics/page'),
    'kedi-automate': () => import('@/components/services-dropdown/page/software/KediProduct/kedi-automate/page'),

    // ☁️ HẠ TẦNG HOSTING, VPS
    'dang-ky-ten-mien': () =>
      import('@/components/services-dropdown/page/hosting/DangKyTenMien/page'),
    'email-doanh-nghiep': () =>
      import('@/components/services-dropdown/page/hosting/EmailDoanhNghiep/page'),
    'mua-ssl': () =>
      import('@/components/services-dropdown/page/hosting/MuaSSL/page'),
    'wordpress-hosting': () =>
      import('@/components/services-dropdown/page/hosting/WordpressHosting/page'),
    'lms-hosting': () =>
      import('@/components/services-dropdown/page/hosting/LmsHosting/page'),
    'vps-linux': () =>
      import('@/components/services-dropdown/page/hosting/VpsLinux/page'),
    'vps-windows': () =>
      import('@/components/services-dropdown/page/hosting/VpsWindows/page'),

    // 🎓 GIÁO DỤC
    'thiet-ke-website-ban-khoa-hoc-online': () =>
      import('@/components/services-dropdown/page/education/GiaoDuc/page'),
    // Support both 'learn' and the nested slug 'learn/auth' (some links use the nested form)
    learn: () =>
      import('@/components/services-dropdown/page/education/Learn/page'),
    'learn/auth': () =>
      import('@/components/services-dropdown/page/education/Learn/page'),

    // Some code/links may refer to the nested path 'giao-duc/thiet-ke-website-ban-khoa-hoc-online'
    // map it to the same GiaoDuc page so both forms work
    'giao-duc/thiet-ke-website-ban-khoa-hoc-online': () =>
      import('@/components/services-dropdown/page/education/GiaoDuc/page'),
  };

  const importFn = componentPaths[slug];
  if (!importFn) return null;

  // Dynamic import + Loading state
  return dynamic(importFn, {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải...</p>
        </div>
      </div>
    ),
    ssr: true,
  });
};

// ⚙️ Props kiểu Next.js App Router
interface Props {
  // params can contain different keys depending on folder name; use flexible typing
  params: Promise<Record<string, string | string[] | undefined>>;
}

// ⚙️ Generate tất cả static routes để build sẵn
export async function generateStaticParams() {
  // The folder is named [slugdichvu], so static params should use that key
  return getAllSlugs().map((slug) => ({ slugdichvu: slug }));
}

// 🧩 Trang chính render theo slug
export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;

  // Try the most likely keys: `slugdichvu` (folder name), then `slug`, then first key found
  let rawSlug: string | string[] | undefined =
    (resolvedParams as any).slugdichvu ??
    (resolvedParams as any).slug ??
    undefined;

  if (!rawSlug) {
    // pick the first defined param value if any (robust for unexpected shapes)
    const keys = Object.keys(resolvedParams || {});
    for (const k of keys) {
      const v = (resolvedParams as any)[k];
      if (v !== undefined) {
        rawSlug = v as string | string[];
        break;
      }
    }
  }

  // Debug: log incoming slug shape to help diagnose missing mapping
  try {
    // eslint-disable-next-line no-console
    console.log(
      'ServicePage requested raw params:',
      JSON.stringify(resolvedParams)
    );
    // eslint-disable-next-line no-console
    console.log('ServicePage resolved rawSlug:', JSON.stringify(rawSlug));
  } catch {
    /* ignore logging errors */
  }

  // Normalise slug: support string, array (catch-all), and remove leading/trailing slashes
  const normalise = (s: any) => {
    if (Array.isArray(s)) return s.join('/');
    if (typeof s === 'string') return s.replace(/^\/+|\/+$/g, '');
    return String(s ?? '');
  };

  const slugNorm = normalise(rawSlug);

  let Component = getComponentBySlug(slugNorm);
  // fallback: try original rawSlug if normalised didn't match
  if (!Component && rawSlug !== slugNorm) {
    Component = getComponentBySlug(normalise(String(rawSlug)));
  }

  if (!Component) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">
          Dịch vụ không tìm thấy
        </h1>
        <p className="mt-4 text-gray-600">
          Slug:{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">
            {slugNorm || String(rawSlug)}
          </code>{' '}
          chưa được cấu hình.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Các slug có sẵn: {getAllSlugs().join(', ')}
        </p>
      </div>
    );
  }

  return (
    <div>
      <Component />
    </div>
  );
}
