import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const AgencyPage = dynamic(
  () => import('@/components/blog/digital-marketing/marketing-agency'),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
    ),
  }
);

// Import component quan trọng nhất (above the fold) bình thường

import SeoSlideShow from '@/components/blog/blog-slide-show';
import slides from '@/components/blog/data/seo-slides-show-data';
import PostSummaryCard from '@/components/blog/blog-summary-card';
import maketingPosts from '@/components/blog/digital-marketing/maketing-guide-card-data';

// Loading placeholder components
function SummaryCardSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  );
}

function AgencyPageSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-12 bg-gray-200 rounded w-1/2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-48 bg-gray-200 rounded" />
        <div className="h-48 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

export default function SeoGuidePage() {
  return (
    <main>
      {/* Component quan trọng - load ngay */}
      <div>
        <SeoSlideShow title="digital-marketing" slides={slides} />
      </div>

      {/* Các component khác - lazy load */}
      <div className="px-6 py-10 max-w-5xl mx-auto space-y-8">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <PostSummaryCard title="Bài viết Marketing" posts={maketingPosts} />
        </Suspense>

        <Suspense fallback={<AgencyPageSkeleton />}>
          <AgencyPage />
        </Suspense>
      </div>
    </main>
  );
}
