'use client';

import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: '01',
    title: 'WEB & GROWTH',
    eyebrow: 'Digital experience',
    href: '/du-an',
    image: 'https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg',
    imageClassName: 'object-center',
  },
  {
    id: '02',
    title: 'COMMERCE & CRM',
    eyebrow: 'Revenue operations',
    href: '/du-an',
    image: 'https://cdn.pixabay.com/photo/2023/07/19/14/48/customer-data-8137152_1280.jpg',
    imageClassName: 'object-center',
  },
  {
    id: '03',
    title: 'AI & AUTOMATION',
    eyebrow: 'Intelligent operations',
    href: '/du-an',
    image: 'https://cdn.pixabay.com/photo/2024/10/03/12/59/ai-generated-9093687_1280.png',
    imageClassName: 'object-center',
  },
  {
    id: '04',
    title: 'GROWTH ENGINE',
    eyebrow: 'Demand generation',
    href: '/du-an',
    image: 'https://cdn.pixabay.com/photo/2023/10/10/06/41/chart-8305514_1280.jpg',
    imageClassName: 'object-[center_68%]',
  },
] as const;

export default function LegacyFeaturedProjectsKedi() {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ecosystem"
      className="relative z-30 overflow-hidden bg-kedi-navy px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28 xl:px-16"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(11,45,91,.92) 0%, rgba(11,45,91,.97) 100%), url('/homepage/dashboard-connected-network.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kedi-yellow/70 to-transparent" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-5 border-b border-white/10 pb-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kedi-yellow">Selected work</p>
            <h2 className="mt-3 text-[48px] font-medium leading-none tracking-[-0.045em] sm:text-[64px] lg:text-[78px]">
              Dự án nổi bật
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/55 lg:text-right">
            Website, commerce, AI và growth được thể hiện qua các visual nổi bật trong hệ sinh thái KEDI.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredTitle(project.title)}
              onMouseLeave={() => setHoveredTitle(null)}
              onFocus={() => setHoveredTitle(project.title)}
              onBlur={() => setHoveredTitle(null)}
              className="group relative"
            >
              <Link
                href={project.href}
                className="relative block aspect-[1.42/1] overflow-hidden rounded-[22px] border border-kedi-yellow/30 bg-[#061b37] shadow-[0_24px_70px_rgba(0,0,0,.22)] transition-all duration-500 hover:-translate-y-1 hover:border-kedi-yellow hover:shadow-[0_30px_80px_rgba(255,198,41,.12)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 h-full w-full object-cover brightness-[0.86] saturate-[1.08] transition-[transform,filter] duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-[1.045] group-hover:brightness-100 ${project.imageClassName}`}
                />
                <div className="absolute inset-0 bg-kedi-navy/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06172f]/85 via-[#071f3f]/15 to-[#06172f]/10" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-kedi-yellow/10 blur-3xl transition-colors duration-500 group-hover:bg-kedi-yellow/20" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-kedi-yellow">{project.eyebrow}</p>
                    <p className="mt-1 text-sm font-medium text-white/80">{project.id}</p>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#061b37]/65 backdrop-blur-md transition-all duration-300 group-hover:border-kedi-yellow group-hover:bg-kedi-yellow group-hover:text-kedi-navy">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

          <AnimatePresence>
            {hoveredTitle ? (
              <motion.div
                key={hoveredTitle}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.99 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
                }
                className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-center lg:flex"
              >
                <div className="max-w-[92%] whitespace-nowrap text-center font-FoundersGrotesk text-[clamp(72px,8vw,150px)] font-semibold uppercase leading-[0.8] tracking-[-0.055em] text-kedi-yellow drop-shadow-[0_12px_34px_rgba(0,0,0,.35)]">
                  {hoveredTitle}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
