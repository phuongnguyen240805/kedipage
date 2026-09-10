'use client';

import React from 'react';
import Marquee from './marquee';
import SplitScrollLayout from './stickyimage';

export default function Langding2Projects() {
  return (
    <section id="projects" className="flex flex-col">
      <Marquee baseVelocity={2}>
        <h2 className="text-white uppercase text-[100px] font-bold tracking-tight flex items-center justify-center">
          <span className="w-[40px] h-[40px] bg-white rounded-full mx-[20px]" />
          selected
          <span className="w-[40px] h-[40px] bg-white rounded-full mx-[20px]" />
          projects
        </h2>
      </Marquee>
      <SplitScrollLayout />
    </section>
  );
}
