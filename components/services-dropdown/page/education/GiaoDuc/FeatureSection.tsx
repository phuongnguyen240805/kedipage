import FadeIn from "@/components/ui/Fadeoad";
import Image from "next/image";
import React, { ReactNode, useRef, useState } from "react";

// ... (Giữ nguyên phần Icons: DoubleCheckIcon, SpeedIcon, PlayIconSmall, PlayIconLarge) ...
// Để code gọn, tôi ẩn phần khai báo Icon ở đây, bạn giữ nguyên như cũ nhé.

const DoubleCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
      clipRule="evenodd"
    />
  </svg>
);
const SpeedIcon = () => (
  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5 text-orange-500"
    >
      <path
        fillRule="evenodd"
        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);
const PlayIconSmall = () => (
  <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center border-2 border-white shadow-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-white ml-0.5"
    >
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);
const PlayIconLarge = () => (
  <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg border-4 border-white/20">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-white ml-1"
    >
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

interface FeatureSectionProps {
  title: string;
  tags?: string[];
  features: ReactNode[];
  imageSrc?: string; // <--- Optional: có hoặc không có cũng được
  videoSrc?: string; // <--- Mới: Link video (nếu có thì hiển thị video, không thì hiển thị ảnh)

  // Các props điều khiển nút CTA
  showCta?: boolean; // <--- Mới: Kiểm soát việc hiện/ẩn
  ctaText?: string;
  ctaSubtext?: string;

  // Điều khiển hiển thị icon play
  showPlayIcon?: boolean; // <--- Mới: Hiển thị icon play hay không
}

export default function FeatureSection({
  title,
  tags,
  features,
  imageSrc,
  videoSrc, // <--- Nhận videoSrc

  // Mặc định showCta là true (Hiện nút) nếu không truyền vào
  showCta = true,

  ctaText = "BẮT ĐẦU TRẢI NGHIỆM NGAY HỆ THỐNG",
  ctaSubtext = "Kedi có phần quà vô cùng đặc biệt cho bạn",

  showPlayIcon = true, // Mặc định hiển thị icon play
}: FeatureSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 border border-purple-500 rounded-[2rem] p-6 lg:p-10">
        {/* Cột trái: Nội dung */}
        <div className="flex flex-col gap-5">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#fa4b9d] leading-tight">
              {title}
            </h2>
          </FadeIn>
          <FadeIn>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-2 py-1 pr-4 shadow-sm"
                  >
                    <SpeedIcon />
                    <span className="text-sm font-semibold text-gray-700">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <ul className="space-y-4 text-gray-700 text-base lg:text-lg mt-2">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <DoubleCheckIcon />
                  <div className="flex-1">{item}</div>
                </li>
              ))}
            </ul>

            {/* --- LOGIC HIỆN/ẨN NÚT --- */}
            {showCta && (
              <div className="mt-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-3 pr-6 flex items-center gap-4 hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg shadow-purple-200">
                  <PlayIconSmall />
                  <div className="text-left text-white">
                    <div className="font-bold text-lg uppercase leading-none mb-1">
                      {ctaText}
                    </div>
                    <div className="text-xs font-light">{ctaSubtext}</div>
                  </div>
                </button>
              </div>
            )}
          </FadeIn>
          {/* ------------------------- */}
        </div>
        <FadeIn>
          {/* Cột phải: Video STICKY */}
          <div>
            <div className="sticky top-20 w-full rounded-2xl flex items-center justify-center">
              <div className="relative w-[90%] max-w-full">
                {/* Nếu có videoSrc thì hiển thị video, không thì hiển thị ảnh */}
                {videoSrc ? (
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    controls
                    muted
                    className="rounded-lg shadow-2xl border-4 border-gray-800 w-full h-auto"
                    style={{ objectFit: "cover" }}
                  />
                ) : imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt="Dashboard"
                    width={800}
                    height={500}
                    className="rounded-lg shadow-2xl border-4 border-gray-800 w-full h-auto"
                    style={{ objectFit: "cover" }}
                  />
                ) : null}
                {showPlayIcon && videoSrc && !isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handlePlayClick}
                  >
                    <PlayIconLarge />
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
