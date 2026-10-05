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
    icon: 'https://assets.kedi.media/images/fbe984b8e6509a3c97b1.svg',
    visual: 'https://assets.kedi.media/images/a039c7d55bba1c0a4ef5-1916.webp',
    category: 'core',
    eyebrow: 'Business OS',
    metric: '01',
    metricLabel: 'Central workspace',
  },
  {
    name: 'Kedi CRM',
    href: '/kedi-crm',
    description: 'Quản lý khách hàng, pipeline, lịch sử tương tác và dữ liệu sales trên một hệ thống xuyên suốt.',
    icon: 'https://assets.kedi.media/images/232238a305ad430068d1.svg',
    visual: 'https://assets.kedi.media/images/876ae45bf4e69d827499-1254.webp',
    category: 'core',
    eyebrow: 'Customer system',
    metric: '360°',
    metricLabel: 'Customer context',
  },
  {
    name: 'Kedi Commerce',
    href: '/kedi-commerce',
    description: 'Kết nối catalog, đơn hàng, thanh toán và vận hành thương mại điện tử trong một luồng thống nhất.',
    icon: 'https://assets.kedi.media/images/1d0d547b760e63b21d40.svg',
    visual: 'https://assets.kedi.media/images/ba8c5415337da92c3a56-1254.webp',
    category: 'core',
    eyebrow: 'Commerce stack',
    metric: '1 flow',
    metricLabel: 'Order operations',
  },
  {
    name: 'Kedi Agents',
    href: '/kedi-agents',
    description: 'AI workforce hỗ trợ xử lý tác vụ, tri thức và các quy trình lặp lại cho doanh nghiệp.',
    icon: 'https://assets.kedi.media/images/b669fa89948e3ece375d.svg',
    visual: 'https://assets.kedi.media/images/9d68de671f5f43d01412-1254.webp',
    category: 'ai',
    eyebrow: 'AI workforce',
    metric: '24/7',
    metricLabel: 'Agent availability',
  },
  {
    name: 'Kedi AI Flow',
    href: '/kedi-ai-flow',
    description: 'Thiết kế workflow AI có kiểm soát để kết nối dữ liệu, công cụ và các bước ra quyết định.',
    icon: 'https://assets.kedi.media/images/06ddff869ce896483358.svg',
    visual: 'https://assets.kedi.media/images/57ff22a320819508743d-1448.webp',
    category: 'ai',
    eyebrow: 'AI workflow',
    metric: 'N→1',
    metricLabel: 'Connected workflow',
  },
  {
    name: 'Kedi Video',
    href: '/kedi-video',
    description: 'Tăng tốc quy trình sản xuất, biên tập và vận hành nội dung video theo workflow.',
    icon: 'https://assets.kedi.media/images/6f6ab43888a87a1226fb.svg',
    visual: 'https://assets.kedi.media/images/e9aae8a1a699079253e1-1254.webp',
    category: 'ai',
    eyebrow: 'Content automation',
    metric: 'Fast',
    metricLabel: 'Content pipeline',
  },
  {
    name: 'Kedi Outreach',
    href: '/kedi-outreach',
    description: 'Hỗ trợ prospecting, messaging và các chuỗi tiếp cận có hệ thống theo từng phân khúc khách hàng.',
    icon: 'https://assets.kedi.media/images/2b4adf2ea6c78c2f7855.svg',
    visual: 'https://assets.kedi.media/images/9787e160bf1b0be5cc4a-1254.webp',
    category: 'growth',
    eyebrow: 'Outbound growth',
    metric: '1:N',
    metricLabel: 'Outreach sequences',
  },
  {
    name: 'Kedi Funnel',
    href: '/kedi-funnel',
    description: 'Xây dựng hành trình landing page và chuyển đổi theo mục tiêu kinh doanh.',
    icon: 'https://assets.kedi.media/images/252d8876f81f22bc24a2.svg',
    visual: 'https://assets.kedi.media/images/0deed100efeb9387495d-1448.webp',
    category: 'growth',
    eyebrow: 'Conversion',
    metric: '+CVR',
    metricLabel: 'Conversion focus',
  },
  {
    name: 'Kedi SEO',
    href: '/kedi-seo',
    description: 'Tập trung dữ liệu, nội dung và tối ưu hóa khả năng hiện diện trên search.',
    icon: 'https://assets.kedi.media/images/91d7ba7ad0333a3c3ca3.svg',
    visual: 'https://assets.kedi.media/images/39d8f6259bf0b6baf61b-1254.webp',
    category: 'growth',
    eyebrow: 'Search growth',
    metric: 'SEO',
    metricLabel: 'Organic visibility',
  },
  {
    name: 'Kedi Ads',
    href: '/kedi-ads',
    description: 'Hỗ trợ vận hành advertising và quan sát performance trong cùng hệ sinh thái.',
    icon: 'https://assets.kedi.media/images/34a293cfc14985a57f30.svg',
    visual: 'https://assets.kedi.media/images/36de58875ebffced9add-1254.webp',
    category: 'growth',
    eyebrow: 'Paid growth',
    metric: 'ROAS',
    metricLabel: 'Performance signals',
  },
  {
    name: 'Kedi Analytics',
    href: '/kedi-analytics',
    description: 'Hợp nhất các chỉ số kinh doanh và marketing để theo dõi hiệu quả rõ ràng hơn.',
    icon: 'https://assets.kedi.media/images/1eab0faefd144c10b142.svg',
    visual: 'https://assets.kedi.media/images/a5374844de427967edb0-1254.webp',
    category: 'operations',
    eyebrow: 'Business intelligence',
    metric: 'Live',
    metricLabel: 'Decision signals',
  },
  {
    name: 'Kedi Automate',
    href: '/kedi-automate',
    description: 'Kết nối các bước vận hành lặp lại thành workflow xuyên ứng dụng.',
    icon: 'https://assets.kedi.media/images/bb7e99594a8ca3ea24b8.svg',
    visual: 'https://assets.kedi.media/images/7e2b0638f5797a2ba3ce-1254.webp',
    category: 'operations',
    eyebrow: 'Workflow automation',
    metric: 'Auto',
    metricLabel: 'Routine operations',
  },
  {
    name: 'Kedi Profiles',
    href: '/kedi-profiles',
    description: 'Quản lý profile và các ngữ cảnh làm việc cần tách biệt trong vận hành số.',
    icon: 'https://assets.kedi.media/images/3f0c6ed4a78771b7a006.svg',
    visual: 'https://assets.kedi.media/images/b7417e3060afa231b47d-1254.webp',
    category: 'operations',
    eyebrow: 'Profile operations',
    metric: 'Multi',
    metricLabel: 'Work contexts',
  },
  {
    name: 'Kedi POD',
    href: '/kedi-pod',
    description: 'Tổ chức quy trình Print-on-Demand theo hướng tự động hóa và dễ mở rộng.',
    icon: 'https://assets.kedi.media/images/3b988f6d95e354bf40c4.svg',
    visual: 'https://assets.kedi.media/images/ab3219a5716be94a2d57-1254.webp',
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
    image: 'https://assets.kedi.media/images/0deed100efeb9387495d-1448.webp',
  },
  {
    index: '02',
    title: 'Bán hàng hiệu quả hơn',
    description: 'Kết nối commerce, CRM và outreach để quản lý hành trình bán hàng xuyên suốt.',
    tags: ['CRM', 'Commerce', 'Outreach'],
    href: '/kedi-crm',
    image: 'https://assets.kedi.media/images/a42b8cbe84199bd09d18-1448.webp',
  },
  {
    index: '03',
    title: 'Tự động hóa vận hành',
    description: 'AI Agents, workflow và analytics cho các tác vụ lặp lại và quyết định vận hành.',
    tags: ['AI Agents', 'Automation', 'Analytics'],
    href: '/kedi-agents',
    image: 'https://assets.kedi.media/images/57ff22a320819508743d-1448.webp',
  },
  {
    index: '04',
    title: 'Xây dựng hạ tầng số',
    description: 'Cloud, hosting và hạ tầng nền để website và hệ thống sẵn sàng mở rộng.',
    tags: ['Cloud', 'Hosting', 'Infrastructure'],
    href: '/cloud-hosting',
    image: 'https://assets.kedi.media/images/59a17016c7a3bbcce90d-1920.webp',
  },
];

