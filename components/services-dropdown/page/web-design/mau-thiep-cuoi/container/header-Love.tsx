"use client";

import React, { useState, useEffect } from "react";
import FadeIn from '@/components/ui/Fadeoad';
import Image from "next/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroZenLove() {
  const router = useRouter();
  const bgImage =
    "https://zenlove.me/_next/image?url=%2Fassets%2Fimages%2Fhero-pc.png&w=1200&q=75";

  const words = [
    "lời chúc",
    "đám cưới",
    "tân gia",
    "sinh nhật",
    "tốt nghiệp",
    "sự kiện",
    "kỷ niệm",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <FadeIn direction="up" amount={0.2}>
      <section className="relative bg-white pt-10 overflow-hidden flex min-h-[600px] items-center">
        
        {/* Đốm hồng làm nền mờ - Giữ lại để tạo chiều sâu nhưng giảm opacity trên mobile */}
        <div className="absolute -top-[20%]  -left-20 w-[600px] h-full bg-[#f91b7e]/10 md:bg-[#f91b7e]/15 blur-[120px] pointer-events-none"></div>
        
        {/* 1. HÌNH NỀN CUỘN VÔ TẬN - CHỈ HIỆN TRÊN DESKTOP (lg:block) */}
        <div className="hidden lg:block absolute top-0 right-0 w-full h-full max-w-[calc(100%-60px)] z-0 pointer-events-none">
          <div className="relative w-full h-full flex flex-col animate-infinite-scroll">
            <div className="absolute -left-20 w-full h-full bg-white/70 blur-[120px] pointer-events-none z-[5]"></div>
            <div className="relative w-full h-full flex-shrink-0">
              <Image
                src={bgImage}
                alt="ZenLove Collage Layer 1"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
            <div className="relative w-full h-full flex-shrink-0">
              <Image
                src={bgImage}
                alt="ZenLove Collage Layer 2"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>

        {/* 2. NỘI DUNG VĂN BẢN */}
        <div className="container max-w-[calc(100%-60px)] mx-auto px-4 md:px-10 z-20 relative">
          <div className="max-w-5xl space-y-8">
            <div className="space-y-6">
              
              {/* Căn giữa văn bản trên mobile để đẹp hơn, căn trái trên desktop */}
              <h1 className="text-4xl md:text-7xl font-sans text-[#1a1a1a] leading-[1.2] tracking-tighter text-center md:text-left">
                Chúng tôi đang thay đổi <br />
                cách gửi{" "}
                <span className="relative inline-block min-w-[150px] md:min-w-[350px]">
                  <span
                    key={words[index]}
                    className="text-[#f44e77] italic font-serif animate-word-fade inline-block"
                  >
                    {words[index]}
                  </span>
                </span>
                <br />
                với{" "}
                <span className="text-[#f44e77] italic font-serif">ZenLove</span>
              </h1>

              <div className="space-y-6 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                <p className="text-gray-800 text-lg md:text-2xl leading-relaxed font-bold">
                  ZenLove là ứng dụng tạo thiệp online đột phá - thay vì gửi thiệp
                  giấy truyền thống qua tay.
                </p>

                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                  ZenLove có nhiều mẫu thiệp đa dạng và tính năng tùy chỉnh linh
                  hoạt, giúp bạn tiết kiệm thời gian và chi phí in ấn.
                </p>
              </div>
            </div>
           
            <div className="pt-4 flex justify-center md:justify-start">
              <button
                onClick={() => router.push('/mau-thiep')}
                className="group relative flex items-center gap-4 bg-[#e8455b] text-white px-10 py-4 md:px-12 md:py-5 rounded-full text-lg md:text-xl font-extrabold transition-all shadow-[0_15px_30px_rgba(232,69,91,0.3)] hover:shadow-[#e8455b]/50 hover:-translate-y-1 active:scale-95"
              >
                Bắt đầu
                <Star className="w-5 h-5 md:w-6 md:h-6 fill-white group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100%); }
          }

          @keyframes wordFade {
            0% { opacity: 0; transform: translateY(10px); filter: blur(5px); }
            20% { opacity: 1; transform: translateY(0); filter: blur(0); }
            80% { opacity: 1; transform: translateY(0); filter: blur(0); }
            100% { opacity: 0; transform: translateY(-10px); filter: blur(5px); }
          }

          .animate-infinite-scroll {
            animation: scroll 40s linear infinite;
          }

          .animate-word-fade {
            animation: wordFade 1.5s ease-in-out infinite;
          }
        `}</style>
      </section>
    </FadeIn>
  );
}