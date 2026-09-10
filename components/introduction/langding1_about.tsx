'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph } from './word';
import { aboutParagraph } from './data';

export default function Langding1About() {
  return (
    <section className="w-full my-[100px]" id="about">
      <h2 className="text-white uppercase leading-none sm:text-[80px] md:text-[100px] text-[100px] font-bold tracking-tight overflow-hidden">
        {'about'.split('').map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </h2>
      <div className="w-full">
        <Paragraph paragraph={aboutParagraph} />
      </div>
    </section>
  );
}
