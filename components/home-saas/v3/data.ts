export type ProductCategory = 'core' | 'ai' | 'growth' | 'operations';

export type ProductV3 = {
  name: string;
  href: string;
  description: string;
  icon: string;
  visual: string;
  category: ProductCategory;
  eyebrow: string;
  metric: string;
  metricLabel: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  core: 'Core',
  ai: 'AI',
  growth: 'Growth',
  operations: 'Operations',
};

export const productsV3: ProductV3[] = [
  {
    name: 'Kedi OS',
    href: '/kedi-os',
    description: 'Lớp điều phối trung tâm kết nối dữ liệu, tác vụ và các sản phẩm KEDI trong một workspace thống nhất.',
    icon: '/service-menu/software/kedi-os.svg',
    visual: '/homepage/hero-banner-alt.webp',
    category: 'core',
    eyebrow: 'Business OS',
    metric: '01',
    metricLabel: 'Central workspace',
  },
  {
    name: 'Kedi CRM',
    href: '/kedi-crm',
    description: 'Quản lý khách hàng, pipeline, lịch sử tương tác và dữ liệu sales trên một hệ thống xuyên suốt.',
    icon: '/service-menu/software/kedi-crm.svg',
    visual: '/kedi-products/crm/mascot.png',
    category: 'core',
    eyebrow: 'Customer system',
    metric: '360°',
    metricLabel: 'Customer context',
  },
  {
    name: 'Kedi Commerce',
    href: '/kedi-commerce',
    description: 'Kết nối catalog, đơn hàng, thanh toán và vận hành thương mại điện tử trong một luồng thống nhất.',
    icon: '/service-menu/software/kedi-commerce.svg',
    visual: '/kedi-products/commerce/mascot.png',
    category: 'core',
    eyebrow: 'Commerce stack',
    metric: '1 flow',
    metricLabel: 'Order operations',
  },
  {
    name: 'Kedi Agents',
    href: '/kedi-agents',
    description: 'AI workforce hỗ trợ xử lý tác vụ, tri thức và các quy trình lặp lại cho doanh nghiệp.',
    icon: '/service-menu/software/kedi-agents.svg',
    visual: '/kedi-products/agents/mascot.png',
    category: 'ai',
    eyebrow: 'AI workforce',
    metric: '24/7',
    metricLabel: 'Agent availability',
  },
  {
    name: 'Kedi AI Flow',
    href: '/kedi-ai-flow',
    description: 'Thiết kế workflow AI có kiểm soát để kết nối dữ liệu, công cụ và các bước ra quyết định.',
    icon: '/service-menu/software/kedi-ai-flow.svg',
    visual: '/homepage/ai-automation-card.webp',
    category: 'ai',
    eyebrow: 'AI workflow',
    metric: 'N→1',
    metricLabel: 'Connected workflow',
  },
  {
    name: 'Kedi Video',
    href: '/kedi-video',
    description: 'Tăng tốc quy trình sản xuất, biên tập và vận hành nội dung video theo workflow.',
    icon: '/service-menu/software/kedi-video.svg',
    visual: '/kedi-products/video/mascot.png',
    category: 'ai',
    eyebrow: 'Content automation',
    metric: 'Fast',
    metricLabel: 'Content pipeline',
  },
  {
    name: 'Kedi Outreach',
    href: '/kedi-outreach',
    description: 'Hỗ trợ prospecting, messaging và các chuỗi tiếp cận có hệ thống theo từng phân khúc khách hàng.',
    icon: '/service-menu/software/kedi-outreach.svg',
    visual: '/kedi-products/outreach/mascot.png',
    category: 'growth',
    eyebrow: 'Outbound growth',
    metric: '1:N',
    metricLabel: 'Outreach sequences',
  },
  {
    name: 'Kedi Funnel',
    href: '/kedi-funnel',
    description: 'Xây dựng hành trình landing page và chuyển đổi theo mục tiêu kinh doanh.',
    icon: '/service-menu/software/kedi-funnel.svg',
    visual: '/homepage/marketing-growth-card.webp',
    category: 'growth',
    eyebrow: 'Conversion',
    metric: '+CVR',
    metricLabel: 'Conversion focus',
  },
  {
    name: 'Kedi SEO',
    href: '/kedi-seo',
    description: 'Tập trung dữ liệu, nội dung và tối ưu hóa khả năng hiện diện trên search.',
    icon: '/service-menu/software/kedi-seo.svg',
    visual: '/kedi-products/seo/mascot.png',
    category: 'growth',
    eyebrow: 'Search growth',
    metric: 'SEO',
    metricLabel: 'Organic visibility',
  },
  {
    name: 'Kedi Ads',
    href: '/kedi-ads',
    description: 'Hỗ trợ vận hành advertising và quan sát performance trong cùng hệ sinh thái.',
    icon: '/service-menu/software/kedi-ads.svg',
    visual: '/kedi-products/ads/mascot.png',
    category: 'growth',
    eyebrow: 'Paid growth',
    metric: 'ROAS',
    metricLabel: 'Performance signals',
  },
  {
    name: 'Kedi Analytics',
    href: '/kedi-analytics',
    description: 'Hợp nhất các chỉ số kinh doanh và marketing để theo dõi hiệu quả rõ ràng hơn.',
    icon: '/service-menu/software/kedi-analytics.svg',
    visual: '/kedi-products/analytics/mascot.png',
    category: 'operations',
    eyebrow: 'Business intelligence',
    metric: 'Live',
    metricLabel: 'Decision signals',
  },
  {
    name: 'Kedi Automate',
    href: '/kedi-automate',
    description: 'Kết nối các bước vận hành lặp lại thành workflow xuyên ứng dụng.',
    icon: '/service-menu/software/kedi-automate.svg',
    visual: '/kedi-products/automate/mascot.png',
    category: 'operations',
    eyebrow: 'Workflow automation',
    metric: 'Auto',
    metricLabel: 'Routine operations',
  },
  {
    name: 'Kedi Profiles',
    href: '/kedi-profiles',
    description: 'Quản lý profile và các ngữ cảnh làm việc cần tách biệt trong vận hành số.',
    icon: '/service-menu/software/kedi-profiles.svg',
    visual: '/kedi-products/profiles/mascot.png',
    category: 'operations',
    eyebrow: 'Profile operations',
    metric: 'Multi',
    metricLabel: 'Work contexts',
  },
  {
    name: 'Kedi POD',
    href: '/kedi-pod',
    description: 'Tổ chức quy trình Print-on-Demand theo hướng tự động hóa và dễ mở rộng.',
    icon: '/service-menu/software/kedi-pod.svg',
    visual: '/kedi-products/pod/mascot.png',
    category: 'operations',
    eyebrow: 'POD operations',
    metric: 'Scale',
    metricLabel: 'Repeatable ops',
  },
];

