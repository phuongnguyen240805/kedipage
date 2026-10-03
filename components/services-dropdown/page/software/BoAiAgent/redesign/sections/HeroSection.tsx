'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { AiAgentPageData } from '../types';
import AiCommandCore from '../visuals/AiCommandCore';
import { KEDI_MOTION_EASE } from '../motion-system';
import BrandGhostBackground from '../BrandGhostBackground';

export default function HeroSection({ data }: { data: AiAgentPageData }) {
  const reduceMotion = useReducedMotion();

  const enter = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.72, delay, ease: KEDI_MOTION_EASE },
  });

  return (
    <section className="relative isolate overflow-hidden bg-kedi-navy text-white">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_22%,rgba(255,198,41,.14),transparent_27%),radial-gradient(circle_at_60%_76%,rgba(46,118,197,.26),transparent_33%)]" />
      <BrandGhostBackground dark position="right" opacity={0.09} imageClassName="scale-110 translate-x-[8%]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.028)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]" />

      <div className="relative z-10 mx-auto grid min-h-[790px] w-full max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-12 lg:pt-4 lg:pb-32 xl:px-16">
        <div className="relative z-10 max-w-3xl">
          <motion.h1 {...enter(0.1)} className="text-[48px] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-[64px] lg:text-[76px] xl:text-[88px]">
            {data.hero.title}
          </motion.h1>

          <motion.p {...enter(0.16)} className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-kedi-yellow">
            {data.hero.highlight}
          </motion.p>

          <motion.div {...enter(0.22)} className="mt-7 border-l-2 border-kedi-yellow pl-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/42">{data.hero.quoteLabel}</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">{data.hero.quote}</p>
          </motion.div>

          <motion.p {...enter(0.28)} className="mt-7 max-w-3xl text-[15px] leading-7 text-white/62 sm:text-base lg:leading-8">
            {data.hero.description}
          </motion.p>

          <motion.div {...enter(0.34)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#danh-sach" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-kedi-yellow px-6 text-sm font-semibold text-kedi-navy transition-colors hover:bg-[#ffd557]">
              Khám phá đội Gâu Đần
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="#he-thong-kedi" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-6 text-sm font-medium text-white transition-colors hover:border-kedi-yellow/65 hover:text-kedi-yellow">
              Tương tác với hệ thống 3D
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.95, delay: 0.16, ease: KEDI_MOTION_EASE }}
          className="relative"
        >
          <AiCommandCore data={data} />
        </motion.div>
      </div>
    </section>
  );
}
