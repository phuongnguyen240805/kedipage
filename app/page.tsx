'use client';

import { Marquee } from '@/components';
import ClientsKedi from '@/components/home-page/ClientsKedi';
import {
  FinalCta,
  HomeGallery,
  HomeHero,
  HomeInsights,
  KediEcosystem,
  NeedNavigator,
  ServiceCapabilities,
  SolutionFlow,
} from '@/components/home-saas';

export default function Home() {
  return (
    <div className="bg-kedi-navy">
      <HomeHero />

      <div className="relative z-10 overflow-hidden bg-[#161B25] py-0">
        <Marquee
          title="THIẾT KẾ & PHÁT TRIỂN"
          className="pt-[0.14em] pb-[0.08em] text-[92px] leading-[1] tracking-[-0.045em] sm:text-[126px] md:text-[156px] lg:text-[190px] xl:text-[220px]"
        />
      </div>

      <NeedNavigator />
      <KediEcosystem />
      <HomeGallery />
      <SolutionFlow />
      <ServiceCapabilities />
      <HomeInsights />
      <ClientsKedi />
      <FinalCta />
    </div>
  );
}
