'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const topLogos = [
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idj7LVOPQD.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Hellium',
  },
  {
    src: 'https://cdn.brandfetch.io/id6KQUPKmw/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Freepik',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idGpv38qKt.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Shophunter',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idj0qewM1H.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'ChatGPT',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idXQNCdDFz.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Dropship Io',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idlsXYKlTK.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'PipiAds',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/ideRDveXwp.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Winninghunter',
  },
  {
    src: 'https://cdn.brandfetch.io/idsoL9l3tb/w/180/h/180/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'PinSPY',
  },
  {
    src: 'https://cdn.brandfetch.io/id9mVQlyB1/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Canva',
  },
  {
    src: 'https://cdn.brandfetch.io/idt3n8W3ef/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Semrush',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-QKdKv6wVg-OB95IHWrzdOzRn7ff9YADUw&s',
    alt: 'Shoplus',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idGvtJLtIa.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Kalodata',
  },
  {
    src: 'https://play-lh.googleusercontent.com/0654HX7dcGrIxNgjROl2__z2RIW8nkDVZMqm8NiR5p9O0OM-OVNTRG0H8-0fjC8lj-0=w240-h480-rw',
    alt: 'Placeit',
  },
  {
    src: 'https://img.icons8.com/?size=100&id=iyva43ugJ6j9&format=png&color=000000',
    alt: 'Quillbot',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idu0cWy29Z.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Capcut Pro',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idAL8D8t4E.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Claude AI',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idnA4r-ycO.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Suno AI',
  },
];

const bottomLogos = [
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idpxW8Oj3B.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Runway',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/id9ihprqGm.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Midjourney',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idjCEzPbbh.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'ElevenLabs',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idHaXqUEn5.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Hailuo',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idecCcyKPO.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Heygen',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idsVxRIRBz.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Leonardo',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idMWewJJqI.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Grok',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/id-_eJ4wmG.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Vbee',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idwwtV4RMe.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Kit AI',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idRtKZy7IP.png?c=1dxbfHSJFAPEGdCLU4o5B',
    alt: 'Minimax',
  },
  {
    src: 'https://asset.brandfetch.io/idoSSZyxKB/idsTHo-U7s.png?c=1dxbfHSJFAPEGdCLU4o5B',
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
                  unoptimized
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
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
