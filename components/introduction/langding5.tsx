'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from './data';
import { SkillTile } from './common';

export default function Langding5Skills() {
  return (
    <section id="skills" className="flex flex-col gap-8">
      <div className="flex justify-start">
        <h2 className="text-white uppercase leading-none text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight overflow-hidden">
          {'Tools behind the visuals'.split('').map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.02,
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h2>
      </div>
      <div className="grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
        {skills.map(({ label, Icon }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              ease: 'easeOut',
              delay: index * 0.02,
            }}
          >
            <SkillTile Icon={Icon} label={label} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
