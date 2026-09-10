'use client';

import Image from 'next/image';
import React from 'react';
import FadeIn from '@/components/ui/Fadeoad'; // Giả định đường dẫn component của bạn

// === INTERFACES ===
interface Problem {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  rotate: string;
}

interface Benefit {
  text: string;
  highlight?: string;
  highlightColor?: string;
  borderColor: string;
}

interface CurvedWhiteSectionProps {
  title: string;
  subtitle: string;
  description: string;
  problems: Problem[];
  benefits: Benefit[];
  tableImageSrc: string;
  tableImageAlt: string;
  imageSrc: string;
  imageAlt: string;
  bgColor?: string;
  className?: string;
}

// === SUB-COMPONENTS ===

const Problems: React.FC<{ problems: Problem[] }> = ({ problems }) => (
  <div className="space-y-6">
    {problems.map((problem, index) => (
      <FadeIn key={problem.id} delay={index * 0.2}>
        <div
          className={`${problem.bgColor} p-6 rounded-2xl border-l-4 ${problem.borderColor} transform ${problem.rotate} hover:rotate-0 transition-transform duration-300 shadow-sm`}
        >
          <h3 className={`font-bold ${problem.textColor} mb-2 uppercase`}>
            {problem.title}
          </h3>
          <p className={`${problem.textColor} text-sm leading-relaxed`}>{problem.description}</p>
        </div>
      </FadeIn>
    ))}
  </div>
);

const PersonIllustration: React.FC = () => (
  <FadeIn scale={0.8} delay={0.3}>
    <div className="flex flex-col items-center relative py-10 lg:py-0">
      <div className="w-48 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 relative shadow-xl">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-inner">
          <svg
            className="w-20 h-20 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
            role="img"
          >
            <title>Người dùng</title>
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L12 4L3 7V9C3 10.1 3.9 11 5 11V17C5 18.1 5.9 19 7 19H9C10.1 19 11 18.1 11 17V15H13V17C13 18.1 13.9 19 15 19H17C18.1 19 19 18.1 19 17V11C20.1 11 21 10.1 21 9Z" />
          </svg>
        </div>
        <div className="absolute -top-2 -right-2 bg-yellow-400 p-2 rounded-full animate-bounce shadow-md">
          <span role="img" aria-label="Biểu tượng căng thẳng" className="text-2xl">😰</span>
        </div>
      </div>
      <div className="text-center bg-gray-100 px-4 py-2 rounded-full shadow-sm mb-2">
        <span className="text-gray-700 font-semibold">Làm sai website</span>
      </div>
      <div className="text-center bg-red-100 px-6 py-2 rounded-full shadow-sm border border-red-200">
        <span className="text-red-700 font-bold uppercase text-sm">
          KHÔNG ĐÚNG ĐỐI TƯỢNG, MẤT TOP
        </span>
      </div>
    </div>
  </FadeIn>
);

const BenefitsList: React.FC<{ benefits: Benefit[] }> = ({ benefits }) => (
  <div className="space-y-6">
    {benefits.map((benefit, index) => {
      const uniqueKey = `${benefit.text}-${index}`;
      return (
        <FadeIn key={uniqueKey} direction="right" delay={index * 0.1}>
          <div className={`flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border-l-4 ${benefit.borderColor} hover:shadow-md transition-shadow`}>
            <div className={`w-3 h-3 ${benefit.borderColor} rounded-full mt-2 flex-shrink-0`}></div>
            <div>
              <p className="text-gray-700 leading-relaxed text-base">
                {benefit.text.split(benefit.highlight || '').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className={`font-bold ${benefit.highlightColor || 'text-purple-600'}`}>
                        {benefit.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </FadeIn>
      );
    })}
  </div>
);

// === MAIN COMPONENT ===

const CurvedWhiteSection: React.FC<CurvedWhiteSectionProps> = ({
  title, subtitle, description, problems, benefits, tableImageSrc, tableImageAlt, imageSrc, imageAlt, bgColor = '#F2E7FA', className = '',
}) => (
  <div className={`relative bg-white ${className}`} style={{ backgroundColor: bgColor }}>
    <div className="container mx-auto px-6 py-16 relative z-10">
      
      {/* 1. Header Section */}
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent uppercase tracking-tight">
              {title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 font-medium mb-4">{subtitle}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
        </div>
      </FadeIn>

      {/* 2. Illustration Section */}
      <div className="relative max-w-6xl mx-auto mb-20">
        <div className="relative grid lg:grid-cols-3 gap-8 items-center">
          <Problems problems={problems.slice(0, 2)} />
          <PersonIllustration />
          <Problems problems={problems.slice(2)} />
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <div className="flex justify-center items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-2">
              Khách hàng của anh chị <span className="font-bold text-purple-600">đang ở trên Google</span> và
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase">
              SEO là cách để anh chị tiếp cận
            </h3>
          </div>
        </FadeIn>
      </div>

      {/* 3. Benefits & Main Image */}
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mt-12 mb-20">
        <BenefitsList benefits={benefits} />
        <FadeIn direction="left">
          <div className="relative group">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={640}
              height={480}
              className="w-full h-auto rounded-[2rem] shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-purple-600/10 to-transparent pointer-events-none" />
          </div>
        </FadeIn>
      </div>

      {/* 4. Table Image Section */}
      <FadeIn delay={0.3}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white p-2 rounded-3xl shadow-2xl">
            <Image
              src={tableImageSrc}
              alt={tableImageAlt}
              width={1000}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </FadeIn>
    </div>

    {/* 5. Bottom Curved SVG */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]" style={{ height: 120, pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path fill="#270046" d="M0,120 C360,0 1080,0 1440,120 L1440,120 L0,120 Z" />
      </svg>
    </div>
  </div>
);

export default CurvedWhiteSection;