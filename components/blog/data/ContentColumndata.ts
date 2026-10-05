// src/data/landingData.ts

export interface Blogpost {
  id: number;
  title: string;
  image?: string;
}

export interface LandingData {
  [key: string]: Blogpost[];
}

export const landingData: LandingData = {
  landing1: [
    {
      id: 1,
      title:
        'Vì sao website quan trọng? Lý do doanh nghiệp nên thiết kế website?',
      image: 'https://assets.kedi.media/images/71326f76d1a62f37f95e.svg',
    },
    {
      id: 2,
      title: 'Hướng dẫn tự học lập trình website từ A-Z cho người mới bắt đầu',
      image: 'https://assets.kedi.media/images/fc4381c745209050266f.svg',
    },
    {
      id: 3,
      title: 'Xu Hướng Màu Sắc Trong Thiết Kế Website Mới Nhất 2025',
      image: 'https://assets.kedi.media/images/d500be6ae90cfb9a1913.svg',
    },
    {
      id: 4,
      title:
        'UI UX Là Gì? Tại Sao Thiết Kế UI UX Lại Cực Kỳ Quan Trọng Với Website',
      image: 'https://assets.kedi.media/images/1dfe20e31ccba598e2f7.svg',
    },
    {
      id: 5,
      title: 'Thiết Kế Website Responsive Chuyên Nghiệp, Chuẩn SEO – Trọn Gói',
      image: 'https://assets.kedi.media/images/49ebcb661200527261e9.svg',
    },
    {
      id: 6,
      title:
        'Vì sao website quan trọng? Lý do doanh nghiệp nên thiết kế website?',
      image:
        'https://assets.kedi.media/images/d6a10d7bcc43d97bcec8-736.webp',
    },
    {
      id: 7,
      title: 'Vì sao website quan trọng',
      image:
        'https://assets.kedi.media/images/d6a10d7bcc43d97bcec8-736.webp',
    },
  ],

  landing2: [
    {
      id: 1,
      title: 'Cách tối ưu tốc độ tải trang cho website doanh nghiệp',
      image: 'https://assets.kedi.media/images/9be79e811e347528a9f2.svg',
    },
    {
      id: 2,
      title: 'Top 5 sai lầm khi thiết kế giao diện người dùng (UI)',
      image: 'https://assets.kedi.media/images/d4f52ffa09fe592c2b3d.svg',
    },
    {
      id: 3,
      title: 'SEO là gì? 7 Bước tối ưu SEO cơ bản bạn nên biết',
      image: 'https://assets.kedi.media/images/bc645fcd68140d8ce1c5.svg',
    },
    {
      id: 4,
      title: 'Làm sao chọn màu thương hiệu phù hợp cho website của bạn?',
      image: 'https://assets.kedi.media/images/d7f202f57928180bc0c2.svg',
    },
  ],

  landing3: [
    {
      id: 1,
      title: 'Thiết kế trải nghiệm người dùng hiện đại trong năm 2025',
      image: 'https://assets.kedi.media/images/4a1b65688d83c16367f5.svg',
    },
    {
      id: 2,
      title: 'Những yếu tố quan trọng khi chọn hosting cho website',
      image: 'https://assets.kedi.media/images/dc7356bbe554a254e8be.svg',
    },
    {
      id: 3,
      title: 'Tầm quan trọng của bảo mật SSL trong website hiện nay',
      image: 'https://assets.kedi.media/images/1d9e3eb1f13e21fde67e.svg',
    },
    {
      id: 4,
      title: 'Cách cải thiện UX khi người dùng truy cập trên di động',
      image: 'https://assets.kedi.media/images/2d7cb6efad882c6f9fa9.svg',
    },
  ],
};
