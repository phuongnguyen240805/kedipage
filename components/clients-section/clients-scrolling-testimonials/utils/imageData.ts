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
      src: 'https://mona.media/wp-content/uploads/2023/03/screencapture-sacdep24-monamedia-net-2025-01-08-13_40_50-768x4640.png',
      alt: 'Testimonial A',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-B',
      src: 'https://mona.media/wp-content/uploads/2023/03/screencapture-sacdep24-monamedia-net-2025-01-08-13_40_50-768x4640.png',
      alt: 'Testimonial B',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-C',
      src: 'https://mona.media/wp-content/uploads/2023/03/screencapture-sacdep24-monamedia-net-2025-01-08-13_40_50-768x4640.png',
      alt: 'Testimonial C',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-D',
      src: 'https://mona.media/wp-content/uploads/2023/03/screencapture-primeluxe-monamedia-net-2024-09-05-11_25_06-768x3268.png',
      alt: 'Testimonial D',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-E',
      src: 'https://mona.media/wp-content/uploads/2023/03/screencapture-sacdep24-monamedia-net-2025-01-08-13_40_50-768x4640.png',
      alt: 'Testimonial E',
      width: 250, // ĐỒNG NHẤT
      height: 180, // ĐỒNG NHẤT
    },
    {
      id: 'vertical-F',
      src: 'https://mona.media/wp-content/uploads/2023/03/screencapture-mona-tour-monamedia-net-2024-05-22-13_13_29-1-400x1859.png',
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
