"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TripleGridLayout = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleLeftRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalImages = images.length;

      // 1. TIMELINE CHÍNH: Ghim (Pin) section và trượt ảnh
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalImages * 150}%`,
          pin: true,
          scrub: 1.5,
        },
      });

      // Hiệu ứng trượt ảnh ở giữa
      imagesRef.current.forEach((img, i) => {
        if (i !== 0) {
          tl.fromTo(
            img,
            { yPercent: 100, scale: 0.8, rotate: 5, opacity: 0 },
            {
              yPercent: 0,
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.1,
              ease: "power2.out",
            },
            i * 0.1
          );
        }
      });

      // 2. HIỆU ỨNG BAY CHO TIÊU ĐỀ TRÁI
      gsap.to(titleLeftRef.current, {
        x: 100, // Bay ngang sang trái
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // 3. HIỆU ỨNG TRƯỢT CHO NỘI DUNG PHẢI (Lên là lên, xuống là xuống)
      gsap.to(rightTextRef.current, {
        y: 200, // Trượt lên mạnh mẽ
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [images.length]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 h-full items-center px-10 gap-10 relative z-10">
        {/* CỘT 1: Tiêu đề Trái (Hiệu ứng bay ngang giống About Us) */}
        <div className="z-20 pointer-events-none">
          <h2
            ref={titleLeftRef}
            className="text-[5vw] font-black uppercase text-white italic leading-none "
            style={{
              fontFamily: "'Kaushan Script', cursive",
              WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              color: "white",
            }}
          >
            New Arrivals
          </h2>
        </div>

        {/* CỘT 2: Khung chứa ảnh (Ghim đứng im, ảnh trượt chồng) */}
        <div className="relative h-[75vh] w-full flex justify-center items-center">
          <div className="relative w-full h-full rounded-[2.5rem] border border-white/10 overflow-hidden bg-zinc-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
            {images.map((src, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                className="absolute inset-0 w-full h-full p-4 will-change-transform"
                style={{ zIndex: index }}
              >
                <img
                  src={src}
                  alt={`Product ${index}`}
                  className="w-full h-full object-cover rounded-[2rem]"
                />
                <div className="absolute top-10 left-10 text-white font-mono text-3xl z-20 mix-blend-difference">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CỘT 3: Nội dung Phải (Hiệu ứng lướt lên xuống giống About) */}
        <div
          ref={rightTextRef}
          className="z-20 text-right flex flex-col items-end gap-6 will-change-transform"
        >
          <h3 className="text-white text-4xl font-bold uppercase tracking-widest">
            Collection <br /> 2026
          </h3>
          <p className="text-zinc-500 text-xl max-w-xs font-light leading-relaxed">
            Mỗi thiết kế là một câu chuyện riêng biệt, mang đậm dấu ấn cá nhân
            và sự phá cách trong từng đường nét thời trang hiện đại.
          </p>
          <div className="h-20 w-px bg-gradient-to-b from-zinc-500 to-transparent mt-4"></div>
        </div>
      </div>

      {/* Trang trí nền */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold text-white/[0.02] pointer-events-none select-none z-0">
        FASHION
      </div>
    </section>
  );
};

export default TripleGridLayout;
