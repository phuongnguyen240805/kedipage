// src/app/blog/seo-guide/page.tsx

import React from 'react';
import SeoPostSummaryCard from '@/components/blog/seo-guide/seo-summary-card';
import slides from '@/components/blog/data/seo-slides-show-data';
import SeoSlideShow from '@/components/blog/blog-slide-show';
import AgencyPage from '@/components/blog/digital-marketing/marketing-agency';

export default function designExperience() {
  return (
    <main>
      <SeoSlideShow title="web-design-experience" slides={slides} />
      <div className="max-w-5xl mx-auto">
        <SeoPostSummaryCard />
         <AgencyPage />
      </div>
    </main>
  );
}
