'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from './data';
import Marquee from './marquee';

export default function Langding6Testimonials() {
  return (
    <section id="testimonials" className="flex flex-col gap-10 py-[80px]">
      <div className="flex justify-start overflow-hidden">
        <div className="flex flex-col gap-0">
          <h2 className="text-white uppercase leading-tight text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight block">
            {'what my'.split('').map((char, i) => (
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

          <h2 className="text-white uppercase leading-tight text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight block">
            {'client says'.split('').map((char, i) => (
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
      </div>

      <div className="flex flex-col gap-6">
        <Marquee baseVelocity={-0.2}>
          <div className="flex gap-5 mr-5">
            {testimonials
              .slice(0, Math.ceil(testimonials.length / 2))
              .map((item) => (
                <motion.figure
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="flex-shrink-0 w-[350px] h-[350px] rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur flex flex-col overflow-hidden"
                >
                  <blockquote
                    className="text-sm leading-relaxed text-[#111827] mb-3 flex-grow overflow-hidden whitespace-normal break-words"
                    style={{ textWrap: 'balance' }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs font-semibold text-[#4b5563] mt-auto">
                    {item.name} ·{' '}
                    <span className="font-normal">{item.role}</span>
                  </figcaption>
                </motion.figure>
              ))}
          </div>
        </Marquee>

        {testimonials.length > Math.ceil(testimonials.length / 2) && (
          <Marquee baseVelocity={0.15}>
            <div className="flex gap-5 mr-5">
              {testimonials
                .slice(Math.ceil(testimonials.length / 2))
                .map((item) => (
                  <motion.figure
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex-shrink-0 w-[350px] h-[350px] rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur flex flex-col overflow-hidden"
                  >
                    <blockquote
                      className="text-sm leading-relaxed text-[#111827] mb-3 flex-grow overflow-hidden whitespace-normal break-words"
                      style={{ textWrap: 'balance' }}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs font-semibold text-[#4b5563]">
                      {item.name} ·{' '}
                      <span className="font-normal">{item.role}</span>
                    </figcaption>
                  </motion.figure>
                ))}
            </div>
          </Marquee>
        )}
      </div>
    </section>
  );
}
