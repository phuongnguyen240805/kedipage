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
    <section className="min-h-screen bg-gradient-to-br   flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            KEDI sẽ dụng cho bạn một website đẹp
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            phù hợp ngành hàng và khách hàng của bạn
          </h2>
          <div className="inline-block bg-[#0f702a] border-2 border-dashed border-lime-400 text-lime-200 px-6 py-3 font-bold rounded-md text-lg">
            để tạo giá trị tốt nhất 💰
          </div>
          <p className="text-white text-lg mt-6 max-w-3xl mx-auto">
            Một quy trình chuẩn từ nghiên cứu đến xây dựng website là một điều
            rất quan trọng để cho ra được sản phẩm đem lại nhiều lợi ích nhất
            cho khách hàng
          </p>
        </div>

        {/* Carousel below header */}
        <div className="overflow-hidden rounded-lg">
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
                className="marquee-item relative flex-shrink-0 w-[260px] h-[160px] sm:w-[320px] sm:h-[180px] md:w-[360px] md:h-[220px] rounded-lg overflow-hidden shadow-lg mr-4 cursor-pointer"
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
            className="absolute inset-0 bg-black/70"
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
              className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-lg hover:scale-105 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
