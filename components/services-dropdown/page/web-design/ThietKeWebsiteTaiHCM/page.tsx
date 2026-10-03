'use client';

import React from 'react';
import LandingPage1 from './LandingPage1';
import LandingPage2 from './LandingPage2';
import LandingPage3 from './LandingPage3';
import LandingPage4 from './LandingPage4';
import LandingPage5 from './LandingPage5';

// 🧩 Hook phát hiện phần tử vào viewport (giữ nguyên)
function useInView() {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '240px',
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

// 🧱 Component LazySection (giữ nguyên)
function LazySection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      {inView ? (
        children
      ) : (
        <div className="min-h-[420px] bg-[#0B2D5B]" aria-hidden="true" />
      )}
    </div>
  );
}

// 🚀 Component chính — áp LazySection cho TỪNG section
export default function PageThietKeWebsiteTaiHCM() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden bg-[#0B2D5B] text-white">
      <LazySection>
        <LandingPage1 />
      </LazySection>

      <LazySection>
        <LandingPage2 />
      </LazySection>

      <LazySection>
        <LandingPage3 />
      </LazySection>

      <LazySection>
        <LandingPage4 />
      </LazySection>

      <LazySection>
        <LandingPage5 />
      </LazySection>
    </div>
  );
}
