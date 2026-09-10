'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SLIDE_DATA = [
  {
    id: 1,
    image: "https://erpviet.vn/upload/banner/Banner2024/sao-khue-web.jpg.pagespeed.ce._axt2zXXQ-.jpg", // Thay bằng đường dẫn ảnh của bạn
    title: "Giải pháp thiết kế riêng",
    desc: "Bứt phá với 60+ ứng dụng cốt lõi"
  },
  {
    id: 2,
    image: "https://erpviet.vn/upload/banner/Banner2024/ERPVIET/erpviet.jpg.pagespeed.ce.vVqKBxP2vr.jpg",
    title: "Hỗ trợ doanh nghiệp",
    desc: "Quản lý dự án & Kế toán tài chính"
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full bg-[#121212] ">
      <div className=" mx-auto ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true} 
          loop={true} // Vòng lặp vô tận
          autoplay={{
            delay: 3000, // 3 giây chuyển ảnh 1 lần
            disableOnInteraction: false, // Tiếp tục chạy sau khi người dùng chạm vào
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper overflow-hidden shadow-2xl"
        >
          {SLIDE_DATA.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative aspect-[21/9] md:aspect-[25/9] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
                {/* Overlay làm mờ nhẹ để text nổi bật nếu cần */}
                <div className="absolute inset-0 bg-black/5" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* Tùy chỉnh màu sắc nút chuyển hướng */
        .swiper-button-next, .swiper-button-prev {
          color: #8b5cf6; /* Màu tím tương đồng với ảnh */
          transform: scale(0.7);
        }
        .swiper-pagination-bullet-active {
          background: #8b5cf6 !important;
        }
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none; /* Ẩn nút trên mobile cho gọn */
          }
        }
      `}</style>
    </section>
  );
}