// Tổng hợp data ảnh dùng cho các LandingPage GD

export type LandingImage = {
  id: number;
  src: string;
  alt: string;
  slug?: string;
};

export const landingPageGD1Images = {
  main: {
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765196269/laptop-pc_qqw5ea.png',
    alt: 'E-learning Devices Mockup',
  },
};

export const landingPageGD2Images: LandingImage[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765189615/ab-eight-4-high-1920w_zj5kqk.avif',
    alt: 'Giao diện khóa học trang trí',
  },
];

export const landingPageGD3Screenshots: LandingImage[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198321/bundle-package-01_ilg6jr.jpg',
    alt: 'Bundle package 01',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198321/bundle-package-02_kvawvc.jpg',
    alt: 'Bundle package 02',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198322/bundle-package-03_ktfo5a.jpg',
    alt: 'Bundle package 03',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198324/bundle-package-04_in4vvf.jpg',
    alt: 'Bundle package 04',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198321/bundle-package-01_ilg6jr.jpg',
    alt: 'Bundle package 05',
  },
];

export const landingPageGD4Assets = {
  logoKedi:
    'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198765/logo-mona_dxpuvu.png',
  logoKha: 'https://mona.media/template/assets/images/about/logo-kha.png',
  trophy: 'https://mona.media/template/assets/images/about/ic-cup-home.png',
};

export const landingPageGD5Marquee: LandingImage[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198321/bundle-package-01_ilg6jr.jpg',
    alt: 'Ảnh 1',
    slug: 'bundle-package-01',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198321/bundle-package-02_kvawvc.jpg',
    alt: 'Ảnh 2',
    slug: 'bundle-package-02',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198322/bundle-package-03_ktfo5a.jpg',
    alt: 'Ảnh 3',
    slug: 'bundle-package-03',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198324/bundle-package-04_in4vvf.jpg',
    alt: 'Ảnh 4',
    slug: 'bundle-package-04',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198321/bundle-package-01_ilg6jr.jpg',
    alt: 'Ảnh 5',
    slug: 'bundle-package-05',
  },
  // --- 5 Ảnh cho hàng dưới (Lấy lại ảnh cũ nhưng đổi ID và thứ tự) ---
  {
    id: 6,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198322/bundle-package-03_ktfo5a.jpg', // Đảo vị trí
    alt: 'Ảnh 6',
    slug: 'bundle-package-06',
  },
  {
    id: 7,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198321/bundle-package-01_ilg6jr.jpg',
    alt: 'Ảnh 7',
    slug: 'bundle-package-07',
  },
  {
    id: 8,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198321/bundle-package-01_ilg6jr.jpg',
    alt: 'Ảnh 8',
    slug: 'bundle-package-08',
  },
  {
    id: 9,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198324/bundle-package-04_in4vvf.jpg',
    alt: 'Ảnh 9',
    slug: 'bundle-package-09',
  },
  {
    id: 10,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198321/bundle-package-01_ilg6jr.jpg',
    alt: 'Ảnh 10',
    slug: 'bundle-package-10',
  },
];

export const landingPageGD5Background =
  'https://mona.media/template/assets/images/tkw-ban-khoa-hoc/grid.png';

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
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198324/bundle-package-04_in4vvf.jpg',
    title: 'Kho giao diện kéo thả đẹp và luôn được cập nhật xuyên suốt',
  },
};
