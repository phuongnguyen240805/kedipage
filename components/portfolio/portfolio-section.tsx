'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../ui/Fadeoad';

const portfolioSolutions = [
  {
    id: 'website',
    label: 'KEDI.Media / Website',
    title: 'GIẢI PHÁP PREMIUM WEBSITE CHUYÊN NGHIỆP, SÁNG TẠO CHO DOANH NGHIỆP',
    detailLink: '/thiet-ke-website-tai-hcm',
    balls: [
      'https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp',
      'https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp',
    ],
  },
  {
    id: 'digital',
    label: 'KEDI.Media / Digital',
    title: 'GIẢI PHÁP MARKETING GIÚP TĂNG KHÁCH HÀNG & DOANH THU LIÊN TỤC',
    detailLink: '/dich-vu-seo',
    balls: [
      'https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp',
      'https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp',
    ],
  },
  {
    id: 'studio',
    label: 'KEDI.Media / Studio',
    title: 'GIẢI PHÁP THƯƠNG HIỆU MEDIA SÁNG TẠO, CHẤT LƯỢNG CAO CHO BẠN',
    detailLink: '/chup-anh-profile-cong-ty',
    balls: [
      'https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp',
      'https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp',
    ],
  },
  {
    id: 'branding',
    label: 'KEDI.Media / Branding',
    title: 'GIẢI PHÁP GIÚP TĂNG NHẬN DIỆN VÀ SỰ CHUYÊN NGHIỆP CHO DOANH NGHIỆP',
    detailLink: '/introduction',
    balls: [
      'https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp',
      'https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp',
    ],
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative overflow-hidden">
      <FadeIn>
      {/* Top decoration image */}
      <div className="w-full relative z-10">
        <Image
          src="https://assets.kedi.media/images/236244d3329e087e4868-1672.webp"
          alt="KEDI visual system"
          width={1280}
          height={200}
          className="h-24 w-full object-cover block opacity-30"
        />
      </div>
      </FadeIn>

      {/* Main content with background and enhanced bottom rounded corners */}
      <div className="py-24 md:py-28 px-4 text-white overflow-hidden bg-kedi-navy relative -mt-10 rounded-b-[72px] md:rounded-b-[110px]">
        {/* Background image layer with no gap */}
        <FadeIn>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://assets.kedi.media/images/967982d61246b36f6da7-1672.webp"
            alt="KEDI background"
            fill
            className="object-cover opacity-10 mix-blend-screen"
            style={{
              borderBottomLeftRadius: '110px',
              borderBottomRightRadius: '110px',
              zIndex: -1,
            }}
          />
        </div>
        </FadeIn>

        {/* Content */}

        <div className="relative z-10 max-w-5xl mx-auto px-8 py-10 md:py-16 -mt-16">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              <FadeIn>
              <span className="inline-block bg-kedi-yellow text-kedi-navy px-4 py-2 rounded-full">
                KEDI thiết kế sẵn lộ trình và giải pháp
              </span>
              </FadeIn>
            </h2>
            <FadeIn>
            <p className="text-xl md:text-2xl font-semibold">
              cho doanh nghiệp của bạn
            </p>
            </FadeIn>
          </div>

          {/* Solution cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {portfolioSolutions.map((item) => (
              <div
                key={item.id} // Dùng id làm key để tránh cảnh báo React
                className="relative bg-white/[0.07] border border-white/10 rounded-[24px] p-8 overflow-hidden shadow-[0_24px_70px_-45px_rgba(0,0,0,.75)] hover:-translate-y-1 hover:border-kedi-yellow/45 hover:bg-white/[0.1] transition-all duration-300"
              >
                <FadeIn>
                {/* Floating balls (background decoration) */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                  <div className="absolute top-3 left-3 w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={item.balls[0]}
                      alt="Ball 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                
                  <div className="absolute bottom-3 right-3 w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={item.balls[1]}
                      alt="Ball 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Card content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Image
                      src="https://assets.kedi.media/images/cbe0eb58b4ee5d7a8419-512.webp"
                      alt="KEDI"
                      width={18}
                      height={18}
                    />
                    <span className="font-bold text-base">{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-kedi-yellow" />
                  </div>

                  <p className="font-bold text-base mb-3">{item.title}</p>

                  <a
                    href={item.detailLink}
                    className="inline-flex items-center gap-2 text-white border border-kedi-yellow/50 px-4 py-2 rounded-full text-xs font-bold hover:bg-kedi-yellow hover:text-kedi-navy transition"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
