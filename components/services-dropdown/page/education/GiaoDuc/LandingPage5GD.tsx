'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Đảm bảo landingPageGD5Marquee trong file này có đủ 10 ảnh khác nhau
import { landingPageGD5Marquee, landingPageGD5Background } from './giaoduc';

type HorizontalImage = {
  id: number;
  src: string;
  alt: string;
  slug: string;
  width: number;
  height: number;
};

export default function LandingPage5GD() {
  // 1. CHUẨN BỊ DỮ LIỆU
  // Chia mảng dữ liệu gốc thành 2 phần: nửa đầu cho hàng trên, nửa sau cho hàng dưới.
  // Giả sử landingPageGD5Marquee có 10 ảnh, thì top sẽ là 5 ảnh đầu, bottom là 5 ảnh sau.
  const midPoint = Math.ceil(landingPageGD5Marquee.length / 2);
  const topRawImages = landingPageGD5Marquee.slice(0, midPoint);
  const bottomRawImages = landingPageGD5Marquee.slice(midPoint);

  // Hàm hỗ trợ: Chuyển đổi định dạng ảnh raw sang HorizontalImage (thêm width/height cố định)
  const processImages = (rawImages: any[]): HorizontalImage[] => {
    return rawImages.map((img) => ({
      ...img,
      slug: img.slug ?? '',
      // Kích thước này chỉ để Next Image tối ưu, CSS sẽ đè lại kích thước hiển thị thực tế
      width: 300,
      height: 200,
    }));
  };

  // Tạo 2 mảng ảnh đã xử lý riêng biệt
  const topImagesProcessed: HorizontalImage[] = processImages(topRawImages);
  const bottomImagesProcessed: HorizontalImage[] =
    processImages(bottomRawImages);

  // 2. HÀM LOGIC CŨ
  // Hàm nhân đôi mảng ảnh để tạo hiệu ứng chạy vô tận
  const duplicateImages = (
    images: HorizontalImage[],
    times: number
  ): HorizontalImage[] => {
    // Nếu không có ảnh thì trả về mảng rỗng để tránh lỗi
    if (!images || images.length === 0) return [];
    let result: HorizontalImage[] = [];
    for (let i = 0; i < times; i++) {
      result = [...result, ...images];
    }
    return result;
  };

  return (
    <section className="w-full relative overflow-hidden font-sans py-6 md:py-12">
      {/* CSS Animation - Giữ nguyên */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-2 md:px-4 relative z-10">
        {/* Vòng lặp tạo 2 hàng */}
        {[1, 2].map((rowNumber) => {
          // 3. CHỌN DỮ LIỆU DỰA TRÊN SỐ HÀNG
          // Nếu là hàng 1 thì dùng ảnh top, hàng 2 thì dùng ảnh bottom
          const sourceImages =
            rowNumber === 1 ? topImagesProcessed : bottomImagesProcessed;

          // Nhân đôi mảng ảnh đã chọn
          const duplicatedImages = duplicateImages(sourceImages, 2);

          // Nếu sau khi xử lý mà không có ảnh nào thì không render hàng đó
          if (duplicatedImages.length === 0) return null;

          return (
            <div
              key={rowNumber}
              // Chiều cao container linh hoạt (mobile thấp hơn, desktop cao hơn)
              className="overflow-hidden whitespace-nowrap mb-6 flex items-center h-[180px] md:h-[260px]"
              style={{
                backgroundImage: `url(${landingPageGD5Background})`,
                backgroundRepeat: 'repeat-x',
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center',
              }}
            >
              <div
                className={`inline-flex items-center ${
                  rowNumber === 2
                    ? 'animate-marquee-right' // Hàng 2 chạy sang phải
                    : 'animate-marquee-left' // Hàng 1 chạy sang trái
                }`}
                style={{ width: '200%' }}
              >
                {duplicatedImages.map((image, index) => (
                  <Link
                    // Sử dụng rowNumber trong key để đảm bảo tính duy nhất giữa 2 hàng
                    key={`${rowNumber}-${image.id}-${index}`}
                    href={`/courses/${image.slug}`}
                    // Kích thước ảnh Responsive: Mobile nhỏ hơn, Desktop lớn hơn
                    className="inline-block shrink-0 rounded-lg shadow-lg overflow-hidden mx-2 w-[180px] h-[120px] md:mx-4 md:w-[300px] md:h-[200px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="object-cover w-full h-full"
                    />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
