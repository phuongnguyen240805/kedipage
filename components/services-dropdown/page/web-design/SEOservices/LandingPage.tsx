'use client';

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/ui/Fadeoad'; // Đảm bảo đúng đường dẫn component của bạn

interface SEOLandingPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  images: { src: string; alt: string }[];
  bgGradient?: string;
  backgroundImage?: string;
  className?: string;
  highlightText?: string;
  specialBanner?: {
    show: boolean;
    text: string;
    link?: string;
  };
}

const LandingPage: React.FC<SEOLandingPageProps> = ({
  title,
  subtitle,
  description,
  features,
  images,
  bgGradient = 'from-purple-900 via-purple-800 to-indigo-900',
  backgroundImage,
  className = '',
  highlightText,
  specialBanner,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrollingDisabled, setIsScrollingDisabled] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (isScrollingDisabled) return;

    setIsScrollingDisabled(true);
    setTimeout(() => setIsScrollingDisabled(false), 300);

    setCurrentSlide((prev) => {
      const newSlide =
        e.deltaY < 0
          ? prev > 0
            ? prev - 1
            : images.length - 1
          : prev < images.length - 1
            ? prev + 1
            : 0;
      return newSlide;
    });
  };

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div
      className={`relative overflow-hidden ${
        backgroundImage ? '' : `bg-gradient-to-br ${bgGradient}`
      } ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {!backgroundImage && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#270046] via-[#3a0070] to-[#270046]" />
          <svg
            className="absolute top-0 w-full h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Top decorative wave</title>
            <path
              fill="#270046"
              fillOpacity="1"
              d="M0,192L60,186.7C120,181,240,171,360,165.3C480,160,600,160,720,181.3C840,203,960,245,1080,250.7C1200,256,1320,224,1380,208L1440,192V0H0Z"
            />
          </svg>
          <svg
            className="absolute bottom-0 w-full h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bottom decorative wave</title>
            <path
              fill="#270046"
              fillOpacity="1"
              d="M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,192C840,213,960,267,1080,272C1200,277,1320,235,1380,213.3L1440,192V320H0Z"
            />
          </svg>
          {/* Animation dots */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-200 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-purple-100 rounded-full animate-ping" />
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-200 rounded-full animate-pulse" />
          <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping" />
          <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-pink-100 rounded-full animate-pulse" />
        </div>
      )}

      {/* Special Banner */}
      {specialBanner?.show && (
        <FadeIn delay={0.1}>
          <div className="flex justify-center mt-4">
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-2 px-6 inline-block mx-auto rounded-md relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
              </div>
              <div className="relative z-10 text-center whitespace-nowrap font-semibold text-gray-900 text-sm md:text-base flex items-center justify-center gap-2">
                {specialBanner.link ? (
                  <a
                    href={specialBanner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-gray-700 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="animate-bounce">🎉</span>
                    <span>{specialBanner.text}</span>
                  </a>
                ) : (
                  <>
                    <span className="animate-bounce">🎉</span>
                    <span>{specialBanner.text}</span>
                    <span className="animate-bounce">🎉</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="text-center">
          <FadeIn>
            <p className="text-white/80 mb-4 text-lg">{subtitle}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              {title}
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8">
              {highlightText
                ? description.split(highlightText).map((part, i) => (
                    <span key={`${part}-${i}-${Math.random()}`}>
                      {part}
                      {i === 0 && (
                        <span className="text-red-400 font-bold">
                          {highlightText}
                        </span>
                      )}
                    </span>
                  ))
                : description}
            </p>
          </FadeIn>

          {/* Feature badges */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((text) => (
                <div
                  key={text}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Images or Carousel */}
        <FadeIn delay={0.5} scale={0.95}>
          <div className="max-w-7xl mx-auto mt-12 px-4">
            {images.length === 1 ? (
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={640}
                height={480}
                className="w-full max-w-4xl h-auto object-cover mx-auto rounded-xl shadow-2xl"
              />
            ) : images.length === 2 ? (
              <div className="flex justify-between gap-4">
                {images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={320}
                    height={240}
                    className="flex-1 w-full max-w-[calc(50%-0.5rem)] h-auto object-cover rounded-xl shadow-2xl"
                  />
                ))}
              </div>
            ) : (
              <div className="relative" onWheel={handleWheel}>
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {images.map((image, index) => (
                      <div
                        key={`${image.src}-${index}`}
                        className="w-full flex-shrink-0"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={640}
                          height={480}
                          className="w-full max-w-4xl h-auto object-cover mx-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                  {images.map((image, idx) => (
                    <Button
                      key={`${image.src}-${idx}`}
                      onClick={() => goToSlide(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === idx
                          ? 'bg-white scale-110'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-center mt-4 text-white/60 text-sm">
                  {currentSlide + 1} / {images.length}
                </div>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Arrow indicators */}
        <FadeIn delay={0.7} direction="up">
          <div className="flex justify-center mt-8 space-x-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Image
                key={`arrow-down-${i}-${Math.random()}`}
                src="https://mona.media/template/assets/images/dvs/arrow-down-white.png"
                alt="Arrow Down"
                width={32}
                height={32}
                className={`w-8 h-8 animate-bounce ${
                  i === 1 ? 'delay-200' : i === 2 ? 'delay-500' : ''
                }`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default LandingPage;