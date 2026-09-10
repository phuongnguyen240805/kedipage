'use client';
import Image from 'next/image';
import { getVerticalImages } from './utils/imageData';
import { duplicateImages } from './utils/imageHelpers';

export default function VerticalImageScroll() {
  const verticalImages = getVerticalImages();
  // Nhân bản ảnh nhiều hơn để tránh khoảng trắng khi chạy chậm
  const duplicatedImages = duplicateImages(verticalImages, 6); 

 return (
  <section className="relative bg-transparent h-full w-full overflow-hidden">
    
    {/* 1. Lớp phủ Gradient: Chỉ làm tối ở đầu và cuối để khớp với Section khác, ở giữa để trong suốt */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-30 pointer-events-none" />

    {/* 2. Grid chứa các cột ảnh: Tăng opacity từ 30 lên 50-60 để nhìn rõ hơn */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 opacity-50 transform scale-105">
      {[0, 1, 2, 3, 4].map((colIndex) => {
        const isEven = colIndex % 2 === 0;
        const animationClass = isEven ? 'animate-scroll-up' : 'animate-scroll-down';
        
        return (
          <div key={colIndex} className="h-full overflow-hidden">
            <div className={`flex flex-col gap-4 ${animationClass}`}>
              {duplicatedImages.map((image, imgIndex) => (
                <div key={`${colIndex}-${imgIndex}`} className="relative w-full aspect-[3/4]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>

    {/* 3. Một lớp phủ màu cực mỏng để tạo độ sâu (tùy chọn) */}
    <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none" />
  </section>
);
}

//