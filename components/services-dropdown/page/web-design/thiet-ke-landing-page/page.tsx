"use client";

import React from "react";
import Home from "./container/Home";
import About from "./container/About-TKweb";
import Marquee from "./container/Marquee";
import TripleGridLayout from "./container/NewArrivals";
import Shop from "./container/Shop";

const Page = () => {
  return (
    <main className="w-full overflow-x-clip bg-[#0B2D5B] text-white">
      <Home />
      <About />
      <Shop />
      <Marquee />
      <TripleGridLayout />
    </main>
  );
};

export default Page;
