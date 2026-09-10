'use client';

import React, { useRef, useLayoutEffect, useState } from 'react';

interface BorderRunningProps {
  children: React.ReactNode;
  color?: string;
  glowColor?: string;
}

export default function BorderRunning({
  children,
  color = "#4ade80",
  glowColor = "rgba(74, 222, 128, 0.8)",
}: BorderRunningProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0, radius: 0 });

  useLayoutEffect(() => {
    if (contentRef.current) {
      const firstChild = contentRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        const style = window.getComputedStyle(firstChild);
        setSize({
          width: firstChild.offsetWidth,
          height: firstChild.offsetHeight,
          radius: parseFloat(style.borderRadius) || 0,
        });
      }
    }
  }, [children]);

  return (
    <div className="relative inline-block leading-[0]">
      <style>{`
        @keyframes border-run {
          from { stroke-dashoffset: 44; } /* Khớp với tổng dasharray 7+4=11 */
          to { stroke-dashoffset: 0; }
        }
        .animate-border-run {
          animation: border-run 1s linear infinite;
        }
      `}</style>

      {/* Lớp 1: Nội dung (Nằm dưới cùng) */}
      <div ref={contentRef} className="relative z-0 inline-block">
        {children}
      </div>

      {/* Lớp 2: SVG Viền (Đè lên trên và tỏa sáng ra ngoài) */}
      {size.width > 0 && (
        <svg
          className="absolute pointer-events-none z-20"
          style={{
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            overflow: 'visible', 
          }}
          viewBox={`0 0 ${size.width} ${size.height}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0"
            y="0"
            width={size.width}
            height={size.height}
            fill="none"
            stroke={color}
            strokeWidth="2.5" // Giảm nhẹ độ dày để trông sắc sảo hơn
            strokeDasharray="7 4"
            strokeLinecap="round"
            rx={size.radius}
            className="animate-border-run"
            style={{
              // Sử dụng filter với độ blur cao hơn nhưng spread hẹp hơn để tỏa ra ngoài
              filter: `
                drop-shadow(0 0 1px ${color}) 
                drop-shadow(0 0 6px ${glowColor})
              `,
            }}
          />
        </svg>
      )}
    </div>
  );
}