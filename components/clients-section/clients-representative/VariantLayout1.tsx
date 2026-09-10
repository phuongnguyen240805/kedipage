"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FadeIn from "../../ui/Fadeoad";
import Boderyelow from "../../ui/boder-yelow";
import BorderRunning from "@/components/ui/BorderRunning";

export default function VariantLayout1({
  tagLine,
  subTagLine,
  tagLineColor = "#f41e92",
  primaryLogo,
  secondaryLogo,
  separator = <span className="text-xl font-bold text-white/50">X</span>,
  heading,
  subHeading,
  description,
  youtubeVideoId,
  leftImage,
  rightImage,
  buttons = [],
}: any) {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  const renderMultiLineText = (
    content: string | string[],
    className: string = "",
  ) => {
    const lines = Array.isArray(content) ? content : content.split("\n");
    return lines.map((line, index) => (
      <p key={index} className={className}>
        {line}
      </p>
    ));
  };

  return (
    <div className="px-4 lg:px-20 py-16 overflow-hidden relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <FadeIn>
          {tagLine && (
            <div className="text-center mb-16">
              <BorderRunning
                color="#792a45"
                glowColor="rgba(161, 54, 54, 0.8)"
              >
                <h1
                  className="inline-block text-white px-8 py-4 rounded-xl text-6xl font-bold hover:scale-105 transition-transform shadow-lg cursor-default"
                  style={{
                    backgroundColor: tagLineColor,
                    boxShadow: `0 0 25px ${tagLineColor}66`,
                  }}
                >
                  {tagLine}
                </h1>
              </BorderRunning>
              {subTagLine && (
                <p className="mt-6 text-3xl font-bold text-white tracking-tight drop-shadow-md">
                  {subTagLine}
                </p>
              )}
            </div>
          )}
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* --- Left Content --- */}
          <div className="w-full lg:w-1/2 space-y-8">
            <FadeIn>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 brightness-125 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  <Image
                    src={primaryLogo}
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                {secondaryLogo && (
                  <>
                    {separator}
                    <div className="relative w-24 h-12 brightness-125">
                      <Image
                        src={secondaryLogo}
                        alt="Partner"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  {heading}
                </h2>
                {subHeading && (
                  <div
                    className="text-xl font-medium tracking-wide"
                    style={{ color: tagLineColor }}
                  >
                    {subHeading}
                  </div>
                )}
                <div className="space-y-3 border-l-2 border-white/10 pl-6">
                  {renderMultiLineText(
                    description,
                    "text-lg text-gray-400 font-light leading-relaxed",
                  )}
                </div>
              </div>

              {buttons.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-6">
                  {buttons.map((btn: any, index: number) => (
                    <Button
                      key={index}
                      variant={btn.variant || "default"}
                      className={cn(
                        "rounded-full px-8 py-6 text-lg font-bold transition-all duration-300",
                        !btn.variant || btn.variant === "default"
                          ? "text-black hover:scale-105"
                          : "border-white/20 text-white hover:bg-white/5",
                      )}
                      style={
                        !btn.variant || btn.variant === "default"
                          ? { backgroundColor: "white" }
                          : {}
                      }
                    >
                      {btn.label}
                    </Button>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>

          {/* --- Right Visual Section --- */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[500px]">
            <div
              className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
              style={{ backgroundColor: tagLineColor }}
            />

            {/* Left Image - Đã bỏ hiệu ứng xoay */}
            {leftImage && (
              <div className="absolute -left-4 xl:-left-12 top-0 z-0 shadow-2xl">
                <Boderyelow>
                  <div className="relative bg-black w-[180px] h-[280px] lg:w-[220px] lg:h-[340px] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={leftImage}
                      alt="Decor Left"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Boderyelow>
              </div>
            )}

            {/* Main Video */}
            <div className="relative z-20">
              <Boderyelow className="z-21">
                {/* Đã thêm overflow-hidden để clip iframe video mượt theo bo góc */}
                <div className="relative w-[240px] h-[430px] lg:w-[240px] lg:h-[400px] rounded-xl bg-black overflow-hidden">
                  <iframe
                    src={youtubeEmbedUrl}
                    title="Video"
                    className="w-full h-full border-none"
                    allowFullScreen
                  />
                </div>
              </Boderyelow>
            </div>

            {/* Right Image - Đã bỏ hiệu ứng xoay */}
            {rightImage && (
              <div className="absolute -right-4 xl:-right-12 bottom-4 z-0 shadow-2xl">
                <Boderyelow>
                  <div className="relative bg-black w-[180px] h-[280px] lg:w-[220px] lg:h-[340px] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={rightImage}
                      alt="Decor Right"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Boderyelow>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
