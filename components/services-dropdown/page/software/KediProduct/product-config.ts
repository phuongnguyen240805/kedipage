export type KediProductKey =
  | 'kedi-os'
  | 'kedi-crm'
  | 'kedi-commerce'
  | 'kedi-agents'
  | 'kedi-outreach'
  | 'kedi-profiles'
  | 'kedi-ai-flow'
  | 'kedi-video'
  | 'kedi-pod'
  | 'kedi-funnel'
  | 'kedi-seo'
  | 'kedi-ads'
  | 'kedi-analytics'
  | 'kedi-automate';

export type ProductFeature = { title: string; body: string };
export type ProductFaq = { q: string; a: string };

export type KediProductConfig = {
  slug: KediProductKey;
  name: string;
  source: string;
  eyebrow: string;
  meaning: string;
  headline: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  accent: string;
  stats: Array<{ value: string; label: string }>;
  painTitle: string;
  pains: ProductFeature[];
  featureTitle: string;
  features: ProductFeature[];
  workflow: Array<{ step: string; title: string; body: string }>;
  gallery?: Array<{ src: string; alt: string; title: string }>;
  trustTitle: string;
  trustItems: ProductFeature[];
  faqs: ProductFaq[];
};

const generic = (
  slug: KediProductKey,
  name: string,
  source: string,
  meaning: string,
  accent: string,
): KediProductConfig => ({
  slug,
  name,
  source,
  eyebrow: 'THE KEDI GROUP · HỆ PHẦN MỀM KEDI',
  meaning,
  headline: `${name}: ${meaning}`,
  lead: `${name} được tổ chức theo kiến trúc sản phẩm KEDI: một luồng làm việc rõ ràng, dữ liệu tập trung, có khả năng tích hợp và mở rộng theo quy mô doanh nghiệp. Trang này dùng cùng hệ layout với KEDI EduTech để toàn bộ nhóm sản phẩm có trải nghiệm nhất quán.`,
  primaryCta: 'Đặt lịch xem demo',
  secondaryCta: 'Xem năng lực hệ thống',
  accent,
  stats: [
    { value: '1', label: 'Nền tảng tập trung' },
    { value: 'API', label: 'Sẵn sàng kết nối' },
    { value: 'SSO', label: 'Một tài khoản' },
    { value: '24/7', label: 'Tự động vận hành' },
  ],
  painTitle: 'Những điểm nghẽn sản phẩm này được thiết kế để xử lý',
  pains: [
    { title: 'Dữ liệu phân tán', body: 'Thông tin nằm ở nhiều file, nhiều công cụ và khó tạo một nguồn dữ liệu thống nhất.' },
    { title: 'Nhiều thao tác thủ công', body: 'Đội ngũ lặp lại các bước nhập liệu, kiểm tra và chuyển trạng thái giữa nhiều hệ thống.' },
    { title: 'Khó mở rộng', body: 'Quy trình chạy được ở quy mô nhỏ nhưng nhanh chóng quá tải khi số người dùng hoặc giao dịch tăng.' },
  ],
  featureTitle: `${name} được chia thành các khối chức năng độc lập nhưng dùng chung dữ liệu`,
  features: [
    { title: 'Workspace tập trung', body: 'Một màn hình cho dữ liệu, trạng thái và hành động chính của nghiệp vụ.' },
    { title: 'Role & permission', body: 'Phân quyền theo vai trò, nhóm và phạm vi dữ liệu.' },
    { title: 'Automation', body: 'Trigger, rule và action giúp giảm thao tác lặp lại.' },
    { title: 'Dashboard', body: 'Theo dõi trạng thái vận hành và chỉ số quan trọng theo thời gian thực.' },
    { title: 'API & webhook', body: 'Kết nối dịch vụ ngoài và các hệ thống KEDI khác mà không phải nhập dữ liệu lại.' },
    { title: 'Audit log', body: 'Lưu dấu thao tác để kiểm soát, truy vết và bàn giao.' },
  ],
  workflow: [
    { step: '01', title: 'Kết nối dữ liệu', body: 'Đưa dữ liệu hiện có vào một workspace chung.' },
    { step: '02', title: 'Chuẩn hóa quy trình', body: 'Chốt trạng thái, quyền hạn và luồng xử lý thực tế.' },
    { step: '03', title: 'Tự động hóa', body: 'Đặt rule cho các bước lặp lại và thông báo.' },
    { step: '04', title: 'Đo lường & mở rộng', body: 'Theo dõi hiệu quả và mở rộng module khi quy mô tăng.' },
  ],
  trustTitle: 'Nền kỹ thuật dùng chung của hệ KEDI',
  trustItems: [
    { title: 'Dữ liệu thuộc về khách hàng', body: 'Có thể thiết kế database riêng, chính sách lưu trữ và phương án export theo hợp đồng.' },
    { title: 'Tích hợp theo API', body: 'REST API, webhook và SSO giúp nối với CRM, ERP, thanh toán hoặc hệ nội bộ.' },
    { title: 'Triển khai linh hoạt', body: 'Có thể triển khai theo module thay vì buộc phải thay toàn bộ hệ thống trong một lần.' },
  ],
  faqs: [
    { q: 'Có cần triển khai toàn bộ ngay từ đầu không?', a: 'Không. Có thể bắt đầu từ module tạo giá trị rõ nhất rồi mở rộng theo dữ liệu và quy trình đã chuẩn hóa.' },
    { q: 'Có tích hợp hệ thống hiện tại được không?', a: 'Có. Thiết kế ưu tiên API, webhook và nhập/xuất dữ liệu để giảm việc phải thay hệ thống đang hoạt động tốt.' },
    { q: 'Có thể tùy biến theo nghiệp vụ riêng không?', a: 'Có. Đây là nhóm sản phẩm theo hướng platform/module, nên flow, field và permission có thể điều chỉnh theo phạm vi dự án.' },
  ],
});

