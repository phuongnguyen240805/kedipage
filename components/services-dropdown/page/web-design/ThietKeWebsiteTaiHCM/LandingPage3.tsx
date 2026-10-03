'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import landingData from './langding_data';

export default function LandingPage3() {
  const gallery = useMemo(() => {
    const imgs = landingData.LandingPage3.images;
    return imgs.map((src, i) => ({ src, title: `Gallery ${i + 1}` }));
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const setActive = useCallback((i: number) => setActiveIndex(i), []);
  const [isHovered, setIsHovered] = useState(false);

  // Badges will act as controls — removed separate thumbnail row and use these as interactive buttons

  // Auto-advance at a calmer pace; pause when hovered
  useEffect(() => {
    if (isHovered) return undefined;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isHovered, gallery.length]);

  return (
    <section className="relative w-full overflow-hidden bg-[#0B2D5B] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <h3 className="text-center text-2xl md:text-3xl font-extrabold mb-12">
          Áp dụng nhiều{' '}
          <span className="bg-gradient-to-r from-[#FFC629] to-[#43C6FF] bg-clip-text text-transparent">
            công nghệ
          </span>{' '}
          khác nhau phục vụ cho việc thiết kế website
        </h3>

        <div className="relative flex justify-center items-center">
          {/* Decorative circuit lines (Background) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full opacity-30"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              <path
                d="M100,300 C300,100 900,100 1100,300"
                stroke="#FFC629"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10,10"
              />
              <circle cx="1100" cy="300" r="6" fill="#43C6FF" />
            </svg>
          </div>

          {/* MAIN SINGLE CARD */}
          <div className="relative z-10 w-full max-w-[800px]">
            {/* Khung chứa ảnh duy nhất */}
            <div className="relative rounded-[28px] border border-white/10 bg-[#081F40]/90 p-4 shadow-[0_30px_90px_rgba(2,12,27,0.40)] backdrop-blur md:p-6">
              {/* Image Container */}
              <div
                className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden bg-black/20 relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Selected image from gallery (optimized) */}
                {gallery[activeIndex].src.startsWith('http') ? (
                  <img
                    src={gallery[activeIndex].src}
                    alt={gallery[activeIndex].title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    loading="eager"
                  />
                ) : (
                  <Image
                    src={gallery[activeIndex].src}
                    alt={gallery[activeIndex].title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    priority={activeIndex === 0}
                  />
                )}
              </div>

              {/* Floating Badges (Các thẻ trôi nổi xung quanh) */}

              {/* Badge 1: Top Left (acts as control) */}
              <button
                type="button"
                onClick={() => setActive(0)}
                aria-pressed={activeIndex === 0}
                className={`absolute -left-4 md:-left-12 top-10 bg-[#081F40]/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 border ${
                  activeIndex === 0
                    ? 'border-[#FFC629] ring-2 ring-[#FFC629]'
                    : 'border-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FFC629]"></span>
                  <p
                    className={`text-sm font-semibold ${activeIndex === 0 ? 'text-white' : 'text-white'}`}
                  >
                    Xây dựng Framework
                  </p>
                </div>
              </button>

              {/* Badge 2: Middle Left (acts as control) */}
              <button
                type="button"
                onClick={() => setActive(1)}
                aria-pressed={activeIndex === 1}
                className={`hidden md:block absolute -left-16 bottom-20 bg-[#0B2D5B]/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300 border ${
                  activeIndex === 1
                    ? 'border-[#FFC629] ring-2 ring-[#FFC629]'
                    : 'border-white/20'
                }`}
              >
                <p className="text-sm font-semibold text-white">
                  ⚡ Công nghệ AI
                </p>
              </button>

              {/* Badge 3: Bottom Right (acts as control) */}
              <button
                type="button"
                onClick={() => setActive(2)}
                aria-pressed={activeIndex === 2}
                className={`absolute -right-4 md:-right-10 bottom-8 bg-[#0B2D5B]/95 backdrop-blur-md px-5 py-3 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 border ${
                  activeIndex === 2
                    ? 'border-[#FFC629] ring-2 ring-[#FFC629]'
                    : 'border-white/20'
                }`}
              >
                <p className="text-sm font-semibold text-white">
                  💎 Tài nguyên Pro
                </p>
              </button>
            </div>
          </div>
          {/* Spacer to keep flow below the card */}
          <div className="mt-8" />
        </div>
      </div>
    </section>
  );
}
