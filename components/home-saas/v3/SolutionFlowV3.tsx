'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import SectionIntro from '../SectionIntro';
import { journeyItemsV3 } from './data';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SolutionFlowV3() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = journeyItemsV3[activeIndex];

  return (
    <section
      className="relative z-30 -mt-8 overflow-hidden rounded-t-[32px] bg-[#082b57] px-5 py-20 text-white shadow-[0_-24px_70px_rgba(0,0,0,.2)] sm:px-8 lg:rounded-t-[44px] lg:px-12 lg:py-28 xl:px-16"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(8,43,87,.9) 0%, rgba(8,43,87,.76) 52%, rgba(8,43,87,.9) 100%), url('/homepage/growth-systems-ladder.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Connected journey"
          title={<>Từ một công cụ đến <span className="text-kedi-yellow">một hệ thống vận hành.</span></>}
          description="Scroll qua từng bước để thấy dữ liệu và năng lực được nối từ thu hút đến đo lường."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)] lg:min-h-[620px] lg:self-start">
            <div className="relative h-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-[#061d3c] shadow-[0_30px_80px_rgba(0,0,0,.24)] lg:h-full lg:max-h-[700px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.step}
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a36] via-[#071f3f]/[0.24] to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#061b37]/[0.72] px-4 py-3 backdrop-blur-xl">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">Journey stage</p>
                  <p className="mt-1 text-sm font-semibold">{activeItem.title}</p>
                </div>
                <span className="text-2xl font-semibold text-kedi-yellow">{activeItem.step}</span>
              </div>

              <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/10 bg-[#061b37]/[0.76] p-5 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-kedi-yellow">{activeItem.detail}</p>
                <h3 className="mt-2 text-[34px] font-semibold tracking-[-0.04em]">{activeItem.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">{activeItem.description}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[21px] top-0 w-px bg-white/10" />
            <motion.div
              animate={reduceMotion ? undefined : { height: `${((activeIndex + 1) / journeyItemsV3.length) * 100}%` }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: EASE }}
              className="absolute left-[21px] top-0 w-px bg-kedi-yellow"
            />

            {journeyItemsV3.map((item, index) => (
              <motion.article
                key={item.step}
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ amount: 0.55, margin: '-10% 0px -20% 0px' }}
                initial={reduceMotion ? false : { opacity: 0.45 }}
                whileInView={{ opacity: 1 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.4 }}
                className="relative min-h-[360px] pl-16 pt-2 sm:min-h-[390px]"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`absolute left-0 top-0 z-10 grid h-11 w-11 place-items-center rounded-full border text-xs font-black transition-all duration-300 ${
                    index <= activeIndex
                      ? 'border-kedi-yellow bg-kedi-yellow text-kedi-navy shadow-[0_0_24px_rgba(255,198,41,.22)]'
                      : 'border-white/20 bg-[#082b57] text-white/[0.45]'
                  }`}
                >
                  {item.step}
                </button>

                <div className={`rounded-[28px] border p-6 transition-all duration-500 sm:p-8 ${
                  index === activeIndex
                    ? 'border-kedi-yellow/[0.35] bg-white/[0.065] shadow-[0_24px_60px_rgba(0,0,0,.16)]'
                    : 'border-white/[0.08] bg-white/[0.025]'
                }`}>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-kedi-yellow">{item.detail}</span>
                    <span className="text-xs text-white/30">0{index + 1} / 05</span>
                  </div>
                  <h3 className="text-[38px] font-semibold tracking-[-0.04em] sm:text-[46px]">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/[0.55] sm:text-base">{item.description}</p>

                  <div className="relative mt-7 h-[170px] overflow-hidden rounded-[20px] lg:hidden">
                    <Image src={item.image} alt="" fill sizes="100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a36]/[0.55] to-transparent" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
