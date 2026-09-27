'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BarChart3, Bot, Workflow } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeHero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.72, delay, ease: EASE },
  });

  return (
    <section className="relative isolate min-h-[calc(100svh-56px)] overflow-hidden bg-kedi-navy px-5 pb-12 pt-14 text-white sm:px-8 lg:min-h-[760px] lg:px-12 lg:pb-16 lg:pt-20 xl:px-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[6%] h-72 w-72 rounded-full bg-kedi-yellow/10 blur-[100px]" />
        <div className="absolute bottom-[8%] right-[4%] h-[420px] w-[420px] rounded-full bg-[#2d66a8]/20 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kedi-yellow/60 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-8">
        <div className="relative z-10 max-w-4xl">
          <motion.div {...enter(0.05)} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-kedi-yellow shadow-[0_0_18px_rgba(255,198,41,.85)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">
              KEDI Digital Ecosystem
            </span>
          </motion.div>

          <motion.h1
            {...enter(0.12)}
            className="max-w-[980px] text-[50px] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-[68px] lg:text-[78px] xl:text-[92px]"
          >
            Một hệ sinh thái.
            <span className="mt-2 block text-kedi-yellow">Nhiều năng lực tăng trưởng.</span>
          </motion.h1>

          <motion.p
            {...enter(0.2)}
            className="mt-8 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base lg:text-lg lg:leading-8"
          >
            KEDI kết nối SaaS, AI và dịch vụ chuyên môn để giúp doanh nghiệp xây dựng,
            bán hàng, tự động hóa và mở rộng trên một hệ sinh thái thống nhất.
          </motion.p>

          <motion.div {...enter(0.28)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#ecosystem"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-kedi-yellow px-6 text-sm font-semibold text-kedi-navy transition-transform duration-300 hover:-translate-y-0.5"
            >
              Khám phá hệ sinh thái
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-6 text-sm font-medium text-white transition-colors duration-300 hover:border-kedi-yellow/70 hover:text-kedi-yellow"
            >
              Xem dịch vụ KEDI
            </Link>
          </motion.div>

          <motion.div
            {...enter(0.36)}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"
          >
            {['Website', 'CRM', 'AI', 'Commerce', 'Automation', 'Analytics', 'Cloud'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.965 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.9, delay: 0.18, ease: EASE }}
          className="relative mx-auto w-full max-w-[680px] lg:ml-auto"
        >
          <div className="absolute -inset-8 rounded-[40px] bg-kedi-yellow/[0.04] blur-3xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-[#071f3f]/95 p-3 shadow-[0_40px_100px_rgba(0,0,0,.35)] sm:p-4">
            <div className="rounded-[23px] border border-white/10 bg-[#0e376b] p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/38">Kedi workspace</p>
                  <h3 className="mt-1 text-lg font-semibold">Business command center</h3>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-kedi-yellow" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-[1.12fr_.88fr]">
                <div className="rounded-[20px] bg-white p-4 text-kedi-navy">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-kedi-navy/45">Growth overview</p>
                      <p className="mt-1 text-2xl font-black tracking-[-0.04em]">Connected data</p>
                    </div>
                    <BarChart3 className="h-5 w-5" />
                  </div>

                  <div className="mt-8 flex h-32 items-end gap-2 rounded-2xl bg-[#f2f5f9] px-3 pb-3 pt-5">
                    {[42, 58, 48, 72, 62, 88, 78, 96].map((height, index) => (
                      <motion.span
                        key={index}
                        initial={reduceMotion ? false : { height: 8 }}
                        animate={{ height: `${height}%` }}
                        transition={reduceMotion ? { duration: 0 } : { delay: 0.48 + index * 0.05, duration: 0.55, ease: EASE }}
                        className="flex-1 rounded-t-md bg-kedi-navy"
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-[20px] border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-kedi-yellow text-kedi-navy">
                        <Bot className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">Kedi Agents</p>
                        <p className="text-xs text-white/45">AI workforce</p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-2">
                      <div className="h-2 rounded-full bg-white/10"><div className="h-full w-[82%] rounded-full bg-kedi-yellow" /></div>
                      <div className="h-2 rounded-full bg-white/10"><div className="h-full w-[64%] rounded-full bg-white/45" /></div>
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-kedi-yellow">
                        <Workflow className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">Automation</p>
                        <p className="text-xs text-white/45">Cross-app workflow</p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((item) => (
                        <div key={item} className="h-9 rounded-xl border border-white/8 bg-white/[0.05]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [-5, 5, -5] }}
            transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 left-4 hidden items-center gap-3 rounded-2xl border border-white/12 bg-[#082b57]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex"
          >
            <Image src="/service-menu/software/kedi-crm.svg" alt="Kedi CRM" width={36} height={36} className="h-9 w-9 rounded-lg" />
            <div>
              <p className="text-xs font-semibold">Kedi CRM</p>
              <p className="text-[10px] text-white/45">Customer system</p>
            </div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [5, -5, 5] }}
            transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 -top-5 hidden items-center gap-3 rounded-2xl border border-kedi-yellow/30 bg-[#082b57]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex"
          >
            <Image src="/service-menu/software/kedi-analytics.svg" alt="Kedi Analytics" width={36} height={36} className="h-9 w-9 rounded-lg" />
            <div>
              <p className="text-xs font-semibold">Kedi Analytics</p>
              <p className="text-[10px] text-white/45">Business intelligence</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
