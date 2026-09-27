export type ProductCategory = 'core' | 'ai' | 'growth' | 'operations';

export type ProductItem = {
  name: string;
  href: string;
  description: string;
  image: string;
  category: ProductCategory;
  eyebrow: string;
};

export const productCategoryLabels: Record<ProductCategory, string> = {
  core: 'Core',
  ai: 'AI',
  growth: 'Growth',
  operations: 'Operations',
};

export const products: ProductItem[] = [
  {
    name: 'Kedi OS',
    href: '/kedi-os',
    description: 'Lớp điều phối trung tâm cho hệ sinh thái SaaS và quy trình doanh nghiệp.',
    image: '/service-menu/software/kedi-os.svg',
    category: 'core',
    eyebrow: 'Business OS',
  },
  {
    name: 'Kedi CRM',
    href: '/kedi-crm',
    description: 'Quản lý khách hàng, pipeline, sales activity và dữ liệu tương tác trên một nơi.',
    image: '/service-menu/software/kedi-crm.svg',
    category: 'core',
    eyebrow: 'Customer system',
  },
  {
    name: 'Kedi Commerce',
    href: '/kedi-commerce',
    description: 'Kết nối catalog, đơn hàng và vận hành bán hàng trong một luồng thống nhất.',
    image: '/service-menu/software/kedi-commerce.svg',
    category: 'core',
    eyebrow: 'Commerce stack',
  },
  {
    name: 'Kedi Agents',
    href: '/kedi-agents',
    description: 'AI workforce hỗ trợ xử lý tác vụ, tri thức và quy trình lặp lại cho doanh nghiệp.',
    image: '/service-menu/software/kedi-agents.svg',
    category: 'ai',
    eyebrow: 'AI workforce',
  },
  {
    name: 'Kedi AI Flow',
    href: '/kedi-ai-flow',
    description: 'Thiết kế workflow AI có kiểm soát để kết nối tác vụ và dữ liệu đa ứng dụng.',
    image: '/service-menu/software/kedi-ai-flow.svg',
    category: 'ai',
    eyebrow: 'AI workflow',
  },
  {
    name: 'Kedi Video',
    href: '/kedi-video',
    description: 'Tăng tốc quy trình sản xuất và vận hành nội dung video theo workflow.',
    image: '/service-menu/software/kedi-video.svg',
    category: 'ai',
    eyebrow: 'Content automation',
  },
  {
    name: 'Kedi Outreach',
    href: '/kedi-outreach',
    description: 'Hỗ trợ prospecting, messaging và các chuỗi tiếp cận có hệ thống.',
    image: '/service-menu/software/kedi-outreach.svg',
    category: 'growth',
    eyebrow: 'Outbound growth',
  },
  {
    name: 'Kedi Funnel',
    href: '/kedi-funnel',
    description: 'Xây dựng hành trình landing page và chuyển đổi theo mục tiêu kinh doanh.',
    image: '/service-menu/software/kedi-funnel.svg',
    category: 'growth',
    eyebrow: 'Conversion',
  },
  {
    name: 'Kedi SEO',
    href: '/kedi-seo',
    description: 'Tập trung dữ liệu, nội dung và tối ưu hóa khả năng hiện diện trên search.',
    image: '/service-menu/software/kedi-seo.svg',
    category: 'growth',
    eyebrow: 'Search growth',
  },
  {
    name: 'Kedi Ads',
    href: '/kedi-ads',
    description: 'Hỗ trợ vận hành advertising và quan sát performance trong cùng hệ sinh thái.',
    image: '/service-menu/software/kedi-ads.svg',
    category: 'growth',
    eyebrow: 'Paid growth',
  },
  {
    name: 'Kedi Analytics',
    href: '/kedi-analytics',
    description: 'Hợp nhất các chỉ số kinh doanh và marketing để theo dõi hiệu quả rõ ràng hơn.',
    image: '/service-menu/software/kedi-analytics.svg',
    category: 'operations',
    eyebrow: 'Business intelligence',
  },
  {
    name: 'Kedi Automate',
    href: '/kedi-automate',
    description: 'Kết nối các bước vận hành lặp lại thành workflow xuyên ứng dụng.',
    image: '/service-menu/software/kedi-automate.svg',
    category: 'operations',
    eyebrow: 'Workflow automation',
  },
  {
    name: 'Kedi Profiles',
    href: '/kedi-profiles',
    description: 'Quản lý profile và các ngữ cảnh làm việc cần tách biệt trong vận hành số.',
    image: '/service-menu/software/kedi-profiles.svg',
    category: 'operations',
    eyebrow: 'Profile operations',
  },
  {
    name: 'Kedi POD',
    href: '/kedi-pod',
    description: 'Tổ chức quy trình Print-on-Demand theo hướng tự động hóa và dễ mở rộng.',
    image: '/service-menu/software/kedi-pod.svg',
    category: 'operations',
    eyebrow: 'POD operations',
  },
];

