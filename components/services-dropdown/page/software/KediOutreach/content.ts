import type {
  CapabilityRow,
  CompareColumn,
  FaqItem,
  GalleryItem,
  MapNode,
  ModuleItem,
  PainItem,
  ProductImage,
  ProductStat,
  RoadmapStep,
  WorkflowItem,
} from "../shared/edutech-product";
import { createProductMascot } from "../shared/edutech-product/mascots";

const base = "https://zoozalo.com/design/images";

export const outreachAssets = {
  mascot: createProductMascot('kedi-outreach', 'Kedi Outreach mascot 3D').src,
  ctaMascot: createProductMascot('kedi-outreach', 'Kedi Outreach mascot 3D').src,
  promo: `${base}/promo-banner.jpg?v=2`,
  overview: `${base}/ui-demo/01-overview.jpg`,
  send: `${base}/ui-demo/02-send.jpg`,
  reup: `${base}/ui-demo/03-reup.jpg`,
  timeline: `${base}/ui-demo/04-timeline.jpg`,
  groupMembers: `${base}/ui-demo/05-group-members.jpg`,
  nearby: `${base}/ui-demo/06-nearby.jpg`,
} as const;

export const mascot: ProductImage = {
  src: outreachAssets.mascot,
  alt: "Mascot 3D của Kedi Outreach",
};

export const heroStats: ProductStat[] = [
  { value: 6, label: "nhóm tác vụ chính trong một workflow" },
  { value: 1, label: "trình duyệt để gom nhiều thao tác Zalo" },
  { value: 3, label: "nguồn prospecting: SĐT · UID · vị trí" },
  { value: 4, label: "điểm chạm: chat · nhóm · timeline · video" },
];

export const marqueeItems = [
  "Web Chat Sales",
  "Inbox hàng loạt",
  "Spin nội dung",
  "Lịch gửi",
  "Bạn bè & nhãn",
  "Zalo Group",
  "Lead theo vị trí",
  "Maps B2B",
  "Timeline",
  "Reup Video",
  "AI viết bài",
  "Xuất dữ liệu",
];

export const pains: PainItem[] = [
  {
    kicker: "Chat rời rạc",
    title: "Sales trả lời nhanh nhưng mỗi người giữ một kiểu mẫu câu",
    description: "Khi Web Chat, mẫu trả lời, ảnh sản phẩm và lịch sử trao đổi nằm rải rác, tốc độ phản hồi nhanh nhưng rất khó giữ một cách làm thống nhất cho cả đội.",
  },
  {
    kicker: "Remarketing tay",
    title: "Gửi lại cho danh sách cũ bằng thao tác lặp từng nhóm",
    description: "Lọc bạn bè, chia nhãn, đổi nội dung và canh thời điểm gửi đều là việc lặp. Càng nhiều danh sách thì càng khó biết nhóm nào đã được chăm sóc.",
  },
  {
    kicker: "Nhóm nhiều",
    title: "Quản lý cộng đồng bị tách thành quá nhiều việc nhỏ",
    description: "Đồng bộ nhóm, tìm nhóm, đăng bài, thêm thành viên, lấy danh sách và chuyển nhóm sang tài khoản khác tạo thành một chuỗi thao tác dài nếu làm thủ công.",
  },
  {
    kicker: "Lead phân tán",
    title: "SĐT, UID Facebook và lead theo vị trí không nằm cùng một luồng",
    description: "Đội sales phải đi qua nhiều nguồn để tìm người dùng Zalo, quét khu vực hoặc lấy dữ liệu B2B rồi mới quay lại bước nhắn tin và theo dõi.",
  },
];

