"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { img: "/project1.webp", title: "E-commerce", tag: "Sell" },
  { img: "/project2.webp", title: "Education", tag: "Learn" },
  { img: "/project3.webp", title: "Corporate", tag: "Trust" },
  { img: "/project4.webp", title: "Hospitality", tag: "Experience" },
  { img: "/project5.webp", title: "Personal Brand", tag: "Position" },
  { img: "/project6.webp", title: "Campaign", tag: "Convert" },
];

const Product = ({
  img,
  title,
  tag,
  index,
}: {
  img: string;
  title: string;
  tag: string;
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0.45, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
      className="group w-[82vw] flex-shrink-0 snap-center pr-5 text-white sm:w-[64vw] md:w-[24vw] md:pr-[4vw]"
    >
      <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:rounded-[1.75rem]">
        <div className="mb-2 flex items-center gap-1.5 px-2 py-1">
          <span className="h-2 w-2 rounded-full bg-[#FFC629]" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </div>
        <div className="h-[48vh] min-h-[360px] overflow-hidden rounded-[1.1rem] md:h-[63vh]">
          <img
            src={img}
            alt={`${title} landing page showcase`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-5">
        <div>
          <div className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#FFC629]">
            {tag}
          </div>
          <h3 className="text-2xl font-black tracking-[-0.035em] md:text-3xl">
            {title}
          </h3>
        </div>
        <span className="font-mono text-sm text-white/35">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.article>
  );
};

const Shop = () => {
  const ref = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const scrollingElement = horizontalRef.current;
    if (!element || !scrollingElement) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.to(scrollingElement, {
          x: () =>
            -Math.max(0, scrollingElement.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: () => `+=${scrollingElement.scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="selected-work"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-[#081F40] md:h-screen"
    >
      <div
        className="pointer-events-none absolute -right-[18%] top-[-20%] h-[46rem] w-[46rem] rounded-full blur-3xl"
        style={{ background: "rgba(255,198,41,0.08)" }}
      />
      <div className="pointer-events-none absolute left-[5%] top-8 z-0 whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-[-0.07em] text-white/[0.028] md:top-12 md:text-[8vw]">
        Selected Work
      </div>

      <aside className="relative z-20 flex w-full border-b border-white/10 bg-[#081F40]/94 px-6 py-14 backdrop-blur-xl md:absolute md:left-0 md:top-0 md:h-screen md:w-[30%] md:items-center md:border-b-0 md:border-r md:px-10 lg:px-14">
        <div className="max-w-sm">
          <div className="mb-6 text-xs font-extrabold uppercase tracking-[0.24em] text-[#FFC629]">
            02 / Selected work
          </div>
          <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] text-white md:text-5xl">
            Thiết kế cho từng mục tiêu.
          </h2>
          <p className="mt-6 text-base leading-7 text-white/58 md:text-lg">
            Mỗi landing page có một vai trò khác nhau. KEDI giữ hệ thiết kế
            nhất quán nhưng thay đổi cấu trúc, nhịp nội dung và visual theo hành
            vi người dùng của từng mô hình.
          </p>
          <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/38">
            <span className="h-px w-10 bg-[#FFC629]/70" />
            Scroll / swipe
          </div>
        </div>
      </aside>

      <div className="relative z-10 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-visible">
        <div
          ref={horizontalRef}
          className="flex w-max snap-x snap-mandatory items-center px-6 py-10 md:min-h-screen md:snap-none md:pl-[35vw] md:pr-[7vw] md:py-0"
        >
          {projects.map((item, index) => (
            <Product
              key={item.title}
              img={item.img}
              title={item.title}
              tag={item.tag}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