export const needItems = [
  {
    index: '01',
    title: 'Tăng trưởng khách hàng',
    description: 'Website, SEO, content và funnel để tạo thêm demand và lead.',
    tags: ['Website', 'SEO', 'Funnel', 'Ads'],
    href: '/dich-vu-seo',
  },
  {
    index: '02',
    title: 'Bán hàng hiệu quả hơn',
    description: 'Kết nối commerce, CRM và outreach để quản lý hành trình bán hàng.',
    tags: ['CRM', 'Commerce', 'Outreach'],
    href: '/kedi-crm',
  },
  {
    index: '03',
    title: 'Tự động hóa vận hành',
    description: 'AI Agents, workflow và analytics cho các tác vụ lặp lại và quyết định.',
    tags: ['AI Agents', 'Automation', 'Analytics'],
    href: '/kedi-agents',
  },
  {
    index: '04',
    title: 'Xây dựng hạ tầng số',
    description: 'Cloud, hosting và hạ tầng nền cho website và hệ thống doanh nghiệp.',
    tags: ['Cloud', 'Hosting', 'Infrastructure'],
    href: '/cloud-hosting',
  },
];

export const serviceItems = [
  {
    number: '01',
    title: 'Web & Digital Experience',
    description: 'Website, landing page và các điểm chạm số được thiết kế theo mục tiêu chuyển đổi.',
    href: '/thiet-ke-landing-page',
    tags: ['Website', 'Landing Page', 'UX/UI'],
  },
  {
    number: '02',
    title: 'Growth & SEO',
    description: 'Từ SEO đến funnel và tăng trưởng nội dung cho doanh nghiệp cần mở rộng demand.',
    href: '/dich-vu-seo',
    tags: ['SEO', 'Content', 'Conversion'],
  },
  {
    number: '03',
    title: 'Brand & Media',
    description: 'Video, profile và nội dung hình ảnh để thương hiệu truyền đạt rõ ràng hơn.',
    href: '/quay-phim-gioi-thieu-doanh-nghiep',
    tags: ['Video', 'Profile', 'Media'],
  },
  {
    number: '04',
    title: 'Cloud & Infrastructure',
    description: 'Nền tảng cloud và hosting để hệ thống vận hành ổn định và sẵn sàng mở rộng.',
    href: '/cloud-hosting',
    tags: ['Cloud', 'Hosting', 'Scale'],
  },
  {
    number: '05',
    title: 'AI & Automation',
    description: 'Kết hợp SaaS, AI và workflow để giảm thao tác thủ công trong vận hành.',
    href: '/kedi-automate',
    tags: ['AI', 'Workflow', 'Automation'],
  },
];

export const journeyItems = [
  { step: '01', title: 'Attract', detail: 'Website / SEO / Ads' },
  { step: '02', title: 'Convert', detail: 'Funnel / Commerce' },
  { step: '03', title: 'Manage', detail: 'CRM / Profiles' },
  { step: '04', title: 'Automate', detail: 'Agents / AI Flow' },
  { step: '05', title: 'Measure', detail: 'Analytics' },
];
