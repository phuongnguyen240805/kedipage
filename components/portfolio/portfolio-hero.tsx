"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/Fadeoad";
import { Rocket, Eye, Phone, Play } from "lucide-react";
import ScrollRevealHighlight from "@/components/ui/ScrollRevealHighlight";
import Boderyelow from "@/components/ui/boder-yelow";

export default function PortfolioHero() {
  const [isStarted, setIsStarted] = useState(false);

  // ID video lấy từ link Shorts: vZuzchxHQRY
  const youtubeId = "vZuzchxHQRY";

  const scrollToSection = () => {
    const element = document.getElementById("section-mau-web");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-kedi-navy">
      {/* 1. BACKGROUND LAYERS */}
      <div
        className="absolute inset-0 z-0 select-none opacity-25"
        style={{
          backgroundImage: "url('https://assets.kedi.media/images/236244d3329e087e4868-1672.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Hiệu ứng Glow nền */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-kedi-yellow/15 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#2e76c5]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* 2. NỘI DUNG CHÍNH */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl w-full pt-10 pb-20">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-kedi-yellow/30 text-white text-xs md:text-sm mb-8 backdrop-blur-2xl shadow-xl">
              <Rocket size={16} className="text-kedi-yellow" />
              <span className="tracking-widest uppercase font-semibold">
                KEDI PROJECTS · WEBSITE · SOFTWARE · AI
              </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              <span className="bg-gradient-to-r from-kedi-yellow via-[#ffe28a] to-kedi-yellow bg-clip-text text-transparent">
                2000+ DỰ ÁN ĐÃ TRIỂN KHAI
              </span>
              <br />
             
                ĐA LĨNH VỰC - ĐA NGÀNH NGHỀ
             <br/>
             
                SÁNG TẠO - HIỆU QUẢ - UY TÍN
              
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mb-16 px-4 md:px-0">
            <Boderyelow>
              <button className="whitespace-nowrap px-6 py-3 md:px-10 md:py-4 bg-kedi-yellow hover:bg-[#ffd95e] text-kedi-navy font-black rounded-xl md:rounded-xl transition-all shadow-[0_12px_30px_rgba(255,198,41,0.25)] flex items-center justify-center gap-2 md:gap-3 uppercase text-xs md:text-base">
                <Phone size={16} className="md:w-5 md:h-5" />
                <span>Liên hệ với KEDI</span>
              </button>
            </Boderyelow>
            <Boderyelow>
              <button onClick={scrollToSection} className="w-full sm:w-auto">
                <ScrollRevealHighlight className="w-full px-6 py-3 md:px-10 md:py-4 bg-white/10 text-white backdrop-blur-3xl font-black rounded-xl border border-white/10 flex items-center justify-center gap-2 md:gap-3 uppercase text-xs md:text-base whitespace-nowrap">
                  <Eye size={16} className="md:w-5 md:h-5" />
                  <span>Xem website mẫu →</span>
                </ScrollRevealHighlight>
              </button>
            </Boderyelow>
          </div>
        </FadeIn>

        {/* VIDEO SECTION */}
        <div
          className="relative w-full max-w-3xl mx-auto group cursor-pointer"
          onClick={() => setIsStarted(true)}
        >
          <Boderyelow>

            <div className="relative rounded-xl overflow-hidden shadow-2xl  bg-black aspect-video">
              {!isStarted ? (
                // Đây là phần bạn đang nhìn thấy (Ảnh tĩnh)
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <img
                    src="https://assets.kedi.media/images/236244d3329e087e4868-1672.webp"
                    className="w-full h-full object-cover opacity-55"
                    alt="thumbnail"
                  />
                  {/* Nút Play trung tâm */}
                  <div className="absolute w-20 h-20 flex items-center justify-center rounded-full bg-kedi-yellow text-kedi-navy shadow-2xl transition-transform group-hover:scale-110">
                    <Play size={40} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              ) : (
                // Đây là phần Video (Chỉ hiện khi đã Click)
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </Boderyelow>
        </div>
      </div>
    </section>
  );
}
