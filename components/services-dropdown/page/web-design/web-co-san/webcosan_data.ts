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
      'https://assets.kedi.media/images/11ce969f33cb4528d2c8-1920.webp',
    tags: ['XÂY DỰNG', 'DỊCH VỤ'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/cong-ty-xay-dung',
  },
  {
    id: 2,
    title: 'Mẫu Website Bán Cà Phê Hiện Đại Và Sang Trọng',
    image:
      'https://assets.kedi.media/images/4f9c0a3cc6f99c6d7538-1920.webp',
    tags: ['BÁN LẺ TRỰC TUYẾN', 'GIỚI THIỆU SẢN PHẨM', 'BÁN LẺ'],
    demoUrl: 'https://cafengon.monamedia.net',
    detailUrl: '/mau-website/ban-ca-phe-hien-dai-va-sang-trong',
  },
  {
    id: 3,
    title: 'Mẫu Website Bán Văn Phòng Phẩm Tiện Ích',
    image:
      'https://assets.kedi.media/images/9c05f2a382ecdb8c983c-1920.webp',
    tags: ['ĐỒ CHƠI - GIẢI TRÍ', 'GIÀY DÉP', 'ĐIỆN MÁY'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/ban-van-phong-pham-tien-ich',
  },
  {
    id: 4,
    title: 'Mẫu Website Dịch Vụ Du Lịch Đơn Giản - Hiện Đại',
    image:
      'https://assets.kedi.media/images/e15208d39a6aecb639e3-1920.webp',
    tags: ['BOOKING - ĐẶT VÉ', 'DU LỊCH'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/dich-vu-du-lich-don-gian-hien-dai',
  },
  {
    id: 5,
    title: 'Mẫu Website Du Lịch Lữ Hành Bán Tour',
    image:
      'https://assets.kedi.media/images/cc891393b021acabc121-768.webp',
    tags: ['XÂY DỰNG', 'DỊCH VỤ'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/du-lich-lu-hanh-ban-tour',
  },
  {
    id: 6,
    title: 'Mẫu Website Bán Mỹ Phẩm Độc Đáo Và Hấp Dẫn',
    image:
      'https://assets.kedi.media/images/e147e3778707ca7a8e2d-768.webp',
    tags: ['BÁN LẺ TRỰC TUYẾN', 'GIỚI THIỆU SẢN PHẨM', 'BÁN LẺ'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/ban-my-pham-doc-dao-va-hap-dan',
  },
  {
    id: 7,
    title: 'Mẫu Website Giới Thiệu Bất Động Sản Hiện Đại',
    image:
      'https://assets.kedi.media/images/3e6d9be8979a75986514-768.webp',
    tags: ['ĐỒ CHƠI - GIẢI TRÍ', 'GIÀY DÉP', 'ĐIỆN MÁY'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/mau-website-gioi-thieu-bat-dong-san-hien-dai',
  },
  {
    id: 8,
    title: 'Mẫu Website Du Lịch - Lữ Hành Độc Đáo Giao Diện Tinh Tế',
    image:
      'https://assets.kedi.media/images/4a058c45da6f8cfdc524-768.webp',
    tags: ['BOOKING - ĐẶT VÉ', 'DU LỊCH'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl:
      '/mau-website/mau-website-du-lich-lu-hanh-doc-dao-giao-dien-tinh-te',
  },
  {
    id: 9,
    title: 'Mẫu Website Giới Thiệu Bất Động Sản Hiện Đại',
    image:
      'https://assets.kedi.media/images/3e6d9be8979a75986514-768.webp',
    tags: ['ĐỒ CHƠI - GIẢI TRÍ', 'GIÀY DÉP', 'ĐIỆN MÁY'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl: '/mau-website/mau-website-gioi-thieu-bat-dong-san-hien-dai',
  },
  {
    id: 10,
    title: 'Mẫu Website Du Lịch - Lữ Hành Độc Đáo Giao Diện Tinh Tế',
    image:
      'https://assets.kedi.media/images/4a058c45da6f8cfdc524-768.webp',
    tags: ['BOOKING - ĐẶT VÉ', 'DU LỊCH'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl:
      '/mau-website/mau-website-du-lich-lu-hanh-doc-dao-giao-dien-tinh-te',
  },
  {
    id: 11,
    title: 'Mẫu Website Du Lịch - Lữ Hành Độc Đáo Giao Diện Tinh Tế',
    image:
      'https://assets.kedi.media/images/4a058c45da6f8cfdc524-768.webp',
    tags: ['BOOKING - ĐẶT VÉ', 'DU LỊCH'],
    demoUrl: 'https://demo.monamedia.net/xaydung1',
    detailUrl:
      '/mau-website/mau-website-du-lich-lu-hanh-doc-dao-giao-dien-tinh-te',
  },
];
