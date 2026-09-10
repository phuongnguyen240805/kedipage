"use client";

import React from 'react';
import FadeIn from '@/components/ui/Fadeoad';
import Boderyelow from "@/components/ui/boder-yelow"; // Import viền vàng đồng bộ

const StartupService = () => {
  const startupBenefits = [
    {
      title: "Tiết kiệm thời gian",
      desc: "Giảm thiểu thời gian triển khai, loại bỏ mọi sự phức tạp để Startup của bạn ra mắt sản phẩm sớm nhất với nền tảng đám mây của chúng tôi",
      icon: "https://cloudfly.vn/image/solution/icon_lock.svg",
    },
    {
      title: "Thanh toán tự động",
      desc: "Tiết kiệm chi phí vận hành tối đa cho Startup của bạn với hệ thống thanh toán theo chu kỳ theo giờ, tháng, năm linh hoạt và có thể dự đoán được",
      icon: "https://cloudfly.vn/image/solution/icon_calendar.svg",
    },
    {
      title: "Hạn chế rủi ro",
      desc: "Rút ngắn quy trình vận hành doanh nghiệp, hạn chế rủi ro và phát triển nhanh chóng cho Startup của bạn",
      icon: "https://cloudfly.vn/image/solution/icon_darts.svg",
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* TIÊU ĐỀ: Xuất hiện riêng biệt */}
        <FadeIn direction="up" amount={0.3}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#1C0B2B] text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter">
              START UP
            </h2>
            <p className="text-purple-600 font-bold text-lg leading-relaxed uppercase tracking-[0.2em]">
              Bệ phóng hạ tầng cho doanh nghiệp mới
            </p>
            <div className="w-20 h-1.5 bg-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>
        </FadeIn>

        {/* LƯỚI THẺ: Load từng cái một */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {startupBenefits.map((benefit, index) => (
            <FadeIn 
              key={index} 
              direction="up" 
              delay={index * 0.2} // Thẻ 1: 0s, Thẻ 2: 0.2s, Thẻ 3: 0.4s
              amount={0.2}
            >
              <Boderyelow>
                <div 
                  className="bg-white p-10 rounded-2xl h-full flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Hình ảnh minh họa (Icon 3D) */}
                  <div className="mb-10 w-32 h-32 flex items-center justify-center relative">
                    <img 
                      src={benefit.icon} 
                      alt={benefit.title} 
                      className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" 
                    />
                    {/* Hiệu ứng hào quang phía sau icon */}
                    <div className="absolute inset-0 bg-purple-100 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity -z-10"></div>
                  </div>
                  
                  {/* Nội dung thẻ */}
                  <h3 className="text-[#1C0B2B] text-2xl font-black mb-5 uppercase tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              </Boderyelow>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupService;