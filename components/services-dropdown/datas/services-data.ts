export type Service = {
  href?: string;
  titleKey?: string; // Changed from title to titleKey
  title?: string; // Optional local fallback title
  descriptionKey?: string; // Changed from description to descriptionKey
  description?: string; // Local fallback description
  imageUrl?: string;
  cloudinaryId?: string;
  icon?: string;
  premium?: boolean;
  layoutType?:
    | 'feature-card'
    | 'compact-list'
    | 'feature-card-right'
    | 'banner'
    | 'card-image-top';
};

export type LayoutType =
  | 'list'
  | 'card-image-top'
  | 'horizontal'
  | 'icon-grid'
  | 'feature-card'
  | 'compact-list'
  | 'mixed';

export type ServiceCategory = {
  titleKey: string; // Added titleKey for category
  services: Service[];
  layout: LayoutType;
  gridCols?: string;
};

export type ServiceCategories = Record<string, ServiceCategory>;

// Only these groups are rendered in the Services dropdown.
// Hidden groups remain in serviceCategories so their routes/data can be re-enabled later.
export const VISIBLE_SERVICE_CATEGORY_KEYS = [
  'business_services',
  'selling',
  'software_solutions',
] as const;

// Reliable local thumbnails for the Software Solutions menu.
// Keeping this map next to the service data gives desktop/mobile one shared image source.
export const SOFTWARE_SERVICE_MENU_IMAGES: Record<string, string> = {
  '/kedi-os': '/service-menu/software/kedi-os.svg',
  '/kedi-crm': '/service-menu/software/kedi-crm.svg',
  '/kedi-commerce': '/service-menu/software/kedi-commerce.svg',
  '/kedi-agents': '/service-menu/software/kedi-agents.svg',
  '/kedi-outreach': '/service-menu/software/kedi-outreach.svg',
  '/kedi-profiles': '/service-menu/software/kedi-profiles.svg',
  '/kedi-ai-flow': '/service-menu/software/kedi-ai-flow.svg',
  '/kedi-video': '/service-menu/software/kedi-video.svg',
  '/kedi-pod': '/service-menu/software/kedi-pod.svg',
  '/kedi-funnel': '/service-menu/software/kedi-funnel.svg',
  '/kedi-seo': '/service-menu/software/kedi-seo.svg',
  '/kedi-ads': '/service-menu/software/kedi-ads.svg',
  '/kedi-analytics': '/service-menu/software/kedi-analytics.svg',
  '/kedi-automate': '/service-menu/software/kedi-automate.svg',
  '/nhtq/': '/service-menu/software/nhtq.svg',
  '/phan-mem-dao-tao-noi-bo/': '/service-menu/software/skillhub.svg',
  '/phan-mem-quan-ly-tiem-vang/': '/service-menu/software/jms.svg',
  '/select-trial': '/service-menu/software/restaurant-ai.svg',
  '/tools-ngon': '/service-menu/software/tools-ngon.svg',
  '/edutech/': '/service-menu/software/kedi-lms.svg',
};

