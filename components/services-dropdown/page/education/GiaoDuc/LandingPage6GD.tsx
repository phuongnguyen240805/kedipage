import FadeIn from '@/components/ui/Fadeoad';
import FeatureSection from './FeatureSection';
import { landingPageGD6Data } from './giaoduc';

// Helper để bôi đậm tím
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-purple-700 underline decoration-purple-700 decoration-1 underline-offset-4">
    {children}
  </span>
);

export default function LandingPage6GD() {
  return (
    <main className="min-h-screen bg-white">
     
      {/* HEADER: Tiêu đề chính */}
      <section className="w-full py-16 px-4 bg-white text-center">  
        <FadeIn>
        <div className="max-w-4xl mx-auto">

          <p className="text-1xl font-semibold text-purple-600 mb-3 uppercase tracking-wider">
            BỘ TÍNH NĂNG ĐƯỢC TẬP TRUNG VÀO XOAY QUANH VIỆC GIÚP BẠN BÁN HÀNG
          </p>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
            HOÀN TOÀN TỰ ĐỘNG
          </h2>
          <p className="text-lg text-gray-700">
            BẠN CÓ THỂ TỰ{' '}
            <span className="bg-green-500 text-white px-3 py-1 rounded font-semibold">
              TRẢI NGHIỆM NGAY NHỮNG DEMO THỰC TẾ
            </span>{' '}
            BÊN DƯỚI
          </p>
        </div></FadeIn>
      </section>

      {/* SECTION 1: Có Tags */}
      <FeatureSection
        videoSrc={landingPageGD6Data.section1.videoSrc}
        title={landingPageGD6Data.section1.title}
        tags={landingPageGD6Data.section1.tags}
        showCta={false}
        features={[
          <p key="1">
            Ngoài việc host khóa học còn{' '}
            <Highlight>hơn 100+ tính năng về marketing:</Highlight>
          </p>,
          <p key="2">
            <Highlight>TỰ ĐỘNG BÁN KHOÁ HỌC</Highlight>
          </p>,
          <p key="3">
            <Highlight>TỰ ĐỘNG GỬI EMAIL MARKETING</Highlight>
          </p>,
          <p key="4">
            <Highlight>
              TỰ ĐỘNG MÃ HÓA VIDEOS VỚI KEDI DRM CHỐNG TẢI LẬU.
            </Highlight>{' '}
            Netflix như nào thì hệ thống KEDI E-LEARNING có y chang như thế.
          </p>,
        ]}
      />

      <FeatureSection
        videoSrc={landingPageGD6Data.section2.videoSrc}
        title={landingPageGD6Data.section2.title}
        tags={landingPageGD6Data.section2.tags}
        features={[
          <p key="1">
            Ngoài việc host khóa học còn{' '}
            <Highlight>hơn 100+ tính năng về marketing:</Highlight>
          </p>,
          <p key="2">
            <Highlight>TỰ ĐỘNG BÁN KHOÁ HỌC</Highlight>
          </p>,
          <p key="3">
            <Highlight>TỰ ĐỘNG GỬI EMAIL MARKETING</Highlight>
          </p>,
          <p key="4">
            <Highlight>
              TỰ ĐỘNG MÃ HÓA VIDEOS VỚI KEDI DRM CHỐNG TẢI LẬU.
            </Highlight>{' '}
            Netflix như nào thì hệ thống KEDI E-LEARNING có y chang như thế.
          </p>,
        ]}
      />

      <FeatureSection
        imageSrc={landingPageGD6Data.section3.imageSrc}
        title={landingPageGD6Data.section3.title}
        showCta={false}
        showPlayIcon={false}
        features={[
          <p key="1">
            Ngoài việc host khóa học còn{' '}
            <Highlight>hơn 100+ tính năng về marketing:</Highlight>
          </p>,
          <p key="2">
            <Highlight>TỰ ĐỘNG BÁN KHOÁ HỌC</Highlight>
          </p>,
          <p key="3">
            <Highlight>TỰ ĐỘNG GỬI EMAIL MARKETING</Highlight>
          </p>,
          <p key="4">
            <Highlight>
              TỰ ĐỘNG MÃ HÓA VIDEOS VỚI KEDI DRM CHỐNG TẢI LẬU.
            </Highlight>{' '}
            Netflix như nào thì hệ thống KEDI E-LEARNING có y chang như thế.
          </p>,
        ]}
      />
    </main>
  );
}