export const galleryItemsV3 = [
  {
    index: '01',
    eyebrow: 'Digital experience',
    title: 'Website tạo demand, không chỉ để hiện diện.',
    description: 'Kết hợp UX/UI, nội dung và conversion để website trở thành một phần của hệ thống tăng trưởng.',
    image: 'https://assets.kedi.media/images/ac771aa2cc3fe2bee424-1448.webp',
    href: '/thiet-ke-landing-page',
  },
  {
    index: '02',
    eyebrow: 'Revenue operations',
    title: 'CRM và Commerce cùng nhìn một khách hàng.',
    description: 'Từ lead đến đơn hàng, dữ liệu được nối vào cùng một hành trình thay vì nằm ở các công cụ rời rạc.',
    image: 'https://assets.kedi.media/images/a42b8cbe84199bd09d18-1448.webp',
    href: '/kedi-crm',
  },
  {
    index: '03',
    eyebrow: 'AI workforce',
    title: 'AI Agent tham gia trực tiếp vào công việc.',
    description: 'Agent xử lý tác vụ, workflow và tri thức theo ngữ cảnh vận hành thực tế của doanh nghiệp.',
    image: 'https://assets.kedi.media/images/57ff22a320819508743d-1448.webp',
    href: '/kedi-agents',
  },
  {
    index: '04',
    eyebrow: 'Growth engine',
    title: 'Marketing được nối với dữ liệu và tín hiệu kinh doanh.',
    description: 'SEO, ads, content và funnel cùng phục vụ một mục tiêu thay vì tối ưu độc lập từng kênh.',
    image: 'https://assets.kedi.media/images/0deed100efeb9387495d-1448.webp',
    href: '/dich-vu-seo',
  },
  {
    index: '05',
    eyebrow: 'Intelligence layer',
    title: 'Đo lường để biết hệ thống đang tạo ra điều gì.',
    description: 'Analytics gom các tín hiệu quan trọng để đội ngũ nhìn thấy hiệu quả và điều chỉnh nhanh hơn.',
    image: 'https://assets.kedi.media/images/d43a9ccea2d734bb7b49-1916.webp',
    href: '/kedi-analytics',
  },
];

