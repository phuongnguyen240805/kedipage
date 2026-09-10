'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealHighlightProps {
  children: React.ReactNode;
  baseColor?: string;      // Màu nền ban đầu
  highlightColor?: string; // Màu sẽ chạy qua
  className?: string;      // Tùy chỉnh CSS bên ngoài
}

export default function ScrollRevealHighlight({
  children,
  baseColor = "rgba(255, 255, 255, 0.1)",
  highlightColor = "#ff0080",
  className = "",
}: ScrollRevealHighlightProps) {
  return (
    <motion.div
      /* THAY ĐỔI QUAN TRỌNG: 
         - Đổi 'inline-block' thành 'flex' hoặc 'block' để component có thể nhận 'w-full'.
         - Thêm 'w-full' mặc định để luôn chiếm hết không gian nút bấm.
      */
      className={`relative flex flex-col overflow-hidden rounded-md w-full ${className}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, margin: "-100px" }} 
    >
      {/* Lớp màu nền tĩnh phía dưới */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ backgroundColor: baseColor }} 
      />

      {/* Lớp màu chạy từ trái sang phải */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: highlightColor }}
        variants={{
          initial: { x: "-100%" },
          animate: { x: 0 }
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.1
        }}
      />

      {/* Nội dung chữ nằm trên cùng:
         Thêm 'w-full' và 'h-full' để đảm bảo nội dung lấp đầy diện tích highlight 
      */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}