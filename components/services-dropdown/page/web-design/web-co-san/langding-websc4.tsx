'use client';

import React from 'react';
import { Zap, Lock } from 'lucide-react';
import FadeIn from '@/components/ui/Fadeoad';
import BorderRunning from '@/components/ui/BorderRunning';

export default function Langdingwebsc4() {
  return (
    <section className="relative bg-white py-24 overflow-hidden text-black">
      {/* Background Clouds & Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-white/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-400/30 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl text-yellow-400 font-black mb-4 leading-tight">
            Nếu bạn chưa tìm được mẫu website
          </h2>
          <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Thì hãy liên hệ ngay với KEDI
          </h3>
          <p className="text-3xl md:text-5xl font-black mb-16 text-[#f98a22]">
            để được tư vấn những mẫu website ưng ý
          </p>
        </FadeIn>

        {/* Nút liên hệ phát sáng (Glowing Button) */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mb-12 flex justify-center">
            {/* Vòng chấm chấm phát sáng */}
            <BorderRunning color='#9751F8' glowColor='rgba(110, 35, 108, 0.8)' >
              <button className="flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#7a39e3] to-[#a259ff] rounded-2xl shadow-[0_0_40px_rgba(162,89,255,0.6)] hover:scale-105 transition-all group border border-white/20">
                <div className="bg-yellow-400 p-2 rounded-full text-[#6200ea] shadow-lg group-hover:rotate-12 transition-transform">
                  <Zap size={28} fill="currentColor" />
                </div>
                <div className="text-left">
                  <span className="block text-2xl font-black uppercase tracking-tight">
                    Liên hệ KEDI ngay!
                  </span>
                  <span className="block text-sm font-medium opacity-80 italic">
                    Để được tư vấn thêm về mẫu website
                  </span>
                </div>
              </button>
            </BorderRunning>
          </div>
        </FadeIn>

        {/* Cam kết bảo mật */}
        <FadeIn direction="up" delay={0.3}>
          <div className="flex flex-col items-center gap-4 mb-16">
            <div className="px-8 py-3 border border-dashed border-green-400/50 rounded-xl bg-green-400/10 backdrop-blur-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2">
                <Lock size={16} className="text-yellow-400" />
              </div>
              <p className="text-sm md:text-base font-medium opacity-90 max-w-md">
                KEDI cam kết tuyệt đối không sử dụng thông tin của bạn để bán
                hoặc SPAM
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Hotline Section */}
        <FadeIn direction="up" delay={0.4}>
          <div className="space-y-6">
            <h4 className="text-xl md:text-2xl font-black uppercase tracking-widest">
              Hoặc gọi ngay Hotline dưới đây
            </h4>

            <div className="inline-block relative group">
              {/* Khung Hotline chuẩn thiết kế Kedi */}
              <div className="bg-[#112a73] px-16 py-6 rounded-2xl border-2 border-dashed border-yellow-400/50 shadow-2xl relative overflow-hidden">
                <span className="text-5xl md:text-7xl font-black text-[#f98a22] tracking-tighter transition-colors group-hover:text-white">
                  1900 636 648
                </span>

                {/* Hiệu ứng tia sáng quét qua */}
                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
               {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2">
        <svg viewBox="0 0 1440 320" className="w-full h-auto fill-[#6200ea]">
          <path d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
