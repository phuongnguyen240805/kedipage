'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { WEBSITE_SAMPLES } from '@/components/services-dropdown/page/web-design/web-co-san/webcosan_data';
import FadeIn from '@/components/ui/Fadeoad';

const ALL_IMAGES = WEBSITE_SAMPLES;
const TOTAL = ALL_IMAGES.length;

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function Langdingwebsc5() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (offset: number) => {
    if (offset === 0) {
      const circularIndex = mod(centerIndex, TOTAL);
      const item = ALL_IMAGES[circularIndex];
      const url = item.detailUrl || `/mau-website/${item.id}`;
      window.location.href = url;
    } else {
      // Thay đổi centerIndex để các card trượt sang
      setCenterIndex(prev => prev + offset);
    }
  };

  // Tăng range hiển thị để các card ở biên chuẩn bị sẵn sàng trượt vào, tránh bị mất hình giữa chừng
  const range = isMobile ? 2 : 5; 
  const slots = Array.from({ length: range * 2 + 1 }, (_, i) => {
    const offset = i - range;
    const logicalIndex = centerIndex + offset;
    const circularIndex = mod(logicalIndex, TOTAL);
    return {
      offset,
      logicalIndex, // Dùng logicalIndex làm key để Framer Motion hiểu quỹ đạo di chuyển
      circularIndex,
      item: ALL_IMAGES[circularIndex],
    };
  });

  return (
    <section className="py-12 md:py-24 bg-[#6200ea] overflow-hidden text-white relative flex flex-col items-center justify-center min-h-[700px] md:min-h-[850px]">
      
      <FadeIn direction="up">
        <h2
          className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-yellow-400 text-center px-4"
          style={{
            textShadow: `-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff`,
          }}
        >
          SỞ HỮU WEBSITE <br /> CỦA RIÊNG BẠN!
        </h2>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <div className="mt-6 md:mt-10 max-w-4xl mx-auto mb-6 px-6">
          <p className="text-center text-base md:text-xl font-medium text-white leading-relaxed">
            <span className="text-red-400 font-bold">Đây không phải là dạng thức thuê website</span>
            , bạn sẽ không phải lo lắng website bị mất, bị chặn hay giới hạn khả năng vận hành
          </p>
        </div>
      </FadeIn>

      <div className="relative w-full max-w-6xl h-[350px] md:h-[450px] flex items-center justify-center overflow-visible mt-8">
        <AnimatePresence initial={false}>
          {slots.map(({ offset, logicalIndex, item }) => {
            const isCenter = offset === 0;
            const distance = Math.abs(offset);
            
            const scale = isCenter ? 1 : Math.max(0.6, 1 - distance * 0.12);
            const opacity = Math.max(0, 1 - distance * 0.3);
            const zIndex = 50 - distance;
            
            // Khoảng cách trượt ngang
            const spacing = isMobile ? 160 : 220;
            const x = offset * spacing;

            return (
              <motion.div
                // QUAN TRỌNG: Key dùng logicalIndex để card "giữ danh tính" khi di chuyển ngang
                key={logicalIndex} 
                onClick={() => handleCardClick(offset)}
                className="absolute cursor-pointer rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 group"
                style={{
                  width: isMobile ? 200 : 320,
                  height: isMobile ? 280 : 450,
                  zIndex,
                }}
                initial={false}
                animate={{
                  x,
                  scale,
                  opacity,
                  // Thêm hiệu ứng xoay nhẹ tạo độ cong cho carousel (tùy chọn)
                  rotateY: offset * -10, 
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120, // Giảm stiffness để trượt mượt và đầm hơn
                  damping: 20,    // Tăng damping để không bị rung khi dừng
                  mass: 1,
                }}
                whileHover={{ 
                    scale: scale * 1.05,
                    boxShadow: "0px 0px 30px rgba(255,255,255,0.3)" 
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <div
                    className="w-full h-[300%] transition-transform ease-in-out md:group-hover:-translate-y-[66.66%]"
                    style={{ 
                        transformOrigin: 'top', 
                        transitionDuration: '14000ms' // Tốc độ cuộn ảnh website bên trong
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="w-full h-full object-top object-cover"
                      sizes="(max-width: 768px) 200px, 320px"
                      priority={isCenter}
                    />
                  </div>
                </div>

                {/* Overlay làm tối các card ở xa để tập trung vào giữa */}
                {!isCenter && (
                  <motion.div 
                    className="absolute inset-0 bg-black/40 pointer-events-none" 
                    animate={{ opacity: distance * 0.2 }}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <FadeIn direction="up" delay={0.6}>
        <div className="mt-12 text-center relative z-20 px-6">
          <p className="text-yellow-400 font-black text-sm md:text-xl uppercase tracking-widest leading-tight">
            {isMobile ? "Vuốt hoặc Chạm để chọn mẫu" : "Click card bên cạnh để cuộn mẫu — Click card giữa để xem chi tiết"}
          </p>
        </div>
      </FadeIn>

      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04] pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2">
        <svg viewBox="0 0 1440 320" className="w-full h-auto fill-white">
          <path d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}