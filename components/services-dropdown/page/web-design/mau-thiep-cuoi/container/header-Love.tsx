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
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <FadeIn direction="up" amount={0.2}>
      <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#FFFDFC] pt-12">
        
        {/* Đốm hồng làm nền mờ - Giữ lại để tạo chiều sâu nhưng giảm opacity trên mobile */}
        <div className="pointer-events-none absolute -left-20 -top-[20%] h-full w-[600px] bg-[#f44e77]/10 blur-[120px] md:bg-[#f44e77]/15"></div>
        <div className="pointer-events-none absolute -right-20 top-0 h-[420px] w-[420px] rounded-full bg-[#FFC629]/10 blur-[120px]"></div>
        
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
              <div className="flex justify-center md:justify-start">
                <span className="rounded-full border border-[#0B2D5B]/10 bg-[#0B2D5B]/[0.04] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-[#0B2D5B]">
                  KEDI • THIỆP ONLINE
                </span>
              </div>
              
              {/* Căn giữa văn bản trên mobile để đẹp hơn, căn trái trên desktop */}
              <h1 className="text-center font-sans text-4xl font-bold leading-[1.12] tracking-[-0.04em] text-[#0B2D5B] md:text-left md:text-7xl">
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
                cùng{" "}
                <span className="font-serif italic text-[#f44e77]">KEDI Thiệp</span>
              </h1>

              <div className="space-y-6 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                <p className="text-gray-800 text-lg md:text-2xl leading-relaxed font-bold">
                  KEDI Thiệp giúp bạn tạo thiệp online hiện đại, cá nhân hóa nội dung và chia sẻ tới khách mời chỉ trong vài bước.
                </p>

                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                  Vẫn giữ được cảm xúc của một tấm thiệp đẹp, nhưng nhẹ hơn trong khâu chuẩn bị, dễ cập nhật và thuận tiện khi quản lý phản hồi.
                </p>
              </div>
            </div>
           
            <div className="pt-4 flex justify-center md:justify-start">
              <button
                onClick={() => router.push('/mau-thiep')}
                className="group relative flex items-center gap-4 rounded-full bg-[#0B2D5B] px-10 py-4 text-lg font-extrabold text-white shadow-[0_18px_45px_rgba(11,45,91,0.20)] transition-all hover:-translate-y-1 hover:bg-[#081F40] md:px-12 md:py-5 md:text-xl"
              >
                Xem mẫu thiệp
                <Star className="h-5 w-5 fill-[#FFC629] text-[#FFC629] transition-transform duration-500 group-hover:rotate-180 md:h-6 md:w-6" />
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
            animation: wordFade 2.2s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-infinite-scroll,
            .animate-word-fade {
              animation: none;
            }
          }
        `}</style>
      </section>
    </FadeIn>
  );
}