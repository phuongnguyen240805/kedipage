'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Check } from 'lucide-react';
import FadeIn from '@/components/ui/Fadeoad';

const logoMona = 'https://mona.media/template/assets/images/about/logo-mona.png';

const LandingPage9GD = () => {
  const items = [
    {
      title: 'Thiết kế mới giao diện website ngoài và trong',
      desc: '(Landing Page có login, register ngay trên trang, có liên kết tài khoản giữa các Landing Page và hệ thống)',
      price: null,
      originalPrice: null,
    },
    {
      title: 'MONA E-Learning Base:',
      desc: '',
      price: null,
      originalPrice: '500.000.000 Đ',
    },
    {
      title: 'Hệ thống Special Offer:',
      desc: '',
      price: null,
      originalPrice: '155.000.000 Đ',
    },
    {
      title: 'Hệ Thống Affiliate:',
      desc: '',
      price: null,
      originalPrice: '100.000.000 Đ',
    },
    {
      title: 'Hệ thống phân loại học viên HOT/Indie/Cold hoàn chỉnh và Automation Sales:',
      desc: '',
      price: null,
      originalPrice: '50.000.000 Đ',
    },
    {
      title: 'Hệ thống Email Marketing, Email Re-marketing với Email List động hoàn chỉnh:',
      desc: '',
      price: null,
      originalPrice: '75.000.000 Đ',
    },
    {
      title: 'Nền tảng server video MVP:',
      desc: '(Gói 100GB - MVP 50)',
      price: '700.000 Đ/THÁNG',
      isStrikeDescription: true,
    },
    {
      title: 'Nền tảng server video DRM:',
      desc: '(Gói Mona DRM 5K views)',
      price: '4.000.000 Đ/THÁNG',
      isStrikeDescription: true,
    },
    {
      title: 'Hosting:',
      desc: '(Gói Mona Linux VPS X-Large: 8 CPU, 16GB RAM)',
      price: '4.200.000 Đ/THÁNG',
      isStrikeDescription: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#2e0249] flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
      
      {/* Main Container */}
      <div className="relative w-full max-w-7xl bg-[#3b065e] rounded-[40px] p-6 md:p-10 text-white shadow-2xl overflow-hidden mt-10">
        
        {/* === NỬA HÌNH TRÒN TẠO CẢM GIÁC UỐN === */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200px] bg-gradient-to-b from-[#ff0099]/20 to-transparent rounded-[100%] blur-3xl pointer-events-none" />
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-[#2e0249] rounded-[100%] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10" />

        {/* Header Section */}
        <FadeIn>
          <div className="relative z-20 text-center mb-10 space-y-2 pt-4">
            <p className="text-sm md:text-base font-medium text-pink-300 uppercase tracking-[0.3em]">
              Đặc biệt đơn giản hóa giúp các giảng viên
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-white/90">
              CÓ NGAY 01 WEBSITE E-Learning chuyên nghiệp nhất
            </h2>
            <h1 className="text-2xl md:text-4xl font-extrabold mt-3 text-white drop-shadow-lg uppercase tracking-tight">
              Giải pháp E-Learning <span className="text-[#ff0099]">Bundle</span> - Thanh toán THEO THÁNG
            </h1>
          </div>
        </FadeIn>

        {/* Feature Check List */}
        <FadeIn delay={0.2}>
          <div className="mb-12 bg-black/20 backdrop-blur-md p-6 rounded-3xl border border-white/5 shadow-inner">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-[#ff0099]">
              MONA E-Learning Bundle đã bao gồm:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 text-sm md:text-base">
              {[
                { text: 'Toàn bộ tất cả những tính năng đang có ở', hasLogo: true },
                { text: 'Được Update liên tục theo', hasLogo: true },
                { text: 'Tuyệt đối không code những tính năng KHÔNG AUTOMATION' },
                { text: 'Các tính năng hỗ trợ vận hành VẪN ĐƯỢC KÈM THEO NẾU YÊU CẦU.' },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="bg-green-500 rounded-full p-0.5 mt-0.5">
                    <Check className="text-white w-4 h-4" strokeWidth={4} />
                  </div>
                  <p className="leading-relaxed text-gray-200">
                    {feature.text}
                    {feature.hasLogo && (
                      <Image
                        src={logoMona}
                        alt="Mona"
                        width={32}
                        height={32}
                        className="inline-block h-[0.9em] w-auto align-middle mx-2 -mt-1 brightness-125"
                      />
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 relative z-10">
          {items.map((item, index) => (
            <FadeIn key={index} delay={0.1 * (index % 3)}>
              <div className="group h-full bg-[#2e0249]/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-[#ff0099]/10 hover:border-[#ff0099]/50 transition-all duration-500 hover:-translate-y-2">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-green-600 to-green-400 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center w-fit gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-white" />
                    ĐÃ BAO GỒM
                  </span>
                </div>

                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-bold mb-2 text-white group-hover:text-[#ff0099] transition-colors">
                    {item.title}
                  </h4>
                  {item.desc && (
                    <p className={`text-xs text-gray-400 italic mb-2 leading-relaxed ${item.isStrikeDescription ? 'line-through opacity-30' : ''}`}>
                      {item.desc}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5">
                  {item.originalPrice ? (
                    <p className="text-xl md:text-2xl font-black text-gray-600 line-through font-mono italic">
                      {item.originalPrice}
                    </p>
                  ) : item.price ? (
                    <p className="text-lg md:text-xl font-bold text-white font-mono text-right">
                      {item.price}
                    </p>
                  ) : (
                    <p className="text-[10px] font-bold text-green-500 uppercase">Gói Bundle tối ưu</p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage9GD;