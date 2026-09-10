"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
    title: "Sweatshirts",
  },
  {
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
    title: "Ethnic Wear",
  },
  {
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800",
    title: "Man Basics",
  },
  {
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    title: "Tops",
  },
  {
    img: "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=800",
    title: "Blazers",
  },
  {
    img: "https://images.unsplash.com/photo-1598971838477-52d3799bd24b?w=800",
    title: "Suits",
  },
];

const Product = ({ img, title }: { img: string; title: string }) => {
  return (
    <motion.div
      initial={{ filter: "grayscale(100%)", opacity: 0.5 }}
      whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-shrink-0 w-[80vw] md:w-[20vw] mr-[10vw] text-white flex flex-col justify-center"
    >
      <div className="w-full h-[45vh] md:h-[70vh] overflow-hidden rounded-xl shadow-2xl border border-white/5">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700"
        />
      </div>
      <h1 className="font-bold text-left mt-4 md:mt-8 text-2xl md:text-6xl uppercase tracking-tighter italic">
        {title}
      </h1>
    </motion.div>
  );
};

const Shop = () => {
  const ref = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const scrollingElement = horizontalRef.current;

    if (!element || !scrollingElement) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scrollingElement.scrollWidth;
      // Tính toán quãng đường trượt ngang
      const totalTranslate = scrollWidth - window.innerWidth;

      gsap.to(scrollingElement, {
        x: -totalTranslate,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a] flex flex-col md:block"
    >
      {/* Title mờ chạy đằng sau */}
      <h1
        className="absolute top-10 md:top-20 left-[5%] z-0 text-white text-[15vw] md:text-[8vw] font-serif opacity-5 whitespace-nowrap pointer-events-none"
        style={{ fontFamily: "'Kaushan Script', cursive" }}
      >
        New Collection
      </h1>

      {/* Cột thông tin: 
          - Mobile: Hiển thị dạng khối ở trên cùng (relative)
          - Desktop: Cố định bên trái (absolute)
      */}
      <div className="relative md:absolute left-0 w-full md:w-[30%] h-auto md:h-screen bg-[#1a1a1a] text-white z-10 flex items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
        <div className="max-w-xs text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 italic">
            Style & Pure
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed opacity-60">
            Mỗi sản phẩm trong bộ sưu tập mới đều được tuyển chọn kỹ lưỡng từ
            chất liệu đến kiểu dáng.
          </p>
        </div>
      </div>

      {/* Container ảnh: 
          - pl-[10vw] trên mobile để ảnh xuất hiện sau phần giới thiệu
          - md:pl-[35vw] trên desktop để nhường chỗ cho cột trái
      */}
      <div
        ref={horizontalRef}
        className="relative flex items-center min-h-[70vh] md:min-h-screen pl-[10vw] md:pl-[35vw] will-change-transform z-5 pr-[10vw] py-10 md:py-0"
      >
        {images.map((item, index) => (
          <Product key={index} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
