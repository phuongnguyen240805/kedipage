'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import FadeIn from '@/components/ui/Fadeoad';
import Link from 'next/link';

export default function RSVPFooter() {
  return (
 
    <section className="flex justify-center bg-white px-4 py-24">
      {/* Container chính với viền hồng nhạt và bo góc lớn */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[3rem] border border-[#0B2D5B]/10 bg-[#0B2D5B] p-12 text-center shadow-[0_28px_80px_rgba(11,45,91,0.18)] md:p-20">
         <FadeIn>
        {/* Hiệu ứng đốm mờ trang trí ở góc (Blur Blobs) */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFC629]/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFC629]/20 rounded-full blur-3xl opacity-50"></div>

        {/* Icon phong bì phía trên tiêu đề */}
        <div className="flex justify-center mb-6">
          <div className="rounded-2xl bg-[#FFC629] p-3 text-[#0B2D5B]">
            <Mail size={32} strokeWidth={1.5} />
          </div>
        </div>
        {/* Nội dung thông báo */}
        <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">
          Một lời mời đẹp nên bắt đầu bằng trải nghiệm đẹp.
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg font-medium leading-relaxed text-white/70 md:text-xl">
          Chọn một mẫu phù hợp, cá nhân hóa nội dung và gửi lời mời của bạn theo cách gọn gàng hơn.
        </p>
        {/* Nút bấm Open RSVP Form */}
        <div className="space-y-6">
          <Link href="/mau-thiep" className="inline-flex rounded-full bg-[#FFC629] px-12 py-4 text-lg font-extrabold text-[#0B2D5B] shadow-[0_14px_35px_rgba(255,198,41,0.20)] transition hover:-translate-y-1">
            Xem mẫu thiệp
          </Link>

          {/* Email hỗ trợ phía dưới */}
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 md:text-xs">
            KEDI • DIGITAL INVITATION EXPERIENCE
          </p>
        </div></FadeIn>
      </div>
    </section>
  );
}