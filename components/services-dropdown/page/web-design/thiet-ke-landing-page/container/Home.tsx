"use client";

import React, { Suspense, useState } from "react";
import CoverVideo from "../components/CoverVideo";

// Sử dụng React.lazy cho Logo để Suspense hoạt động
const Logo = React.lazy(() => import("../components/logo"));

const Home: React.FC = () => {
  // Trạng thái để kiểm soát khi nào cho phép Video chạy
  const [canPlay, setCanPlay] = useState(false);

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#202020]">
      <Suspense fallback={<div className="h-screen w-full bg-black" />}>
        {/* 1. Logo nhận hàm onLoadingComplete. 
          Khi hết 6s trong Logo, nó sẽ gọi hàm này và setCanPlay(true)
        */}
        <Logo onLoadingComplete={() => setCanPlay(true)} />

        {/* 2. CoverVideo nhận biến canPlay.
          Khi canPlay = true, Video mới thực hiện lệnh .play()
        */}
        <CoverVideo playVideo={canPlay} />
      </Suspense>
    </section>
  );
};

export default Home;