export const journeyItemsV3 = [
  {
    step: '01',
    title: 'Attract',
    detail: 'Website / SEO / Ads',
    description: 'Tạo điểm chạm đủ rõ để khách hàng tìm thấy, hiểu và bắt đầu quan tâm.',
    image: 'https://assets.kedi.media/images/a5c5d918034c8afbc961-1448.webp',
  },
  {
    step: '02',
    title: 'Convert',
    detail: 'Funnel / Commerce',
    description: 'Biến sự quan tâm thành lead, cuộc hội thoại hoặc đơn hàng bằng hành trình chuyển đổi rõ ràng.',
    image: 'https://assets.kedi.media/images/5bd2a9afed1e94d06652-1448.webp',
  },
  {
    step: '03',
    title: 'Manage',
    detail: 'CRM / Profiles',
    description: 'Giữ toàn bộ ngữ cảnh khách hàng và hoạt động vận hành ở đúng nơi cần thiết.',
    image: 'https://assets.kedi.media/images/7f5ff0f733f0c2639940-1448.webp',
  },
  {
    step: '04',
    title: 'Automate',
    detail: 'Agents / AI Flow',
    description: 'Đưa các tác vụ lặp lại và luồng phối hợp xuyên ứng dụng sang workflow có kiểm soát.',
    image: 'https://assets.kedi.media/images/75c732db00946d6f7616-1448.webp',
  },
  {
    step: '05',
    title: 'Measure',
    detail: 'Analytics',
    description: 'Kết nối tín hiệu để theo dõi hiệu quả, phát hiện vấn đề và ra quyết định nhanh hơn.',
    image: 'https://assets.kedi.media/images/d4d7037142a7979dedc2-1448.webp',
  },
];

