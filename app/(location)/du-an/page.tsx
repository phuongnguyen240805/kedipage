'use client';

import React, { memo, useTransition } from 'react';
import dynamic from 'next/dynamic';
import PortfolioHero from '@/components/portfolio/portfolio-hero';
import PortfolioList from '@/components/portfolio/utils/portfolio-list';

const PortfolioSection = dynamic(
  () => import('@/components/portfolio/portfolio-section')
);

const PortfolioPartners = dynamic(
  () => import('@/components/portfolio/portfolio-partners')
);

const PortfolioCloudSection = dynamic(
  () => import('@/components/portfolio/portfolio-cloud-banner'),
  { ssr: false }
);


// ===== MAIN COMPONENT =====
const PortfolioPage = memo(() => {
  const [isPending ] = useTransition();

  return (
    <section className="min-h-screen overflow-visible">
     
     
        <div
          className={`transition-opacity duration-200 ${isPending ? 'opacity-50' : 'opacity-100'}`}
        >   <PortfolioHero />
            <PortfolioList />
        </div>
          <PortfolioSection />
         <PortfolioPartners />
          <PortfolioCloudSection />
    </section>
  );
});

PortfolioPage.displayName = 'PortfolioPage';
export default PortfolioPage;
