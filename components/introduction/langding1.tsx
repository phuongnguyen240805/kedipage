'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { HERO_TITLE, heroPhrases } from './data';
import { HeroTitle, Pill } from './common';
import Boderyelow from '@/components/ui/boder-yelow';

export default function Langding1Hero() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Logic GSAP giữ nguyên như cũ
    if (heroTextRef.current) {
      const paragraphs = heroTextRef.current.querySelectorAll('p');
      gsap.fromTo(paragraphs, 
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.9, delay: 0.25, ease: 'power2.out', stagger: 0.12 }
      );
    }

    if (heroCardRef.current) {
      gsap.fromTo(heroCardRef.current,
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0.3 },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1, duration: 1, delay: 0.35, ease: 'power4.out' }
      );
    }
  }, []);

  return (
    /* SỬA: mx-auto và max-w-[calc(100%-60px)] để khớp lề 3cm */
    <header className="mx-auto max-w-[calc(100%-60px)] w-full flex flex-col">
      
      <div className="flex flex-col gap-4 text-white">
        <HeroTitle text={HERO_TITLE} />
      </div>
      <div className="grid gap-[4vw] lg:grid-cols-2 lg:items-stretch text-white">
        
        {/* Cột trái: Text */}
        <div
          ref={heroTextRef}
          className="intro-hero-text flex flex-col justify-center gap-6 text-[clamp(16px,1.1vw,20px)] leading-relaxed text-white/90"
        >
          {heroPhrases.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {/* Cột phải: Card viền vàng */}
        <div className="flex flex-col h-full">
          <Boderyelow className="h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              ref={heroCardRef}
              /* SỬA: 
                 - h-full: Để chiếm trọn chiều cao đã được items-stretch cấp.
                 - py-[clamp(40px,4vw,80px)]: Padding dọc tự nở ra khi màn hình to.
              */
              className="intro-hero-card relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0b1120] px-[3.5vw] py-[clamp(40px,4vw,80px)] text-white shadow-2xl h-full flex flex-col justify-center"
            >
              {/* Hiệu ứng nền */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_30%)]" />
              
              <div className="relative flex flex-col gap-[1.5vw]">
                <p className="text-[clamp(10px,0.7vw,13px)] uppercase tracking-[0.4em] text-yellow-500 font-bold">
                  Khối anh hùng đặc trưng
                </p>
                
                <p className="text-[clamp(20px,1.8vw,32px)] font-bold leading-[1.2] tracking-tight">
                  Kiểu chữ quá khổ, bảng màu đơn sắc và hình ảnh điện ảnh xác định giao diện này.
                </p>
                
                <div className="flex flex-wrap gap-[0.8vw] pt-4">
                  <Pill className="text-[clamp(11px,0.8vw,14px)]">Sẵn sàng cho GSAP / framer-motion</Pill>
                  <Pill className="text-[clamp(11px,0.8vw,14px)]">Marquee vui tươi</Pill>
                  <Pill className="text-[clamp(11px,0.8vw,14px)]">Lưới dịch vụ</Pill>
                </div>
              </div>
            </motion.div>
          </Boderyelow>
        </div>
      </div>
    </header>
  );
}