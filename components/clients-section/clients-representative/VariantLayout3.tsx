"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FadeIn from "../../ui/Fadeoad";
import Boderyelow from "../../ui/boder-yelow";

export interface ActionButton {
  label: string;
  variant?: "outline" | "default" | "ghost" | "secondary";
  onClick?: () => void;
  className?: string;
}

interface VariantLayout3Props {
  primaryLogo: string;
  secondaryLogo?: string;
  separator?: React.ReactNode;
  heading: React.ReactNode;
  subHeading?: React.ReactNode;
  description: string | string[];
  summaryTitle?: string;
  summaryContent: string | string[];
  youtubeVideoId: string;
  topDecorImage?: string;
  bottomDecorImage?: string;
  buttons?: ActionButton[];
}

export default function VariantLayout3({
  primaryLogo,
  secondaryLogo,
  separator = <span className="text-xl font-bold text-white/50">X</span>,
  heading,
  subHeading,
  description,
  summaryTitle,
  summaryContent,
  youtubeVideoId,
  topDecorImage,
  bottomDecorImage,
  buttons = [],
}: VariantLayout3Props) {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  const renderMultiLineText = (
    content: string | string[],
    className: string = "",
  ) => {
    const lines = Array.isArray(content) ? content : [content];
    return lines.map((line, index) => (
      <p key={index} className={className}>
        {line}
      </p>
    ));
  };

  return (
    <section className="py-12 lg:py-24 px-6 lg:px-20 relative overflow-hidden min-h-screen flex items-center ">
      {/* Hiệu ứng Glow tĩnh phía sau nội dung */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-12 lg:gap-x-16 relative z-10 w-full">
        
        {/* --- CỘT TRÁI: Video Chính --- */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
          <div className="shadow-2xl transition-transform duration-500 hover:scale-105">
            <Boderyelow>
              <div className="relative rounded-xl bg-black w-[240px] lg:w-[260px] aspect-[9/16] overflow-hidden">
                <iframe
                  src={youtubeEmbedUrl}
                  className="w-full h-full border-none"
                  allowFullScreen
                  title="Main Video"
                />
              </div>
            </Boderyelow>
          </div>
        </div>

        {/* --- CỘT GIỮA: Nội dung chính --- */}
        <div className="w-full lg:w-2/4 text-center lg:text-left space-y-8 px-4">
          <FadeIn>
            {/* Logos */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="relative w-[100px] h-[40px]">
                <Image
                  src={primaryLogo}
                  alt="Logo"
                  fill
                  className="object-contain lg:object-left"
                />
              </div>
              {secondaryLogo && (
                <>
                  {separator}
                  <div className="relative w-[120px] h-[60px]">
                    <Image
                      src={secondaryLogo}
                      alt="Partner"
                      fill
                      className="object-contain lg:object-left"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Heading & SubHeading */}
            <div className="space-y-4">
              <h2 className="text-[clamp(32px,4vw,56px)] font-black text-white leading-tight uppercase tracking-tighter">
                {heading}
              </h2>
              {subHeading && (
                <div className="text-lg text-yellow-500 font-medium tracking-wide italic">
                  {subHeading}
                </div>
              )}
              <div className="text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 text-[16px]">
                {renderMultiLineText(description)}
              </div>
            </div>

            {/* Summary Section */}
            <div className="pt-6 border-t border-white/10 mt-8">
              {summaryTitle && (
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div className="w-1 h-4 bg-yellow-500" />
                  <h3 className="font-bold uppercase text-[10px] tracking-[0.3em] text-white">
                    {summaryTitle}
                  </h3>
                </div>
              )}
              <div className="italic text-gray-500 text-sm leading-relaxed space-y-2">
                {renderMultiLineText(summaryContent)}
              </div>
            </div>

            {/* Buttons */}
            {buttons.length > 0 && (
              <div className="flex gap-4 justify-center lg:justify-start pt-8 flex-wrap">
                {buttons.map((btn, index) => (
                  <Button
                    key={index}
                    variant={btn.variant || "default"}
                    onClick={btn.onClick}
                    className={cn(
                      "rounded-full px-8 py-6 font-bold transition-all duration-300 uppercase tracking-wider",
                      btn.variant === "outline"
                        ? "border-white/20 text-white hover:bg-white/10 bg-transparent"
                        : "bg-yellow-500 text-black hover:bg-white hover:text-black",
                      btn.className,
                    )}
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>
            )}
          </FadeIn>
        </div>

        {/* --- CỘT PHẢI: Hình ảnh trang trí --- */}
        <div className="w-full lg:w-1/4 flex flex-row lg:flex-col items-center justify-center lg:items-end gap-6">
          {/* Top Image - BỎ XOAY (Rotate) */}
          <FadeIn>
            {topDecorImage && (
              <div className="transition-all duration-500">
                <Boderyelow>
                  <div className="relative w-[140px] h-[100px] lg:w-[280px] lg:h-[180px] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                    <Image
                      src={topDecorImage}
                      alt="Top Decor"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </Boderyelow>
              </div>
            )}
          </FadeIn>

          {/* Bottom Image - BỎ XOAY (Rotate) */}
          <FadeIn>
            {bottomDecorImage && (
              <div className="transition-all duration-500">
                <Boderyelow>
                  <div className="relative w-[140px] h-[100px] lg:w-[280px] lg:h-[180px] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                    <Image
                      src={bottomDecorImage}
                      alt="Bottom Decor"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </Boderyelow>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}