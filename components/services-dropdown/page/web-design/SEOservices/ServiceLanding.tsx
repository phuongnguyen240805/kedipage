'use client';

import React from 'react';
import RegisterForm from '../../../../Register/RegisterForm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import FadeIn from '@/components/ui/Fadeoad'; // Giả định đường dẫn của bạn

// Định nghĩa kiểu dữ liệu cho props
interface ServiceLandingProps {
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  videoAlt: string;
  mascotSrc: string;
  mascotAlt: string;
  features: string[];
  brandText: string;
  ctaButtonText: string;
  bgImage?: string;
  className?: string;
}

const ServiceLanding: React.FC<ServiceLandingProps> = ({
  title,
  subtitle,
  videoSrc,
  videoAlt,
  mascotSrc,
  mascotAlt,
  brandText,
  ctaButtonText,
  bgImage = "url('https://mona.media/template/assets/images/dvs-bigupdate/bg-intro-banner.png')",
  className = '',
}) => {
  return (
    <div
      className={`min-h-screen text-white overflow-hidden relative bg-cover bg-center ${className}`}
      style={{
        backgroundImage:
          bgImage ||
          'linear-gradient(to bottom right, #4B0082, #1E3A8A, #4B0082)',
        paddingBottom: 38,
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-400 rounded-full opacity-25"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Header Text */}
            <FadeIn>
              <div className="space-y-4">
                <p className="text-lg font-medium text-pink-300">{subtitle}</p>
                <h1 className="text-4xl font-bold text-white leading-tight">{title}</h1>
              </div>
            </FadeIn>

            {/* Brand Section */}
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold">Để</span>
                  <div className="bg-white text-black px-4 py-2 rounded-full font-bold text-xl">
                    {brandText}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xl">
                  <span className="bg-green-500 text-black px-4 py-2 rounded font-bold">
                    TỐI ƯU SEO
                  </span>
                  <span>đem khách về</span>
                  <span>cho bạn</span>
                  <span className="text-yellow-400 font-bold border-b-2 border-yellow-400">
                    → tạo chuyển đổi tốt nhất
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Video/Mockup Section */}
            <FadeIn delay={0.4}>
              <div className="bg-black rounded-lg p-4 relative w-full md:w-[600px]">
                <video
                  className="w-full rounded aspect-video"
                  src={videoSrc}
                  controls
                  preload="metadata"
                  muted
                  loop
                  playsInline
                  aria-label={videoAlt}
                >
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
              </div>
            </FadeIn>

            {/* CTA Button & Mascot */}
            <FadeIn delay={0.6}>
              <div className="flex items-center space-x-4 mt-6">
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center space-x-2">
                  <span>{ctaButtonText}</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Arrow Icon</title>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </Button>

                <div className="relative w-16 h-16">
                  <Image
                    src={mascotSrc}
                    alt={mascotAlt}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Form */}
          <div className="sticky top-20 flex justify-center">
            <FadeIn direction="left" delay={0.8}>
              <div className="w-full max-w-[360px]">
                <RegisterForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* SVG cong ở dưới đáy */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{ height: 120, pointerEvents: 'none' }}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Decorative curved background</title>
          <path
            fill="#F2E7FA"
            d="M0,120 C360,0 1080,0 1440,120 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ServiceLanding;