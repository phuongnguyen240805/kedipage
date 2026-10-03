"use client";

import React, { Suspense, useCallback, useState } from "react";
import CoverVideo from "../components/CoverVideo";

const Logo = React.lazy(() => import("../components/logo"));

const Home: React.FC = () => {
  const [canPlay, setCanPlay] = useState(false);
  const handleIntroComplete = useCallback(() => setCanPlay(true), []);

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#081F40]">
      <Suspense fallback={<div className="h-screen w-full bg-[#081F40]" />}>
        <Logo onLoadingComplete={handleIntroComplete} />
        <CoverVideo playVideo={canPlay} />
      </Suspense>
    </section>
  );
};

export default Home;
