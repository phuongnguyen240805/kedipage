'use client';
import React, { useRef, useLayoutEffect, createContext, useContext } from 'react';
import Lenis from '@studio-freight/lenis';

// Khởi tạo Context để quản lý instance Lenis toàn cục
const LenisContext = createContext<Lenis | null>(null);

// 1. Export hook useLenis
export function useLenis(callback?: (lenis: Lenis) => void) {
  const lenis = useContext(LenisContext);

  useLayoutEffect(() => {
    if (!lenis || !callback) return;
    lenis.on('scroll', callback);
    return () => lenis.off('scroll', callback);
  }, [lenis, callback]);

  return lenis;
}

// 2. Export component ReactLenis
export function ReactLenis({ 
  children, 
  options = {} 
}: { 
  children: React.ReactNode; 
  root?: boolean; 
  options?: any 
}) {
  const [lenis, setLenis] = React.useState<Lenis | null>(null);
  const rafRef = useRef<number>();

  useLayoutEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      ...options,
    });

    setLenis(lenisInstance);

    // Vòng lặp RAF để Lenis có thể hoạt động
    function raf(time: number) {
      lenisInstance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [options]);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}