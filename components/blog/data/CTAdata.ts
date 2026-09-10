// data.ts
export interface MenuItem {
  title: string;
  href: string;
}

export interface Category {
  title: string;
  items: MenuItem[];
}

export const categoryData: Category[] = [
  {
    title: 'Digital Marketing',
    items: [
      {
        title: 'Công cụ Digital Marketing',
        href: '/digital-marketing/cong-cu',
      },
      { title: 'Email Marketing', href: '/digital-marketing/email-marketing' },
      { title: 'Google Ads', href: '/digital-marketing/google-ads' },
      {
        title: 'Nhận diện thương hiệu',
        href: '/digital-marketing/nhan-dien-thuong-hieu',
      },
      { title: 'Social Media', href: '/digital-marketing/social-media' },
      { title: 'TikTok Ads', href: '/digital-marketing/tiktok-ads' },
      {
        title: 'Content Marketing',
        href: '/digital-marketing/content-marketing',
      },
      { title: 'Facebook Ads', href: '/digital-marketing/facebook-ads' },
      {
        title: 'Marketing cơ bản',
        href: '/digital-marketing/marketing-co-ban',
      },
      {
        title: 'Phân tích chỉ số marketing',
        href: '/digital-marketing/phan-tich-chi-so',
      },
      {
        title: 'Tỉ lệ chuyển đổi website',
        href: '/digital-marketing/ti-le-chuyen-doi',
      },
      {
        title: 'Tìm Kiếm Khách Hàng',
        href: '/digital-marketing/tim-kiem-khach-hang',
      },
    ],
  },
  {
    title: 'Hosting',
    items: [
      { title: 'Bảo Mật Hosting', href: '/hosting/bao-mat' },
      { title: 'Các công nghệ Hosting', href: '/hosting/cong-nghe' },
      { title: 'Kiến thức Hosting', href: '/hosting/kien-thuc' },
      { title: 'Kỹ Thuật Tối Ưu Hosting', href: '/hosting/ky-thuat-toi-uu' },
    ],
  },
  {
    title: 'Kiến Trúc Website',
    items: [
      { title: 'Bảo Mật Web', href: '/website/bao-mat' },
      { title: 'Chăm sóc & duy trì website', href: '/website/cham-soc' },
      { title: 'Khởi tạo website', href: '/website/khoi-tao' },
      {
        title: 'Làm gì sau khi có website?',
        href: '/website/lam-gi-sau-khi-co',
      },
      {
        title: 'Nâng cấp website kinh doanh online',
        href: '/website/nang-cap',
      },
      {
        title: 'Tăng tỷ lệ chuyển đổi cho website',
        href: '/website/tang-ty-le-chuyen-doi',
      },
      {
        title: 'Các câu hỏi thường gặp về website',
        href: '/website/cau-hoi-thuong-gap',
      },
      {
        title: 'Điều cần làm khi số hữu website',
        href: '/website/dieu-can-lam',
      },
      { title: 'Kiểm tra website', href: '/website/kiem-tra' },
      {
        title: 'Lưu ý quan trọng về website',
        href: '/website/luu-y-quan-trong',
      },
      {
        title: 'Phát triển website toàn diện',
        href: '/website/phat-trien-toan-dien',
      },
      {
        title: 'Xây Dựng Nội Dung Cho Website',
        href: '/website/xay-dung-noi-dung',
      },
    ],
  },
  {
    title: 'Kinh Doanh Online',
    items: [
      {
        title: 'Các Chỉ Số Cần Biết Khi Kinh Doanh Online',
        href: '/kinh-doanh/chi-so-can-biet',
      },
      {
        title: 'Phần mềm & Công cụ hỗ trợ Kinh Doanh Online',
        href: '/kinh-doanh/phan-mem-cong-cu',
      },
      {
        title: 'Tăng doanh số bán hàng với chiến lược Marketing',
        href: '/kinh-doanh/tang-doanh-so',
      },
      { title: 'Tips kinh doanh online', href: '/kinh-doanh/tips' },
      {
        title: 'Kiến Thức Kinh Doanh Online Từ Con Số 0',
        href: '/kinh-doanh/tu-con-so-0',
      },
      { title: 'Quản Lý Kinh Doanh Online', href: '/kinh-doanh/quan-ly' },
      {
        title: 'Tạo lập nền tảng kinh doanh online',
        href: '/kinh-doanh/tao-lap-nen-tang',
      },
      { title: 'Ý Tưởng Kinh Doanh', href: '/kinh-doanh/y-tuong' },
    ],
  },
  {
    title: 'Phần mềm - Web app - Ứng dụng điện thoại',
    items: [
      {
        title: 'Kinh nghiệm thiết kế và lập trình phần mềm',
        href: '/phan-mem/kinh-nghiem-thiet-ke',
      },
      {
        title: 'Phần mềm hỗ trợ kinh doanh',
        href: '/phan-mem/ho-tro-kinh-doanh',
      },
    ],
  },
  {
    title: 'SEO',
    items: [
      { title: 'Công cụ SEO', href: '/seo/cong-cu' },
      { title: 'Kiến thức SEO', href: '/seo/kien-thuc' },
      { title: 'SEO cơ bản', href: '/seo/co-ban' },
      { title: 'SEO Onpage', href: '/seo/onpage' },
      { title: 'Thuật Toán SEO', href: '/seo/thuat-toan' },
      { title: 'Hướng dẫn cách làm SEO', href: '/seo/huong-dan' },
      { title: 'Nghiên cứu từ khóa', href: '/seo/nghien-cuu-tu-khoa' },
      { title: 'SEO OffPage', href: '/seo/offpage' },
      { title: 'SEO Technical', href: '/seo/technical' },
    ],
  },
  {
    title: 'Tên Miền',
    items: [
      {
        title: 'Hướng Dẫn Cách Thao Tác Với Tên Miền',
        href: '/ten-mien/huong-dan-thao-tac',
      },
    ],
  },
  {
    title: 'Video Marketing',
    items: [
      {
        title: 'Phim doanh nghiệp',
        href: '/video-marketing/phim-doanh-nghiep',
      },
    ],
  },
];
