"use client";

import { motion, Variants } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MainVideo = "/WalkingGirl.mp4";

interface CoverVideoProps {
  playVideo: boolean;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
};

const CoverVideo: React.FC<CoverVideoProps> = ({ playVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (playVideo) {
      videoRef.current.play().catch(() => {
        // Autoplay can be blocked by browser policy. The hero still works as a poster frame.
      });
      return;
    }

    videoRef.current.pause();
  }, [playVideo]);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#081F40]">
      <video
        ref={videoRef}
        src={MainVideo}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 z-[1] bg-[#081F40]/45" />
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,31,64,0.98) 0%, rgba(11,45,91,0.83) 40%, rgba(11,45,91,0.34) 72%, rgba(8,31,64,0.54) 100%)",
        }}
      />
      <div
        className="absolute -left-[18%] top-[15%] z-[2] h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: "rgba(255,198,41,0.14)" }}
      />
      <div
        className="absolute -bottom-[24%] right-[5%] z-[2] h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: "rgba(67,198,255,0.08)" }}
      />
      <div
        className="absolute inset-0 z-[2] opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 24%, black 74%, transparent 100%)",
        }}
      />

      {playVideo && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute inset-0 z-[5]"
        >
          <div className="mx-auto flex h-full w-full max-w-[1440px] items-center px-6 pb-16 pt-28 md:px-10 lg:px-16">
            <div className="max-w-5xl">
              <motion.div
                variants={item}
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl md:text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#FFC629] shadow-[0_0_18px_rgba(255,198,41,0.8)]" />
                KEDI Landing Page Studio
              </motion.div>

              <motion.h1
                variants={item}
                className="max-w-5xl text-[clamp(3.2rem,8vw,8rem)] font-black uppercase leading-[0.88] tracking-[-0.055em] text-white"
              >
                Thiết kế
                <span className="block text-[#FFC629]">Landing Page</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/76 md:text-xl lg:text-2xl"
              >
                Biến sự chú ý thành hành động bằng một trải nghiệm rõ ràng,
                có cá tính và được thiết kế xoay quanh mục tiêu chuyển đổi.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#selected-work"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#FFC629] px-6 py-3.5 text-sm font-extrabold text-[#0B2D5B] shadow-[0_16px_40px_rgba(255,198,41,0.18)] transition-transform duration-300 hover:-translate-y-1 md:px-7 md:text-base"
                >
                  Xem dự án
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.12] md:px-7 md:text-base"
                >
                  Xem quy trình
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={item}
            className="absolute bottom-7 right-6 hidden rounded-2xl border border-white/15 bg-[#081F40]/55 p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:block md:right-10 lg:right-16"
          >
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#FFC629]">
              Built around
            </div>
            <div className="flex gap-2 text-xs font-semibold">
              {["Strategy", "UX", "Conversion"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-white/85"
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="absolute bottom-8 left-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45 md:left-10 lg:left-16"
          >
            <span className="h-px w-10 bg-[#FFC629]/70" />
            Scroll to explore
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CoverVideo;
