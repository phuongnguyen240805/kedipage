'use client';
import SeoPostSummaryCard from '@/components/blog/seo-guide/seo-summary-card';
import slides from '@/components/blog/data/seo-slides-show-data';
import SeoSlideShow from '@/components/blog/blog-slide-show';
import AgencyPage from '@/components/blog/digital-marketing/marketing-agency';

export default function SeoGuidePage() {
  return (
    <main>
      <SeoSlideShow title="seo-guide" slides={slides} />
      <div className="max-w-5xl mx-auto">
        <SeoPostSummaryCard />
         <AgencyPage />
      </div>
    </main>
  );
}
