'use client';

import React, { useEffect } from 'react';
import { ReactLenis, useLenis } from '@/lib/lenis';

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children = false }: LenisProps) {
  const lenis = useLenis(() => {
    // called every scroll
  });

  useEffect(() => {
    if (lenis) {
      lenis.stop();
      lenis.start();
    }
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
