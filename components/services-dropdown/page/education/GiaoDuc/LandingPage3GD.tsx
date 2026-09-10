"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { landingPageGD3Screenshots } from "./giaoduc";
import ScrollRevealHighlight from "@/components/ui/ScrollRevealHighlight";
import FadeIn from "@/components/ui/Fadeoad";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingPage3GD() {
  const targetRef = useRef<HTMLDivElement>(null);

  // 1. Chuẩn bị dữ liệu ảnh trước
  const screenshots = landingPageGD3Screenshots.map((s) => s.src.trim());

  // 2. Logic điều khiển cuộn (Đặt sau khi đã có biến screenshots)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Tính toán khoảng cách trượt ngang:
  // Chúng ta trượt từ 0 đến khoảng -(tổng chiều rộng các ảnh - 1 phần hiển thị)
  // Ở đây dùng đơn vị vw để đảm bảo mượt trên mọi màn hình
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(screenshots.length - 1) * 40}vw`],
  );

  return (
    <section className="min-h-screen relative bg-black text-white font-sans">
      {/* === CSS ANIMATION CHO SAO BĂNG === */}
      <style>{`
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(500px) translateY(-500px); opacity: 0; }
        }
        .animate-shooting-star { animation: shooting-star linear infinite; }
      `}</style>

      {/* === HIỆU ỨNG SAO BĂNG === */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] animate-shooting-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0,
            }}
          >
            <span className="absolute top-1/2 left-0 w-[300px] h-[1px] bg-gradient-to-l from-transparent to-white -translate-y-1/2"></span>
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-4xl relative z-10 py-12">
        {/* === PHẦN HEADER === */}
        <FadeIn>
          <div className="relative inline-block mb-5 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <ScrollRevealHighlight
              highlightColor="#ff0080"
              baseColor="rgba(255, 0, 128, 0.2)"
              className="shadow-[0_0_12px_rgba(255,0,120,0.4)]"
            >
              <div className="text-white font-bold text-lg px-5 py-2 uppercase tracking-wide">
                TOÀN BỘ TÍNH NĂNG CỦA GÓI BUNDLE
              </div>
            </ScrollRevealHighlight>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 uppercase">
            đang được CEO/FOUNDER MONA
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase">
            sử dụng cho chính Khoá học của mình
          </h3>
        </FadeIn>

        <div className="mb-8 group cursor-pointer">
          <img
            src="https://mona.media/template/assets/images/tkw-ban-khoa-hoc/logo-kha.png"
            alt="KHA"
            className="h-8 w-auto object-contain"
          />
        </div>

        <FadeIn>
          <button className="group relative bg-gradient-to-r from-[#9d00ff] to-[#d40078] text-white font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-all duration-300 mb-12 overflow-hidden">
            <span className="flex items-center gap-2 relative z-10">
              <span>≫</span> Xem ngay tại đây
            </span>
          </button>
        </FadeIn>
      </div>

      {/* === CAROUSEL SECTION (Sticky Scroll) === */}
      <div ref={targetRef} className="relative h-[400vh] w-full">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
          <div className="mb-6 md:mb-10 text-center px-4">
            <p className="text-pink-500 font-bold animate-bounce text-xs md:text-sm uppercase tracking-widest">
              ↓ Cuộn chuột để xem giao diện ↓
            </p>
          </div>

          <div className="w-full relative">
            <motion.div
              style={{ x }}
              className="flex gap-4 md:gap-10 px-[5vw] md:px-[10vw]"
            >
              {screenshots.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 relative rounded-xl md:rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-300"
                  style={{
                    // Mobile: rộng 85vw, cao 45vh | Desktop: rộng 60vw, cao 65vh
                    width: "var(--carousel-item-width)",
                    height: "var(--carousel-item-height)",
                  }}
                >
                  {/* CSS Variables để điều chỉnh responsive mượt mà hơn */}
                  <style jsx>{`
                    div {
                      --carousel-item-width: 85vw;
                      --carousel-item-height: 45vh;
                    }
                    @media (min-width: 768px) {
                      div {
                        --carousel-item-width: 60vw;
                        --carousel-item-height: 65vh;
                      }
                    }
                  `}</style>

                  <Image
                    src={image}
                    alt={`Giao diện ${index}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 60vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-black/70 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-mono text-[10px] md:text-sm border border-white/10">
                    {index + 1} / {screenshots.length}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Thanh tiến trình */}
          <div className="mt-10 md:mt-16 w-40 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
