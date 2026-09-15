import ActivitiesSlideShow from '@/components/activities/activities-show';
import ActivitiesMasonry from '@/components/activities/activities-masonry';
import { featuredShow } from '@/components/activities/data/show';

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Phần Slideshow */}
      <section className="mb-10">
         <ActivitiesSlideShow
            title="Hoạt động nổi bật KEDI Media"
            show={featuredShow}
          />
      </section>

      {/* 2. Phần danh sách bài viết dạng Masonry */}
      <ActivitiesMasonry />
    </main>
  );
}