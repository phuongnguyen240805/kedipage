'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import landingData from './langding_data';

export default function LandingPage5() {
  const carouselImages = landingData?.LandingPage5?.images ?? [];

  const [openSrc, setOpenSrc] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenSrc(null);
    };
    document.addEventListener('keydown', onKey as any);
    return () => document.removeEventListener('keydown', onKey as any);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B2D5B] p-4 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,198,41,0.15),transparent_32%)]" />
      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            KEDI sẽ dựng cho bạn một website đẹp
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            phù hợp ngành hàng và khách hàng của bạn
          </h2>
          <div className="inline-block rounded-full border border-[#FFC629]/60 bg-[#FFC629]/10 px-6 py-3 text-lg font-bold text-[#FFC629]">
            để tạo giá trị tốt nhất 💰
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            Một quy trình chuẩn từ nghiên cứu đến xây dựng website là một điều
            rất quan trọng để cho ra được sản phẩm đem lại nhiều lợi ích nhất
            cho khách hàng
          </p>
        </div>

        {/* Carousel below header */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3">
          <div className="marquee-track flex items-center">
            {[...carouselImages, ...carouselImages].map((src, idx) => (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                onClick={() => setOpenSrc(src)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setOpenSrc(src);
                }}
                className="marquee-item relative mr-4 h-[160px] w-[260px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_50px_rgba(2,12,27,0.32)] sm:h-[180px] sm:w-[320px] md:h-[220px] md:w-[360px]"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          display: flex;
          gap: 1rem;
          align-items: center;
          animation: marquee 18s linear infinite;
        }
        .marquee-item {
          flex: 0 0 auto;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>

      {/* Modal preview */}
      {openSrc && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#081F40]/90 backdrop-blur-sm"
            onClick={() => setOpenSrc(null)}
          />
          <div className="relative w-full max-w-4xl h-[70vh] md:h-[80vh]">
            <Image
              src={openSrc}
              alt="preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setOpenSrc(null)}
              aria-label="Close preview"
              className="absolute right-3 top-3 rounded-full bg-[#FFC629] p-2 font-bold text-[#0B2D5B] shadow-lg transition hover:scale-105"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
