'use client';

import React from 'react';
import FadeIn from '@/components/ui/Fadeoad';
import Boderyelow from '@/components/ui/boder-yelow';

export default function Customization() {
  const steps = [
    { id: "01", title: "Khảo sát yêu cầu chi tiết" },
    { id: "02", title: "Xây dựng lộ trình phát triển" },
    { id: "03", title: "Triển khai & Kiểm thử" },
    { id: "04", title: "Bàn giao & Đào tạo" }
  ];

  return (
    <section className="px-[30px] bg-[#121212] relative overflow-hidden" id="customization">
      {/* Glow nền phía sau ảnh để tạo chiều sâu */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* CỘT TRÁI: NỘI DUNG CHỮ */}
          <div className="space-y-8">
            <FadeIn direction="up" amount={0.3}>
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black leading-tight uppercase text-white tracking-tighter">
                  TÙY CHỈNH PHẦN MỀM <br/>
                  <span className="text-orange-500">THEO YÊU CẦU ĐẶC THÙ</span>
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed max-w-md font-medium border-l-2 border-zinc-700 pl-4">
                  Tối ưu hóa quy trình vận hành dựa trên chính bài toán thực tế của doanh nghiệp, đảm bảo tính tương thích tuyệt đối.
                </p>
              </div>
            </FadeIn>

            {/* Grid các bước */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((step, index) => (
                <FadeIn key={step.id} direction="up" delay={index * 0.1} amount={0.2}>
                  <Boderyelow>
                    <div className="bg-zinc-900/50 backdrop-blur-md p-4 px-5 rounded-xl flex items-center gap-4 group transition-all duration-300">
                      <span className="text-orange-500 font-black text-xl group-hover:scale-110 transition-transform">
                        {step.id}
                      </span>
                      <p className="text-xs md:text-sm text-zinc-300 font-black uppercase tracking-wider">
                        {step.title}
                      </p>
                    </div>
                  </Boderyelow>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.4}>
              <button className="bg-white hover:bg-orange-500 hover:text-white text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 transition-all group shadow-2xl active:scale-95">
                TÌM HIỂU DỊCH VỤ
              </button>
            </FadeIn>
          </div>

          {/* CỘT PHẢI: ẢNH MOCKUP 3D */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative flex justify-center items-center [perspective:1200px] py-10">
              {/* Khối chứa ảnh đã bỏ Absolute để tự căn giữa cột */}
              <div className="w-full max-w-lg [transform:rotateY(-20deg)_rotateX(10deg)] hover:[transform:rotateY(-5deg)_rotateX(2deg)] transition-all duration-700 ease-out group">
                <Boderyelow>
                  <div className="relative rounded-xl overflow-hidden bg-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                    <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                      <img 
                        src="https://erpviet.vn/thumb/diepanh/x1-copy-63_400_225.png.pagespeed.ic.bEB_VR5Xw9.webp" 
                        alt="ERP Preview" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </Boderyelow>

                {/* Chân đế hoặc bóng đổ giả lập */}
                <div className="w-40 h-2 bg-orange-500/20 blur-xl mx-auto mt-4"></div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}