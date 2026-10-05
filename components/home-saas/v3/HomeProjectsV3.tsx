'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionIntro from '../SectionIntro';
import { projectItemsV3 } from './data';

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectCard({
  card,
  index,
  className = '',
}: {
  card: (typeof projectItemsV3)[number];
  index: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.07, ease: EASE }}
      className={className}
    >
      <Link
        href="/du-an"
        className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[30px] bg-kedi-navy text-white shadow-[0_22px_60px_rgba(11,45,91,.15)] lg:min-h-0"
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes={index === 0 ? '(max-width: 1024px) 100vw, 64vw' : '(max-width: 1024px) 100vw, 34vw'}
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.055]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a36] via-[#061a36]/[0.62] to-transparent" />
        <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border-[38px] border-kedi-yellow/80 opacity-80 transition-transform duration-700 group-hover:scale-110" />

        <div className="relative z-10 flex h-full min-h-0 flex-col p-6 sm:p-7 xl:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-kedi-yellow">{card.label}</span>
            <span className="text-xs text-white/[0.42]">0{index + 1}</span>
          </div>

          <div className="mt-auto max-w-xl">
            <h3 className={`max-w-[92%] font-semibold leading-[.98] tracking-[-0.045em] ${index === 0 ? 'text-[40px] sm:text-[48px] xl:text-[52px]' : 'text-[30px] sm:text-[34px] xl:text-[38px]'}`}>
              {card.title}
            </h3>
            <p className={`max-w-lg text-sm leading-6 text-white/[0.68] ${index === 0 ? 'mt-4' : 'mt-3'}`}>{card.description}</p>
            <span className={`inline-flex items-center gap-3 text-sm font-semibold text-kedi-yellow ${index === 0 ? 'mt-7' : 'mt-5'}`}>
              Xem dự án
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function HomeProjectsV3() {
  return (
    <section className="relative z-30 -mt-8 rounded-t-[32px] bg-[#f4f6f9] px-5 py-20 text-kedi-navy shadow-[0_-20px_70px_rgba(11,45,91,.1)] sm:px-8 lg:rounded-t-[44px] lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Selected work"
          title={<>Từ công nghệ đến <span className="text-[#92700b]">bài toán kinh doanh.</span></>}
          description="Không dùng ba card giống nhau. Mỗi hướng dự án có tỷ lệ và nhịp thị giác riêng để tạo cảm giác editorial showcase."
          light
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:auto-rows-[340px]">
          <ProjectCard card={projectItemsV3[0]} index={0} className="lg:col-span-7 lg:row-span-2" />
          <ProjectCard card={projectItemsV3[1]} index={1} className="lg:col-span-5" />
          <ProjectCard card={projectItemsV3[2]} index={2} className="lg:col-span-5" />
        </div>
      </div>
    </section>
  );
}
