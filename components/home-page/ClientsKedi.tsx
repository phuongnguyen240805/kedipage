'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Minus, Plus, Quote } from 'lucide-react';
import { useState } from 'react';
import { clientsItem } from '@/constants';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ClientsKedi() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<number | null>(clientsItem[0]?.id ?? null);

  return (
    <section
      id="clients"
      className="relative z-40 overflow-hidden bg-[#eef4fa] py-20 text-kedi-navy lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(246,249,252,.96) 0%, rgba(246,249,252,.90) 46%, rgba(246,249,252,.80) 100%), url('/homepage/golden-insights-light.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute -left-40 top-8 h-[420px] w-[420px] rounded-full bg-kedi-yellow/[0.10] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[#2e76c5]/[0.10] blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kedi-yellow/70 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.65, ease: EASE }}
          className="grid gap-7 border-b border-kedi-navy/10 pb-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kedi-yellow">
              Client voices
            </p>
            <h2 className="mt-4 max-w-4xl text-[44px] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-[58px] lg:text-[72px]">
              Đánh giá của <span className="text-kedi-yellow">khách hàng.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-kedi-navy/60 lg:justify-self-end lg:text-base">
            Trải nghiệm thực tế từ những khách hàng đã làm việc cùng đội ngũ trong các dự án thiết kế, tăng trưởng và vận hành số.
          </p>
        </motion.div>

        <div className="divide-y divide-kedi-navy/10 border-b border-kedi-navy/10">
          {clientsItem.map((item, index) => {
            const active = item.id === activeId;

            return (
              <motion.article
                layout
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: Math.min(index * 0.045, 0.28), ease: EASE }}
                className={`relative overflow-hidden transition-colors duration-500 ${active ? 'bg-white/75 shadow-[0_18px_55px_rgba(11,45,91,.08)] backdrop-blur-md' : 'hover:bg-white/45'}`}
              >
                <motion.div
                  aria-hidden="true"
                  initial={false}
                  animate={{ scaleX: active ? 1 : 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: EASE }}
                  className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-kedi-yellow via-kedi-yellow/45 to-transparent"
                />

                <div className="grid min-h-[78px] items-center gap-4 px-5 py-5 sm:grid-cols-[1fr_1fr_auto] sm:gap-6 sm:px-6 sm:py-6 lg:px-8 xl:px-10">
                  <a
                    href={item.href.trim()}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-fit items-center gap-2 text-[15px] font-medium text-kedi-navy transition-colors hover:text-[#92700b] sm:text-base"
                  >
                    {item.website}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>

                  <p className="text-sm text-kedi-navy/55 sm:text-base">{item.name}</p>

                  <button
                    type="button"
                    onClick={() => setActiveId((current) => (current === item.id ? null : item.id))}
                    aria-expanded={active}
                    className={`group inline-flex h-10 min-w-[112px] items-center justify-between gap-4 rounded-full border px-4 text-[11px] font-semibold uppercase tracking-[0.11em] transition-all duration-300 sm:justify-self-end ${
                      active
                        ? 'border-kedi-yellow bg-kedi-yellow text-kedi-navy shadow-[0_10px_30px_rgba(255,198,41,.18)]'
                        : 'border-kedi-navy/15 bg-white/55 text-kedi-navy hover:border-kedi-yellow hover:bg-white hover:text-[#92700b]'
                    }`}
                  >
                    <span>{active ? 'Close' : 'Read'}</span>
                    <motion.span
                      initial={false}
                      animate={{ rotate: active ? 180 : 0 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.32, ease: EASE }}
                      className="grid h-5 w-5 place-items-center"
                    >
                      {active ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </motion.span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {active ? (
                    <motion.div
                      key="content"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { height: { duration: 0.52, ease: EASE }, opacity: { duration: 0.3, delay: 0.08 } }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-7 px-5 pb-8 pt-2 sm:px-6 sm:pb-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-10 lg:px-8 lg:pb-12 xl:px-10">
                        <motion.div
                          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -2 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: EASE }}
                          className="relative h-[150px] w-[150px] overflow-hidden rounded-[24px] border border-kedi-navy/10 bg-white/70 shadow-[0_22px_60px_rgba(11,45,91,.12)]"
                        >
                          <Image
                            unoptimized
                            src={item.src}
                            alt={item.name}
                            fill
                            sizes="150px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-kedi-navy/20 to-transparent" />
                        </motion.div>

                        <motion.div
                          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.16, ease: EASE }}
                          className="relative max-w-5xl"
                        >
                          <Quote className="absolute -left-1 -top-1 h-9 w-9 text-kedi-yellow/20" />
                          <p className="relative z-10 pl-1 text-[15px] leading-7 text-kedi-navy/75 sm:text-base sm:leading-8 lg:text-[17px]">
                            {item.review}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {item.links.map((link, linkIndex) => (
                              <motion.span
                                key={`${item.id}-${link.id}-${linkIndex}-${link.title}`}
                                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: 0.2 + linkIndex * 0.035 }}
                                className="rounded-full border border-kedi-yellow/45 bg-kedi-yellow/[0.12] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.07em] text-[#7b5f07]"
                              >
                                {link.title}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
