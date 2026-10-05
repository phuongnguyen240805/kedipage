'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionIntro from '../SectionIntro';
import { needItemsV3 } from './data';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NeedNavigatorV3() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-20 -mt-8 rounded-t-[32px] bg-[#f4f6f9] px-5 py-20 text-kedi-navy shadow-[0_-20px_70px_rgba(3,18,38,.12)] sm:px-8 lg:rounded-t-[44px] lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Start from the business need"
          title={<>Bạn đang muốn <span className="text-[#92700b]">cải thiện điều gì?</span></>}
          description="Thiết kế website bắt đầu từ mục tiêu kinh doanh, sau đó KEDI xây dựng cấu trúc, nội dung và trải nghiệm phù hợp để thu hút đúng khách hàng và hỗ trợ chuyển đổi."
          light
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {needItemsV3.map((item, index) => (
            <motion.div
              key={item.index}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.62, delay: index * 0.07, ease: EASE }}
              whileHover={reduceMotion ? undefined : { y: -7 }}
            >
              <Link
                href={item.href}
                className="liquid-card liquid-touch-item group relative flex min-h-[430px] flex-col overflow-hidden rounded-[28px] border border-kedi-navy/10 bg-white shadow-[0_18px_48px_rgba(11,45,91,.07)] transition-[border-color,box-shadow] duration-300 hover:border-kedi-yellow hover:shadow-[0_30px_70px_rgba(11,45,91,.14)]"
              >
                <div className="relative h-[185px] overflow-hidden bg-kedi-navy">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kedi-navy/[0.45] via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-kedi-navy/75 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-white backdrop-blur-md">
                    {item.index}
                  </div>
                  <span className="liquid-orb absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-kedi-yellow group-hover:bg-kedi-yellow group-hover:text-kedi-navy">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[27px] font-semibold leading-[1.02] tracking-[-0.035em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-kedi-navy/[0.58]">{item.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {item.tags.map((tag) => (
                      <span data-glass="chip" key={tag} className="rounded-full bg-[#eff2f6] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-kedi-navy/60 transition-colors duration-300 group-hover:bg-kedi-yellow/[0.15]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-kedi-yellow/0 blur-3xl transition-colors duration-500 group-hover:bg-kedi-yellow/20"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
