"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee: React.FC = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const line5Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Dòng 1: Chạy sang phải
      gsap.to(line1Ref.current, {
        x: 200,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Dòng 2: Chạy sang trái
      gsap.to(line2Ref.current, {
        x: -200,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Dòng 3: Chạy sang phải
      gsap.to(line3Ref.current, {
        x: 200,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Dòng 4: Chạy sang trái
      gsap.to(line4Ref.current, {
        x: -200,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Dòng 5: Chạy sang phải
      gsap.to(line5Ref.current, {
        x: 200,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 "
    >
      <div className="flex flex-col justify-evenly items-center h-[80vh] w-full gap-4">
        {/* Dòng 1 - Nền Đỏ Đô (Burgundy) */}
        <div
          ref={line1Ref}
          className="w-full whitespace-nowrap will-change-transform"
        >
          <h1 className="text-white text-[8vw] md:text-[6vw] font-['Kaushan_Script'] uppercase leading-none italic">
            <span className="bg-[#800020] px-8 py-4 inline-block shadow-xl">
              Fashion is an armour
            </span>
          </h1>
        </div>

        {/* Dòng 2 - Nền Xanh Rêu (Olive) */}
        <div
          ref={line2Ref}
          className="w-full whitespace-nowrap will-change-transform text-right"
        >
          <h1 className="text-white text-[8vw] md:text-[6vw] font-['Kaushan_Script'] uppercase leading-none italic">
            <span className="bg-[#3d441e] px-8 py-4 inline-block shadow-xl">
              To survive everyday life
            </span>
          </h1>
        </div>

        {/* Dòng 3 - Nền Vàng Cát (Tan/Gold) */}
        <div
          ref={line3Ref}
          className="w-full whitespace-nowrap will-change-transform"
        >
          <h1 className="text-white text-[8vw] md:text-[6vw] font-['Kaushan_Script'] uppercase leading-none italic">
            <span className="bg-[#bc9a5c] px-8 py-4 inline-block shadow-xl text-black">
              One is never over-dressed or
            </span>
          </h1>
        </div>

        {/* Dòng 4 - Nền Tím Than (Deep Purple) */}
        <div
          ref={line4Ref}
          className="w-full whitespace-nowrap will-change-transform text-right"
        >
          <h1 className="text-white text-[8vw] md:text-[6vw] font-['Kaushan_Script'] uppercase leading-none italic">
            <span className="bg-[#301934] px-8 py-4 inline-block shadow-xl">
              under-dressed
            </span>
          </h1>
        </div>

        {/* Dòng 5 - Nền Xám Đậm (Charcoal) */}
        <div
          ref={line5Ref}
          className="w-full whitespace-nowrap will-change-transform"
        >
          <h1 className="text-white text-[8vw] md:text-[6vw] font-['Kaushan_Script'] uppercase leading-none italic">
            <span className="bg-[#36454f] px-8 py-4 inline-block shadow-xl">
              with a Little Black Dress.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
