'use client';

import { usePathname } from 'next/navigation';
import Preloader from "@/components/preloader";

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Kiểm tra nếu đường dẫn chứa 'thiet-ke-landing-page' thì bỏ qua Preloader
  const isLandingPage = pathname?.includes('/thiet-ke-landing-page');

  if (isLandingPage) {
    return <>{children}</>;
  }

  return <Preloader>{children}</Preloader>;
}