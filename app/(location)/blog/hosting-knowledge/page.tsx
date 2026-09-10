'use client';

import SeoPostSummaryCard from '@/components/blog/seo-guide/seo-summary-card';
import slides from '@/components/blog/data/seo-slides-show-data';
import SeoSlideShow from '@/components/blog/blog-slide-show';

export default function hostingKnowledge() {
  return (
    <main>
      <SeoSlideShow title="hosting-knowledge" slides={slides} />
      <div className="max-w-5xl mx-auto">
        <SeoPostSummaryCard />
      </div>
    </main>
  );
}
