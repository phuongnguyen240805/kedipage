'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const topLogos = [
  {
    src: 'https://assets.kedi.media/images/1612687849eb1198d317-400.webp',
    alt: 'Hellium',
  },
  {
    src: 'https://assets.kedi.media/images/b8043428441153c3d0bb-400.webp',
    alt: 'Freepik',
  },
  {
    src: 'https://assets.kedi.media/images/fdb6b2bef23aeaa4a062-400.webp',
    alt: 'Shophunter',
  },
  {
    src: 'https://assets.kedi.media/images/0474fbd96abd7c4bc03b-400.webp',
    alt: 'ChatGPT',
  },
  {
    src: 'https://assets.kedi.media/images/cf9ac38e83b8b23ebe9d-400.webp',
    alt: 'Dropship Io',
  },
  {
    src: 'https://assets.kedi.media/images/24b851ebf1fc34f0fe3b-400.webp',
    alt: 'PipiAds',
  },
  {
    src: 'https://assets.kedi.media/images/17aca75817c43647eb99-400.webp',
    alt: 'Winninghunter',
  },
  {
    src: 'https://assets.kedi.media/images/7ded9a51008bc9553e82-180.webp',
    alt: 'PinSPY',
  },
  {
    src: 'https://assets.kedi.media/images/1397545aa0699e65d299-400.webp',
    alt: 'Canva',
  },
  {
    src: 'https://assets.kedi.media/images/6397f10617079d67ad59-200.webp',
    alt: 'Semrush',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-QKdKv6wVg-OB95IHWrzdOzRn7ff9YADUw&s',
    alt: 'Shoplus',
  },
  {
    src: 'https://assets.kedi.media/images/11f0149c705a7746989e-400.webp',
    alt: 'Kalodata',
  },
  {
    src: 'https://assets.kedi.media/images/227bdf136240e80cd475-240.webp',
    alt: 'Placeit',
  },
  {
    src: 'https://img.icons8.com/?size=100&id=iyva43ugJ6j9&format=png&color=000000',
    alt: 'Quillbot',
  },
  {
    src: 'https://assets.kedi.media/images/16ef76bc347bed88fc63-400.webp',
    alt: 'Capcut Pro',
  },
  {
    src: 'https://assets.kedi.media/images/27fbdc94ef800944b9f1-400.webp',
    alt: 'Claude AI',
  },
  {
    src: 'https://assets.kedi.media/images/9f4379fa86f4cf576b20-400.webp',
    alt: 'Suno AI',
  },
];

const bottomLogos = [
  {
    src: 'https://assets.kedi.media/images/e0b3c6f7cd737ded699b-400.webp',
    alt: 'Runway',
  },
  {
    src: 'https://assets.kedi.media/images/a436590dce3a5d94f4de-400.webp',
    alt: 'Midjourney',
  },
  {
    src: 'https://assets.kedi.media/images/7df3fad9d695c017485d-400.webp',
    alt: 'ElevenLabs',
  },
  {
    src: 'https://assets.kedi.media/images/a697adee8f8998b34ffd-400.webp',
    alt: 'Hailuo',
  },
  {
    src: 'https://assets.kedi.media/images/ac1ee5fc893b4dd4c8b7-400.webp',
    alt: 'Heygen',
  },
  {
    src: 'https://assets.kedi.media/images/7762fd56b6c22be28e1c-400.webp',
    alt: 'Leonardo',
  },
  {
    src: 'https://assets.kedi.media/images/731f5243f3d648f9d0e3-400.webp',
    alt: 'Grok',
  },
  {
    src: 'https://assets.kedi.media/images/4cb1b08d051482ebc29a-400.webp',
    alt: 'Vbee',
  },
  {
    src: 'https://assets.kedi.media/images/ac47f1bfaa786f68293a-400.webp',
    alt: 'Kit AI',
  },
  {
    src: 'https://assets.kedi.media/images/8cf309e2a15f3fb3d899-400.webp',
    alt: 'Minimax',
  },
  {
    src: 'https://assets.kedi.media/images/60d9e5a30edec2f1a5a9-400.webp',
    alt: 'Dzine AI',
  },
];

export default function PlatformsSection() {
  const swiperTopRef = useRef(null);
  const swiperBottomRef = useRef(null);

  return (
    <section className="py-8 px-4">
      {/* Bọc cả 2 slider trong 1 khung màu xanh */}
      <div
        style={{
          border: '1px solid #172554', // viền xanh biển
          borderRadius: '16px',
          padding: '16px',
          backgroundColor: '#172554', // nền xanh nhạt
        }}
      >
        {/* Top slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={8}
          spaceBetween={48}
          loop={true}
          speed={3000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1200: { slidesPerView: 8, spaceBetween: 48 },
            992: { slidesPerView: 6, spaceBetween: 32 },
            768: { slidesPerView: 4, spaceBetween: 24 },
            480: { slidesPerView: 3, spaceBetween: 16 },
            0: { slidesPerView: 2, spaceBetween: 8 },
          }}
          className="slider-top"
          ref={swiperTopRef}
        >
          {topLogos.map(({ src, alt }, idx) => (
            <SwiperSlide key={`top-${idx}`}>
              <div className="flex items-center justify-center w-full aspect-square rounded-2xl overflow-hidden bg-white duration-300">
                <Image
                  src={src}
                  alt={alt}
                  width={160}
                  height={160}
                  className="object-contain w-[160px] h-[160px]"

                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Khoảng cách giữa 2 slider */}
        <div className="mt-6 lg:mt-12"></div>

        {/* Bottom slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={32}
          loop={true}
          speed={3000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            1200: { slidesPerView: 6, spaceBetween: 32 },
            992: { slidesPerView: 5, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            480: { slidesPerView: 2, spaceBetween: 8 },
            0: { slidesPerView: 2, spaceBetween: 8 },
          }}
          className="slider-bottom"
          ref={swiperBottomRef}
        >
          {bottomLogos.map(({ src, alt }, idx) => (
            <SwiperSlide key={`bottom-${idx}`}>
              <div className="flex items-center justify-center w-full aspect-square rounded-2xl overflow-hidden bg-white duration-300">
                <Image
                  src={src}
                  alt={alt}
                  width={160}
                  height={160}
                  className="object-contain w-[160px] h-[160px]"

                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
