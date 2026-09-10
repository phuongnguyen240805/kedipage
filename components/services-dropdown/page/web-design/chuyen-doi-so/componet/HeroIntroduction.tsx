"use client";

import React from "react";
import FadeIn from "@/components/ui/Fadeoad";
import Boderyelow from "@/components/ui/boder-yelow";
import RegisterModal from "./Register-chuyen-doi";

export default function HeroIntroduction() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    /* THÊM py-20 để giãn cách trên dưới tự nhiên, PX giữ nguyên 20px */
    <section className="px-[30px] py-20 bg-[#121212] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* PHẦN TIÊU ĐỀ & CTA */}
        <FadeIn direction="up">
          <div className="text-center space-y-6 mb-20"> {/* Thêm mb-20 để tạo khoảng cách với phần dưới */}
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
              Bứt phá tăng trưởng với <br />
              <span className="text-orange-500">giải pháp thiết kế riêng</span>
            </h1>
            <p className="max-w-4xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed">
              80 Module cốt lõi và hơn 26.000 ứng dụng tùy chỉnh, Mona đã dần
              thế chỗ hầu hết phần mềm quản trị doanh nghiệp riêng lẻ, giúp
              doanh nghiệp gia tăng doanh số bền vững trong dài hạn.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white hover:bg-orange-500 hover:text-white text-black px-10 py-4 rounded-xl font-black transition-all uppercase tracking-widest text-sm shadow-xl active:scale-95"
              >
                Dùng thử miễn phí
              </button>
              <button className="px-10 py-4 border-2 border-zinc-700 hover:border-orange-500 text-zinc-300 hover:text-white font-black rounded-xl transition-all uppercase tracking-widest text-sm">
                Bảng giá
              </button>
            </div>
          </div>
        </FadeIn>

        {/* PHẦN VIDEO GIỚI THIỆU & THÀNH TỰU */}
        {/* ĐÃ XÓA ml-[30px] để căn giữa hoàn hảo với tiêu đề */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Về chúng tôi
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg border-l-4 border-orange-500 pl-6">
                Hệ thống phần mềm quản trị doanh nghiệp Mona ra đời với mục
                đích giúp các doanh nghiệp ứng dụng CNTT để quản trị hiệu quả,
                nâng cao trình độ nhân sự và gia tăng lợi nhuận.
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="text-3xl font-black text-orange-500">5000+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Khách hàng</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-orange-500">10+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Năm kinh nghiệm</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            {/* Giảm py-10 xuống nếu bạn thấy khối video quá cao */}
            <div className="relative flex justify-center items-center [perspective:1200px] py-6">
              <div
                className={`w-full max-w-lg transition-all duration-700 ease-out group ${
                  !isPlaying ? "[transform:rotateY(-15deg)_rotateX(5deg)]" : ""
                }`}
              >
                <Boderyelow>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 shadow-2xl border border-white/5">
                    {!isPlaying ? (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                      >
                        <img
                          src="https://img.youtube.com/vi/HFQrc7WuGTk/maxresdefault.jpg"
                          alt="Video Cover"
                          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform">
                                <svg width="20" height="24" viewBox="0 0 14 16" fill="white" className="ml-1">
                                    <path d="M13 8L1 15L1 1L13 8Z" />
                                </svg>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-orange-500/20 transition-colors">
                            <svg width="12" height="14" viewBox="0 0 14 16" fill="white" className="ml-0.5">
                                <path d="M13 8L1 15L1 1L13 8Z" />
                            </svg>
                          </div>
                          <p className="text-xs font-bold uppercase tracking-widest text-white/80">
                            Xem phim giới thiệu
                          </p>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/HFQrc7WuGTk?autoplay=1&rel=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </Boderyelow>
                {/* Bóng đổ giả lập dưới video */}
                <div className="w-48 h-3 bg-orange-500/10 blur-2xl mx-auto mt-6 rounded-[100%]"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}