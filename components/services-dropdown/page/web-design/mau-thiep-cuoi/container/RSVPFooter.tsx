'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import FadeIn from '@/components/ui/Fadeoad';

export default function RSVPFooter() {
  return (
 
    <section className="py-20 bg-white flex justify-center px-4">
      {/* Container chính với viền hồng nhạt và bo góc lớn */}
      <div className="relative max-w-4xl w-full border border-pink-400 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden bg-white shadow-sm">
         <FadeIn>
        {/* Hiệu ứng đốm mờ trang trí ở góc (Blur Blobs) */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-50 rounded-full blur-3xl opacity-50"></div>

        {/* Icon phong bì phía trên tiêu đề */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#cb8096] p-3 rounded-lg text-white">
            <Mail size={32} strokeWidth={1.5} />
          </div>
        </div>
        {/* Nội dung thông báo */}
        <p className="text-gray-600 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed mb-12">
          cần hỗ trợ xin vui lòng liên hệ chúng tôi qua email bên dưới hoặc nhấn nút để mở form RSVP.
        </p>
        {/* Nút bấm Open RSVP Form */}
        <div className="space-y-6">
          <button className="bg-[#cb8096] hover:bg-[#b56d82] text-white px-16 py-5 rounded-2xl text-lg font-bold tracking-widest uppercase transition-all shadow-[0_10px_20px_rgba(203,128,150,0.3)] hover:shadow-[0_15px_30px_rgba(203,128,150,0.4)] hover:-translate-y-1 active:scale-95">
           liên hệ ngay
         </button>

          {/* Email hỗ trợ phía dưới */}
          <p className="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-[0.2em]">
            Questions? EMAIL@EXAMPLE.COM
          </p>
        </div></FadeIn>
      </div>
    </section>
  );
}