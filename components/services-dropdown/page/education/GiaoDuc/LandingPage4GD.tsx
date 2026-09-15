// components/LangdingPage4GD.tsx
import React from "react";
import Image from "next/image";

import { landingPageGD4Assets } from "./giaoduc";
import FadeIn from "@/components/ui/Fadeoad";

const LangdingPage4GD = () => {
  const { logoKedi, logoKha, trophy } = landingPageGD4Assets;

  return (
    <section className="w-full bg-black text-white font-sans min-h-[600px] flex items-center justify-center overflow-hidden py-16 relative">
      {/* === CSS ANIMATION CHO SAO BĂNG === */}
      <style>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(500px) translateY(-500px);
            opacity: 0;
          }
        }
        .animate-shooting-star {
          animation: shooting-star linear infinite;
        }
      `}</style>

      {/* --- HIỆU ỨNG SAO BĂNG (Shooting Stars Effect) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Tạo nhiều sao băng với vị trí, kích thước và thời gian delay khác nhau */}
        {[...Array(10)].map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = 3 + Math.random() * 4;
          return (
            <span
              key={i}
              className="absolute w-[2px] h-[2px]  rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.1),_0_0_0_8px_rgba(255,255,255,0.1),_0_0_20px_rgba(255,255,255,1)] animate-shooting-star"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                opacity: 0,
              }}
            >
              {/* Đuôi sao băng */}
              <span className="absolute top-1/2 left-0 w-[300px] h-[1px] bg-gradient-to-l from-transparent to-white -translate-y-1/2"></span>
            </span>
          );
        })}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* --- MAIN HEADING (Giữ nguyên style) --- */}
        <h1 className="relative inline-block font-black uppercase text-xl md:text-3xl lg:text-4xl leading-[1.3] tracking-wider mb-6 max-w-4xl mx-auto">
          <FadeIn>
            <span className="absolute top-0 left-0 w-full h-full z-0 block select-none text-transparent [-webkit-text-stroke:1px_white]">
              HỆ THỐNG ĐƯỢC CHÍNH KHÁNH HÙNG CEO CỦA
              <Image
                src={logoKedi}
                alt=""
                width={32}
                height={32}
                className="inline-block h-[0.9em] w-auto align-middle mx-2 -mt-2 opacity-0"
              />
              SỬ DỤNG <br />
              TRONG KHOÁ HỌC
            </span>
          </FadeIn>
          <FadeIn>
            <span className="relative z-10 text-[#d1348f] block drop-shadow-sm">
              HỆ THỐNG ĐƯỢC CHÍNH KHÁNH HÙNG CEO CỦA
              <Image
                src={logoKedi}
                alt="Kedi"
                width={32}
                height={32}
                className="inline-block h-[0.9em] w-auto align-middle mx-2 -mt-2"
              />
              SỬ DỤNG <br />
              TRONG KHOÁ HỌC
            </span>
          </FadeIn>
        </h1>
        <FadeIn>
          {/* --- SUBHEADING --- */}
          <p className="text-white font-bold text-base md:text-lg uppercase flex items-center justify-center gap-3 mb-8 tracking-wide flex-wrap">
            HƯỚNG DẪN KINH DOANH E-LEARNING TỰ ĐỘNG TẠI
            <Image
              src={logoKha}
              alt="Khanh Hung Academy"
              width={80}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </p>
        </FadeIn>

        {/* --- PHẦN MŨI TÊN (Giữ nguyên hiệu ứng nước chảy) --- */}
        <div className="flex justify-center mb-10 cursor-pointer">
          <div className="flex items-center -space-x-4">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 md:w-20 md:h-20 text-yellow-400 drop-shadow-lg animate-bounce"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0.9,
                }}
              >
                <path
                  d="M12 16L6 10H9L12 13L15 10H18L12 16Z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            ))}
          </div>
        </div>
        <FadeIn>
          {/* --- DESCRIPTION --- */}
          <p className="text-white/80 text-base md:text-lg mb-4 font-medium">
            Tính từ 2024 đến nay, hệ thống KEDI ELearning đã có
          </p>

          {/* --- TROPHY --- */}
          <div className="relative inline-block mb-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#ff57b4] blur-3xl opacity-50 rounded-full -z-10 animate-pulse"></div>
            <Image
              src={trophy}
              alt="Trophy"
              width={96}
              height={96}
              className="w-20 md:w-24 h-auto relative z-10 drop-shadow-lg animate-[bounce_3s_infinite]"
            />
          </div>

          {/* --- BOTTOM HEADING (Giữ nguyên style) --- */}
          <h3 className="relative inline-block font-black uppercase text-lg md:text-2xl lg:text-3xl leading-tight tracking-wider mt-2">
            <span className="absolute top-0 left-0 w-full h-full z-0 block select-none text-transparent [-webkit-text-stroke:1px_white]">
              HƠN 400+ anh chị giảng viên ĐÃ RA KHOÁ
            </span>
            <span className="relative z-10 block text-[#fcd34d]">
              HƠN 400+ anh chị giảng viên ĐÃ RA KHOÁ
            </span> 
          </h3>
        </FadeIn>
      </div>
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2">
        <svg viewBox="0 0 1440 320" className="w-full h-auto fill-white">
          <path d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default LangdingPage4GD;
