'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import SectionIntro from '../SectionIntro';
import { serviceItemsV3 } from './data';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServiceCapabilitiesV3() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = serviceItemsV3[activeIndex];

  return (
    <section id="services" className="relative z-40 -mt-8 rounded-t-[32px] bg-white px-5 py-20 text-kedi-navy shadow-[0_-22px_70px_rgba(2,18,39,.14)] sm:px-8 lg:rounded-t-[44px] lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Professional services"
          title={<>Không chỉ phần mềm. <span className="text-[#92700b]">KEDI còn có đội ngũ triển khai.</span></>}
          description="Dịch vụ chuyên môn bổ sung trực tiếp cho hệ sinh thái SaaS khi doanh nghiệp cần triển khai nhanh và có người đồng hành."
          light
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.06fr_.94fr] lg:gap-12 xl:gap-16">
          <div className="border-t border-kedi-navy/[0.12]">
            {serviceItemsV3.map((service, index) => (
              <motion.div
                key={service.number}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ once: false, amount: 0.55 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.035, ease: EASE }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <Link
                  href={service.href}
                  className={`group grid gap-5 border-b border-kedi-navy/[0.12] py-7 transition-all duration-300 sm:px-3 lg:grid-cols-[54px_1fr_42px] lg:items-center lg:gap-6 ${
                    index === activeIndex ? 'bg-[#f6f8fb] lg:px-5' : 'hover:bg-[#f8f9fb]'
                  }`}
                >
                  <span className="text-xs font-bold text-kedi-navy/[0.32]">{service.number}</span>
                  <div className="min-w-0">
                    <h3 className="text-[27px] font-semibold tracking-[-0.04em] sm:text-[32px]">{service.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-kedi-navy/[0.55]">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-kedi-navy/[0.12] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-kedi-navy/[0.48]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="relative mt-5 h-[170px] overflow-hidden rounded-[20px] lg:hidden">
                      <Image src={service.image} alt={service.title} fill sizes="100vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-kedi-navy/[0.35] to-transparent" />
                    </div>
                  </div>
                  <span className={`grid h-11 w-11 place-items-center rounded-full border transition-all duration-300 ${
                    index === activeIndex
                      ? 'border-kedi-yellow bg-kedi-yellow'
                      : 'border-kedi-navy/[0.12] group-hover:border-kedi-yellow group-hover:bg-kedi-yellow'
                  }`}>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24 h-[620px] overflow-hidden rounded-[32px] border border-kedi-navy/10 bg-kedi-navy shadow-[0_28px_80px_rgba(11,45,91,.18)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.number}
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.045, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.99, y: -10 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a36] via-kedi-navy/[0.15] to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-6 right-6 top-6 flex items-center justify-between rounded-2xl border border-white/[0.12] bg-[#061b37]/[0.68] px-4 py-3 text-white backdrop-blur-xl">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">Service preview</p>
                  <p className="mt-1 text-sm font-semibold">KEDI Delivery</p>
                </div>
                <span className="rounded-full bg-kedi-yellow px-3 py-1 text-[9px] font-black tracking-[0.08em] text-kedi-navy">{activeService.number}</span>
              </div>

              <div className="absolute inset-x-6 bottom-6 rounded-[26px] border border-white/[0.12] bg-[#061b37]/[0.78] p-6 text-white backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-kedi-yellow">{activeService.tags.join(' · ')}</p>
                <h3 className="mt-3 text-[38px] font-semibold leading-[1] tracking-[-0.045em]">{activeService.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/[0.58]">{activeService.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
