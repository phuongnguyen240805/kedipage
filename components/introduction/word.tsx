'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

type ParagraphProps = {
  paragraph: string;
};

type WordProps = {
  children: string;
  progress: MotionValue<number>;
  range: number[];
};

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[12px] mt-[12px]">
      <span className="absolute opacity-[20%]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.6', 'start 0.25'],
  });

  const words = paragraph.split(' ');

  return (
    <p
      ref={container}
      className="flex text-[30px] lg:ml-[200px] leading-[35px] tracking-wider max-w-[1200px] text-white flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
