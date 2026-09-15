'use client';

import Image from 'next/image';
import FadeIn from '../ui/Fadeoad';

const portfolioSolutions = [
  {
    id: 'website',
    label: 'KEDI.Media / Website',
    title: 'GIẢI PHÁP PREMIUM WEBSITE CHUYÊN NGHIỆP, SÁNG TẠO CHO DOANH NGHIỆP',
    detailLink: 'https://mona.media/thiet-ke-website-tai-hcm/',
    balls: [
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765192719/brand3-ball-2_wmigjz.png',
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765192719/brand3-ball-2_wmigjz.png',
    ],
  },
  {
    id: 'digital',
    label: 'Kedi.Media / Digital',
    title: 'GIẢI PHÁP MARKETING GIÚP TĂNG KHÁCH HÀNG & DOANH THU LIÊN TỤC',
    detailLink: 'https://mona.media/dich-vu-seo/',
    balls: [
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765192719/brand3-ball-2_wmigjz.png',
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765192719/brand3-ball-2_wmigjz.png',
    ],
  },
  {
    id: 'studio',
    label: 'Kedi.Media / Studio',
    title: 'GIẢI PHÁP THƯƠNG HIỆU MEDIA SÁNG TẠO, CHẤT LƯỢNG CAO CHO BẠN',
    detailLink: 'https://mona.media/chup-anh-profile-cong-ty/',
    balls: [
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765192719/brand3-ball-2_wmigjz.png',
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765192719/brand3-ball-2_wmigjz.png',
    ],
  },
  {
    id: 'branding',
    label: 'Kedi.Media / Branding',
    title: 'GIẢI PHÁP GIÚP TĂNG NHẬN DIỆN VÀ SỰ CHUYÊN NGHIỆP CHO DOANH NGHIỆP',
    detailLink: 'https://mona.media/branding-la-gi/',
    balls: [
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765192719/brand3-ball-2_wmigjz.png',
      'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765192719/brand3-ball-2_wmigjz.png',
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
          src="https://mona.media/template/assets/images/du_an_tong-21_11_23/divider-1.png"
          alt="Connect decoration top"
          width={1280}
          height={200}
          className="w-full h-auto object-cover block"
        />
      </div>
      </FadeIn>

      {/* Main content with background and enhanced bottom rounded corners */}
      <div className="py-28 px-4 text-white overflow-hidden bg-[#200046] relative -mt-20 rounded-b-[600px] md:rounded-b-[500px] sm:rounded-b-[300px]">
        {/* Background image layer with no gap */}
        <FadeIn>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://mona.media/template/assets/images/du_an_tong-21_11_23/brand-main-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-80"
            style={{
              borderBottomLeftRadius: '300px',
              borderBottomRightRadius: '300px',
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
              <span className="inline-block bg-pink-500 text-white px-3 py-1 rounded-md">
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
                className="relative bg-[#7B2CBF] rounded-xl p-8 overflow-hidden shadow-lg hover:bg-[#6B2DCD] transition-colors duration-300"
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
                      src="https://mona.media/template/assets/images/du_an_tong-21_11_23/mona-icon-small.png"
                      alt="Kedi Logo"
                      width={18}
                      height={18}
                    />
                    <span className="font-bold text-base">{item.label}</span>
                    <Image
                      src="https://res.cloudinary.com/dzkcqktcl/image/upload/v1765193022/mona-icon-link-small_ifho7k.png"
                      alt="Link Icon"
                      width={14}
                      height={14}
                    />
                  </div>

                  <p className="font-bold text-base mb-3">{item.title}</p>

                  <a
                    href={item.detailLink}
                    className="inline-flex items-center gap-3 text-white border border-white px-3 py-1 rounded-full text-xs hover:bg-white hover:text-purple-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Xem chi tiết</span>
                    <Image
                      src="https://mona.media/template/assets/images/du_an_tong-21_11_23/icon-arrow-right-2.svg"
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
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
