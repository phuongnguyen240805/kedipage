'use client';

import React from 'react';
import Langding1Hero from './langding1';
import Langding1About from './langding1_about';
import Langding2Projects from './langding2';
import Langding3Process from './langding3';
import Langding5Skills from './langding5';
import Langding6Tools from './langding6';
import Langding7Services from './langding7';
import FadeIn from '../ui/Fadeoad';

export default function Langding1Intro() {
  return (
    <div className="min-h-screen text-[white]">
      <div className="mx-auto flex w-full flex-col gap-24 px-4 pb-24 pt-16 sm:px-6 lg:px-9">
        <FadeIn direction="up" amount={0.1}>
          <Langding1Hero />
        </FadeIn>

        {/* About: Lướt 1/4 màn hình mới hiện */}
        <FadeIn direction="up" amount={0.25}>
          <Langding1About />
        </FadeIn>

        <Langding2Projects />
        {/* Process */}
        <FadeIn direction="up" amount={0.1}>
          <Langding3Process />
        </FadeIn>

        {/* Skills */}
        <FadeIn direction="up" amount={0.25}>
          <Langding5Skills />
        </FadeIn>

        {/* Tools */}
        <FadeIn direction="up" amount={0.25}>
          <Langding6Tools />
        </FadeIn>
        <Langding7Services />
      </div>
    </div>
  );
}
