'use client';

import React from 'react';
import Image from 'next/image';
import landingData from './langding_data';
import {
  BarChart3,
  FolderOpen,
  Lightbulb,
  Search,
  Network,
} from 'lucide-react';

export default function LandingPage4() {
  // Build a mobile-friendly set of 5 images (fill from LandingPage5 if needed)
  const lp4 = landingData?.LandingPage4?.images ?? [];
  const lp5 = landingData?.LandingPage5?.images ?? [];
  const mobileImages: string[] = [];
  for (let i = 0; i < 5; i++) {
    if (lp4[i]) mobileImages.push(lp4[i]);
    else if (lp5[i - lp4.length]) mobileImages.push(lp5[i - lp4.length]);
  }

  return (
    <section className="relative w-full min-h-screen  overflow-hidden font-sans py-20 flex flex-col items-center">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(124,58,237,0.15),_transparent_70%)]"></div>

        {/* Glowing Orbs (Giả lập ánh sáng 2 bên) */}
        <div className="absolute top-1/3 -left-[10%] w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/3 -right-[10%] w-[500px] h-[500px] bg-fuchsia-900/40 rounded-full blur-[100px] mix-blend-screen"></div>

        {/* Dotted Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-20 stroke-white/30">
          <path
            d="M100,200 Q400,100 800,200 T1200,300"
            fill="none"
            strokeWidth="1"
            strokeDasharray="6,6"
          />
          <circle cx="800" cy="200" r="3" fill="white" />
        </svg>
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-10 text-center mb-24 px-4 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          <span className="text-orange-500 drop-shadow-lg">
            Nghiên cứu từng ngành
          </span>
          <br />
          để áp dụng cho từng khách hàng
        </h2>

        {/* Badge: Đó chính là BẠN */}
        <div className="inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="relative group cursor-default">
            <div className="absolute -inset-1 bg-green-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative border-2 border-dashed border-green-500 bg-[#0f392b]/80 backdrop-blur-md px-8 py-2 rounded-lg">
              <span className="text-green-400 font-bold text-xl md:text-2xl uppercase tracking-wider">
                Đó chính là BẠN!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN INTERACTIVE AREA --- */}
      <div className="relative w-full max-w-6xl mx-auto h-[600px] flex justify-center items-center perspective-[2000px]">
        {/* Floating Icons Animation (desktop only) */}
        <div className="hidden md:block">
          <FloatingIcon
            icon={<Lightbulb size={24} />}
            color="bg-yellow-400"
            position="top-0 left-[20%]"
            delay="0s"
          />
          <FloatingIcon
            icon={<Search size={24} />}
            color="bg-green-500"
            position="top-10 right-[25%]"
            delay="1s"
          />
          <FloatingIcon
            icon={<Network size={24} />}
            color="bg-pink-500"
            position="bottom-20 right-[15%]"
            delay="2s"
          />
          <FloatingIcon
            icon={<BarChart3 size={24} />}
            color="bg-blue-500"
            position="bottom-10 left-[15%]"
            delay="1.5s"
          />
        </div>

        {/* --- LAYER 1: BACKGROUND CARDS (Nhỏ & Mờ) --- */}

        {/* Presentation card removed as requested */}

        {/* Card: Blueprint pair (centered above hero) */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 opacity-90 z-10 hidden md:flex gap-4">
          {[0, 1].map((i) => (
            <div key={i} className="bg-white p-2 rounded-lg shadow-xl w-40">
              <div className="relative w-full h-28 bg-gray-100 rounded overflow-hidden">
                <Image
                  src={landingData.LandingPage4.images[0]}
                  alt={`Blueprint ${i + 1}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="mt-2 text-[10px] text-gray-500 font-bold uppercase">
                Technical Drawing
              </div>
            </div>
          ))}
        </div>

        {/* --- LAYER 2: FOREGROUND CARDS (Card chính) --- */}

        {/* Mobile grid: on small screens, show 2 / 2 / 1(video) layout */}
        <div className="z-20 w-full px-4 md:hidden">
          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {mobileImages.slice(0, 4).map((src, i) => (
              <div
                key={i}
                className="w-full h-36 rounded-lg overflow-hidden shadow-lg relative"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}

            {/* Video as last row spanning two columns */}
            <div className="col-span-2 w-full rounded-lg overflow-hidden shadow-lg bg-black h-56 relative">
              {/* Use LandingPage1 video as fallback */}
              {landingData?.LandingPage1?.video ? (
                <video
                  src={landingData.LandingPage1.video}
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
                  Video
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CARD 1: Trái (Nghiên cứu thị trường) */}
        <div className="hidden md:block absolute left-4 md:left-24 bottom-20 z-20 group">
          <div className="relative transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-[-2deg]">
            <Tooltip
              text="Tìm lợi thế cạnh tranh"
              icon="📊"
              color="text-green-400"
              position="-top-12 -left-4"
            />

            <div className="bg-white p-3 rounded-2xl shadow-2xl w-56">
              <div className="relative w-full h-40 bg-gray-100 rounded-xl overflow-hidden mb-3">
                <Image
                  src={landingData.LandingPage4.images[0]}
                  alt="Chart"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-900 text-sm">
                  Nghiên Cứu Thị Trường.pdf
                </h4>
                <p className="text-xs text-gray-400 mt-1">Report by Anh Tuan</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: Giữa (Card Hero - To nhất) */}
        <div className="hidden md:block absolute z-30 bottom-0 md:-bottom-8 group">
          <div className="relative transition-transform duration-500 group-hover:-translate-y-6">
            <Tooltip
              text="Xây dựng hành trình trải nghiệm"
              icon="😄"
              color="text-yellow-400"
              position="top-[30%] -left-20"
            />

            <div className="bg-white p-3 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] w-72 md:w-[360px]">
              <div className="relative w-full h-44 md:h-56 bg-gray-100 rounded-xl overflow-hidden mb-4 group-hover:shadow-inner transition-shadow">
                <Image
                  src={landingData.LandingPage4.images[1]}
                  alt="Meeting"
                  fill
                  className="object-cover"
                />
                {/* UI giả lập nút bấm video */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-purple-600 border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Nghiên Cứu Khách Hàng.pdf
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Updated 2 hours ago
                    </p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <FolderOpen size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: Phải (Catalog) */}
        <div className="hidden md:block absolute right-4 md:right-28 bottom-32 z-20 group">
          <div className="relative transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-[2deg]">
            <Tooltip
              text="Trưng bày sản phẩm thu hút"
              icon="✨"
              color="text-pink-400"
              position="-top-12 -right-4"
            />

            <div className="bg-white p-3 rounded-2xl shadow-2xl w-52">
              <div className="relative w-full h-32 bg-pink-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
                <Image
                  src={landingData.LandingPage4.images[0]}
                  alt="Laptop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-900 text-sm">
                  Catalog images.pptx
                </h4>
                <p className="text-xs text-gray-400 mt-1">Creative by Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- SUB COMPONENTS (Tách ra để tái sử dụng) --- */

type TooltipProps = {
  text: string;
  icon?: React.ReactNode;
  color?: string;
  position?: string;
};

function TooltipComponent({
  text,
  icon = null,
  color = 'text-white',
  position = 'top-0 left-0',
}: TooltipProps) {
  return (
    <div
      className={`absolute ${position} z-50 flex items-center bg-gray-900/95 backdrop-blur text-white px-4 py-2 rounded-full shadow-xl border border-white/10 whitespace-nowrap animate-fadeIn`}
      role="status"
      aria-label={text}
    >
      {icon ? <span className={`mr-2 ${color}`}>{icon}</span> : null}
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
}

export const Tooltip = React.memo(TooltipComponent);
(Tooltip as any).displayName = 'Tooltip';

/* UserAvatar removed — avatars were deleted from the layout per request */

type FloatingIconProps = {
  icon: React.ReactNode;
  color?: string;
  position?: string;
  delay?: string;
};

function FloatingIconComponent({
  icon,
  color = 'bg-white',
  position = 'top-0 left-0',
  delay = '0s',
}: FloatingIconProps) {
  return (
    <div
      className={`absolute ${position} w-10 h-10 ${color} rounded-xl flex items-center justify-center text-white shadow-lg animate-float`}
      style={{ animationDelay: delay }}
      aria-hidden
    >
      {icon}
    </div>
  );
}

export const FloatingIcon = React.memo(FloatingIconComponent);
(FloatingIcon as any).displayName = 'FloatingIcon';

type SimpleFileCardProps = {
  icon?: React.ReactNode;
  type?: string;
  title: string;
};

function SimpleFileCardComponent({
  icon = null,
  type = 'FILE',
  title,
}: SimpleFileCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-48 h-56 flex flex-col items-center justify-center text-center space-y-3">
      <div className="p-3 rounded-full bg-orange-50">{icon}</div>
      <div>
        {type ? (
          <span className="bg-orange-100 text-orange-600 text-[10px] px-2 py-0.5 rounded font-bold uppercase">
            {type}
          </span>
        ) : null}
        <h4 className="font-bold text-gray-800 text-sm mt-2">{title}</h4>
      </div>
    </div>
  );
}

export const SimpleFileCard = React.memo(SimpleFileCardComponent);
(SimpleFileCard as any).displayName = 'SimpleFileCard';
