'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionIntro from './SectionIntro';
import { needItems } from './data';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NeedNavigator() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f4f6f9] px-5 py-20 text-kedi-navy sm:px-8 lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Start from the business need"
          title={<>Bạn đang muốn <span className="text-[#92700b]">cải thiện điều gì?</span></>}
          description="Homepage không bắt đầu bằng tên phần mềm. KEDI dẫn người dùng từ bài toán kinh doanh đến nhóm giải pháp phù hợp."
          light
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {needItems.map((item, index) => (
            <motion.div
              key={item.index}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.58, delay: index * 0.07, ease: EASE }}
            >
              <Link
                href={item.href}
                className="group flex min-h-[310px] flex-col rounded-[24px] border border-kedi-navy/10 bg-white p-6 shadow-[0_16px_40px_rgba(11,45,91,.06)] transition-all duration-300 hover:-translate-y-1 hover:border-kedi-yellow hover:shadow-[0_24px_60px_rgba(11,45,91,.11)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.14em] text-kedi-navy/35">{item.index}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-kedi-navy/10 transition-all duration-300 group-hover:border-kedi-yellow group-hover:bg-kedi-yellow">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="text-[26px] font-semibold leading-[1.04] tracking-[-0.035em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-kedi-navy/55">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#eff2f6] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-kedi-navy/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
