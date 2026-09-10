import {
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import {
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiTypescript,
  SiZod,
} from 'react-icons/si';

export const aboutParagraph =
  'Tôi là một nhà thiết kế đa ngành và là một nhà phát triển JavaScript. Tôi đam mê việc tạo ra những ý tưởng, hình ảnh và kiểu chữ, biến chúng thành những trải nghiệm kỹ thuật số khó quên. Với một niềm tin chân thành vào sức mạnh biến đổi của thiết kế, tôi liên tục khám phá thế giới sáng tạo rộng lớn, từ kiến ​​trúc, nghệ thuật, thiết kế đồ họa, minh họa, thiết kế chuyển động và thiết kế trải nghiệm người dùng (UX).Niềm đam mê của tôi dành cho sự sáng tạo vô hạn dẫn dắt việc khám phá những khả năng vô tận mà sự phát triển sáng tạo mang lại. Tôi tận hưởng việc kết hợp các khía cạnh thẩm mỹ và chức năng để tạo ra các giải pháp kỹ thuật số không chỉ đẹp mắt mà còn mang lại trải nghiệm người dùng liền mạch và hấp dẫn.';

export type Project = {
  title: string;
  href?: string;
  badge: string;
  blurb: string;
  gradient: string;
};

export type Service = {
  title: string;
  detail: string;
  tone: string;
};

export type Step = {
  title: string;
  subtitle: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const heroPhrases = [
  'Là một nhà phát triển web sáng tạo, tôi kết hợp chuyên môn kỹ thuật với thiết kế sáng tạo để tạo ra những trải nghiệm kỹ thuật số hấp dẫn.',
  'Tôi tập trung vào thiết kế đáp ứng, chuyển động tinh tế và hiệu suất để mọi tương tác đều có chủ đích và nhanh chóng.',
];

export const HERO_TITLE = 'Thiết kế web xứng đáng nhất';

export const services: Service[] = [
  {
    title: 'Bản dựng đáp ứng',
    detail:
      'Bố cục linh hoạt thích ứng đẹp mắt từ máy tính để bàn đến thiết bị di động, giữ nhịp điệu, khoảng cách và hệ thống phân cấp nhất quán.',
    tone: 'from-[#dce7ff] via-[#f5f7ff] to-[#e2e8f0]',
  },
  {
    title: 'Thiết kế tương tác',
    detail:
      'Các tương tác vi mô và chuyển động kể chuyện được tạo bằng framer-motion và GSAP để hướng sự chú ý.',
    tone: 'from-[#e6fffa] via-[#f0fff4] to-[#e2f7e8]',
  },
  {
    title: 'Hiệu suất là trên hết',
    detail:
      'Chiến lược hình ảnh, phân chia mã và các cải tiến Core Web Vitals có thể đo lường được tích hợp trong mỗi lần phân phối.',
    tone: 'from-[#fff7ed] via-[#fff3e0] to-[#fef2f2]',
  },
  {
    title: 'Hiệu suất là trên hết',
    detail:
      'Chiến lược hình ảnh, phân chia mã và các cải tiến Core Web Vitals có thể đo lường được tích hợp trong mỗi lần phân phối.',
    tone: 'from-[#fff7ed] via-[#fff3e0] to-[#fef2f2]',
  },
  {
    title: 'Hiệu suất là trên hết',
    detail:
      'Chiến lược hình ảnh, phân chia mã và các cải tiến Core Web Vitals có thể đo lường được tích hợp trong mỗi lần phân phối.',
    tone: 'from-[#fff7ed] via-[#fff3e0] to-[#fef2f2]',
  },
   {
    title: 'Hiệu suất là trên hết',
    detail:
      'Chiến lược hình ảnh, phân chia mã và các cải tiến Core Web Vitals có thể đo lường được tích hợp trong mỗi lần phân phối.',
    tone: 'from-[#fff7ed] via-[#fff3e0] to-[#fef2f2]',
  },
   {
    title: 'Hiệu suất là trên hết',
    detail:
      'Chiến lược hình ảnh, phân chia mã và các cải tiến Core Web Vitals có thể đo lường được tích hợp trong mỗi lần phân phối.',
    tone: 'from-[#fff7ed] via-[#fff3e0] to-[#fef2f2]',
  },
];

export const processSteps: Step[] = [
  {
    title: 'Khám phá',
    subtitle: 'Phương hướng',
    description:
      'Chúng tôi đặt mục tiêu, đối tượng và số liệu thành công, sau đó ánh xạ cấu trúc nội dung để hỗ trợ câu chuyện.',
  },
  {
    title: 'Thiết kế',
    subtitle: 'Hệ thống',
    description:
      'Bố cục, lưới và các quy tắc thành phần tạo thành một hệ thống giữ cho các trang mạch lạc khi chúng mở rộng quy mô.',
  },
  {
    title: 'Phát triển',
    subtitle: 'Tương tác',
    description:
      'Mã ngữ nghĩa, có thể truy cập với chuyển động có mục đích giúp hình ảnh trở nên sống động trên mọi thiết bị.',
  },
  {
    title: 'Cung cấp',
    subtitle: 'Tối ưu hóa',
    description:
      'Chúng tôi vận chuyển, đo lường và điều chỉnh hiệu suất để trải nghiệm luôn nhanh chóng và thú vị theo thời gian.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Zain đã biến trang web lỗi thời của chúng tôi thành một trải nghiệm hiện đại, đáp ứng và thực sự chuyển đổi.',
    name: 'John D.',
    role: 'Trưởng nhóm tiếp thị',
  },
  {
    quote:
      'Mã sạch, chuyển động tinh tế và chiến thắng SEO. Việc bàn giao diễn ra suôn sẻ và được ghi chép đầy đủ.',
    name: 'Emily S.',
    role: 'Giám đốc sản phẩm',
  },
  {
    quote:
      'Anh ấy kết hợp sự nhạy bén trong thiết kế với kỷ luật kỹ thuật—hiếm và có giá trị.',
    name: 'Michael T.',
    role: 'Người sáng lập',
  },
];

export const skills = [
  { label: 'HTML', Icon: FaHtml5 },
  { label: 'CSS', Icon: FaCss3Alt },
  { label: 'Tailwind', Icon: FaCss3Alt },
  { label: 'TypeScript', Icon: SiTypescript },
  { label: 'Next.js', Icon: SiNextdotjs },
  { label: 'React', Icon: FaReact },
  { label: 'Node.js', Icon: FaNodeJs },
  { label: 'Prisma', Icon: SiPrisma },
  { label: 'PostgreSQL', Icon: BiLogoPostgresql },
  { label: 'Redux', Icon: SiRedux },
  { label: 'Zod', Icon: SiZod },
  { label: 'Figma', Icon: FaFigma },
  { label: 'Docker', Icon: FaDocker },
  { label: 'Python', Icon: FaPython },
];
