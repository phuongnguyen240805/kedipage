'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// 🧩 Hook phát hiện phần tử vào viewport
function useInView(options = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Ngừng quan sát sau khi đã xuất hiện
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

// 🧱 Component LazySection bọc quanh các section cần lazy load
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

// 💡 Dynamic import client component
const ClientLmsHosting = dynamic(
  () => import('./client'), // đường dẫn tới file ClientMauWebsite.tsx hoặc client.tsx
  {
    loading: () => (
      <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-2xl" />
    ),
    ssr: false, // không render phía server (chỉ client)
  }
);

// 🚀 Component chính cho trang LMS Hosting
export default function PageLmsHosting() {
  return (
    <div className="flex flex-col gap-6 px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        LMS Hosting
      </h1>
      <p className="text-center text-gray-500 max-w-2xl mx-auto">
        Khám phá các giải pháp LMS Hosting chuyên nghiệp, thiết kế tinh gọn,
        hiện đại và tối ưu chuyển đổi.
      </p>

      {/* Nội dung lazy load */}
      <LazySection>
        <ClientLmsHosting />
      </LazySection>
    </div>
  );
}
