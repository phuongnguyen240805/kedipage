'use client';

import { Marquee } from '@/components';
import {
  FinalCta,
  HomeGallery,
  HomeHero,
  HomeInsights,
  HomeProjects,
  KediEcosystem,
  NeedNavigator,
  ServiceCapabilities,
  SolutionFlow,
} from '@/components/home-saas';

export default function Home() {
  return (
    <div className="bg-kedi-navy">
      <HomeHero />

      <div className="relative z-10 bg-kedi-navy py-4 sm:py-6">
        <Marquee
          title="AI  CRM  COMMERCE  AUTOMATION  ANALYTICS  CLOUD"
          className="py-2 text-[46px] leading-none tracking-[-0.035em] sm:text-[58px] lg:text-[82px]"
        />
      </div>

      <NeedNavigator />
      <KediEcosystem />
      <HomeGallery />
      <SolutionFlow />
      <ServiceCapabilities />
      <HomeProjects />
      <HomeInsights />
      <FinalCta />
    </div>
  );
}
