'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionIntro from '../SectionIntro';
import { journeyItemsV3 } from './data';

const EASE = [0.22, 1, 0.36, 1] as const;
const DESKTOP_BREAKPOINT = 1025;
const WHEEL_THRESHOLD = 56;
const WHEEL_LOCK_MS = 520;

export default function SolutionFlowV3() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = journeyItemsV3[activeIndex];
  const desktopPanelRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const wheelAccumulatorRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const wheelResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToIndex = (index: number) => {
    const nextIndex = Math.min(journeyItemsV3.length - 1, Math.max(0, index));
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const panel = desktopPanelRef.current;
    if (!panel || reduceMotion) return;

    const handleNativeWheel = (event: WheelEvent) => {
      if (window.innerWidth < DESKTOP_BREAKPOINT) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || Math.abs(event.deltaY) < 2) return;

      const currentIndex = activeIndexRef.current;
      const direction = event.deltaY > 0 ? 1 : -1;
      const canMove = direction > 0
        ? currentIndex < journeyItemsV3.length - 1
        : currentIndex > 0;

      // At either edge, release the wheel to the page immediately.
      if (!canMove) {
        wheelAccumulatorRef.current = 0;
        return;
      }

      // Native passive:false listener prevents the page from moving while this
      // wheel carousel still has another stage to reveal.
      event.preventDefault();
      if (wheelLockedRef.current) return;

      wheelAccumulatorRef.current += event.deltaY;

      if (wheelResetTimerRef.current) clearTimeout(wheelResetTimerRef.current);
      wheelResetTimerRef.current = setTimeout(() => {
        wheelAccumulatorRef.current = 0;
      }, 140);

      if (Math.abs(wheelAccumulatorRef.current) < WHEEL_THRESHOLD) return;

      wheelAccumulatorRef.current = 0;
      wheelLockedRef.current = true;
      const nextIndex = Math.min(
        journeyItemsV3.length - 1,
        Math.max(0, currentIndex + direction),
      );
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);

      window.setTimeout(() => {
        wheelLockedRef.current = false;
      }, WHEEL_LOCK_MS);
    };

    panel.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      panel.removeEventListener('wheel', handleNativeWheel);
      if (wheelResetTimerRef.current) clearTimeout(wheelResetTimerRef.current);
    };
  }, [reduceMotion]);

  return (
    <section
      className="relative z-30 -mt-8 overflow-hidden rounded-t-[32px] bg-[#082b57] px-5 py-20 text-white shadow-[0_-24px_70px_rgba(0,0,0,.2)] sm:px-8 lg:rounded-t-[44px] lg:px-12 lg:py-28 xl:px-16"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(8,43,87,.9) 0%, rgba(8,43,87,.76) 52%, rgba(8,43,87,.9) 100%), url('https://assets.kedi.media/images/a782b4ff726b887981e6-1672.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Connected journey"
          title={<>Từ một công cụ đến <span className="text-kedi-yellow">một hệ thống vận hành.</span></>}
          description="Quy trình website được triển khai xuyên suốt từ định hướng, UI/UX và nội dung đến phát triển, tối ưu hiệu suất và đưa vào vận hành."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch lg:gap-14">
          <div className="lg:h-[620px] xl:h-[660px]">
            <div className="relative h-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-[#061d3c] shadow-[0_30px_80px_rgba(0,0,0,.24)] lg:h-full">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeItem.step}
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.025, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.992, filter: 'blur(3px)' }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image

                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a36] via-[#071f3f]/[0.22] to-transparent" />
                  <motion.div
                    key={`${activeItem.step}-glow`}
                    initial={reduceMotion ? false : { opacity: 0, x: '-10%', scale: 0.88 }}
                    animate={{ opacity: 0.68, x: '8%', scale: 1 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.95, ease: EASE }}
                    className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-kedi-yellow/20 blur-[80px]"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-[#061b37]/[0.72] px-4 py-3 backdrop-blur-xl">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">Journey stage</p>
                  <p className="mt-1 text-sm font-semibold">{activeItem.title}</p>
                </div>
                <motion.span
                  key={activeItem.step}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.36, ease: EASE }}
                  className="text-2xl font-semibold text-kedi-yellow"
                >
                  {activeItem.step}
                </motion.span>
              </div>

              <div className="absolute inset-x-6 bottom-6 z-20 rounded-[24px] border border-white/10 bg-[#061b37]/[0.78] p-5 backdrop-blur-xl">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={`${activeItem.step}-copy`}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -7 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.34, ease: EASE }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-kedi-yellow">{activeItem.detail}</p>
                    <h3 className="mt-2 text-[34px] font-semibold tracking-[-0.04em]">{activeItem.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">{activeItem.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[620px] xl:h-[660px]">
            {/* Mobile/tablet keeps a normal readable vertical list. */}
            <div className="space-y-5 lg:hidden">
              {journeyItemsV3.map((item, index) => (
                <motion.article
                  key={item.step}
                  onViewportEnter={() => setActiveIndex(index)}
                  viewport={{ amount: 0.55 }}
                  initial={reduceMotion ? false : { opacity: 0.45, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.42, ease: EASE }}
                  className="relative pl-14"
                >
                  <button
                    type="button"
                    onClick={() => goToIndex(index)}
                    className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border text-xs font-black ${
                      index <= activeIndex
                        ? 'border-kedi-yellow bg-kedi-yellow text-kedi-navy'
                        : 'border-white/20 bg-[#082b57] text-white/45'
                    }`}
                  >
                    {item.step}
                  </button>
                  <div className={`rounded-[24px] border p-5 ${
                    index === activeIndex
                      ? 'border-kedi-yellow/35 bg-white/[0.08]'
                      : 'border-white/10 bg-white/[0.03]'
                  }`}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-kedi-yellow">{item.detail}</span>
                      <span className="text-xs text-white/30">0{index + 1} / 05</span>
                    </div>
                    <h3 className="mt-4 text-[34px] font-semibold tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
                    <div className="relative mt-6 h-[170px] overflow-hidden rounded-[18px]">
                      <Image  src={item.image} alt="" fill sizes="100vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061a36]/55 to-transparent" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Desktop: wheel-controlled vertical carousel. */}
            <div
              ref={desktopPanelRef}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  goToIndex(activeIndex + 1);
                }
                if (event.key === 'ArrowUp') {
                  event.preventDefault();
                  goToIndex(activeIndex - 1);
                }
              }}
              tabIndex={0}
              aria-label="Connected journey. Dùng bánh xe chuột hoặc phím mũi tên để chuyển bước."
              className="relative hidden h-full overflow-hidden rounded-[30px] outline-none lg:block"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-[27%] bg-gradient-to-b from-[#082b57] via-[#082b57]/75 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[27%] bg-gradient-to-t from-[#082b57] via-[#082b57]/75 to-transparent" />
              <div className="pointer-events-none absolute inset-x-12 top-1/2 z-0 h-[320px] -translate-y-1/2 rounded-[34px] bg-kedi-yellow/[0.035] blur-3xl" />

              <div className="absolute right-3 top-3 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-[#061b37]/80 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/50 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-kedi-yellow shadow-[0_0_12px_rgba(255,198,41,.6)]" />
                Wheel scroll
                <span className="text-kedi-yellow">0{activeIndex + 1}/05</span>
              </div>

              <div className="absolute bottom-10 left-[21px] top-10 z-10 w-px bg-white/10" />
              <motion.div
                animate={reduceMotion ? undefined : { height: `${((activeIndex + 1) / journeyItemsV3.length) * 100}%` }}
                transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 170, damping: 28, mass: 0.8 }}
                className="absolute left-[21px] top-10 z-10 w-px origin-top bg-kedi-yellow"
                style={{ maxHeight: 'calc(100% - 5rem)' }}
              />

              {journeyItemsV3.map((item, index) => {
                const distance = index - activeIndex;
                const absDistance = Math.abs(distance);
                const active = distance === 0;
                const adjacent = absDistance === 1;
                const y = distance === 0
                  ? 0
                  : distance > 0
                    ? 285 + Math.max(0, absDistance - 1) * 120
                    : -285 - Math.max(0, absDistance - 1) * 120;

                return (
                  <motion.article
                    key={item.step}
                    initial={false}
                    animate={reduceMotion ? {
                      y,
                      opacity: active ? 1 : adjacent ? 0.28 : 0,
                      scale: active ? 1 : adjacent ? 0.92 : 0.84,
                    } : {
                      y,
                      opacity: active ? 1 : adjacent ? 0.28 : 0,
                      scale: active ? 1 : adjacent ? 0.92 : 0.84,
                      filter: active ? 'blur(0px)' : adjacent ? 'blur(1.5px)' : 'blur(7px)',
                    }}
                    transition={reduceMotion ? { duration: 0 } : {
                      type: 'spring',
                      stiffness: 185,
                      damping: 27,
                      mass: 0.9,
                    }}
                    style={{
                      zIndex: active ? 30 : adjacent ? 20 : 5,
                      pointerEvents: active || adjacent ? 'auto' : 'none',
                    }}
                    className="absolute inset-x-0 top-1/2 -mt-[150px] h-[300px] pl-16 pr-3 will-change-transform xl:-mt-[160px] xl:h-[320px]"
                  >
                    <button
                      type="button"
                      onClick={() => goToIndex(index)}
                      aria-label={`Chuyển đến bước ${item.step}: ${item.title}`}
                      className={`absolute left-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border text-xs font-black transition-all duration-300 ${
                        active
                          ? 'border-kedi-yellow bg-kedi-yellow text-kedi-navy shadow-[0_0_26px_rgba(255,198,41,.28)]'
                          : 'border-white/20 bg-[#082b57]/90 text-white/45 backdrop-blur-md'
                      }`}
                    >
                      {item.step}
                    </button>

                    <motion.div
                      animate={reduceMotion ? undefined : {
                        borderColor: active ? 'rgba(255,198,41,.42)' : 'rgba(255,255,255,.10)',
                        backgroundColor: active ? 'rgba(255,255,255,.09)' : 'rgba(255,255,255,.035)',
                      }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.32, ease: EASE }}
                      className={`relative flex h-full w-full flex-col justify-center overflow-hidden rounded-[28px] border p-7 backdrop-blur-md xl:p-8 ${
                        active
                          ? 'shadow-[0_28px_70px_rgba(0,0,0,.2),0_0_0_1px_rgba(255,198,41,.035)]'
                          : 'shadow-[0_18px_44px_rgba(0,0,0,.12)]'
                      }`}
                    >
                      {active ? (
                        <motion.div
                          layoutId="journey-active-glow"
                          className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-kedi-yellow/12 blur-[60px]"
                        />
                      ) : null}

                      <div className="relative z-10 flex items-center justify-between gap-4">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-kedi-yellow">{item.detail}</span>
                        <span className="text-xs text-white/30">0{index + 1} / 05</span>
                      </div>
                      <h3 className="relative z-10 mt-5 text-[42px] font-semibold leading-none tracking-[-0.045em] xl:text-[48px]">{item.title}</h3>
                      <p className={`relative z-10 mt-4 max-w-xl text-sm leading-7 transition-colors duration-300 xl:text-base ${
                        active ? 'text-white/65' : 'text-white/35'
                      }`}>
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
