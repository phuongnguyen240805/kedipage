'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight, BarChart3, Bot, Workflow } from 'lucide-react';
import type { MouseEvent } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const floatingProducts = [
  {
    name: 'Kedi Analytics',
    detail: 'Business intelligence',
    image: 'https://assets.kedi.media/images/1eab0faefd144c10b142.svg',
    className: '-right-2 top-3',
    duration: 6.8,
  },
  {
    name: 'Kedi CRM',
    detail: 'Customer system',
    image: 'https://assets.kedi.media/images/232238a305ad430068d1.svg',
    className: 'bottom-5 left-0',
    duration: 7.4,
  },
];

export default function HomeHeroV3() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.5 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3.5, 3.5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);
  const driftX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const driftY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  const enter = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.72, delay, ease: EASE },
  });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const box = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - box.left) / box.width - 0.5);
    pointerY.set((event.clientY - box.top) / box.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      onMouseMove={handleMove}
      onMouseLeave={resetPointer}
      className="relative isolate min-h-[calc(100svh-56px)] overflow-hidden bg-kedi-navy px-5 pb-16 pt-12 text-white sm:px-8 lg:min-h-[780px] lg:px-12 lg:pb-20 lg:pt-20 xl:px-16"
    >
      <Image
        src="https://assets.kedi.media/images/538c5a3c16e795a56c8a-1913.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-30 object-cover object-center opacity-[0.96]"
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(8,34,77,.88)_0%,rgba(8,34,77,.76)_34%,rgba(8,34,77,.42)_63%,rgba(8,34,77,.18)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_28%,rgba(255,198,41,.18),transparent_32%),radial-gradient(circle_at_58%_58%,rgba(68,170,255,.14),transparent_28%)]" />
      <motion.div
        style={reduceMotion ? undefined : { x: driftX, y: driftY }}
        className="pointer-events-none absolute -right-20 top-10 -z-10 h-[560px] w-[560px] rounded-full bg-kedi-yellow/[0.14] blur-[118px]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kedi-yellow/[0.55] to-transparent" />

      <div className="relative mx-auto grid min-h-[660px] max-w-[1440px] items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-6">
        <div className="relative z-30 max-w-4xl">
          <motion.div {...enter(0.04)} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-kedi-yellow shadow-[0_0_18px_rgba(255,198,41,.85)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.65]">
              KEDI Digital Ecosystem
            </span>
          </motion.div>

          <motion.h1
            {...enter(0.1)}
            className="max-w-[930px] text-[49px] font-semibold leading-[0.91] tracking-[-0.055em] sm:text-[66px] lg:text-[74px] xl:text-[88px]"
          >
            Một hệ sinh thái.
            <span className="mt-2 block text-kedi-yellow">Nhiều năng lực tăng trưởng.</span>
          </motion.h1>

          <motion.p
            {...enter(0.18)}
            className="mt-8 max-w-[680px] text-[15px] leading-7 text-white/[0.62] sm:text-base lg:text-lg lg:leading-8"
          >
            KEDI kết nối SaaS, AI và dịch vụ chuyên môn để giúp doanh nghiệp xây dựng,
            bán hàng, tự động hóa và mở rộng trên một hệ sinh thái thống nhất.
          </motion.p>

          <motion.div {...enter(0.26)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#ecosystem"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-kedi-yellow px-6 text-sm font-semibold text-kedi-navy shadow-[0_12px_35px_rgba(255,198,41,.18)] transition-transform duration-300 hover:-translate-y-1"
            >
              Khám phá hệ sinh thái
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.045] px-6 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-kedi-yellow/70 hover:text-kedi-yellow"
            >
              Xem dịch vụ KEDI
            </Link>
          </motion.div>

          <motion.div
            {...enter(0.34)}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/[0.42] sm:text-[11px]"
          >
            {['Website', 'CRM', 'AI', 'Commerce', 'Automation', 'Analytics', 'Cloud'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.92, delay: 0.16, ease: EASE }}
          className="relative z-20 mx-auto w-full max-w-[760px] lg:ml-auto"
        >
          <div className="absolute -inset-8 rounded-[48px] bg-kedi-yellow/[0.04] blur-3xl" />

          <motion.div
            style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1400 }}
            className="relative mr-0 overflow-hidden rounded-[30px] border border-white/[0.14] bg-[#071f3f]/[0.94] p-3 shadow-[0_42px_110px_rgba(0,0,0,.38)] backdrop-blur-xl sm:p-4 lg:mr-[72px] xl:mr-[92px]"
          >
            <div className="rounded-[23px] border border-white/10 bg-[#0e376b]/95 p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Kedi workspace</p>
                  <h3 className="mt-1 text-lg font-semibold">Business command center</h3>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/[0.15]" />
                  <span className="h-2 w-2 rounded-full bg-white/[0.15]" />
                  <span className="h-2 w-2 rounded-full bg-kedi-yellow shadow-[0_0_18px_rgba(255,198,41,.5)]" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-[1.12fr_.88fr]">
                <div className="rounded-[20px] bg-white p-4 text-kedi-navy shadow-[0_18px_45px_rgba(0,0,0,.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-kedi-navy/[0.45]">Growth overview</p>
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
                  <div className="rounded-[20px] border border-white/10 bg-white/[0.065] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-kedi-yellow text-kedi-navy">
                        <Bot className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">Kedi Agents</p>
                        <p className="text-xs text-white/[0.45]">AI workforce</p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-2">
                      <div className="h-2 rounded-full bg-white/10"><div className="h-full w-[82%] rounded-full bg-kedi-yellow" /></div>
                      <div className="h-2 rounded-full bg-white/10"><div className="h-full w-[64%] rounded-full bg-white/[0.45]" /></div>
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/[0.065] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-kedi-yellow">
                        <Workflow className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">Automation</p>
                        <p className="text-xs text-white/[0.45]">Cross-app workflow</p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((item) => (
                        <motion.div
                          key={item}
                          animate={reduceMotion ? undefined : { opacity: [0.35, 0.9, 0.35] }}
                          transition={reduceMotion ? undefined : { duration: 2.8, delay: item * 0.35, repeat: Infinity }}
                          className="h-9 rounded-xl border border-white/[0.08] bg-white/[0.05]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [-7, 7, -7], rotate: [-1, 1, -1] }}
            transition={reduceMotion ? undefined : { duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -bottom-8 right-[-10px] z-30 hidden w-[230px] drop-shadow-[0_30px_46px_rgba(0,0,0,.35)] sm:block xl:w-[285px]"
          >
            <Image
              src="https://assets.kedi.media/images/9d29af5e18269d6c53c0-1600.webp"
              alt="KEDI Golden mascot"
              width={1600}
              height={1600}
              priority
              className="h-auto w-full object-contain"
            />
          </motion.div>

          {floatingProducts.map((product, index) => (
            <motion.div
              key={product.name}
              animate={reduceMotion ? undefined : { y: index === 0 ? [-5, 5, -5] : [5, -5, 5] }}
              transition={reduceMotion ? undefined : { duration: product.duration, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute z-40 hidden items-center gap-3 rounded-2xl border border-white/[0.12] bg-[#082b57]/[0.96] px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex ${product.className}`}
            >
              <Image  src={product.image} alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
              <div>
                <p className="text-xs font-semibold">{product.name}</p>
                <p className="text-[10px] text-white/[0.45]">{product.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 1.1, delay: 0.52, ease: EASE }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-kedi-yellow via-kedi-yellow/30 to-transparent"
      />
    </section>
  );
}
