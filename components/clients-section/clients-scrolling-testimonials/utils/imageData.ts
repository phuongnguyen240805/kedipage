export interface ImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TestimonialImages {
  verticalColumns: ImageItem[]; // Chung cho 5 cột dọc
  footerImages: {
    leftImage: ImageItem;
    rightImage: ImageItem;
  };
}

export const testimonialImages: TestimonialImages = {
  // Hình cho 5 cột cuộn dọc - ĐỒNG NHẤT SIZE
  verticalColumns: [
    {
      id: 'vertical-A',
      src: 'https://assets.kedi.media/images/e147e3778707ca7a8e2d-768.webp',
      alt: 'Testimonial A',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-B',
      src: 'https://assets.kedi.media/images/e147e3778707ca7a8e2d-768.webp',
      alt: 'Testimonial B',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-C',
      src: 'https://assets.kedi.media/images/e147e3778707ca7a8e2d-768.webp',
      alt: 'Testimonial C',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-D',
      src: 'https://assets.kedi.media/images/3e6d9be8979a75986514-768.webp',
      alt: 'Testimonial D',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-E',
      src: 'https://assets.kedi.media/images/e147e3778707ca7a8e2d-768.webp',
      alt: 'Testimonial E',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-F',
      src: 'https://assets.kedi.media/images/98e9853eab18beaba7f6-400.webp',
      alt: 'Testimonial F',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
  ],

  footerImages: {
    leftImage: {
      id: 'footer-left',
      src: '/assets/confident-footer.png',
      alt: 'Panda Rocket',
      width: 1890,
      height: 500,
    },
    rightImage: {
      id: 'footer-right',
      src: '/assets/Picture.png',
      alt: 'Người Kedi',
      width: 300,
      height: 300,
    },
  },
};

export const getVerticalImages = (): ImageItem[] => {
  return testimonialImages.verticalColumns;
};
