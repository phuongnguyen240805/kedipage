"use client";
import { Marquee } from "@/components";
import About from "@/components/home-page/About";
import Clients from "@/components/home-page/Clients";
import Hero from "@/components/home-page/Hero";
import Projects from "@/components/home-page/Projects";
import Video from "@/components/home-page/Video";
import RegisterMain from "@/components/Register/RegisterMain";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let scrollInstance: { destroy?: () => void } | null = null;
    let cancelled = false;

    const initializeScroll = async () => {
      try {
        const loadedModule = await import("locomotive-scroll");
        if (cancelled) return;

        const LocomotiveScroll = loadedModule.default;
        scrollInstance = new LocomotiveScroll();
      } catch (error) {
        // Smooth scroll là enhancement, không được phép làm crash homepage.
        console.warn("[locomotive-scroll] initialization failed", error);
      }
    };

    void initializeScroll();

    return () => {
      cancelled = true;
      scrollInstance?.destroy?.();
    };
  }, []);

  return (
    <>
      <div>
        <Hero />
        <div className="w-full bg-marquee z-10 relative padding-y">
          <Marquee
            title="Thiet ke & phat trien"
            className="
          pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px]
          text-[220px] leading-[210px]
          lg:text-[260px] lg:leading-[200px]
          md:text-[200px] md:leading-[140px]
          sm:text-[150px] sm:leading-[110px]
          xm:text-[90px] xm:leading-[70px]
        "
          />
        </div>
        <About />
        <Video />
        <Projects />
        <Clients />
        <div className="max-w-5xl mx-auto">
          <RegisterMain />
        </div>
      </div>
    </>
  );
}