export const modules: ModuleItem[] = [
  {
    name: "Web Chat Sales",
    short: "Mẫu trả lời, bot từ khóa và thao tác chat nhanh đặt ngay tại nơi sales đang làm việc.",
    description: "Đưa các thao tác hỗ trợ sales về cùng màn hình chat: lưu mẫu câu kèm ảnh, bot theo từ khóa, gắn tag và hỗ trợ khôi phục tin nhắn thu hồi theo capability của workflow.",
    bullets: [
      "Lưu mẫu trả lời dùng lại cho nhiều tình huống",
      "Bot phản hồi theo từ khóa và gắn tag",
      "Thao tác nhanh với nội dung ảnh trong hội thoại",
    ],
    image: { src: outreachAssets.overview, alt: "Giao diện tổng quan ZooZalo tham chiếu cho Web Chat Sales" },
    tag: "sales tại chỗ",
  },
  {
    name: "Smart Inbox",
    short: "Remarketing danh sách bằng lịch gửi, spin nội dung và delay ngẫu nhiên.",
    description: "Tổ chức gửi tin theo danh sách thay vì thao tác từng người, đồng thời giữ các bộ lọc nhãn, giới tính, SĐT hoặc UID trong cùng một workflow.",
    bullets: [
      "Gửi theo bạn bè, SĐT hoặc UID Facebook",
      "Spin nội dung, ảnh, sticker và lịch gửi",
      "Gửi tới từng thành viên trong nhóm theo tập dữ liệu đã chọn",
    ],
    image: { src: outreachAssets.send, alt: "Giao diện gửi tin hàng loạt ZooZalo tham chiếu cho Kedi Outreach" },
    tag: "remarketing",
  },
  {
    name: "Network",
    short: "Mở rộng quan hệ bằng danh sách SĐT, lời mời kết bạn, nhãn và tìm người quanh khu vực.",
    description: "Gom prospecting và chăm sóc network vào cùng luồng để sales không phải nhảy giữa danh sách, lời mời kết bạn và các tệp khách đang theo dõi.",
    bullets: [
      "Kết bạn theo danh sách SĐT",
      "Duyệt hoặc từ chối lời mời tập trung",
      "Nhãn bạn bè, quét SĐT và tìm theo khu vực",
    ],
    image: { src: outreachAssets.nearby, alt: "Giao diện tìm Zalo theo vị trí ZooZalo tham chiếu" },
    tag: "prospecting",
  },
  {
    name: "Group Ops",
    short: "Đồng bộ, phân loại, đăng bài và khai thác dữ liệu nhóm trên một luồng vận hành.",
    description: "Phù hợp cho marketing cộng đồng khi doanh nghiệp phải làm việc với nhiều nhóm: từ tìm nhóm, tham gia, đăng nội dung cho tới lấy thành viên và xuất danh sách.",
    bullets: [
      "Đồng bộ và phân loại nhóm theo mục đích",
      "Đăng bài hoặc tin vào nhiều nhóm, có lịch hẹn",
      "Lấy thành viên từ link nhóm và xuất danh sách",
    ],
    image: { src: outreachAssets.groupMembers, alt: "Giao diện lấy thành viên nhóm ZooZalo tham chiếu" },
    tag: "community",
  },
  {
    name: "Lead Search",
    short: "Biến dữ liệu SĐT, vị trí và Maps B2B thành danh sách sẵn sàng cho sales xử lý.",
    description: "Workflow tìm kiếm đi từ kiểm tra SĐT, tìm theo vị trí tới quét shop hoặc clinic trên bản đồ và xuất dữ liệu cho bước gọi/nhắn tiếp theo.",
    bullets: [
      "Kiểm tra SĐT có sử dụng Zalo",
      "Tìm theo khu vực và từ khóa địa phương",
      "Maps B2B và xuất dữ liệu sang Excel",
    ],
    image: { src: outreachAssets.nearby, alt: "Giao diện lead theo vị trí ZooZalo tham chiếu" },
    tag: "lead data",
  },
  {
    name: "Content Distribution",
    short: "Một nội dung có thể tiếp tục chạy qua nhóm, timeline và Zalo Video.",
    description: "Thay vì tạo lại nội dung ở từng điểm chạm, workflow gom khâu soạn, lên lịch, tái sử dụng tài nguyên và reup video vào một nơi để giảm thao tác lặp.",
    bullets: [
      "Đăng timeline theo lịch và nhiều tài khoản",
      "Reup TikTok, Facebook, YouTube, Douyin sang Zalo Video",
      "Thư viện nội dung để tái sử dụng text và ảnh sản phẩm",
    ],
    image: { src: outreachAssets.reup, alt: "Giao diện reup Zalo Video ZooZalo tham chiếu" },
    tag: "omnichannel",
  },
];

