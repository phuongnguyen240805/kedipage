"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  {
    text: "Strategy before pixels",
    align: "text-left",
    pill: "bg-[#FFC629] text-[#0B2D5B]",
    rotate: "-rotate-[0.7deg]",
  },
  {
    text: "Design for attention",
    align: "text-right",
    pill: "border border-white/16 bg-white/[0.07] text-white backdrop-blur-xl",
    rotate: "rotate-[0.8deg]",
  },
  {
    text: "Built to convert",
    align: "text-left",
    pill: "bg-white text-[#0B2D5B]",
    rotate: "-rotate-[0.45deg]",
  },
  {
    text: "Fast. Clear. Memorable.",
    align: "text-right",
    pill: "border border-[#FFC629]/35 bg-[#FFC629]/10 text-[#FFC629]",
    rotate: "rotate-[0.6deg]",
  },
  {
    text: "From click to customer",
    align: "text-left",
    pill: "border border-white/14 bg-[#081F40]/65 text-white backdrop-blur-xl",
    rotate: "-rotate-[0.55deg]",
  },
];

const Marquee: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        lineRefs.current.forEach((line, index) => {
          if (!line) return;
          gsap.to(line, {
            x: index % 2 === 0 ? 180 : -180,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.8,
            },
          });
        });
      });

      mm.add("(max-width: 767px)", () => {
        lineRefs.current.forEach((line, index) => {
          if (!line) return;
          gsap.to(line, {
            x: index % 2 === 0 ? 54 : -54,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#0B2D5B] py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(255,198,41,0.075)" }}
      />

      <div className="relative z-10 mx-auto mb-14 flex max-w-[1400px] items-end justify-between gap-6 px-6 md:px-10 lg:px-16">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#FFC629]">
            03 / Principles
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Một landing page tốt phải có lý do để người xem tiếp tục.
          </h2>
        </div>
        <div className="hidden h-px w-32 bg-gradient-to-r from-[#FFC629] to-transparent md:block" />
      </div>

      <div className="relative z-10 flex min-h-[70vh] w-full flex-col justify-center gap-4 md:gap-5">
        {lines.map((line, index) => (
          <div
            key={line.text}
            ref={(el) => {
              lineRefs.current[index] = el;
            }}
            className={`w-full whitespace-nowrap will-change-transform ${line.align}`}
          >
            <div
              className={`inline-block px-5 py-3 text-[8.2vw] font-black uppercase leading-[0.9] tracking-[-0.055em] shadow-[0_18px_55px_rgba(0,0,0,0.16)] sm:px-8 md:px-10 md:py-4 md:text-[5.1vw] ${line.pill} ${line.rotate}`}
            >
              {line.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
