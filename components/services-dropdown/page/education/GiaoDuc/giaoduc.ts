// Tổng hợp data ảnh dùng cho các LandingPage GD

export type LandingImage = {
  id: number;
  src: string;
  alt: string;
  slug?: string;
};

export const landingPageGD1Images = {
  main: {
    src: 'https://assets.kedi.media/images/bb329824152f1fc98891-1461.webp',
    alt: 'E-learning Devices Mockup',
  },
};

export const landingPageGD2Images: LandingImage[] = [
  {
    id: 1,
    src: 'https://assets.kedi.media/images/d02f13b75ebf3483a402-601.webp',
    alt: 'Giao diện khóa học trang trí',
  },
];

export const landingPageGD3Screenshots: LandingImage[] = [
  {
    id: 1,
    src: 'https://assets.kedi.media/images/d78cbec1ac07fb0944f7-1904.webp',
    alt: 'Bundle package 01',
  },
  {
    id: 2,
    src: 'https://assets.kedi.media/images/ece81b666d3c043b8b31-1904.webp',
    alt: 'Bundle package 02',
  },
  {
    id: 3,
    src: 'https://assets.kedi.media/images/d17717ae540aefbba967-1911.webp',
    alt: 'Bundle package 03',
  },
  {
    id: 4,
    src: 'https://assets.kedi.media/images/db7fc8f2fddf94cbe1ca-1909.webp',
    alt: 'Bundle package 04',
  },
  {
    id: 5,
    src: 'https://assets.kedi.media/images/d78cbec1ac07fb0944f7-1904.webp',
    alt: 'Bundle package 05',
  },
];

export const landingPageGD4Assets = {
  logoKedi:
    'https://assets.kedi.media/images/adecd3fb596c248b8031-343.webp',
  logoKha: 'https://assets.kedi.media/images/84842285ca01a0ab72c1-142.webp',
  trophy: 'https://assets.kedi.media/images/ba22ca3138c575330439-217.webp',
};

export const landingPageGD5Marquee: LandingImage[] = [
  {
    id: 1,
    src: 'https://assets.kedi.media/images/d78cbec1ac07fb0944f7-1904.webp',
    alt: 'Ảnh 1',
    slug: 'bundle-package-01',
  },
  {
    id: 2,
    src: 'https://assets.kedi.media/images/ece81b666d3c043b8b31-1904.webp',
    alt: 'Ảnh 2',
    slug: 'bundle-package-02',
  },
  {
    id: 3,
    src: 'https://assets.kedi.media/images/d17717ae540aefbba967-1911.webp',
    alt: 'Ảnh 3',
    slug: 'bundle-package-03',
  },
  {
    id: 4,
    src: 'https://assets.kedi.media/images/db7fc8f2fddf94cbe1ca-1909.webp',
    alt: 'Ảnh 4',
    slug: 'bundle-package-04',
  },
  {
    id: 5,
    src: 'https://assets.kedi.media/images/d78cbec1ac07fb0944f7-1904.webp',
    alt: 'Ảnh 5',
    slug: 'bundle-package-05',
  },
  // --- 5 Ảnh cho hàng dưới (Lấy lại ảnh cũ nhưng đổi ID và thứ tự) ---
  {
    id: 6,
    src: 'https://assets.kedi.media/images/d17717ae540aefbba967-1911.webp', // Đảo vị trí
    alt: 'Ảnh 6',
    slug: 'bundle-package-06',
  },
  {
    id: 7,
    src: 'https://assets.kedi.media/images/d78cbec1ac07fb0944f7-1904.webp',
    alt: 'Ảnh 7',
    slug: 'bundle-package-07',
  },
  {
    id: 8,
    src: 'https://assets.kedi.media/images/d78cbec1ac07fb0944f7-1904.webp',
    alt: 'Ảnh 8',
    slug: 'bundle-package-08',
  },
  {
    id: 9,
    src: 'https://assets.kedi.media/images/db7fc8f2fddf94cbe1ca-1909.webp',
    alt: 'Ảnh 9',
    slug: 'bundle-package-09',
  },
  {
    id: 10,
    src: 'https://assets.kedi.media/images/d78cbec1ac07fb0944f7-1904.webp',
    alt: 'Ảnh 10',
    slug: 'bundle-package-10',
  },
];

export const landingPageGD5Background =
  'https://assets.kedi.media/images/28f5d5f83891830f04c7-1810.webp';

// =============================================
// LANDINGPAGE 6 - Feature Sections Data
// =============================================

export const landingPageGD6Data = {
  // Section 1: Video demo với tags
  section1: {
    videoSrc: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    title: 'Kho giao diện kéo thả đẹp và luôn được cập nhật xuyên suốt',
    tags: ['Video load nhanh', 'Website load nhanh'],
  },
  // Section 2: Video demo có CTA button
  section2: {
    videoSrc: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    title: 'Kho giao diện kéo thả đẹp và luôn được cập nhật xuyên suốt',
    tags: ['Video load nhanh', 'Website load nhanh'],
  },
  // Section 3: Ảnh tĩnh không có icon play
  section3: {
    imageSrc:
      'https://assets.kedi.media/images/db7fc8f2fddf94cbe1ca-1909.webp',
    title: 'Kho giao diện kéo thả đẹp và luôn được cập nhật xuyên suốt',
  },
};
