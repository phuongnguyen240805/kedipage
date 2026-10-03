"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    image: "/project2.webp",
    eyebrow: "01 / Strategy",
    title: "Chốt mục tiêu",
    desc: "Xác định đối tượng, offer, thông điệp chính và hành động cần người xem thực hiện.",
  },
  {
    image: "/project4.webp",
    eyebrow: "02 / Structure",
    title: "Dựng hành trình",
    desc: "Sắp xếp hierarchy nội dung để mỗi section trả lời đúng một câu hỏi của người xem.",
  },
  {
    image: "/project7.webp",
    eyebrow: "03 / Visual",
    title: "Tạo khác biệt",
    desc: "Xây visual direction, motion và hệ component đủ nổi bật nhưng vẫn phục vụ nội dung.",
  },
  {
    image: "/project9.webp",
    eyebrow: "04 / Launch",
    title: "Tối ưu để chạy",
    desc: "Kiểm tra responsive, hiệu năng và điểm chuyển đổi trước khi đưa landing page vào vận hành.",
  },
];

const TripleGridLayout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLeftRef = useRef<HTMLHeadingElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${processSteps.length * 120}%`,
              pin: true,
              scrub: 1.25,
              invalidateOnRefresh: true,
            },
          });

          imagesRef.current.forEach((image, index) => {
            if (index === 0) return;

            tl.fromTo(
              image,
              { yPercent: 105, scale: 0.9, rotate: 3, opacity: 0 },
              {
                yPercent: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
                duration: 0.14,
                ease: "power2.out",
              },
              index * 0.12,
            );
          });

          gsap.to(titleLeftRef.current, {
            x: 70,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.8,
            },
          });

          gsap.to(rightTextRef.current, {
            y: 90,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.8,
            },
          });
        }, section);

        return () => ctx.revert();
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#081F40] py-24 md:h-screen md:py-0"
    >
      <div
        className="pointer-events-none absolute -left-[15%] bottom-[-25%] h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{ background: "rgba(255,198,41,0.075)" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[28vw] font-black uppercase tracking-[-0.08em] text-white/[0.018]">
        KEDI
      </div>

      <div className="relative z-10 mx-auto hidden h-full w-full max-w-[1440px] grid-cols-[0.9fr_1.15fr_0.9fr] items-center gap-10 px-10 md:grid lg:px-16">
        <div className="z-20">
          <div className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#FFC629]">
            04 / Process
          </div>
          <h2
            ref={titleLeftRef}
            className="text-[5vw] font-black uppercase leading-[0.86] tracking-[-0.065em] text-white"
          >
            From idea
            <span className="block text-[#FFC629]">to launch</span>
          </h2>
        </div>

        <div className="relative flex h-[72vh] w-full items-center justify-center">
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                className="absolute inset-0 p-2 will-change-transform"
                style={{ zIndex: index }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[1.55rem]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081F40]/95 via-[#081F40]/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
                    <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FFC629]">
                      {step.eyebrow}
                    </div>
                    <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white lg:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/68 lg:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={rightTextRef}
          className="z-20 flex flex-col items-end text-right"
        >
          <div className="text-6xl font-black tracking-[-0.06em] text-white">
            04
          </div>
          <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.24em] text-[#FFC629]">
            bước cốt lõi
          </div>
          <p className="mt-6 max-w-xs text-base leading-7 text-white/55">
            Motion chỉ là lớp hoàn thiện. Trước đó phải có chiến lược, cấu trúc
            và visual hierarchy đủ rõ để landing page thực sự làm việc.
          </p>
          <div className="mt-8 h-20 w-px bg-gradient-to-b from-[#FFC629] to-transparent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 md:hidden">
        <div className="mb-10">
          <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#FFC629]">
            04 / Process
          </div>
          <h2 className="mt-3 text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white">
            From idea
            <span className="block text-[#FFC629]">to launch</span>
          </h2>
        </div>

        <div className="space-y-5">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081F40]/95 via-[#081F40]/18 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FFC629]">
                    {step.eyebrow}
                  </div>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    {step.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripleGridLayout;
