"use client";

import { motion, Variants } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MainVideo = "/WalkingGirl.mp4";

interface CoverVideoProps {
  playVideo: boolean;
}

// Animation variants cho chữ hiện ra sau khi Logo vẽ xong
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5, // Chữ hiện ra ngay sau khi màn đen biến mất
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CoverVideo: React.FC<CoverVideoProps> = ({ playVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Logic điều khiển Video chạy sau khi Logo load xong
  useEffect(() => {
    if (videoRef.current) {
      if (playVideo) {
        videoRef.current.play().catch((error) => {
          console.log("Video play failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [playVideo]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Lớp phủ tối (Overlay) */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Title & Slogan - Chỉ hiện thị khi playVideo là true */}
      {playVideo && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute inset-0 z-[5] flex flex-col justify-center items-center text-white px-4 md:px-10"
        >
          {/* Chữ Wibe */}
          <div className="flex flex-row space-x-1 md:space-x-4">
            {["W", "i", "b", "e"].map((char, index) => (
              <motion.h1
                key={index}
                variants={item}
                className="font-['Kaushan_Script'] text-[clamp(4rem,15vw,12rem)] leading-none shadow-black drop-shadow-2xl"
                style={{ fontFamily: "'Kaushan Script', cursive" }}
              >
                {char}
              </motion.h1>
            ))}
          </div>

          {/* Slogan H2 - Đã fix lỗi vỡ layout Mobile */}
          <motion.h2
            variants={item}
            className="
              mt-6
              md:mt-0 
              md:self-end 
              md:mr-[10vw] 
              font-['Sirin_Stencil'] 
              text-[1.1rem] 
              sm:text-[1.5rem] 
              md:text-[2.2rem] 
              font-medium 
              capitalize 
              tracking-[0.2em] 
              text-center 
              md:text-right
              drop-shadow-md
            "
            style={{ fontFamily: "'Sirin Stencil', sans-serif" }}
          >
            Truyền cảm hứng. Sáng tạo. Tin tưởng
          </motion.h2>
        </motion.div>
      )}

      {/* Video Background - Xóa autoPlay để chờ Logo báo hiệu */}
      <video
        ref={videoRef}
        src={MainVideo}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default CoverVideo;
