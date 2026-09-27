'use client';

import { Marquee } from '@/components';
import {
  FinalCta,
  HomeHero,
  HomeInsights,
  HomeProjects,
  KediEcosystem,
  NeedNavigator,
  ServiceCapabilities,
  SolutionFlow,
} from '@/components/home-saas';
import HomeVisualEnhancer from '@/components/home-saas/HomeVisualEnhancer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    let scrollInstance: { destroy?: () => void } | null = null;
    let cancelled = false;

    const initializeScroll = async () => {
      try {
        const loadedModule = await import('locomotive-scroll');
        if (cancelled) return;

        const LocomotiveScroll = loadedModule.default;
        scrollInstance = new LocomotiveScroll();
      } catch (error) {
        console.warn('[locomotive-scroll] initialization failed', error);
      }
    };

    void initializeScroll();

    return () => {
      cancelled = true;
      scrollInstance?.destroy?.();
    };
  }, []);

  return (
    <div className="kedi-home-visual-v2 overflow-hidden bg-kedi-navy">
      <HomeVisualEnhancer />
      <HomeHero />

      <div className="relative z-10 bg-kedi-navy py-4 sm:py-6">
        <Marquee
          title="AI  CRM  COMMERCE  AUTOMATION  ANALYTICS  CLOUD"
          className="py-2 text-[46px] leading-none tracking-[-0.035em] sm:text-[58px] lg:text-[82px]"
        />
      </div>

      <NeedNavigator />
      <KediEcosystem />
      <SolutionFlow />
      <ServiceCapabilities />
      <HomeProjects />
      <HomeInsights />
      <FinalCta />
    </div>
  );
}