export const needItemsV3 = [
  {
    index: '01',
    title: 'Tăng trưởng khách hàng',
    description: 'Website, SEO, content và funnel để tạo demand, thu hút lead và tăng chuyển đổi.',
    tags: ['Website', 'SEO', 'Funnel', 'Ads'],
    href: '/dich-vu-seo',
    image: '/homepage/marketing-growth-card.webp',
  },
  {
    index: '02',
    title: 'Bán hàng hiệu quả hơn',
    description: 'Kết nối commerce, CRM và outreach để quản lý hành trình bán hàng xuyên suốt.',
    tags: ['CRM', 'Commerce', 'Outreach'],
    href: '/kedi-crm',
    image: '/homepage/commerce-crm-card.webp',
  },
  {
    index: '03',
    title: 'Tự động hóa vận hành',
    description: 'AI Agents, workflow và analytics cho các tác vụ lặp lại và quyết định vận hành.',
    tags: ['AI Agents', 'Automation', 'Analytics'],
    href: '/kedi-agents',
    image: '/homepage/ai-automation-card.webp',
  },
  {
    index: '04',
    title: 'Xây dựng hạ tầng số',
    description: 'Cloud, hosting và hạ tầng nền để website và hệ thống sẵn sàng mở rộng.',
    tags: ['Cloud', 'Hosting', 'Infrastructure'],
    href: '/cloud-hosting',
    image: '/homepage/ecosystem-background.webp',
  },
];

export const galleryItemsV3 = [
  {
    index: '01',
    eyebrow: 'Digital experience',
    title: 'Website tạo demand, không chỉ để hiện diện.',
    description: 'Kết hợp UX/UI, nội dung và conversion để website trở thành một phần của hệ thống tăng trưởng.',
    image: '/homepage/ux-ui-card.webp',
    href: '/thiet-ke-landing-page',
  },
  {
    index: '02',
    eyebrow: 'Revenue operations',
    title: 'CRM và Commerce cùng nhìn một khách hàng.',
    description: 'Từ lead đến đơn hàng, dữ liệu được nối vào cùng một hành trình thay vì nằm ở các công cụ rời rạc.',
    image: '/homepage/commerce-crm-card.webp',
    href: '/kedi-crm',
  },
  {
    index: '03',
    eyebrow: 'AI workforce',
    title: 'AI Agent tham gia trực tiếp vào công việc.',
    description: 'Agent xử lý tác vụ, workflow và tri thức theo ngữ cảnh vận hành thực tế của doanh nghiệp.',
    image: '/homepage/ai-automation-card.webp',
    href: '/kedi-agents',
  },
  {
    index: '04',
    eyebrow: 'Growth engine',
    title: 'Marketing được nối với dữ liệu và tín hiệu kinh doanh.',
    description: 'SEO, ads, content và funnel cùng phục vụ một mục tiêu thay vì tối ưu độc lập từng kênh.',
    image: '/homepage/marketing-growth-card.webp',
    href: '/dich-vu-seo',
  },
  {
    index: '05',
    eyebrow: 'Intelligence layer',
    title: 'Đo lường để biết hệ thống đang tạo ra điều gì.',
    description: 'Analytics gom các tín hiệu quan trọng để đội ngũ nhìn thấy hiệu quả và điều chỉnh nhanh hơn.',
    image: '/homepage/hero-banner-alt-2.webp',
    href: '/kedi-analytics',
  },
];