export const workflow: WorkflowItem[] = [
  { title: "Đồng bộ danh sách, nhãn và nhóm cần xử lý", owner: "Kedi Outreach" },
  { title: "Chuẩn bị mẫu tin, spin nội dung và tài nguyên ảnh", owner: "Kedi Outreach" },
  { title: "Lên lịch gửi, đăng nhóm hoặc timeline theo từng tập đối tượng", owner: "Kedi Outreach" },
  { title: "Tìm thêm lead từ SĐT, UID hoặc khu vực", owner: "Kedi Outreach" },
  { title: "Đưa video và nội dung cũ trở lại các điểm chạm phù hợp", owner: "Kedi Outreach" },
  { title: "Sales đọc ngữ cảnh hội thoại và xử lý ngoại lệ", keepHuman: true },
  { title: "Sales tư vấn, chốt đơn và giữ quan hệ với khách", keepHuman: true },
];

export const mapNodes: MapNode[] = modules.map((module) => ({
  title: module.name,
  description: module.short,
}));

export const capabilityRows: CapabilityRow[] = [
  { label: "Mô hình sử dụng", value: "Extension trên trình duyệt", why: "Tập trung thao tác gần nơi đội sales đang dùng Zalo, không dựng thêm một desktop app nặng chỉ để làm các thao tác lặp." },
  { label: "Nhiều tài khoản", value: "Một trình duyệt · nhiều Zalo", why: "Cho phép gom các tài khoản vận hành về một không gian làm việc thay vì tách cửa sổ và quy trình." },
  { label: "Messaging", value: "Bạn bè · nhóm · SĐT · UID", why: "Một workflow có thể phục vụ chăm sóc danh sách cũ lẫn prospecting ngoài danh bạ." },
  { label: "Group Ops", value: "Đồng bộ · đăng · lấy thành viên · xuất list", why: "Giảm số bước lặp khi marketing phải vận hành nhiều cộng đồng Zalo." },
  { label: "Lead Search", value: "SĐT · vị trí · Maps B2B · Excel", why: "Kéo dữ liệu prospecting về gần bước xử lý của sales thay vì để rời ở công cụ khác." },
  { label: "Content", value: "Timeline · nhóm · reup Zalo Video", why: "Một tài nguyên được tái sử dụng ở nhiều điểm chạm thay vì tạo lại từ đầu." },
  { label: "Điều phối", value: "Lịch gửi · delay · nhãn · lọc", why: "Tách logic chiến dịch khỏi thao tác nhấn gửi thủ công từng lần." },
];

export const gallery: GalleryItem[] = [
  { src: outreachAssets.overview, alt: "Ảnh tổng quan ZooZalo", title: "Tổng quan", description: "Dashboard chức năng tập trung", caption: "Ảnh crawl ZooZalo" },
  { src: outreachAssets.send, alt: "Ảnh gửi tin hàng loạt ZooZalo", title: "Gửi tin", description: "Workflow inbox và remarketing", caption: "Ảnh crawl ZooZalo" },
  { src: outreachAssets.reup, alt: "Ảnh reup video ZooZalo", title: "Reup Video", description: "Tái sử dụng video đa nguồn", caption: "Ảnh crawl ZooZalo" },
  { src: outreachAssets.timeline, alt: "Ảnh đăng timeline ZooZalo", title: "Timeline", description: "Lên lịch nội dung cá nhân", caption: "Ảnh crawl ZooZalo" },
  { src: outreachAssets.groupMembers, alt: "Ảnh lấy thành viên nhóm ZooZalo", title: "Group Data", description: "Lấy và khai thác thành viên nhóm", caption: "Ảnh crawl ZooZalo" },
  { src: outreachAssets.nearby, alt: "Ảnh tìm Zalo theo vị trí ZooZalo", title: "Nearby Leads", description: "Tìm lead theo khu vực", caption: "Ảnh crawl ZooZalo" },
];

