'use client';

import React, { useState, useEffect, useRef } from 'react';
import ContentColumn from '@/components/blog/main-blog/langding2/ContentColumn';
import StickyImageColumn from '@/components/blog/main-blog/langding2/StickyImage';
import { landingData } from '@/components/blog/data/ContentColumndata';

const LangdingBlog2 = () => {
  const fallback =
    'https://mona.media/wp-content/uploads/2024/06/tang-doanh-so-ban-hang-voi-marketing.png';
  const accentColors = ['#3B82F6', '#F97316', '#8B5CF6', '#EC4899'];
  const textColors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff'];

  // Helper lấy ảnh an toàn
  const getSafeImage = (post?: { image?: string }) => post?.image ?? fallback;

  // State
  // 1. currentImage: Chính xác là cái link ảnh đang hiện
  const [currentImage, setCurrentImage] = useState<string>(fallback);
  // 2. activeSection: Đang ở mục nào
  const [activeSection, setActiveSection] = useState<number>(0);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // --- SCROLL LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveSection((prev) => (prev !== index ? index : prev));
            }
          }
        });
      },
      { root: null, rootMargin: '-20% 0px -20% 0px', threshold: 0.3 }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  // --- SYNC IMAGE KHI SCROLL ---
  // Khi activeSection thay đổi, reset ảnh về bài ĐẦU TIÊN của section đó
  useEffect(() => {
    let firstImage = fallback;
    switch (activeSection) {
      case 0:
        firstImage = getSafeImage(landingData.landing1[0]);
        break;
      case 1:
        firstImage = getSafeImage(landingData.landing2[0]);
        break;
      case 2:
        firstImage = getSafeImage(landingData.landing3[0]);
        break;
      case 3:
        firstImage = getSafeImage(landingData.landing1[0]);
        break; // Demo data
    }
    setCurrentImage(firstImage);
  }, [activeSection]);

  // --- HOVER HANDLER ---
  // Hàm này được truyền xuống ContentColumn
  // src chính là post.image của bài viết bạn đang hover
  const handleHoverItem = (index: number, src?: string) => {
    setCurrentImage(src ?? fallback);
  };

  const pageBg = accentColors[activeSection] ?? accentColors[0];
  // Cấu hình danh sách render
  const sections = [
    { id: 0, title: 'Khởi tạo website', data: landingData.landing1 },
    { id: 1, title: 'Tối ưu và Thiết kế', data: landingData.landing2 },
    { id: 2, title: 'Bảo mật & Hiệu năng', data: landingData.landing3 },
    { id: 3, title: 'Marketing & Tăng trưởng', data: landingData.landing1 },
  ];

  return (
    <main
      className="min-h-screen w-full font-sans transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: pageBg, color: textColors[activeSection] }}
    >
      <div className="container mx-auto py-16 px-6">
        <div className="lg:grid lg:grid-cols-5 gap-8">
          {/* CỘT TRÁI */}
          <div className="lg:col-span-3 space-y-12 pb-32">
            {sections.map((sec) => (
              <div
                key={sec.id}
                ref={(el) => {
                  sectionRefs.current[sec.id] = el;
                }}
                data-index={sec.id}
                className="rounded-md transition-all duration-500 py-8 scroll-mt-24"
                // Bạn thêm logic style background box tại đây như code cũ
              >
                <ContentColumn
                  title={sec.title}
                  posts={sec.data}
                  accentColor={accentColors[sec.id]}
                  active={activeSection === sec.id}
                  // TRUYỀN HÀM XỬ LÝ HOVER XUỐNG
                  onHoverChange={handleHoverItem}
                />
              </div>
            ))}
          </div>

          {/* CỘT PHẢI */}
          <aside className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-24 transition-all duration-500 h-fit">
              {/* Chỉ truyền 1 link ảnh duy nhất */}
              <StickyImageColumn activeImage={currentImage} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default LangdingBlog2;