export const journeyItemsV3 = [
  {
    step: '01',
    title: 'Attract',
    detail: 'Website / SEO / Ads',
    description: 'Tạo điểm chạm đủ rõ để khách hàng tìm thấy, hiểu và bắt đầu quan tâm.',
    image: '/homepage/seo-growth-card.webp',
  },
  {
    step: '02',
    title: 'Convert',
    detail: 'Funnel / Commerce',
    description: 'Biến sự quan tâm thành lead, cuộc hội thoại hoặc đơn hàng bằng hành trình chuyển đổi rõ ràng.',
    image: '/homepage/web-growth-card.webp',
  },
  {
    step: '03',
    title: 'Manage',
    detail: 'CRM / Profiles',
    description: 'Giữ toàn bộ ngữ cảnh khách hàng và hoạt động vận hành ở đúng nơi cần thiết.',
    image: '/homepage/commerce-crm-card.webp',
  },
  {
    step: '04',
    title: 'Automate',
    detail: 'Agents / AI Flow',
    description: 'Đưa các tác vụ lặp lại và luồng phối hợp xuyên ứng dụng sang workflow có kiểm soát.',
    image: '/homepage/ai-automation-card.webp',
  },
  {
    step: '05',
    title: 'Measure',
    detail: 'Analytics',
    description: 'Kết nối tín hiệu để theo dõi hiệu quả, phát hiện vấn đề và ra quyết định nhanh hơn.',
    image: '/homepage/hero-banner-alt-2.webp',
  },
];

export const serviceItemsV3 = [
  {
    number: '01',
    title: 'Web & Digital Experience',
    description: 'Website, landing page và các điểm chạm số được thiết kế theo mục tiêu chuyển đổi.',
    href: '/thiet-ke-landing-page',
    tags: ['Website', 'Landing Page', 'UX/UI'],
    image: '/homepage/ux-ui-card.webp',
  },
  {
    number: '02',
    title: 'Growth & SEO',
    description: 'Từ SEO đến funnel và tăng trưởng nội dung cho doanh nghiệp cần mở rộng demand.',
    href: '/dich-vu-seo',
    tags: ['SEO', 'Content', 'Conversion'],
    image: '/homepage/seo-growth-card.webp',
  },
  {
    number: '03',
    title: 'Brand & Media',
    description: 'Video, profile và nội dung hình ảnh để thương hiệu truyền đạt rõ ràng và nhất quán hơn.',
    href: '/quay-phim-gioi-thieu-doanh-nghiep',
    tags: ['Video', 'Profile', 'Media'],
    image: '/homepage/marketing-growth-card.webp',
  },
  {
    number: '04',
    title: 'Cloud & Infrastructure',
    description: 'Nền tảng cloud và hosting để hệ thống vận hành ổn định và sẵn sàng mở rộng.',
    href: '/cloud-hosting',
    tags: ['Cloud', 'Hosting', 'Scale'],
    image: '/homepage/ecosystem-background.webp',
  },
  {
    number: '05',
    title: 'AI & Automation',
    description: 'Kết hợp SaaS, AI và workflow để giảm thao tác thủ công trong vận hành.',
    href: '/kedi-automate',
    tags: ['AI', 'Workflow', 'Automation'],
    image: '/homepage/ai-automation-card.webp',
  },
];

export const projectItemsV3 = [
  {
    label: 'Digital experience',
    title: 'Website & Growth',
    description: 'Các dự án kết hợp trải nghiệm số, nội dung và tăng trưởng cho doanh nghiệp.',
    image: '/homepage/web-growth-card.webp',
  },
  {
    label: 'Revenue operations',
    title: 'Commerce & CRM',
    description: 'Các bài toán bán hàng, dữ liệu khách hàng và vận hành thương mại điện tử.',
    image: '/homepage/commerce-crm-card.webp',
  },
  {
    label: 'Intelligent operations',
    title: 'AI & Automation',
    description: 'Các hướng triển khai AI, workflow và tự động hóa trong vận hành.',
    image: '/homepage/ai-automation-card.webp',
  },
];

export const insightItemsV3 = [
  {
    tag: 'SEO',
    title: 'Kiến thức search và tăng trưởng organic',
    href: '/blog/seo-guide',
    image: '/homepage/seo-growth-card.webp',
  },
  {
    tag: 'Growth',
    title: 'Digital marketing và các bài toán tăng trưởng',
    href: '/blog/digital-marketing',
    image: '/homepage/marketing-growth-card.webp',
  },
  {
    tag: 'Product',
    title: 'Kinh nghiệm thiết kế website và trải nghiệm số',
    href: '/blog/web-design-experience',
    image: '/homepage/ux-ui-card.webp',
  },
];
