// seoEducationData.ts
import {
  problems,
  benefits,
} from '@/components/services-dropdown/datas/CurvedWhiteSectionData';

export const seoEducationData = {
  curvedSection: {
    title: 'SEO cho ngành giáo dục',
    subtitle: 'Đầu tư SEO để tiếp cận học viên hiệu quả',
    description:
      'SEO giúp các trung tâm giáo dục tiếp cận đúng đối tượng học viên, tăng tỷ lệ chuyển đổi.',
    problems,
    benefits,
    tableImageSrc:
      'https://assets.kedi.media/images/ece81b666d3c043b8b31-1904.webp',
    tableImageAlt: 'Hình ảnh minh họa traffic SEO',
    imageSrc:
      'https://assets.kedi.media/images/2faaed0b30b8a5fe50df-695.webp',
    imageAlt: 'Hình ảnh minh họa SEO cho giáo dục',
    bgColor: '#F2E7FA',
    className: 'm-0',
  },
  landing1: {
    title: 'Chọn đúng đơn vị SEO đồng hành',
    subtitle:
      'KEDI có độ hiểu biết ngành và khách hàng để xây dựng một chiến lược SEO hiệu quả',
    description: 'Doanh nghiệp nhận được nhiều hơn cả ON TOP',
    features: [
      'Website chuẩn SEO',
      'Chuẩn Responsive',
      'Content chất lượng',
      'Backlinks đa dạng',
    ],
    images: [
      {
        src: 'https://assets.kedi.media/images/ece81b666d3c043b8b31-1904.webp',
        alt: 'Hình ảnh minh họa top keyword SEO 1',
      },
    ],
    className: 'pb-0 mb-0',
    highlightText: 'ON TOP',
  },
  landing2: {
    title: 'Từ khóa lên top không phải ngẫu nhiên',
    subtitle: 'Dù sử dụng bất kỳ công cụ tìm kiếm nào',
    description: 'KEDI cũng nằm sẵn ở đó chờ anh chị ',
    features: [],
    images: [
      {
        src: 'https://assets.kedi.media/images/ece81b666d3c043b8b31-1904.webp',
        alt: 'Hình ảnh minh họa top keyword SEO 1',
      },
      {
        src: 'https://assets.kedi.media/images/ece81b666d3c043b8b31-1904.webp',
        alt: 'Hình ảnh minh họa top keyword SEO 1',
      },
      {
        src: 'https://assets.kedi.media/images/ece81b666d3c043b8b31-1904.webp',
        alt: 'Hình ảnh minh họa top keyword SEO 1',
      },
      {
        src: 'https://assets.kedi.media/images/ece81b666d3c043b8b31-1904.webp',
        alt: 'Hình ảnh minh họa top keyword SEO 1',
      },
    ],
    className: 'pb-0 mb-0',
    highlightText: 'KEDI cũng nằm sẵn ở đó chờ anh chị',
  },
  landing3: {
    title: 'Từ khóa lên top không phải ngẫu nhiên',
    subtitle: 'AI lên ngôi - GOOGLE thay đổi',
    description: 'thì KEDI vẫn LÊN TOP vững vàng',
    features: [],
    images: [
      {
        src: 'https://assets.kedi.media/images/2faaed0b30b8a5fe50df-695.webp',
        alt: 'Hình ảnh minh họa top keyword SEO 1',
      },
      {
        src: 'https://assets.kedi.media/images/2faaed0b30b8a5fe50df-695.webp',
        alt: 'Hình ảnh minh họa top keyword SEO 2',
      },
    ],
    className: 'pb-0 mb-0',
    highlightText: 'LÊN TOP',
    specialBanner: {
      show: true,
      text: 'đặc biệt',
    },
  },
};
