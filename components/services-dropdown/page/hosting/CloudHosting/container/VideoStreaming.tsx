"use client";

import React from 'react';
import FadeIn from '@/components/ui/Fadeoad';
import Boderyelow from "@/components/ui/boder-yelow"; // Đảm bảo import viền vàng

const VideoStreaming = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* TIÊU ĐỀ CHÍNH: Load riêng biệt */}
        <FadeIn direction="up" amount={0.3}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#002855] text-3xl md:text-5xl font-black uppercase mb-6 tracking-tighter">
              Video Streaming
            </h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 font-bold text-lg leading-relaxed italic">
              Giải pháp hạ tầng tối ưu cho truyền dẫn hình ảnh thời gian thực
            </p>
          </div>
        </FadeIn>

        {/* BỐ CỤC NỘI DUNG PHỨC HỢP: Load từng khối */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* KHỐI 1: Ảnh lớn bên trái */}
          <div className="md:col-span-5 relative group">
            <FadeIn direction="up" delay={0.1} amount={0.2}>
              <Boderyelow>
                <div className="rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000" 
                    alt="Yoga streaming" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping"></span> LIVE
                  </div>
                </div>
              </Boderyelow>
              
              {/* Khung nội dung đỏ đè lên ảnh */}
              <div className="md:absolute -bottom-8 -right-8 md:w-80 bg-[#e63946] p-8 rounded-2xl shadow-2xl z-10 text-white transform hover:-translate-y-1 transition-transform">
                <p className="text-sm font-bold leading-relaxed uppercase tracking-wider">
                  Xây dựng hệ thống phát trực tuyến dễ dàng trên nền tảng CloudFly với hệ sinh thái dịch vụ đa dạng.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* KHỐI 2: Cột giữa */}
          <div className="md:col-span-4 space-y-8 flex flex-col justify-center h-full pt-10 md:pt-0">
            <FadeIn direction="up" delay={0.3} amount={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                <p className="text-gray-800 text-sm md:text-base font-bold leading-relaxed">
                  Hệ thống thanh toán linh hoạt cùng băng thông mạng cực lớn giúp tối ưu chi phí vận hành doanh nghiệp.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4} amount={0.2}>
              <Boderyelow>
                <div className="rounded-2xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800" 
                    alt="Gaming stream" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-black uppercase tracking-widest">eSports Pro Stream</span>
                  </div>
                </div>
              </Boderyelow>
            </FadeIn>
          </div>

          {/* KHỐI 3: Cột phải */}
          <div className="md:col-span-3 space-y-8">
            <FadeIn direction="up" delay={0.5} amount={0.2}>
              <div className="bg-[#007bff] p-8 rounded-2xl shadow-xl text-white group hover:bg-blue-600 transition-colors">
                <p className="text-sm font-bold leading-relaxed uppercase tracking-tight">
                  Chủ động giám sát tài nguyên CPU và băng thông để đảm bảo chất lượng dịch vụ phát sóng tốt nhất.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.6} amount={0.2}>
              <Boderyelow>
                <div className="rounded-2xl overflow-hidden relative group mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800" 
                    alt="Stadium stream" 
                    className="h-40 w-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              </Boderyelow>
            </FadeIn>

            <FadeIn direction="up" delay={0.7} amount={0.2}>
              <Boderyelow>
                <div className="rounded-2xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600" 
                    alt="Cooking stream" 
                    className="h-40 w-full object-cover transition-transform duration-1000 group-hover:rotate-1 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 right-4 bg-red-600 text-[9px] text-white font-black px-2 py-0.5 rounded-full shadow-lg">LIVE</div>
                </div>
              </Boderyelow>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoStreaming;