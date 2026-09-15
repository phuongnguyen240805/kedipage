"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import FadeIn from '@/components/ui/Fadeoad';
import Boderyelow from '@/components/ui/boder-yelow';

const supportData = [
  {
    id: 1,
    title: "Quản lý mua hàng",
    mainTitle: "QUẢN LÝ MUA HÀNG THÔNG MINH",
    features: [

    ],
    image: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193233/Cinestar_blpx4c.png",
    accent: "from-purple-900 to-indigo-900"
  },
  {
    id: 2,
    title: "Quản lý sản xuất",
    mainTitle: "QUẢN LÝ SẢN XUẤT HIỆU QUẢ",
    features: [
     
    ],
    image: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193233/Cinestar_blpx4c.png",
    accent: "from-purple-800 to-fuchsia-900"
  },
  {
    id: 3,
    title: "Quản lý bán hàng",
    mainTitle: "QUẢN LÝ BÁN HÀNG CHUYÊN NGHIỆP",
    features: [
    
    ],
    image: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193233/Cinestar_blpx4c.png",
    accent: "from-pink-900 to-purple-900"
  },
  {
    id: 4,
    title: "Quản trị nhân sự",
    mainTitle: "TỐI ƯU NGUỒN LỰC CON NGƯỜI",
    features: [
     
    ],
    image: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193233/Cinestar_blpx4c.png",
    accent: "from-blue-900 to-indigo-900"
  }
];

export default function BusinessSupportSlider() {
  return (
    <section className="py-24 bg-[#121212] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* TIÊU ĐỀ CHÍNH */}
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Kedi có thể <span className="text-orange-500">hỗ trợ gì</span> cho doanh nghiệp?
            </h2>
          </div>
        </FadeIn>

        {/* SWIPER SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1} // Mặc định 1 slide trên mobile
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            // Khi màn hình >= 768px (Tablet) hiện 2 slide
            768: {
              slidesPerView: 2,
            },
            // Khi màn hình >= 1200px (Desktop) hiện 3 slide
            1200: {
              slidesPerView: 3,
            },
          }}
          className="business-swiper py-10"
        >
          {supportData.map((item) => (
            <SwiperSlide key={item.id} className="pb-12">
              <Boderyelow>
                <div className="bg-zinc-900 rounded-xl overflow-hidden h-full flex flex-col group transition-all duration-500 hover:-translate-y-2 border border-white/5">
                  
                  {/* Image & Overlay Content */}
                  <div className={`relative aspect-video bg-gradient-to-br ${item.accent} p-6 flex flex-col justify-center items-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    
                    <div className="relative z-10 w-full max-w-[200px] transform group-hover:scale-110 transition-transform duration-700">
                      <div className="border-[4px] border-zinc-800 rounded-lg overflow-hidden bg-black shadow-2xl">
                        <img src={item.image} alt={item.title} className="w-full h-auto opacity-80" />
                      </div>
                      <div className="w-12 h-1 bg-zinc-700 mx-auto rounded-b-md"></div>
                    </div>

                    <div className="absolute top-4 left-4 right-4 text-center">
                      <h4 className="text-[10px] font-black text-white/90 uppercase tracking-[0.2em] leading-tight">
                        {item.mainTitle}
                      </h4>
                    </div>
                  </div>

                  {/* Footer Card */}
                  <div className="p-6 pt-0 mt-auto text-center border-t border-white/5 bg-zinc-900">
                    <h3 className="text-base font-black text-white uppercase tracking-wider py-4 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Boderyelow>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}