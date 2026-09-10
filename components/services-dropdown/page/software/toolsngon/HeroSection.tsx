'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// 🧩 Lazy load cho từng section
const LazySection = ({ children }: { children: React.ReactNode }) => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {inView ? (
        children
      ) : (
        <div className="min-h-[400px] bg-gray-50 animate-pulse rounded-2xl" />
      )}
    </div>
  );
};

// 🚀 Dynamic import các section khác
const OverviewSection = dynamic(() => import('./OverviewSection'), {
  loading: () => (
    <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-2xl" />
  ),
  ssr: false,
});

const PlatformsSection = dynamic(() => import('./PlatformsSection'), {
  ssr: false,
});
const FeatureSection = dynamic(() => import('./FeatureSection'), {
  ssr: false,
});
const ApprovedSection = dynamic(() => import('./ApprovedSection'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false });
const PricingSection = dynamic(() => import('./PricingSection'), {
  ssr: false,
});
const CtaSection = dynamic(() => import('./CtaSection'), { ssr: false });
const FaqSection = dynamic(() => import('./FaqSection'), { ssr: false });
const DownloadSection = dynamic(() => import('./DownloadSection'), {
  ssr: false,
});
const FloatingButtons = dynamic(() => import('./FloatingButtons'), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <>
      {/* 🟦 Phần Hero chính */}
      <section
        id="top"
        className="relative pt-16 lg:pt-32 overflow-x-hidden max-w-full"
        style={{ backgroundColor: '#f0f9ff' }}
      >
        {/* Các khối nền trang trí */}
        <div className="w-16 h-16 hidden lg:block absolute left-8 top-32 lg:top-1/3 bg-lime-950 rounded-xl"></div>
        <div className="w-16 h-16 hidden lg:block absolute left-4 lg:left-1/4 top-[40%] lg:top-1/3 -translate-y-24 bg-slate-300 rounded-xl"></div>
        <div className="w-48 h-48 hidden lg:block absolute -right-10 top-44 lg:top-64 bg-lime-400/50 rounded-[44px]"></div>

        {/* Nội dung chính */}
        <div className="container w-full mx-auto relative z-10">
          <div className="py-20 relative grid lg:grid-cols-2 items-center">
            {/* Bên trái */}
            <div className="flex flex-col text-center px-4 lg:px-0 lg:text-left justify-center lg:justify-start">
              <h1 className="text-slate-900 dark:text-zinc-100 text-3xl lg:text-5xl mb-3 lg:mb-6 font-bold">
                Tools Ngon Giúp Bạn Tiết Kiệm 90% Chi Phí Tools Hàng Tháng
              </h1>
              <h2 className="text-slate-800 dark:text-zinc-200 text-md lg:text-xl mb-6 lg:mb-10">
                Tất cả các công cụ được tích hợp trong một nền tảng: Pipiads,
                Helium10, Heyetsy, RunwayML, Hailuo AI, Midjourney...
              </h2>

              {/* Nút CTA */}
              <div className="flex items-center gap-4 justify-center lg:justify-start flex-wrap w-full">
                <Link
                  href="/auth/register"
                  className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 font-semibold flex items-center justify-center rounded-2xl shadow-lg group w-full lg:w-fit"
                >
                  <span className="mr-2">Đăng Ký Miễn Phí</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-move-right"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Move right icon</title>
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </Link>

                <Link
                  href="#subscriptions"
                  className="bg-black/90 hover:bg-black transition text-white px-6 py-3 font-semibold flex items-center justify-center rounded-2xl shadow-lg group w-full lg:w-fit"
                >
                  <span className="mr-2">Mua Ngay</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-move-right"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Move right icon</title>
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </Link>
              </div>

              {/* Logo Trust */}
              <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start flex-wrap">
                <Image
                  src="/assets/toolsngon/assets/trust-pilot--white-logo.svg"
                  alt="Trustpilot"
                  width={176}
                  height={44}
                  className="w-24 lg:w-44 h-auto"
                />
                <Image
                  src="/assets/toolsngon/assets/g2-logo.svg"
                  alt="G2"
                  width={176}
                  height={44}
                  className="w-24 lg:w-44 h-auto"
                />
                <Image
                  src="/assets/toolsngon/assets/app-store-logo.webp"
                  alt="App Store"
                  width={176}
                  height={44}
                  className="w-24 lg:w-44 h-auto"
                />
              </div>
            </div>

            {/* Bên phải - Banner chính */}
            <div className="lg:mt-0 mt-8">
              <Image
                src="/assets/toolsngon/assets/placeholder-hero.jpg"
                alt="Banner"
                width={800}
                height={600}
                className="object-cover w-full h-auto rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🧩 Các section tiếp theo */}
      <LazySection>
        <OverviewSection />
      </LazySection>

      <LazySection>
        <PlatformsSection />
      </LazySection>

      <LazySection>
        <FeatureSection />
      </LazySection>

      <LazySection>
        <ApprovedSection />
      </LazySection>

      <LazySection>
        <Testimonials />
      </LazySection>

      <LazySection>
        <PricingSection />
      </LazySection>

      <LazySection>
        <CtaSection />
      </LazySection>

      <LazySection>
        <FaqSection />
      </LazySection>

      <LazySection>
        <DownloadSection />
      </LazySection>

      <FloatingButtons />
    </>
  );
}
