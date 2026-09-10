"use client";

import React, { useState } from "react";
import Image from "next/image";
import Boderyelow from "../ui/boder-yelow";

const EnterpriseHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="hero-container selection:bg-[#7311d4]/30 min-h-screen text-white overflow-x-hidden relative">
      {/* Background Effects - Giữ nguyên */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 radial-glow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[#7311d4]/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-start pb-20">
        
        {/* --- TITLE & SUBTITLE SECTION --- */}
        <div className="relative z-10 text-center w-full max-w-5xl mb-12 md:mb-20">
          
          <div className="relative flex items-center justify-center perspective-container pt-10 pb-0 md:pt-10 md:pb-0">
            {/* Chữ nền mờ phía sau */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none z-0">
              <h1 className="text-gradient-silver text-[18vw] md:text-[12vw] font-black leading-none tracking-[-0.05em] opacity-40 whitespace-nowrap uppercase">
                GRATEFUL
              </h1>
            </div>

            {/* Container chính giữa */}
            <div className="relative w-64 h-36 md:w-[500px] md:h-[280px] group">
              {/* Hiệu ứng blur ánh sáng tím ở giữa */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-[#7311d4]/40 rounded-full blur-[40px] md:blur-[60px]"></div>
              </div>

              {/* Chữ đè lên trên */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-white text-[15vw] md:text-[10vw] font-black leading-none tracking-[-0.05em] whitespace-nowrap mix-blend-overlay uppercase text-center">
                  GRATEFUL
                </h1>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-white text-sm -mt-4 md:-mt-8 md:text-xl font-light leading-relaxed max-w-4xl mx-auto px-4 text-center relative z-20">
            Thiết kế trải nghiệm số đỉnh cao, giúp doanh nghiệp bứt phá và dẫn đầu thị trường.
          </p>
        </div>

        {/* --- 3D SHOWCASE AREA (VIDEO) --- */}
        <div className="relative flex items-center justify-center w-full max-w-6xl px-4">
          
          {/* Card Left */}
          <div className="hidden lg:flex flex-col gap-6 absolute left-0 xl:left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 tilt-left z-20">
            <div className="glass-card w-44 h-28 xl:w-56 xl:h-36 rounded-xl overflow-hidden group cursor-pointer border-white/10 shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4529AfXr9R1F2h73hNI_YhHWtFNEuye3R1EDgNuzYJN9bKHh4YVq7t1Ufbz0jEtB7KWSj5ISzog3t9TH5Gp9GPVJtRiIJM8iusMUsvPonMmzUjAJAeoEmJ3HxHouDWg8prpzkjyoqD1Qweq4P7QMwY6PWs6R2zoFLK8tlvZ-uAubRhJdvV410XCRcUCgGYYd-o8mfH_gW37Pf0wbz9KTwBfcqOth2XTZbtjZ1goYRjPVStguRYQP2xPBUVhmyaQ2uirs7pH-UqSNG"
                alt="Infrastructure"
                fill
                className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute bottom-0 p-3 w-full bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-[8px] font-bold tracking-widest uppercase opacity-70">Infrastructure</p>
                <p className="text-[10px] font-medium">Urban Planning 3D</p>
              </div>
            </div>
            <div className="glass-card w-36 h-24 xl:w-48 xl:h-32 rounded-xl overflow-hidden group cursor-pointer translate-x-8 border-white/10 shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsXJT3cb0hm1m5vMECKUJA9_YPFuwagqZCIkeEo18tRix11Vh3vGf1xPyKNn_4WT1maSnw2Lhu7TCyXKM9MV0SObOEVmkUNShgwMx0xklfo3RDOXN3t7IPFhVJCEcqt1VbzZluli8me_xA-sSfFCwQZ_G5LMShdPMHGjNe4vxoJNV8mL2ob_wXlznsFBHg5nSI8k1ebzzDU1QKsniVpeWsxm9LYo0NTRqGjjgc8fJwoQfVqz_CvEtE9M9sJf3vdh-3JZ8IwlkbCLWQ"
                alt="Analytics"
                fill
                className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute bottom-0 p-3 w-full bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-[8px] font-bold tracking-widest uppercase opacity-70">Analytics</p>
                <p className="text-[10px] font-medium">Data Immersion</p>
              </div>
            </div>
          </div>

          {/* Central Video Player */}
          <div className="relative z-10 w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <Boderyelow>
              <div
                className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden bg-black border border-[#7311d4]/30 group cursor-pointer shadow-[0_0_50px_rgba(115,17,212,0.4)]"
                onClick={() => setIsPlaying(true)}
              >
                {!isPlaying ? (
                  <>
                    <Image
                      src="https://img.youtube.com/vi/czmj2NNaPJI/maxresdefault.jpg"
                      alt="Video Thumbnail"
                      fill
                      className="object-cover opacity-75 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-all">
                      <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-[#7311d4]/40 animate-ping opacity-30"></div>
                        <div className="absolute inset-0 rounded-full border border-[#7311d4]/60 scale-125 transition-all duration-700"></div>
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#7311d4] border border-white/30 flex items-center justify-center text-white transition-all duration-500 scale-110 shadow-[0_0_60px_rgba(115,17,212,1)]">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 translate-x-0.5">
                            <path d="M7 6v12l10-6z" strokeLinejoin="round" strokeLinecap="round" />
                          </svg>
                        </div>
                        <svg className="absolute inset-0 w-full h-full animate-[spin_5s_linear_infinite]" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="none" className="text-[#7311d4] stroke-dasharray-[150] stroke-dashoffset-[100] opacity-80" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/czmj2NNaPJI?autoplay=1"
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}

                {!isPlaying && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-[#7311d4] rounded-full animate-pulse shadow-[0_0_10px_#7311d4]"></div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">System Online</span>
                  </div>
                )}
              </div>
            </Boderyelow>
          </div>

          {/* Card Right */}
          <div className="hidden lg:flex flex-col gap-6 absolute right-0 xl:right-0 top-1/2 -translate-y-1/2 translate-x-1/4 tilt-right z-20">
            <div className="glass-card w-44 h-28 xl:w-56 xl:h-36 rounded-xl overflow-hidden group cursor-pointer border-white/10 shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt6rPIeNj3SjrzWbgN2R9W1s1uOlFOfQjw_wtNxQInRO4mSnhD_uME_h9Kgevl96jgUn-4_je4KPAZzeDQTj5z-KCwbAeCrlBZU0JvHtLuReTHSFEmxVJFJK0As5TvvkRXyn_a1TWT1mwx6j6neC4Zq3olLLj1tumIcHK6g6ssaI9GEoUiDNExZzPcv4xn9IQbtwxJFSVPafuOtfk06Pvz4dPxIscIOGBuR_5IwNEfGXxX_Ra5ZfF-RDkoD9V72mG0VKFGia6RVkQ4"
                alt="Research"
                fill
                className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute bottom-0 p-3 w-full bg-gradient-to-t from-black/90 to-transparent text-right">
                <p className="text-[8px] font-bold tracking-widest uppercase opacity-70">Research</p>
                <p className="text-[10px] font-medium">Quantum Lab Beta</p>
              </div>
            </div>
            <div className="glass-card w-36 h-24 xl:w-48 xl:h-32 rounded-xl overflow-hidden group cursor-pointer -translate-x-8 border-white/10 shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZWZ-Hbx9wcYl4VDI-VeSugyt4-DxM3li-zv3r716ETlUoSprt3RbINhS3xmK7nssf_hzyDBDwWSbG_tC2nYQt4Jh4L1tGNAeKdtoGhpswXCpW6VKNXs8WZDgEcjJ4KeHSnQ6boKRa-R3nTO7GBRL1nQ8VsrZGvl6umhtHzCDFIvtneI-bFKzErcqRLCyPSe_qEYZGMwpD2ayz9dzcuP5SRDuF5N9kcJZ4bhcVfDfvwAtQJI5-07Afnoc7KjLBE2kcn0fAn0rZrfMB"
                alt="Global"
                fill
                className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute bottom-0 p-3 w-full bg-gradient-to-t from-black/90 to-transparent text-right">
                <p className="text-[8px] font-bold tracking-widest uppercase opacity-70">Global</p>
                <p className="text-[10px] font-medium">Network Expansion</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default EnterpriseHero;