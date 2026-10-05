"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const smallImg1Ref = useRef<HTMLDivElement>(null);
  const smallImg2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(titleRef.current, {
          x: 145,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.6,
          },
        });

        gsap.to(smallImg1Ref.current, {
          y: -135,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });

        gsap.to(smallImg2Ref.current, {
          y: 78,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to(titleRef.current, {
          x: 28,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#0B2D5B] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "rgba(255,198,41,0.1)" }}
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: "rgba(67,198,255,0.07)" }}
      />

      <div className="relative mx-auto flex min-h-[760px] w-full max-w-[1400px] flex-col justify-center gap-16 px-6 md:px-10 lg:flex-row lg:items-center lg:gap-20 lg:px-16">
        <h2
          ref={titleRef}
          className="pointer-events-none absolute left-[-4vw] top-4 z-0 whitespace-nowrap text-[16vw] font-black uppercase leading-none tracking-[-0.07em] text-white/[0.035] md:top-0 md:text-[10vw]"
        >
          Landing Page
        </h2>

        <div className="relative z-20 w-full lg:w-[44%]">
          <div className="mb-6 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#FFC629]">
            <span className="h-px w-10 bg-[#FFC629]" />
            Design for conversion
          </div>

          <h3 className="max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">
            Đẹp là điểm bắt đầu.
            <span className="mt-2 block text-[#FFC629]">
              Chuyển đổi mới là mục tiêu.
            </span>
          </h3>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/66 md:text-lg">
            KEDI thiết kế landing page như một hành trình có chủ đích: thông
            điệp rõ, cấu trúc dễ hiểu, hình ảnh đủ khác biệt và CTA xuất hiện
            đúng lúc để dẫn người xem từ sự tò mò đến hành động.
          </p>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {["Strategy", "UX Structure", "Visual Direction", "Conversion"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/74 backdrop-blur-xl"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="relative z-10 flex w-full justify-center lg:w-[56%]">
          <div className="relative w-[88%] max-w-[720px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-3">
              <img
                src="https://assets.kedi.media/images/9691808476f532a0f44c-663.webp"
                alt="KEDI landing page project preview"
                className="aspect-[4/3] w-full rounded-[1.55rem] object-cover"
              />
            </div>

            <div
              ref={smallImg1Ref}
              className="absolute -bottom-[8%] -left-[8%] w-[34%] md:-left-[14%]"
            >
              <div className="-rotate-3 overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#081F40] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38)]">
                <img
                  src="https://assets.kedi.media/images/9a9924f7b3c908c9ad33-663.webp"
                  alt="KEDI mobile landing page preview"
                  className="aspect-[4/5] w-full rounded-[1rem] object-cover"
                />
              </div>
            </div>

            <div
              ref={smallImg2Ref}
              className="absolute -right-[5%] top-[8%] w-[31%] md:-right-[10%]"
            >
              <div className="rotate-2 overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#081F40] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38)]">
                <img
                  src="https://assets.kedi.media/images/13728fcc9b4fcc50b8be-663.webp"
                  alt="KEDI landing page visual detail"
                  className="aspect-square w-full rounded-[1rem] object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 right-[5%] hidden rounded-2xl border border-white/12 bg-[#081F40]/80 px-5 py-4 shadow-[0_20px_55px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:block">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#FFC629]">
                KEDI approach
              </div>
              <div className="mt-1 text-sm font-bold text-white">
                Strategy → UX → Visual → Convert
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