export const serviceCategories: ServiceCategories = {
  business_services: {
    titleKey: 'services.categories.business_services.title',
    layout: 'horizontal',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    services: [
      {
        href: '/dich-vu-seo',
        titleKey: 'services.items.seo_service.title',
        descriptionKey: 'services.items.seo_service.description',
        cloudinaryId: 'mega-menu-new-content-1_ow6vmw',
      },
      {
        href: '/quay-phim-gioi-thieu-doanh-nghiep',
        titleKey: 'services.items.corporate_video.title',
        descriptionKey: 'services.items.corporate_video.description',
        cloudinaryId: 'mcydo0digxtpcvzd8ser',
      },
      {
        href: '/chup-anh-profile-cong-ty',
        titleKey: 'services.items.corporate_photography.title',
        descriptionKey: 'services.items.corporate_photography.description',
        cloudinaryId: 'mega-menu-new-content-2_vpuill',
      },
      {
        href: '/thiet-ke-website',
        titleKey: 'services.items.website_design.title',
        descriptionKey: 'services.items.website_design.description',
        cloudinaryId: 'mega-menu-new-content-3_my0bou',
      },
      {
        href: '/thiet-ke-landing-page',
        titleKey: 'services.items.landing_page_design.title',
        descriptionKey: 'services.items.landing_page_design.description',
        cloudinaryId: 'mega-menu-new-content-4_c4neuq',
      },
      {
        href: '/web-co-san',
        titleKey: 'services.items.ready_website.title',
        descriptionKey: 'services.items.ready_website.description',
        cloudinaryId: 'mega-menu-new-content-5_q7yan9',
      },
      {
        href: '/cloud-hosting',
        titleKey: 'services.items.cloud_hosting.title',
        descriptionKey: 'services.items.cloud_hosting.description',
        cloudinaryId: 'mega-menu-new-content-3_my0bou',
      },
        {
        href: '/mau-thiep-cuoi',
        titleKey: 'services.items.wedding_invitation.title',
        descriptionKey: 'services.items.wedding_invitation.description',
        cloudinaryId: 'mega-menu-new-content-4_c4neuq',
      },
      {
        href: '/dang-ky-ten-mien',
        titleKey: 'services.items.domain_registration.title',
        descriptionKey: 'services.items.domain_registration.description',
        cloudinaryId: 'mega-menu-new-content-5_q7yan9',
      },
       {
        href: '/chuyen-doi-so',
        titleKey: 'services.items.digitalTransformation.title',
        descriptionKey: 'services.items.digitalTransformation.description',
        cloudinaryId: 'mega-menu-new-content-5_q7yan9',
      },
    ],
  },

  // ****************************************************

  selling: {
    titleKey: 'services.categories.selling.title',
    layout: 'horizontal',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    services: [
      {
        href: '/thiet-ke-website-ban-hang',
        titleKey: 'services.items.ecommerce_website.title',
        descriptionKey: 'services.items.ecommerce_website.description',
        cloudinaryId: 'mega-menu-new-content-9_pytdrc',
        layoutType: 'feature-card',
      },
      {
        href: '/mau-web-danh-muc/mau-web-ban-hang/?linh-vuc=mau-web-ban-hang',
        titleKey: 'services.items.ecommerce_templates.title',
        descriptionKey: 'services.items.ecommerce_templates.description',
        cloudinaryId: 'mega-menu-new-content-5_q7yan9',
        layoutType: 'feature-card',
      },
      {
        href: '/cloud-hosting',
        titleKey: 'services.items.cloud_hosting.title',
        descriptionKey: 'services.items.cloud_hosting.description',
        cloudinaryId: 'mega-menu-new-content-6_gjxdld',
        layoutType: 'feature-card',
      },
      {
        href: '/dich-vu-seo',
        titleKey: 'services.items.seo_service.title',
        descriptionKey: 'services.items.seo_service.description',
        cloudinaryId: 'mega-menu-new-content-1_ow6vmw',
        layoutType: 'feature-card-right',
      },
      {
        href: '/quay-phim-gioi-thieu-doanh-nghiep',
        titleKey: 'services.items.corporate_video.title',
        descriptionKey: 'services.items.corporate_video.description',
        cloudinaryId: 'mcydo0digxtpcvzd8ser',
        layoutType: 'feature-card-right',
      },
      {
        href: '/dich-vu-xay-kenh-tiktok',
        titleKey: 'services.items.brand_building.title',
        descriptionKey: 'services.items.brand_building.description',
        cloudinaryId: 'mega-menu-new-content-11_ovj5x9',
        layoutType: 'feature-card-right',
      },
      {
        href: '/dich-vu-xay-kenh-tiktok',
        titleKey: 'services.items.brand_building.title',
        descriptionKey: 'services.items.brand_building.description',
        cloudinaryId: 'mega-menu-new-content-11_ovj5x9',
        layoutType: 'feature-card-right',
      },
      {
        href: '/phan-mem-quan-ly-kho-bai-container',
        titleKey: 'services.items.warehouse_management.title',
        icon: '📦',
        cloudinaryId: 'some-cloudinary-id',
        layoutType: 'compact-list',
      },
      {
        href: '/phan-mem-quan-ly-ban-hang',
        titleKey: 'services.items.wholesale_management.title',
        icon: '🛒',
        cloudinaryId: 'some-cloudinary-id',
        layoutType: 'compact-list',
      },
      {
        href: '/phan-mem-quan-ly-ban-hang',
        titleKey: 'services.items.printer_integration.title',
        icon: '🖨️',
        cloudinaryId: 'some-cloudinary-id',
        layoutType: 'compact-list',
      },
      {
        href: '/tich-hop-thanh-toan-visa-vao-website',
        titleKey: 'services.items.payment_gateway.title',
        icon: '💳',
        cloudinaryId: 'some-cloudinary-id',
        layoutType: 'compact-list',
      },
      {
        href: '/phan-mem-quan-ly-ban-hang',
        titleKey: 'services.items.agency_management.title',
        icon: '🏪',
        cloudinaryId: 'some-cloudinary-id',
        layoutType: 'compact-list',
      },
     
    ],
  },

  // ****************************************************

  software_solutions: {
    titleKey: 'services.categories.software_solutions.title',
    layout: 'horizontal',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    services: [
      {
        href: '/kedi-os',
        title: 'Kedi OS',
        description: 'Hệ điều hành SaaS/doanh nghiệp',
        icon: '◉',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-crm',
        title: 'Kedi CRM',
        description: 'Customer Relationship Management',
        icon: 'CRM',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-commerce',
        title: 'Kedi Commerce',
        description: 'Catalog, order và inventory',
        icon: '◫',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-agents',
        title: 'Kedi Agents',
        description: 'Agent runtime & AI workforce',
        icon: 'AI',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-outreach',
        title: 'Kedi Outreach',
        description: 'Prospecting, messaging & engagement',
        icon: '↗',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-profiles',
        title: 'Kedi Profiles',
        description: 'Multi-account/browser profiles',
        icon: 'ID',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-ai-flow',
        title: 'Kedi AI Flow',
        description: 'AI-platform workflow automation',
        icon: '⌁',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-video',
        title: 'Kedi Video',
        description: 'Video production automation',
        icon: '▶',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-pod',
        title: 'Kedi POD',
        description: 'Print-on-Demand automation',
        icon: 'POD',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-funnel',
        title: 'Kedi Funnel',
        description: 'Landing page & conversion funnel',
        icon: '▽',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-seo',
        title: 'Kedi SEO',
        description: 'SEO/GEO intelligence & optimization',
        icon: 'SEO',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-ads',
        title: 'Kedi Ads',
        description: 'Meta/Facebook advertising',
        icon: 'ADS',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-analytics',
        title: 'Kedi Analytics',
        description: 'Business & marketing analytics',
        icon: '↗',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-automate',
        title: 'Kedi Automate',
        description: 'Cross-app business workflow',
        icon: '⚡',
        layoutType: 'card-image-top',
      },

      {
        href: '/nhtq/',
        titleKey: 'services.items.nhtq_system.title',
        descriptionKey: 'services.items.nhtq_system.description',
        cloudinaryId: 'mega-menu-new-content-12_drpmej',
        layoutType: 'card-image-top',
      },
      {
        href: '/phan-mem-dao-tao-noi-bo/',
        titleKey: 'services.items.kedi_skillhub.title',
        descriptionKey: 'services.items.kedi_skillhub.description',
        cloudinaryId: 'mega-menu-new-content-13_zyhkmv',
        layoutType: 'card-image-top',
      },
      {
        href: '/phan-mem-quan-ly-tiem-vang/',
        title: 'KEDI JMS – Quản lý tiệm vàng',
        imageUrl: '/software-clone/jms/assets/top-phan-mem-quan-ly-tiem-vang.png',
        layoutType: 'card-image-top',
      },
      {
        href: '/select-trial',
        titleKey: 'services.items.nhahang_ai.title',
        descriptionKey: 'services.items.nhahang_ai.description',
        cloudinaryId: 'mega-menu-new-content-14_lrstro',
        layoutType: 'card-image-top',
      },
      {
        href: '/tools-ngon',
        titleKey: 'services.items.tools_ngon.title',
        descriptionKey: 'services.items.tools_ngon.description',
        cloudinaryId: 'logo-full_apptoolsngon_z9dpmb',
        layoutType: 'card-image-top',
      },
      {
        href: '/edutech/',
        titleKey: 'services.items.lms_solution.title',
        descriptionKey: 'services.items.lms_solution.description',
        cloudinaryId: 'mega-menu-new-content-15_sc3ggl',
        layoutType: 'card-image-top',
      },
    ],
  },

  hosting_infrastructure: {
    titleKey: 'services.categories.hosting_infrastructure.title',
    layout: 'horizontal',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    services: [
      {
        href: '/dang-ky-ten-mien',
        titleKey: 'services.items.domain_registration.title',
        descriptionKey: 'services.items.domain_registration.description',
        icon: '🌐',
        premium: true,
        layoutType: 'compact-list',
      },
      {
        href: '/mua-ssl',
        titleKey: 'services.items.ssl_certificate.title',
        descriptionKey: 'services.items.ssl_certificate.description',
        icon: '🔒',
        premium: true,
        layoutType: 'compact-list',
      },
      {
        href: '/wordpress-hosting',
        titleKey: 'services.items.wordpress_hosting.title',
        descriptionKey: 'services.items.wordpress_hosting.description',
        icon: '📝',
        premium: true,
        layoutType: 'compact-list',
      },
      {
        href: '/lms-hosting',
        titleKey: 'services.items.elearning_hosting.title',
        descriptionKey: 'services.items.elearning_hosting.description',
        icon: '🎓',
        premium: false,
        layoutType: 'compact-list',
      },
      {
        href: '/cloud-hosting',
        titleKey: 'services.items.kedi_cloud_hosting.title',
        descriptionKey: 'services.items.kedi_cloud_hosting.description',
        icon: '☁️',
        premium: true,
        layoutType: 'compact-list',
      },
      {
        href: '/vps-linux',
        titleKey: 'services.items.linux_vps.title',
        descriptionKey: 'services.items.linux_vps.description',
        icon: '🐧',
        premium: false,
        layoutType: 'compact-list',
      },
      {
        href: '/vps-windows',
        titleKey: 'services.items.windows_vps.title',
        descriptionKey: 'services.items.windows_vps.description',
        icon: '🪟',
        premium: false,
        layoutType: 'compact-list',
      },
      {
        href: '/cloud-hosting',
        titleKey: 'services.items.kedi_cloud_hosting.title',
        descriptionKey: 'services.items.kedi_cloud_hosting.description',
        icon: '☁️',
        premium: true,
        layoutType: 'compact-list',
      },
      {
        href: '/vps-linux',
        titleKey: 'services.items.linux_vps.title',
        descriptionKey: 'services.items.linux_vps.description',
        icon: '🐧',
        premium: false,
        layoutType: 'compact-list',
      },
      {
        href: '/vps-windows',
        titleKey: 'services.items.windows_vps.title',
        descriptionKey: 'services.items.windows_vps.description',
        icon: '🪟',
        premium: false,
        layoutType: 'compact-list',
      },
      {
        href: '/vps-linux',
        titleKey: 'services.items.linux_vps.title',
        descriptionKey: 'services.items.linux_vps.description',
        icon: '🐧',
        premium: false,
        layoutType: 'compact-list',
      },
      {
        href: '/vps-windows',
        titleKey: 'services.items.windows_vps.title',
        descriptionKey: 'services.items.windows_vps.description',
        icon: '🪟',
        premium: false,
        layoutType: 'compact-list',
      },
    ],
  },

  // ****************************************************

  course_instructor: {
    titleKey: 'services.categories.course_instructor.title',
    layout: 'card-image-top',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    services: [
      {
        href: '/thiet-ke-website-ban-khoa-hoc-online',
        titleKey: 'services.items.kedi_elearning.title',
        descriptionKey: 'services.items.kedi_elearning.description',
        cloudinaryId: 'mega-menu-new-content-19_odjina',
      },
      {
        href: '/learn',
        titleKey: 'services.items.course_business_training.title',
        descriptionKey: 'services.items.course_business_training.description',
        cloudinaryId: 'mega-menu-new-content-20_k6xoif',
      },
    ],
  },
};
