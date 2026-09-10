"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const mainImgRef = useRef(null);
  const smallImg1Ref = useRef(null);
  const smallImg2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Sử dụng mm.add để phân tách hiệu ứng Desktop và Mobile
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // --- CHỈ CHẠY TRÊN DESKTOP ---
        gsap.to(titleRef.current, {
          x: 200,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });

        gsap.to(smallImg1Ref.current, {
          y: -250,
          scrollTrigger: { trigger: sectionRef.current, scrub: 2 },
        });

        gsap.to(smallImg2Ref.current, {
          y: 100,
          scrollTrigger: { trigger: sectionRef.current, scrub: 2 },
        });
      });

      mm.add("(max-width: 767px)", () => {
        // --- CHỈ CHẠY TRÊN MOBILE (Giảm biên độ để không vỡ layout) ---
        gsap.to(titleRef.current, {
          x: 50, // Giảm biên độ bay
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(smallImg1Ref.current, {
          y: -50,
          scrollTrigger: { trigger: sectionRef.current, scrub: 1 },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full md:w-[85vw] mx-auto flex flex-col items-center justify-start md:justify-between py-12 md:py-0 md:flex-row overflow-x-hidden md:overflow-visible"
    >
      {/* 1. TIÊU ĐỀ: Căn giữa trên mobile, tuyệt đối trên desktop */}
      <h1
        ref={titleRef}
        className="relative text-center md:left-[-19%] mb-6 md:mb-0 md:absolute top-0 md:top-10 text-[15vw] md:text-[10vw] font-serif whitespace-nowrap pointer-events-none select-none z-10 md:z-40 text-white italic leading-none w-full md:w-auto"
        style={{ fontFamily: "'Kaushan Script', cursive" }}
      >
        About Us
      </h1>

      {/* 2. KHỐI CHỮ: Đảm bảo padding đủ rộng để không chạm mép màn hình */}
      <div
        ref={leftRef}
        className="w-full md:w-[45%] px-8 md:px-0 text-white font-light text-lg md:text-3xl z-30 leading-relaxed mix-blend-difference mb-12 md:mb-0 text-justify md:text-left"
      >
        We&apos;re{" "}
        <span className="text-zinc-400 font-medium">fashion studio</span> based
        in California. We create unique designs that will blow your mind.
        <br />
        <br />
        Fashion is an <span className="italic">ART</span> that cannot be grasped
        by everyone. We offer creative products to a wide range of people.
      </div>

      {/* 3. KHỐI ẢNH: Thu nhỏ ảnh phụ trên mobile */}
      <div className="w-full md:w-1/2 relative flex justify-center px-4 md:px-0">
        <div className="relative w-[85%] md:w-[90%] z-10">
          {/* Ảnh chính */}
          <img
            ref={mainImgRef}
            src="https://github.com/codebucks27/wibe-studio/blob/main/src/assets/Images/1.webp?raw=true"
            alt="Main Model"
            className="w-full h-auto shadow-xl rounded-sm"
          />

          {/* Ảnh nhỏ 1: Thu nhỏ lại trên mobile để không tràn */}
          <div
            ref={smallImg1Ref}
            className="absolute w-[30%] md:w-[35%] -left-[8%] md:-left-[20%] -bottom-[5%] md:-bottom-[10%] z-20"
          >
            <img
              src="https://kenh14cdn.com/2018/6/20/photo-20-1529428447777426609279.jpg"
              alt="Detail 1"
              className="w-full h-auto rounded-sm shadow-2xl border border-white/20"
            />
          </div>

          {/* Ảnh nhỏ 2: Căn chỉnh lại vị trí để không bị khuất */}
          <div
            ref={smallImg2Ref}
            className="absolute w-[35%] md:w-[35%] -right-[5%] md:-right-[15%] top-[10%] md:top-[15%] z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1995&auto=format&fit=crop"
              alt="Detail 2"
              className="w-full h-auto shadow-2xl border border-white/20 rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