export const serviceItemsV3 = [
  {
    number: '01',
    title: 'Web & Digital Experience',
    description: 'Website, landing page và các điểm chạm số được thiết kế theo mục tiêu chuyển đổi.',
    href: '/thiet-ke-landing-page',
    tags: ['Website', 'Landing Page', 'UX/UI'],
    image: 'https://assets.kedi.media/images/ac771aa2cc3fe2bee424-1448.webp',
  },
  {
    number: '02',
    title: 'Growth & SEO',
    description: 'Từ SEO đến funnel và tăng trưởng nội dung cho doanh nghiệp cần mở rộng demand.',
    href: '/dich-vu-seo',
    tags: ['SEO', 'Content', 'Conversion'],
    image: 'https://assets.kedi.media/images/a5c5d918034c8afbc961-1448.webp',
  },
  {
    number: '03',
    title: 'Brand & Media',
    description: 'Video, profile và nội dung hình ảnh để thương hiệu truyền đạt rõ ràng và nhất quán hơn.',
    href: '/quay-phim-gioi-thieu-doanh-nghiep',
    tags: ['Video', 'Profile', 'Media'],
    image: 'https://assets.kedi.media/images/0deed100efeb9387495d-1448.webp',
  },
  {
    number: '04',
    title: 'Cloud & Infrastructure',
    description: 'Nền tảng cloud và hosting để hệ thống vận hành ổn định và sẵn sàng mở rộng.',
    href: '/cloud-hosting',
    tags: ['Cloud', 'Hosting', 'Scale'],
    image: 'https://assets.kedi.media/images/59a17016c7a3bbcce90d-1920.webp',
  },
  {
    number: '05',
    title: 'AI & Automation',
    description: 'Kết hợp SaaS, AI và workflow để giảm thao tác thủ công trong vận hành.',
    href: '/kedi-automate',
    tags: ['AI', 'Workflow', 'Automation'],
    image: 'https://assets.kedi.media/images/57ff22a320819508743d-1448.webp',
  },
];

export const projectItemsV3 = [
  {
    label: 'Digital experience',
    title: 'Website & Growth',
    description: 'Các dự án kết hợp trải nghiệm số, nội dung và tăng trưởng cho doanh nghiệp.',
    image: 'https://assets.kedi.media/images/980f57cfd9682e5a12da-1448.webp',
  },
  {
    label: 'Revenue operations',
    title: 'Commerce & CRM',
    description: 'Các bài toán bán hàng, dữ liệu khách hàng và vận hành thương mại điện tử.',
    image: 'https://assets.kedi.media/images/a42b8cbe84199bd09d18-1448.webp',
  },
  {
    label: 'Intelligent operations',
    title: 'AI & Automation',
    description: 'Các hướng triển khai AI, workflow và tự động hóa trong vận hành.',
    image: 'https://assets.kedi.media/images/57ff22a320819508743d-1448.webp',
  },
];

export const insightItemsV3 = [
  {
    tag: 'SEO',
    title: 'Kiến thức search và tăng trưởng organic',
    href: '/blog/seo-guide',
    image: 'https://assets.kedi.media/images/a5c5d918034c8afbc961-1448.webp',
  },
  {
    tag: 'Growth',
    title: 'Digital marketing và các bài toán tăng trưởng',
    href: '/blog/digital-marketing',
    image: 'https://assets.kedi.media/images/0deed100efeb9387495d-1448.webp',
  },
  {
    tag: 'Product',
    title: 'Kinh nghiệm thiết kế website và trải nghiệm số',
    href: '/blog/web-design-experience',
    image: 'https://assets.kedi.media/images/ac771aa2cc3fe2bee424-1448.webp',
  },
];
