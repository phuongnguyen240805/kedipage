'use client';

import React, { MouseEvent, ReactNode, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)';

type Side = 'top' | 'left' | 'bottom' | 'right';
type ClipRecord = Record<Side, string[]>;

const ENTRANCE_KEYFRAMES: ClipRecord = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: ClipRecord = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

// --- Section Title co giãn ---
export const SectionTitle = ({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) => (
  <div className="flex flex-col gap-3">
    {kicker ? (
      <span className="text-[clamp(12px,0.8vw,14px)] uppercase tracking-[0.4em] text-yellow-500 font-bold">
        {kicker}
      </span>
    ) : null}
    <h2 className="text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-tight text-white">
      {title}
    </h2>
  </div>
);

// --- Pill hỗ trợ co giãn và nhận class từ ngoài ---
interface PillProps {
  children: ReactNode;
  className?: string;
}

export const Pill = ({ children, className }: PillProps) => (
  <span className={cn(
    "inline-flex items-center gap-2 border border-white/10 bg-white/5 px-[1.5vw] py-[0.6vw] transition-all",
    "text-[clamp(10px,0.7vw,13px)] font-bold uppercase tracking-widest text-white/80 rounded-full hover:bg-yellow-500 hover:text-black",
    className
  )}>
    {children}
  </span>
);

// --- Hero Title kích thước vừa vặn và co giãn ---
export const HeroTitle = ({ text }: { text: string }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;
    const letters = titleRef.current.querySelectorAll('.intro-letter');
    gsap.set(letters, { y: '120%', opacity: 0 });
    gsap.to(letters, {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: { amount: 0.6, from: 'random' },
    });
  }, []);

  return (
    <h1
      ref={titleRef}
      /* ĐÃ SỬA: 
         - Min: 32px (thay vì 40px)
         - Tỉ lệ: 5vw (thay vì 7.5vw)
         - Max: 70px (thay vì 100px)
      */
      className="text-[clamp(32px,5vw,70px)] font-black leading-[1.1] tracking-tight text-white uppercase intro-hero-title"
    >
      {text.split('').map((char, idx) => (
        <span key={idx} className="intro-letter inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};
// --- Skill Tile tỉ lệ vuông và co giãn tự động ---
export const SkillTile = ({
  Icon,
  label,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();
    const proximity = [
      { proximity: Math.abs(box.left - e.clientX), side: 'left' as Side },
      { proximity: Math.abs(box.right - e.clientX), side: 'right' as Side },
      { proximity: Math.abs(box.top - e.clientY), side: 'top' as Side },
      { proximity: Math.abs(box.bottom - e.clientY), side: 'bottom' as Side },
    ];
    return proximity.sort((a, b) => a.proximity - b.proximity)[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);
    animate(
      scope.current,
      { clipPath: ENTRANCE_KEYFRAMES[side] },
      { duration: 0.4, ease: 'easeOut' }
    );
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);
    animate(
      scope.current,
      { clipPath: EXIT_KEYFRAMES[side] },
      { duration: 0.35, ease: 'easeIn' }
    );
  };

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      /* SỬA: Dùng aspect-square và min-h clamp để khối này luôn to và cân xứng */
      className="relative flex aspect-square min-h-[clamp(180px,18vw,280px)] items-center justify-center overflow-hidden border border-white/5 bg-[#1a1a1a] shadow-2xl transition-all hover:border-yellow-500/30 group"
    >
      <span className="text-gray-500 group-hover:scale-110 transition-transform duration-500">
        <Icon className="text-[clamp(32px,3.5vw,54px)]" />
      </span>
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 flex items-center justify-center bg-yellow-500 text-black"
      >
        <Icon className="text-[clamp(40px,4.5vw,64px)]" />
      </div>
      <span className="pointer-events-none absolute bottom-[10%] right-[10%] text-[clamp(9px,0.6vw,12px)] uppercase tracking-[0.2em] font-black text-white/40 group-hover:text-black transition-colors">
        {label}
      </span>
    </div>
  );
};