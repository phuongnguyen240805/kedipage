'use client';

import React from 'react';
import LandingPage1 from './LandingPage1';
import LandingPage2 from './LandingPage2';
import LandingPage3 from './LandingPage3';
import LandingPage4 from './LandingPage4';
import LandingPage5 from './LandingPage5';

// 🧩 Hook phát hiện phần tử vào viewport (giữ nguyên)
function useInView(options = {}) {
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
        rootMargin: '200px',
        ...options,
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

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
        <div className="min-h-[400px] bg-gray-50 animate-pulse rounded-2xl" />
      )}
    </div>
  );
}

// 🚀 Component chính — áp LazySection cho TỪNG section
export default function PageThietKeWebsiteTaiHCM() {
  return (
    <div className="flex flex-col gap-6">
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
