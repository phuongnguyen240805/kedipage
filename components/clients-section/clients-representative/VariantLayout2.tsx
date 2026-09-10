"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "../../ui/Fadeoad";
import Boderyelow from "../../ui/boder-yelow";

export interface ActionButton {
  label: string;
  variant?: "outline" | "default" | "ghost" | "secondary";
  onClick?: () => void;
  className?: string;
}

interface VariantLayout2Props {
  primaryLogo: string;
  secondaryLogo?: string;
  separator?: React.ReactNode;
  heading: React.ReactNode;
  subHeading?: React.ReactNode;
  description: string | string[];
  youtubeVideoId: string;
  leftDecorImage?: string;
  rightDecorImage?: string;
  summaryTitle?: string;
  summaryContent: string | string[];
  buttons?: ActionButton[];
  patternType?: "grid" | "dots" | "waves";
}

export default function VariantLayout2({
  primaryLogo,
  secondaryLogo,
  separator = <span className="text-xl font-bold text-white/50">X</span>,
  heading,
  subHeading,
  description,
  youtubeVideoId,
  leftDecorImage,
  rightDecorImage,
  summaryTitle,
  summaryContent,
  buttons = [],
}: VariantLayout2Props) {
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
    <section className="py-12 lg:py-24 px-6 lg:px-16 relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 xl:gap-8">
          
          {/* --- CỘT 1: Intro (Trái) --- */}
          <div className="lg:col-span-4 space-y-6 flex flex-col text-left items-start lg:text-right lg:items-end z-20">
            <FadeIn>
              <div className="flex items-center gap-3 justify-start lg:justify-end brightness-110 mb-4">
                <div className="relative w-[80px] h-[40px]">
                  <Image
                    src={primaryLogo}
                    alt="Logo"
                    fill
                    className="object-contain lg:object-right"
                  />
                </div>
                {secondaryLogo && (
                  <>
                    {separator}
                    <div className="relative w-[100px] h-[50px]">
                      <Image
                        src={secondaryLogo}
                        alt="Partner"
                        fill
                        className="object-contain lg:object-right"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight uppercase tracking-tighter">
                  {heading}
                </h2>
                {subHeading && (
                  <div className="text-lg text-yellow-500 font-medium italic">
                    {subHeading}
                  </div>
                )}
                <div className="text-gray-400 font-light leading-relaxed max-w-md lg:ml-auto">
                  {renderMultiLineText(description, "mb-2")}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* --- CỘT 2: Visuals (Giữa) --- */}
          <div className="lg:col-span-4 relative flex justify-center items-center py-16 lg:py-0 min-h-[500px]">
            {/* Vòng hào quang tĩnh (Bỏ animate-pulse để nhẹ trang) */}
            <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px]" />

            {/* Main Video */}
            <div className="relative z-30 shadow-2xl transition-transform duration-500 hover:scale-105">
              <Boderyelow>
                <div className="relative rounded-xl overflow-hidden bg-black w-[240px] aspect-[9/16] lg:w-[260px] xl:w-[280px]">
                  <iframe
                    src={youtubeEmbedUrl}
                    className="w-full h-full border-none"
                    allowFullScreen
                    title="Video"
                  />
                </div>
              </Boderyelow>
            </div>

            {/* Left Decor Image - BỎ XOAY (Rotate) */}
            {leftDecorImage && (
              <div className="absolute z-10 left-4 lg:-left-6 xl:-left-10 top-0 lg:top-12 transition-all duration-500">
                <Boderyelow>
                  <div className="relative w-[130px] h-[190px] lg:w-[160px] lg:h-[240px] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                    <Image
                      src={leftDecorImage}
                      alt="Decor Left"
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                </Boderyelow>
              </div>
            )}

            {/* Right Decor Image - BỎ XOAY (Rotate) */}
            {rightDecorImage && (
              <div className="absolute z-10 right-4 lg:-right-6 xl:-right-10 bottom-0 lg:bottom-12 transition-all duration-500">
                <Boderyelow>
                  <div className="relative w-[130px] h-[190px] lg:w-[160px] lg:h-[240px] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                    <Image
                      src={rightDecorImage}
                      alt="Decor Right"
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                </Boderyelow>
              </div>
            )}
          </div>

          {/* --- CỘT 3: Summary (Phải) --- */}
          <div className="lg:col-span-4 space-y-8 z-20">
            <FadeIn>
              {summaryTitle && (
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-yellow-500" />
                  <h3 className="font-bold uppercase tracking-widest text-white text-sm">
                    {summaryTitle}
                  </h3>
                </div>
              )}

              <div className="text-gray-400 text-sm leading-relaxed italic space-y-3 max-w-md border-l-2 lg:border-l-0 lg:border-r-2 border-white/10 pl-6 lg:pl-0 lg:pr-6">
                {renderMultiLineText(summaryContent)}
              </div>

              {buttons.length > 0 && (
                <div className="flex gap-4 flex-wrap pt-8">
                  {buttons.map((btn, index) => (
                    <Button
                      key={index}
                      variant={btn.variant || "default"}
                      onClick={btn.onClick}
                      className={`rounded-full px-8 py-6 font-bold transition-all duration-300 ${
                        btn.variant === "outline"
                          ? "border-white/20 text-white hover:bg-white/10 bg-transparent"
                          : "bg-yellow-500 text-black hover:bg-white hover:text-black shadow-lg shadow-yellow-500/10"
                      } ${btn.className || ""}`}
                    >
                      {btn.label}
                    </Button>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}