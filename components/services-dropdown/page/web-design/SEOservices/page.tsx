'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import ServiceLanding from '@/components/services-dropdown/page/web-design/SEOservices/ServiceLanding';
import { seoEducationData } from '../../../datas/LandingPageData';

// Dynamic import với Next.js (không load ngay lập tức)
const CurvedWhiteSection = dynamic(
  () =>
    import('@/components/services-dropdown/page/web-design/SEOservices/CurvedWhiteSection'),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />,
    ssr: false, // Optional: disable SSR cho component này nếu không cần
  }
);

const LandingPage = dynamic(
  () => import('@/components/services-dropdown/page/web-design/SEOservices/LandingPage'),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />,
    ssr: false,
  }
);

// Custom hook để detect khi element vào viewport (Native Intersection Observer)
function useInView(options = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Unobserve sau khi đã load (chỉ trigger 1 lần)
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '200px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, inView };
}

// Component wrapper
function LazySection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>{inView ? children : <div className="min-h-[400px]" />}</div>
  );
}

export default function dichVuSeo() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero section luôn load ngay */}
      <ServiceLanding
        title="ĐEM VỀ KHÁCH HÀNG TIỀM NĂNG CÓ SẴN NHU CẦU CHO BẠN"
        subtitle="SEO là hình thức Marketing giúp"
        description="Đang được sử dụng bởi CEO Khánh Hùng tại KHA và hơn 200+ anh chị giảng viên khác tại kedi"
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        videoAlt="Video giới thiệu giải pháp SEO"
        mascotSrc="https://mona.media/template/assets/images/dvs/domain-panda.png"
        mascotAlt="Mascot KEDI Media"
        features={[
          'Giao diện độc quyền',
          'Toàn quyền quản lý',
          'Đầy đủ tính năng',
          'Thao tác dễ dàng',
        ]}
        brandText="KEDI ∞ KEDI.Media / Digital +*"
        ctaButtonText="Kiểm tra sức khỏe Domain MIỄN PHÍ!"
        className="pb-0"
      />

      {/* Các sections lazy load khi scroll đến */}
      <LazySection>
        <CurvedWhiteSection {...seoEducationData.curvedSection} />
      </LazySection>

      <LazySection>
        <LandingPage {...seoEducationData.landing1} />
      </LazySection>

      <LazySection>
        <LandingPage {...seoEducationData.landing2} />
      </LazySection>

      <LazySection>
        <LandingPage {...seoEducationData.landing3} />
      </LazySection>
    </div>
  );
}
