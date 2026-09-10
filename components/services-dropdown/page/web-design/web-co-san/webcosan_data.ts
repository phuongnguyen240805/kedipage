export type LandingMedia = {
  images: string[];
  video?: string;
  poster?: string;
};

export interface WebsiteSample {
  id: number;
  title: string;
  image: string;
  tags: string[];
  demoUrl: string; // Thêm thuộc tính này
  detailUrl: string; // Thêm thuộc tính này
}

export const Landing_webcosan_data_1: LandingMedia = {
  images: ['/assets/img-banner.avif'],
  video:
    'https://www.youtube.com/shorts/vZuzchxHQRY?feature=share',
  poster: '/assets/img-banner.avif',
};

export const WEBSITE_SAMPLES: WebsiteSample[] = [
  {
    id: 1,
    title: 'Mẫu Website Giới Thiệu Công Ty Xây Dựng',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-xaynhadep2-monamedia-net-2025-01-08-14_07_44.png',
    tags: ['XÂY DỰNG', 'DỊCH VỤ'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/cong-ty-xay-dung',
  },
  {
    id: 2,
    title: 'Mẫu Website Bán Cà Phê Hiện Đại Và Sang Trọng',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-cafengon-monamedia-net-2025-01-16-15_49_29.png',
    tags: ['BÁN LẺ TRỰC TUYẾN', 'GIỚI THIỆU SẢN PHẨM', 'BÁN LẺ'],
    demoUrl: 'https://cafengon.monamedia.net',
    detailUrl: '/mau-website/ban-ca-phe-hien-dai-va-sang-trong',
  },
  {
    id: 3,
    title: 'Mẫu Website Bán Văn Phòng Phẩm Tiện Ích',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-office-sup-monamedia-net-2024-05-27-16_50_28.png',
    tags: ['ĐỒ CHƠI - GIẢI TRÍ', 'GIÀY DÉP', 'ĐIỆN MÁY'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/ban-van-phong-pham-tien-ich',
  },
  {
    id: 4,
    title: 'Mẫu Website Dịch Vụ Du Lịch Đơn Giản - Hiện Đại',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-roam-world-monamedia-net-2024-07-01-15_13_54.png',
    tags: ['BOOKING - ĐẶT VÉ', 'DU LỊCH'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/dich-vu-du-lich-don-gian-hien-dai',
  },
  {
    id: 5,
    title: 'Mẫu Website Du Lịch Lữ Hành Bán Tour',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-mona-tour-monamedia-net-2024-05-22-13_13_29-1-768x3570.png',
    tags: ['XÂY DỰNG', 'DỊCH VỤ'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/du-lich-lu-hanh-ban-tour',
  },
  {
    id: 6,
    title: 'Mẫu Website Bán Mỹ Phẩm Độc Đáo Và Hấp Dẫn',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-sacdep24-monamedia-net-2025-01-08-13_40_50-768x4640.png',
    tags: ['BÁN LẺ TRỰC TUYẾN', 'GIỚI THIỆU SẢN PHẨM', 'BÁN LẺ'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/ban-my-pham-doc-dao-va-hap-dan',
  },
  {
    id: 7,
    title: 'Mẫu Website Giới Thiệu Bất Động Sản Hiện Đại',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-primeluxe-monamedia-net-2024-09-05-11_25_06-768x3268.png',
    tags: ['ĐỒ CHƠI - GIẢI TRÍ', 'GIÀY DÉP', 'ĐIỆN MÁY'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/mau-website-gioi-thieu-bat-dong-san-hien-dai',
  },
  {
    id: 8,
    title: 'Mẫu Website Du Lịch - Lữ Hành Độc Đáo Giao Diện Tinh Tế',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-dulichviet-monamedia-net-2025-01-14-09_32_29-768x4295.png',
    tags: ['BOOKING - ĐẶT VÉ', 'DU LỊCH'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl:
      '/mau-website/mau-website-du-lich-lu-hanh-doc-dao-giao-dien-tinh-te',
  },
  {
    id: 9,
    title: 'Mẫu Website Giới Thiệu Bất Động Sản Hiện Đại',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-primeluxe-monamedia-net-2024-09-05-11_25_06-768x3268.png',
    tags: ['ĐỒ CHƠI - GIẢI TRÍ', 'GIÀY DÉP', 'ĐIỆN MÁY'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/mau-website-gioi-thieu-bat-dong-san-hien-dai',
  },
  {
    id: 10,
    title: 'Mẫu Website Du Lịch - Lữ Hành Độc Đáo Giao Diện Tinh Tế',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-dulichviet-monamedia-net-2025-01-14-09_32_29-768x4295.png',
    tags: ['BOOKING - ĐẶT VÉ', 'DU LỊCH'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl:
      '/mau-website/mau-website-du-lich-lu-hanh-doc-dao-giao-dien-tinh-te',
  },
  {
    id: 11,
    title: 'Mẫu Website Du Lịch - Lữ Hành Độc Đáo Giao Diện Tinh Tế',
    image:
      'https://mona.media/wp-content/uploads/2023/03/screencapture-dulichviet-monamedia-net-2025-01-14-09_32_29-768x4295.png',
    tags: ['BOOKING - ĐẶT VÉ', 'DU LỊCH'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl:
      '/mau-website/mau-website-du-lich-lu-hanh-doc-dao-giao-dien-tinh-te',
  },
];
