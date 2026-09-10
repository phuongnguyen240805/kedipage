import seoPosts from '@/components/blog/data/seo-guide-card-data';
import PostSummaryCard from '../blog-summary-card';

export default function SeoPostSummaryCard() {
  return <PostSummaryCard title="SEO Guide" posts={seoPosts} />;
}
