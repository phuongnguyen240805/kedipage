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
      image: 'https://placehold.co/600x600/3B82F6/FFFFFF?text=Website+1',
    },
    {
      id: 2,
      title: 'Hướng dẫn tự học lập trình website từ A-Z cho người mới bắt đầu',
      image: 'https://placehold.co/600x600/6366F1/FFFFFF?text=Website+2',
    },
    {
      id: 3,
      title: 'Xu Hướng Màu Sắc Trong Thiết Kế Website Mới Nhất 2025',
      image: 'https://placehold.co/600x600/EC4899/FFFFFF?text=Website+3',
    },
    {
      id: 4,
      title:
        'UI UX Là Gì? Tại Sao Thiết Kế UI UX Lại Cực Kỳ Quan Trọng Với Website',
      image: 'https://placehold.co/600x600/F97316/FFFFFF?text=Website+4',
    },
    {
      id: 5,
      title: 'Thiết Kế Website Responsive Chuyên Nghiệp, Chuẩn SEO – Trọn Gói',
      image: 'https://placehold.co/600x600/10B981/FFFFFF?text=Website+5',
    },
    {
      id: 6,
      title:
        'Vì sao website quan trọng? Lý do doanh nghiệp nên thiết kế website?',
      image:
        'https://i.pinimg.com/736x/e1/c9/81/e1c98151b4cc2f68c97efca2406967a9.jpg',
    },
    {
      id: 7,
      title: 'Vì sao website quan trọng',
      image:
        'https://i.pinimg.com/736x/e1/c9/81/e1c98151b4cc2f68c97efca2406967a9.jpg',
    },
  ],

  landing2: [
    {
      id: 1,
      title: 'Cách tối ưu tốc độ tải trang cho website doanh nghiệp',
      image: 'https://placehold.co/600x600/06B6D4/FFFFFF?text=Speed',
    },
    {
      id: 2,
      title: 'Top 5 sai lầm khi thiết kế giao diện người dùng (UI)',
      image: 'https://placehold.co/600x600/8B5CF6/FFFFFF?text=UI+Mistakes',
    },
    {
      id: 3,
      title: 'SEO là gì? 7 Bước tối ưu SEO cơ bản bạn nên biết',
      image: 'https://placehold.co/600x600/FB923C/FFFFFF?text=SEO',
    },
    {
      id: 4,
      title: 'Làm sao chọn màu thương hiệu phù hợp cho website của bạn?',
      image: 'https://placehold.co/600x600/06B6D4/FFFFFF?text=Color',
    },
  ],

  landing3: [
    {
      id: 1,
      title: 'Thiết kế trải nghiệm người dùng hiện đại trong năm 2025',
      image: 'https://placehold.co/600x600/0EA5A4/FFFFFF?text=UX+2025',
    },
    {
      id: 2,
      title: 'Những yếu tố quan trọng khi chọn hosting cho website',
      image: 'https://placehold.co/600x600/14B8A6/FFFFFF?text=Hosting',
    },
    {
      id: 3,
      title: 'Tầm quan trọng của bảo mật SSL trong website hiện nay',
      image: 'https://placehold.co/600x600/0EA5A4/FFFFFF?text=SSL',
    },
    {
      id: 4,
      title: 'Cách cải thiện UX khi người dùng truy cập trên di động',
      image: 'https://placehold.co/600x600/7C3AED/FFFFFF?text=Mobile+UX',
    },
  ],
};
