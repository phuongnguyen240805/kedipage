'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import SectionIntro from '../SectionIntro';
import { categoryLabels, productsV3, type ProductCategory } from './data';

const categories = Object.keys(categoryLabels) as ProductCategory[];
const EASE = [0.22, 1, 0.36, 1] as const;

export default function KediEcosystemV3() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('core');
  const filtered = useMemo(
    () => productsV3.filter((product) => product.category === activeCategory),
    [activeCategory],
  );
  const [activeName, setActiveName] = useState('Kedi OS');
  const reduceMotion = useReducedMotion();
  const activeProduct = filtered.find((product) => product.name === activeName) ?? filtered[0];

  const changeCategory = (category: ProductCategory) => {
    setActiveCategory(category);
    const first = productsV3.find((product) => product.category === category);
    if (first) setActiveName(first.name);
  };

  return (
    <section
      id="ecosystem"
      className="relative z-30 -mt-1 overflow-hidden rounded-t-[32px] bg-[#071f3f] px-5 py-20 text-white sm:px-8 lg:rounded-t-[44px] lg:px-12 lg:py-28 xl:px-16"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(7,31,63,.74) 0%, rgba(7,31,63,.86) 54%, rgba(7,31,63,.95) 100%), url('/homepage/dashboard-connected-network.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute right-[-12%] top-[8%] h-[560px] w-[560px] rounded-full bg-kedi-yellow/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="KEDI SaaS Ecosystem"
          title={<>Một hệ sinh thái. <span className="text-kedi-yellow">Không phải các công cụ rời rạc.</span></>}
          description="Mỗi sản phẩm đảm nhiệm một vai trò, nhưng dữ liệu và workflow được thiết kế để nối với nhau."
        />

        <div className="mt-12 flex flex-wrap gap-2 border-b border-white/10 pb-5">
          {categories.map((category) => {
            const active = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                className={`relative overflow-hidden rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                  active
                    ? 'border-kedi-yellow text-kedi-navy'
                    : 'border-white/10 bg-white/[0.03] text-white/[0.55] hover:border-kedi-yellow/40 hover:text-white'
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="ecosystem-category-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute inset-0 bg-kedi-yellow"
                  />
                ) : null}
                <span className="relative z-10">{categoryLabels[category]}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-7 grid overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] shadow-[0_36px_100px_rgba(0,0,0,.22)] lg:grid-cols-[340px_minmax(0,1fr)]">
          <div className="border-b border-white/10 bg-[#061b37]/60 p-3 backdrop-blur-xl lg:border-b-0 lg:border-r">
            {filtered.map((product) => {
              const active = activeProduct?.name === product.name;
              return (
                <button
                  key={product.name}
                  type="button"
                  onMouseEnter={() => setActiveName(product.name)}
                  onFocus={() => setActiveName(product.name)}
                  onClick={() => setActiveName(product.name)}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-[20px] p-3 text-left transition-all duration-300 ${
                    active ? 'bg-white text-kedi-navy shadow-[0_12px_30px_rgba(0,0,0,.08)]' : 'text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {active ? <span className="absolute inset-y-3 left-0 w-1 rounded-full bg-kedi-yellow" /> : null}
                  <span className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl ${active ? 'bg-[#eef2f7]' : 'bg-white/[0.07]'}`}>
                    <Image unoptimized src={product.icon} alt="" width={56} height={56} className="h-full w-full object-cover" />
                  </span>
                  <span className="min-w-0">
                    <span className={`block text-[10px] font-semibold uppercase tracking-[0.12em] ${active ? 'text-kedi-navy/[0.45]' : 'text-kedi-yellow/70'}`}>
                      {product.eyebrow}
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold">{product.name}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[590px] overflow-hidden p-6 sm:p-8 lg:p-10 xl:p-12">
            <AnimatePresence mode="wait">
              {activeProduct ? (
                <motion.div
                  key={activeProduct.name}
                  initial={reduceMotion ? false : { opacity: 0, x: 24, scale: 0.985 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: -18, scale: 0.99 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.48, ease: EASE }}
                  className="grid h-full gap-8 xl:grid-cols-[.72fr_1.28fr] xl:items-center"
                >
                  <div className="relative z-20 max-w-lg">
                    <div className="inline-flex items-center gap-2 rounded-full border border-kedi-yellow/25 bg-kedi-yellow/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-kedi-yellow">
                      <Sparkles className="h-3.5 w-3.5" />
                      {activeProduct.eyebrow}
                    </div>
                    <h3 className="mt-5 text-[44px] font-semibold leading-none tracking-[-0.045em] sm:text-[58px]">{activeProduct.name}</h3>
                    <p className="mt-5 text-sm leading-7 text-white/[0.58] sm:text-base">{activeProduct.description}</p>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-[20px] border border-white/10 bg-white/[0.045] p-4">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/[0.38]">Signal</p>
                        <p className="mt-2 text-3xl font-semibold text-kedi-yellow">{activeProduct.metric}</p>
                        <p className="mt-1 text-xs text-white/[0.45]">{activeProduct.metricLabel}</p>
                      </div>
                      <div className="rounded-[20px] border border-white/10 bg-white/[0.045] p-4">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/[0.38]">System</p>
                        <p className="mt-2 text-3xl font-semibold">KEDI</p>
                        <p className="mt-1 text-xs text-white/[0.45]">Connected ecosystem</p>
                      </div>
                    </div>

                    <Link href={activeProduct.href} className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-kedi-yellow">
                      Khám phá sản phẩm
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div className="relative min-h-[360px] overflow-hidden rounded-[30px] border border-white/10 bg-[#0b2d5b] shadow-[0_32px_90px_rgba(0,0,0,.3)] sm:min-h-[430px]">
                    <Image unoptimized
                      src={activeProduct.visual}
                      alt={activeProduct.name}
                      fill
                      sizes="(max-width: 1280px) 100vw, 58vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#071f3f]/80 via-transparent to-kedi-yellow/10" />
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#061b37]/[0.72] px-4 py-3 backdrop-blur-xl">
                      <div className="flex items-center gap-3">
                        <Image unoptimized src={activeProduct.icon} alt="" width={38} height={38} className="h-10 w-10 rounded-xl" />
                        <div>
                          <p className="text-sm font-semibold">{activeProduct.name}</p>
                          <p className="text-[9px] uppercase tracking-[0.12em] text-white/40">Live product stage</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-kedi-yellow px-3 py-1 text-[9px] font-black uppercase tracking-[0.08em] text-kedi-navy">KEDI</span>
                    </div>

                    <motion.div
                      animate={reduceMotion ? undefined : { y: [-4, 4, -4] }}
                      transition={reduceMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2"
                    >
                      {['Data', 'Workflow', 'Signal'].map((label, index) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-[#061b37]/[0.74] p-3 backdrop-blur-xl">
                          <p className="text-[9px] uppercase tracking-[0.1em] text-white/[0.38]">{label}</p>
                          <div className="mt-3 h-1.5 rounded-full bg-white/10">
                            <motion.div
                              initial={reduceMotion ? false : { width: '15%' }}
                              animate={{ width: `${82 - index * 14}%` }}
                              transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 + index * 0.08, ease: EASE }}
                              className="h-full rounded-full bg-kedi-yellow"
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
