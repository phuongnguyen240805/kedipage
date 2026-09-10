export type Service = {
  href?: string;
  titleKey?: string; // Changed from title to titleKey
  title?: string; // Optional local fallback title
  descriptionKey?: string; // Changed from description to descriptionKey
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
        href: '/nhtq/',
        titleKey: 'services.items.nhtq_system.title',
        descriptionKey: 'services.items.nhtq_system.description',
        cloudinaryId: 'mega-menu-new-content-12_drpmej',
        layoutType: 'card-image-top',
      },
      {
        href: '/phan-mem-dao-tao-noi-bo/',
        titleKey: 'services.items.mona_skillhub.title',
        descriptionKey: 'services.items.mona_skillhub.description',
        cloudinaryId: 'mega-menu-new-content-13_zyhkmv',
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
      },
      {
        href: '/nhtq/',
        titleKey: 'services.items.nhtq_system.title',
        descriptionKey: 'services.items.nhtq_system.description',
        cloudinaryId: 'mega-menu-new-content-12_drpmej',
      },
      {
        href: '/phan-mem-dao-tao-noi-bo/',
        titleKey: 'services.items.mona_skillhub.title',
        descriptionKey: 'services.items.mona_skillhub.description',
        cloudinaryId: 'mega-menu-new-content-13_zyhkmv',
      },
    ],
  },

  hosting_infrastructure: {
    titleKey: 'services.categories.hosting_infrastructure.title',
    layout: 'horizontal',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    services: [
      {
        href: '/edutech/',
        titleKey: 'services.items.lms_solution.title',
        descriptionKey: 'services.items.lms_solution.description',
        cloudinaryId: 'mega-menu-new-content-15_sc3ggl',
      },
      {
        href: '/nhtq/',
        titleKey: 'services.items.nhtq_system.title',
        descriptionKey: 'services.items.nhtq_system.description',
        cloudinaryId: 'mega-menu-new-content-12_drpmej',
      },
      {
        href: '/phan-mem-dao-tao-noi-bo/',
        titleKey: 'services.items.mona_skillhub.title',
        descriptionKey: 'services.items.mona_skillhub.description',
        cloudinaryId: 'mega-menu-new-content-13_zyhkmv',
      },
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
        titleKey: 'services.items.mona_cloud_hosting.title',
        descriptionKey: 'services.items.mona_cloud_hosting.description',
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
        titleKey: 'services.items.mona_cloud_hosting.title',
        descriptionKey: 'services.items.mona_cloud_hosting.description',
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
        titleKey: 'services.items.mona_elearning.title',
        descriptionKey: 'services.items.mona_elearning.description',
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
