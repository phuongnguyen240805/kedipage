'use client';

import React from 'react';
import FadeIn from '@/components/ui/Fadeoad';
import Boderyelow from '@/components/ui/boder-yelow';

export default function Training() {
  const points = [
    "Chương trình đào tạo thực chiến, giúp nhân sự thấu hiểu quy trình vận hành phần mềm.",
    "Thiết kế lộ trình riêng biệt phù hợp với trình độ CNTT của từng bộ phận.",
    "Hỗ trợ kỹ thuật 24/7 trong suốt quá trình triển khai và vận hành.",
  ];

  return (
    <section
      className="bg-[#121212] relative overflow-hidden py-24 px-6 md:px-10" 
      id="training"
    >
      {/* Glow nền - Chuyển sang z-0 và thêm pointer-events-none */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* CỘT HÌNH ẢNH */}
        <div className="relative group w-full order-2 lg:order-1">
          <FadeIn direction="up" amount={0.3}>
            <Boderyelow>
              <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-2xl aspect-[4/3] border border-white/5">
                <img
                  alt="Training session"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

                {/* Tag thông tin */}
                <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl transform transition-transform group-hover:-translate-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-400 text-2xl">school</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] leading-none mb-1">Mastery Program</p>
                      <p className="font-black text-white text-base uppercase tracking-tight">ERP EXPERT 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </Boderyelow>
          </FadeIn>
        </div>

        {/* CỘT NỘI DUNG */}
        <div className="space-y-10 order-1 lg:order-2">
          <FadeIn direction="up" amount={0.3}>
            <div className="space-y-5">
              <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] uppercase text-white tracking-tighter">
                Đào tạo chuyên sâu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                  Làm chủ công nghệ
                </span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-md font-medium border-l-4 border-orange-500 pl-5 italic leading-relaxed">
                Nâng cao năng lực đội ngũ, tối ưu hiệu quả sử dụng hệ thống ERP thực tế.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {points.map((text, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} amount={0.2}>
                <div className="flex gap-6 items-center group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:border-orange-500 shadow-xl">
                      <span className="text-orange-500 group-hover:text-black font-black font-mono text-xl transition-colors">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="text-zinc-300 text-base md:text-lg font-bold leading-tight group-hover:text-white transition-colors">
                      {text}
                    </p>
                    <div className="w-12 h-[2px] bg-zinc-800 transition-all duration-500 group-hover:w-full group-hover:bg-orange-500"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.4}>
            <button className="bg-white hover:bg-orange-500 hover:text-white transition-all duration-500 text-black px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center gap-4 shadow-2xl active:scale-95 group">
              XEM CHI TIẾT ĐÀO TẠO
              <span className="material-symbols-outlined text-xl font-bold group-hover:translate-x-2 transition-transform">groups</span>
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}