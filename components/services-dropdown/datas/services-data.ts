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
  'ai_agents',
] as const;

export const serviceCategories: ServiceCategories = {
  business_services: {
    titleKey: 'services.categories.business_services.title',
    layout: 'horizontal',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    services: [
      // Keep the first group aligned with the reference menu order.
      {
        href: '/thiet-ke-website-tai-hcm',
        titleKey: 'services.items.website_design.title',
        descriptionKey: 'services.items.website_design.description',
        imageUrl: "https://assets.kedi.media/images/8a128e4b052a7f28aa49-170.webp",
        cloudinaryId: 'mega-menu-new-content-3_my0bou',
      },
      {
        href: '/blog/digital-marketing',
        titleKey: 'services.items.digital_marketing_consulting.title',
        title: 'Tư vấn digital marketing',
        description: 'Kéo khách từ nhiều kênh, đo bằng số thật.',
      },
      {
        href: '/quay-phim-gioi-thieu-doanh-nghiep',
        titleKey: 'services.items.corporate_video.title',
        descriptionKey: 'services.items.corporate_video.description',
        imageUrl: "https://assets.kedi.media/images/6b41e4921de979383f04-1280.webp",
        cloudinaryId: 'mcydo0digxtpcvzd8ser',
      },
      {
        href: '/kedi-video',
        titleKey: 'services.items.ai_video_service.title',
        title: 'Dựng video AI',
        description: 'Dựng phim câu chuyện công ty bằng AI.',
      },
      {
        href: '/kedi-os',
        titleKey: 'services.items.custom_software_development.title',
        title: 'Viết phần mềm theo yêu cầu',
        description: 'CRM, ERP, HRM làm riêng cho doanh nghiệp.',
      },
      {
        href: '/bo-ai-agent',
        titleKey: 'services.items.custom_ai_agent.title',
        title: 'Viết AI Agent theo yêu cầu',
        description: 'Đặt riêng một trợ lý AI cho đúng việc của mình.',
      },
      {
        href: '/chuyen-doi-so',
        titleKey: 'services.items.ai_transformation_consulting.title',
        title: 'Tư vấn chuyển đổi AI',
        description: 'Đưa AI vào vận hành của cả công ty.',
      },

      // Existing KEDI items that are not in the reference image stay after it.
      {
        href: '/chup-anh-profile-cong-ty',
        titleKey: 'services.items.corporate_photography.title',
        descriptionKey: 'services.items.corporate_photography.description',
        imageUrl: "https://assets.kedi.media/images/a54f5da783cbde26e051-255.webp",
        cloudinaryId: 'mega-menu-new-content-2_vpuill',
      },
      {
        href: '/thiet-ke-landing-page',
        titleKey: 'services.items.landing_page_design.title',
        descriptionKey: 'services.items.landing_page_design.description',
        imageUrl: "https://assets.kedi.media/images/a40f10afa0b0eff353f7-256.webp",
        cloudinaryId: 'mega-menu-new-content-4_c4neuq',
      },
      {
        href: '/web-co-san',
        titleKey: 'services.items.ready_website.title',
        descriptionKey: 'services.items.ready_website.description',
        imageUrl: "https://assets.kedi.media/images/52a19a673fefe6f8fb0d-341.webp",
        cloudinaryId: 'mega-menu-new-content-5_q7yan9',
      },
      {
        href: '/mau-thiep-cuoi',
        titleKey: 'services.items.wedding_invitation.title',
        descriptionKey: 'services.items.wedding_invitation.description',
        imageUrl: "https://assets.kedi.media/images/a40f10afa0b0eff353f7-256.webp",
        cloudinaryId: 'mega-menu-new-content-4_c4neuq',
      },
      {
        href: '/dang-ky-ten-mien',
        titleKey: 'services.items.domain_registration.title',
        descriptionKey: 'services.items.domain_registration.description',
        imageUrl: "https://assets.kedi.media/images/52a19a673fefe6f8fb0d-341.webp",
        cloudinaryId: 'mega-menu-new-content-5_q7yan9',
      },
      {
        href: '/chuyen-doi-so',
        titleKey: 'services.items.digitalTransformation.title',
        descriptionKey: 'services.items.digitalTransformation.description',
        imageUrl: "https://assets.kedi.media/images/52a19a673fefe6f8fb0d-341.webp",
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
        imageUrl: "https://assets.kedi.media/images/08a86a75ee9303c612ee-340.webp",
        cloudinaryId: 'mega-menu-new-content-9_pytdrc',
        layoutType: 'feature-card',
      },
      {
        href: '/mau-web-danh-muc/mau-web-ban-hang/?linh-vuc=mau-web-ban-hang',
        titleKey: 'services.items.ecommerce_templates.title',
        descriptionKey: 'services.items.ecommerce_templates.description',
        imageUrl: "https://assets.kedi.media/images/52a19a673fefe6f8fb0d-341.webp",
        cloudinaryId: 'mega-menu-new-content-5_q7yan9',
        layoutType: 'feature-card',
      },
      {
        href: '/quay-phim-gioi-thieu-doanh-nghiep',
        titleKey: 'services.items.corporate_video.title',
        descriptionKey: 'services.items.corporate_video.description',
        imageUrl: "https://assets.kedi.media/images/6b41e4921de979383f04-1280.webp",
        cloudinaryId: 'mcydo0digxtpcvzd8ser',
        layoutType: 'feature-card-right',
      },
      {
        href: '/dich-vu-xay-kenh-tiktok',
        titleKey: 'services.items.brand_building.title',
        descriptionKey: 'services.items.brand_building.description',
        imageUrl: "https://assets.kedi.media/images/68bbfbcb0e99854e5699-600.webp",
        cloudinaryId: 'mega-menu-new-content-11_ovj5x9',
        layoutType: 'feature-card-right',
      },
      {
        href: '/dich-vu-xay-kenh-tiktok',
        titleKey: 'services.items.brand_building.title',
        descriptionKey: 'services.items.brand_building.description',
        imageUrl: "https://assets.kedi.media/images/68bbfbcb0e99854e5699-600.webp",
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
        imageUrl: "https://assets.kedi.media/images/5ce2b5c81c02dc838044-270.webp",
        cloudinaryId: 'mega-menu-new-content-12_drpmej',
        layoutType: 'card-image-top',
      },
      {
        href: '/phan-mem-dao-tao-noi-bo/',
        titleKey: 'services.items.kedi_skillhub.title',
        descriptionKey: 'services.items.kedi_skillhub.description',
        imageUrl: "https://assets.kedi.media/images/366f9e383d8f8e86c552-1280.webp",
        cloudinaryId: 'mega-menu-new-content-13_zyhkmv',
        layoutType: 'card-image-top',
      },
      {
        href: '/phan-mem-quan-ly-tiem-vang/',
        title: 'KEDI JMS – Quản lý tiệm vàng',
        imageUrl: 'https://assets.kedi.media/images/b08a37b6d02260b9b6f5-1280.webp',
        layoutType: 'card-image-top',
      },
      {
        href: '/select-trial',
        titleKey: 'services.items.nhahang_ai.title',
        descriptionKey: 'services.items.nhahang_ai.description',
        imageUrl: "https://assets.kedi.media/images/1b972bf1359d9e9be742-1280.webp",
        cloudinaryId: 'mega-menu-new-content-14_lrstro',
        layoutType: 'card-image-top',
      },
      {
        href: '/tools-ngon',
        titleKey: 'services.items.tools_ngon.title',
        descriptionKey: 'services.items.tools_ngon.description',
        imageUrl: "https://assets.kedi.media/images/e211f5025cf42997dfb7-476.webp",
        cloudinaryId: 'logo-full_apptoolsngon_z9dpmb',
        layoutType: 'card-image-top',
      },
      {
        href: '/edutech/',
        titleKey: 'services.items.lms_solution.title',
        descriptionKey: 'services.items.lms_solution.description',
        imageUrl: "https://assets.kedi.media/images/3899a7d6a584428c9cc0-340.webp",
        cloudinaryId: 'mega-menu-new-content-15_sc3ggl',
        layoutType: 'card-image-top',
      },
    ],
  },

  ai_agents: {
    titleKey: 'services.categories.ai_agents.title',
    layout: 'horizontal',
    gridCols: 'grid-cols-2 xl:grid-cols-4',
    services: [
      {
        href: '/bo-ai-agent#danh-sach',
        title: 'Kedi Chăm Sóc Lead',
        description: 'Trả lời khách 24/7 trên web, Messenger và Zalo.',
        imageUrl: 'https://assets.kedi.media/images/591351c34c9b2bfc2ed8-1254.webp',
        layoutType: 'card-image-top',
      },
      {
        href: '/bo-ai-agent#danh-sach',
        title: 'Kedi TeleSales',
        description: 'Gọi điện tư vấn, chăm khách và remarketing bằng AI.',
        imageUrl: 'https://assets.kedi.media/images/f9867e1686ccb246845a-1254.webp',
        layoutType: 'card-image-top',
      },
      {
        href: '/bo-ai-agent#danh-sach',
        title: 'Kedi Chốt Đơn',
        description: 'Tư vấn và chốt đơn ngay trong hội thoại với khách.',
        imageUrl: 'https://assets.kedi.media/images/a311c77623a4801446b4-1254.webp',
        layoutType: 'card-image-top',
      },
      {
        href: '/bo-ai-agent#danh-sach',
        title: 'Kedi Webmaster',
        description: 'Nhắn yêu cầu là website được cập nhật và xử lý.',
        imageUrl: 'https://assets.kedi.media/images/ffc1569337686919aa34-1254.webp',
        layoutType: 'card-image-top',
      },
      {
        href: '/bo-ai-agent#danh-sach',
        title: 'Kedi Pháp Chế',
        description: 'Soạn hợp đồng, biên bản và rà điều khoản trong vài phút.',
        imageUrl: 'https://assets.kedi.media/images/295cb4008f1c6be28348-1254.webp',
        layoutType: 'card-image-top',
      },
      {
        href: '/bo-ai-agent#danh-sach',
        title: 'Kedi Báo Giá',
        description: 'Lên báo giá đúng mẫu và gửi khách nhanh hơn.',
        imageUrl: 'https://assets.kedi.media/images/1cc6fe0ca1b1ce625199-1254.webp',
        layoutType: 'card-image-top',
      },
      {
        href: '/kedi-quan-tri',
        title: 'Kedi Quản Trị',
        description: 'Theo dõi dữ liệu và hỗ trợ điều hành doanh nghiệp.',
        imageUrl: 'https://assets.kedi.media/images/83793324438da23d02b6-1254.webp',
        layoutType: 'card-image-top',
      },
      {
        href: '/bo-ai-agent#danh-sach',
        title: 'Kedi Tuyển Dụng',
        description: 'Lọc hồ sơ, hẹn lịch và hỗ trợ vòng phỏng vấn đầu.',
        imageUrl: 'https://assets.kedi.media/images/969f1e73f9b54bb82eaf-1254.webp',
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
        imageUrl: "https://assets.kedi.media/images/fa81b5f232bddfc9fc34-634.webp",
        cloudinaryId: 'mega-menu-new-content-19_odjina',
      },
      {
        href: '/learn',
        titleKey: 'services.items.course_business_training.title',
        descriptionKey: 'services.items.course_business_training.description',
        imageUrl: "https://assets.kedi.media/images/998addbb361bb05343ca-938.webp",
        cloudinaryId: 'mega-menu-new-content-20_k6xoif',
      },
    ],
  },
};