export const productConfigs: Record<KediProductKey, KediProductConfig> = {
  'kedi-os': generic('kedi-os', 'Kedi OS', 'SaaS Kernel', 'Hệ điều hành SaaS/doanh nghiệp', '#6d5dfc'),
  'kedi-crm': generic('kedi-crm', 'Kedi CRM', 'Twenty', 'Customer Relationship Management', '#3168ff'),
  'kedi-commerce': generic('kedi-commerce', 'Kedi Commerce', 'Medusa', 'Commerce / catalog / order / inventory', '#ef6c32'),
  'kedi-agents': generic('kedi-agents', 'Kedi Agents', 'LibreFang', 'Agent runtime & AI workforce', '#9b51e0'),
  'kedi-outreach': generic('kedi-outreach', 'Kedi Outreach', 'ZooZalo', 'Prospecting + messaging + engagement', '#15a66f'),
  'kedi-profiles': generic('kedi-profiles', 'Kedi Profiles', 'KikiLogin', 'Multi-account/browser profiles', '#3e7bfa'),
  'kedi-video': generic('kedi-video', 'Kedi Video', 'CapCutPilot', 'Video production automation', '#e14675'),
  'kedi-pod': generic('kedi-pod', 'Kedi POD', 'ZECOM', 'Print-on-Demand business automation', '#ed7d31'),
  'kedi-funnel': generic('kedi-funnel', 'Kedi Funnel', 'LadiPage', 'Landing page + conversion funnel', '#6f49e8'),
  'kedi-seo': generic('kedi-seo', 'Kedi SEO', 'SERPUpdate', 'SEO/GEO intelligence & optimization', '#218f65'),
  'kedi-ads': generic('kedi-ads', 'Kedi Ads', 'AdsMeta', 'Meta/Facebook advertising', '#3178f5'),
  'kedi-analytics': generic('kedi-analytics', 'Kedi Analytics', 'KEDI', 'Business/marketing analytics', '#0e8a98'),
  'kedi-automate': generic('kedi-automate', 'Kedi Automate', 'KEDI', 'Cross-app business workflow', '#7257d5'),
  'kedi-ai-flow': {
    slug: 'kedi-ai-flow',
    name: 'Kedi AI Flow',
    source: 'TobyFlow',
    eyebrow: 'THE KEDI GROUP · AI AUTOMATION',
    meaning: 'AI-platform automation',
    headline: 'Đừng xử lý từng prompt. Hãy để Kedi AI Flow chạy cả quy trình.',
    lead: 'Kedi AI Flow là lớp tự động hóa cho quá trình tạo nội dung bằng AI: gửi prompt hàng loạt, nối nhiều nền tảng thành workflow kéo-thả, chạy nhiều job song song và tự lưu kết quả về đúng project.',
    primaryCta: 'Xem workflow mẫu',
    secondaryCta: 'Đặt lịch demo',
    accent: '#6d5dfc',
    stats: [
      { value: '9', label: 'Loại node workflow' },
      { value: '3+', label: 'Nền tảng AI tích hợp' },
      { value: '5+', label: 'Model Flow hỗ trợ' },
      { value: 'Batch', label: 'Prompt & job hàng loạt' },
    ],
    painTitle: 'Khi AI tạo nội dung nhanh hơn nhưng thao tác vận hành lại thành nút thắt',
    pains: [
      { title: 'Copy-paste prompt từng lần', body: 'Một chiến dịch cần hàng chục biến thể nhưng người vận hành vẫn phải gửi từng prompt rồi chờ từng kết quả.' },
      { title: 'Đổi qua lại nhiều nền tảng', body: 'Flow, ChatGPT, Grok và các model khác nằm ở các tab riêng; output của bước trước phải chuyển tay sang bước sau.' },
      { title: 'File kết quả khó quản lý', body: 'Ảnh và video tải về rời rạc, tên file không theo project, khiến khâu hậu kỳ và bàn giao tốn thêm thời gian.' },
      { title: 'Quota dễ bị nghẽn', body: 'Chạy nhiều job cùng lúc mà không kiểm soát concurrency dễ dẫn đến throttling, retry thủ công và mất trạng thái.' },
    ],
    featureTitle: 'Một canvas để biến chuỗi thao tác AI thành workflow có thể chạy lại',
    features: [
      { title: 'Batch generate', body: 'Submit nhiều prompt trong một lần, theo dõi trạng thái và retry những job lỗi thay vì thao tác lại từ đầu.' },
      { title: 'Workflow builder', body: 'Kéo-thả các node Prompt, Flow, ChatGPT, Grok, Download, Delay, Telegram và Note thành quy trình trực quan.' },
      { title: 'Multi-task queue', body: 'Quản lý nhiều job và provider song song với cơ chế giới hạn concurrency để giảm nghẽn quota.' },
      { title: 'Auto download', body: 'Tự tải output về máy và đặt tên theo date, prompt, index hoặc cấu trúc project.' },
      { title: 'Multi AI platform', body: 'Một luồng có thể chuyển giữa nhiều nền tảng AI mà không phải tổ chức dữ liệu bằng tay ở từng tab.' },
      { title: 'MCP control', body: 'Có thể mở rộng lớp điều khiển bằng AI/MCP để dựng và chạy workflow bằng câu lệnh tự nhiên.' },
    ],
    workflow: [
      { step: '01', title: 'Nạp prompt hoặc dữ liệu đầu vào', body: 'Dán một danh sách prompt, reference image hoặc dữ liệu từ project.' },
      { step: '02', title: 'Nối các node xử lý', body: 'Ví dụ Prompt → ChatGPT → Google Flow → Download hoặc Telegram.' },
      { step: '03', title: 'Chạy batch', body: 'Queue phân phối job, theo dõi trạng thái và xử lý retry theo từng provider.' },
      { step: '04', title: 'Thu output về project', body: 'Kết quả được tự động lưu, đặt tên và phân nhóm để tiếp tục hậu kỳ hoặc bàn giao.' },
    ],
    gallery: [
      { src: 'https://labs.toby.vn/images/website/workflow-ref-img.jpg', alt: 'Reference image trong workflow TobyFlow', title: 'Reference image' },
      { src: 'https://labs.toby.vn/images/website/workflow-chatgpt-result.jpeg', alt: 'Kết quả ChatGPT trong workflow TobyFlow', title: 'ChatGPT result' },
      { src: 'https://labs.toby.vn/images/website/workflow-grok-result.jpeg', alt: 'Kết quả Grok trong workflow TobyFlow', title: 'Grok result' },
      { src: 'https://labs.toby.vn/storage/media/2026/09/9b83e838-7590-4543-bade-bfee425d69d6.jpeg', alt: 'Genjutsu Google Flow workflow', title: 'Genjutsu Google Flow' },
      { src: 'https://labs.toby.vn/storage/media/2026/08/07ecfa94-4016-4400-8eb4-0b433259b861.jpeg', alt: 'Google Flow Dancing motion control', title: 'Motion control' },
      { src: 'https://labs.toby.vn/storage/media/2026/06/2be10744-b574-4026-9b8b-5fea58059bb8.jpeg', alt: 'Office Fashion Lookbook workflow', title: 'Lookbook workflow' },
    ],
    trustTitle: 'Tự động hóa nhưng vẫn giữ quyền kiểm soát dữ liệu và output',
    trustItems: [
      { title: 'Local-first cho media', body: 'Theo mô hình TobyFlow tham chiếu, ảnh/video có thể được giữ ở local trên máy người dùng thay vì bắt buộc đưa vào một kho trung gian.' },
      { title: 'Workflow có thể tái sử dụng', body: 'Lưu flow thành template để dùng lại cho campaign, team hoặc nhóm content tương tự.' },
      { title: 'Không thay model AI', body: 'Kedi AI Flow đóng vai trò orchestration: tự động hóa thao tác trên các nền tảng AI đang dùng thay vì tự nhận là model tạo ảnh/video.' },
    ],
    faqs: [
      { q: 'Kedi AI Flow có tự tạo ảnh hoặc video không?', a: 'Không. Nó là lớp orchestration/automation, điều phối prompt và thao tác trên các nền tảng AI được tích hợp.' },
      { q: 'Có thể chạy nhiều prompt cùng lúc không?', a: 'Có. Batch generate và multi-task queue là hai khối chức năng cốt lõi của thiết kế trang thử nghiệm này.' },
      { q: 'Có thể nối output của node trước vào node sau không?', a: 'Có. Workflow builder được thiết kế để truyền output giữa các node, giảm copy-paste thủ công.' },
      { q: 'Có thể tự tải file và đặt tên theo project không?', a: 'Có. Auto-download có thể gắn quy tắc đặt tên và cấu trúc thư mục theo project.' },
    ],
  },
};

export const kediProductSlugs = Object.keys(productConfigs) as KediProductKey[];
