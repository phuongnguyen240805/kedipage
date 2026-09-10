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

  // Auto-advance every 2 seconds; pause when hovered
  useEffect(() => {
    if (isHovered) return undefined;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length);
    }, 2000);
    return () => clearInterval(id);
  }, [isHovered, gallery.length]);

  return (
    <section className="w-full bg-gradient-to-b text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <h3 className="text-center text-2xl md:text-3xl font-extrabold mb-12">
          Áp dụng nhiều{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
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
                stroke="#8b5cf6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10,10"
              />
              <circle cx="1100" cy="300" r="6" fill="#ec4899" />
            </svg>
          </div>

          {/* MAIN SINGLE CARD */}
          <div className="relative z-10 w-full max-w-[800px]">
            {/* Khung chứa ảnh duy nhất */}
            <div className="relative bg-gradient-to-br from-[#2b0447] to-[#481053] rounded-2xl p-4 md:p-6 shadow-[0_0_40px_rgba(139,92,246,0.3)] border border-white/10">
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
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                ) : (
                  <Image
                    src={gallery[activeIndex].src}
                    alt={gallery[activeIndex].title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
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
                className={`absolute -left-4 md:-left-12 top-10 bg-[#4c1d95]/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 border ${
                  activeIndex === 0
                    ? 'border-green-400 ring-2 ring-green-400'
                    : 'border-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
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
                className={`hidden md:block absolute -left-16 bottom-20 bg-[#be185d]/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300 border ${
                  activeIndex === 1
                    ? 'border-green-400 ring-2 ring-green-400'
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
                className={`absolute -right-4 md:-right-10 bottom-8 bg-[#1e40af]/90 backdrop-blur-md px-5 py-3 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 border ${
                  activeIndex === 2
                    ? 'border-green-400 ring-2 ring-green-400'
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
