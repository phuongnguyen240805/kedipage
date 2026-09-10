const maketingPosts = [
  {
    id: 1,
    title: 'Công cụ Digital Marketing',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      'T15+ Công cụ marketing online miễn phí tốt nhất hiện nay',
      '7 Công cụ check unique content nhanh chóng hiệu quả',
      'Screaming Frog là gì? Hướng dẫn sử dụng Screaming Frog chi tiết nhất',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 24,
    totalMinutes: 120,
  },
  {
    id: 2,
    title: 'Content Marketing',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      '7 Công cụ check unique content nhanh chóng hiệu quả',
      '9 Loại content thường gặp nhất. Cách đầu tư Content Marketing hiệu quả',
      '9 quy luật “bất thành văn” trong Social Media Marketing',
    ],
    tag: 'Đọc tất cả',
    totalPosts: 89,
    totalMinutes: 144,
  },
  {
    id: 3,
    title: 'Email Marketing',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      'Cách thu hồi Email đã gửi trong Gmail hiệu quả 100%',
      'CC là gì? Cách sử dụng CC trong gmail hiệu quả',
      'Chữ ký email là gì? Cách tạo chữ kỷ email chuyên nghiệp',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 11,
    totalMinutes: 155,
  },
  {
    id: 4,
    title: 'Facebook Ads',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      'Nên quảng cáo sản phẩm nào trên Facebook đạt hiệu quả cao?',
      '32+ Cách tăng tương tác Facebook hiệu quả không thể bỏ qua',
      'Audience Network là gì? Lợi ích của Facebook Audience Network',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 52,
    totalMinutes: 260,
  },
  {
    id: 5,
    title: 'Google Ads',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      'Tổng hợp các kênh Google Ads hiệu quả nhất hiện nay',
      'Tổng hợp các công cụ Google Ads miễn phí tốt nhất hiện nay',
      'Tổng hợp các công cụ Google Ads miễn phí tốt nhất hiện nay',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 24,
    totalMinutes: 120,
  },
  {
    id: 6,
    title: 'Marketing cơ bản',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      '4C Marketing là gì? Sự kết hợp đặc biệt giữa hai mô hình 4C và 4P',
      '7P trong Marketing là gì? Ứng dụng 7P Marketing Mix vào thực tế',
      'Above The Line là gì? So sánh ATL, BTL và TTL trong Marketing',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 125,
    totalMinutes: 625,
  },
  {
    id: 7,
    title: 'Nhận diện thương hiệu',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      'Đại sứ thương hiệu là gì? Vai trò gì đối với doanh nghiệp như thế nào?',
      'Brand Awareness là gì? Bí quyết xây dựng nhận thức thương hiệu',
      'Brand Equity là gì? Cách xây dựng tài sản thương hiệu cho doanh nghiệp',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 60,
    totalMinutes: 300,
  },
  {
    id: 8,
    title: 'Phân tích chỉ số marketing',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      '5W1H là gì? Ứng dụng 5W1H trong chiến lược Marketing',
      'Bounce Rate là gì? Bounce Rate bao nhiêu thì tốt cho website?',
      'Các chỉ số đánh giá hiệu quả Marketing mọi doanh nghiệp cần biết',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 14,
    totalMinutes: 70,
  },
  {
    id: 9,
    title: 'Social Media',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      '20 lời khuyên về Social Media Marketing từ các chuyên gia hàng đầu',
      '12 Chính sách quảng cáo Facebook mới nhất Update 2025',
      '9 quy luật “bất thành văn” trong Social Media Marketing',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 45,
    totalMinutes: 225,
  },
  {
    id: 10,
    title: 'Tìm Kiếm Khách Hàng',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      '5 Bước lập kế hoạch truyền thông, sự kiện hiệu quả cho doanh nghiệp',
      '5 Bước xác định chân dung khách hàng (Customer Persona)',
      '5 ứng dụng Social Proof vào kinh doanh nhà hàng, quán cà phê',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 24,
    totalMinutes: 120,
  },
  {
    id: 11,
    title: 'Tỉ lệ chuyển đổi website',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      'Conversion Rate Là Gì? Cách Tăng Tỷ Lệ Chuyển Đổi Khách Hàng Cho Website',
      'CX là gì? Bí quyết tối ưu trải nghiệm khách hàng hiệu quả',
      'Live chat là gì? Nên sử dụng Live chat của bên thứ 3 hay tự code?',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 15,
    totalMinutes: 75,
  },
  {
    id: 12,
    title: 'Tik Tok Ads',
    image:
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765268033/agency-la-gi_b924gf.png',
    articles: [
      '13+ Cách Kiếm Tiền Trên Tiktok Nhanh Chóng Và Hiệu Quả, Mới Nhất 2025',
      'Cách Nạp Xu Tiktok Nhanh Chóng, Đơn Giản, Chi Tiết Từng Bước',
      'Tích Xanh Tiktok là gì? Cách Để Sở Hữu Tích Xanh Tiktok Chi Tiết A – Z',
    ],
    tag: 'DIGITAL MARKETING',
    totalPosts: 11,
    totalMinutes: 55,
  },
];
export default maketingPosts;