export const roadmap: RoadmapStep[] = [
  { title: "Cài lớp Extension", description: "Đặt Kedi Outreach ngay trong luồng trình duyệt để giảm số công cụ phải chuyển qua lại.", meta: "Bước khởi tạo" },
  { title: "Kết nối tài khoản và dữ liệu", description: "Đưa nick Zalo, nhãn, nhóm và danh sách prospecting về cùng không gian vận hành.", meta: "Thiết lập" },
  { title: "Chọn module theo chiến dịch", description: "Bật đúng workflow: inbox, network, group, lead hay content thay vì chạy tất cả cùng lúc.", meta: "Theo nhu cầu" },
  { title: "Theo dõi và để sales xử lý phần người", description: "Máy nhận phần lặp; sales tập trung vào hội thoại, quyết định và chốt đơn.", meta: "Vận hành" },
];

export const comparisons: CompareColumn[] = [
  {
    label: "Làm thủ công",
    title: "Mỗi tác vụ là một vòng thao tác riêng",
    bullets: [
      "Tự lọc danh sách rồi nhắn từng nhóm",
      "Tìm lead xong phải chuyển dữ liệu sang chỗ khác",
      "Đăng nhóm, timeline và video bằng các nhịp riêng",
      "Khó biết chiến dịch nào đã chạy tới đâu",
    ],
    summary: "Phù hợp khi khối lượng thấp và một người còn kiểm soát được toàn bộ danh sách bằng tay.",
  },
  {
    label: "Kedi Outreach",
    title: "Gom workflow về một lớp điều phối",
    bullets: [
      "Danh sách, nhãn và nội dung đi cùng chiến dịch",
      "Prospecting nối trực tiếp với bước tiếp cận",
      "Group, timeline và video cùng một content flow",
      "Con người giữ phần tư vấn và chốt đơn",
    ],
    summary: "Ưu tiên giảm thao tác lặp trước; phần logic kinh doanh và kiểm soát cuối vẫn thuộc về đội sales.",
    accent: true,
  },
];

export const faqs: FaqItem[] = [
  { question: "Có thể gom nhiều tài khoản Zalo vào cùng một workflow không?", answer: "Có. Capability map của trang được tổ chức theo mô hình một trình duyệt vận hành nhiều tài khoản, với quyền và tác vụ tách theo từng nick thay vì buộc sales quản lý mỗi cửa sổ như một hệ riêng." },
  { question: "Kedi Outreach xử lý được những việc gì quanh Zalo Group?", answer: "Nhóm tác vụ Group Ops bao gồm đồng bộ và phân loại nhóm, đăng nội dung, lấy thành viên từ link nhóm, xuất danh sách và tổ chức lại dữ liệu để phục vụ bước tiếp cận tiếp theo." },
  { question: "Nguồn lead có chỉ đến từ danh bạ bạn bè không?", answer: "Không. Flow được thiết kế để tiếp nhận nhiều nguồn prospecting như số điện thoại, UID Facebook, tìm theo vị trí và Maps B2B, sau đó đưa dữ liệu về gần bước nhắn tin hoặc follow-up." },
  { question: "Automation có thay luôn công việc của sales không?", answer: "Không. Automation nhận phần lặp như đồng bộ, chuẩn bị nội dung, lên lịch, gửi và tổ chức dữ liệu. Sales vẫn giữ phần đọc ngữ cảnh, xử lý ngoại lệ, tư vấn, chốt đơn và duy trì quan hệ khách hàng." },
];
