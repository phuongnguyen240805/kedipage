'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionIntro from '../SectionIntro';
import { insightItemsV3 } from './data';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeInsightsV3() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative z-40 -mt-1 overflow-hidden bg-white px-5 py-20 text-kedi-navy sm:px-8 lg:px-12 lg:py-28 xl:px-16"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.9) 48%, rgba(255,255,255,.82) 100%), url('https://assets.kedi.media/images/967982d61246b36f6da7-1672.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="KEDI insights"
          title={<>Kiến thức để <span className="text-[#92700b]">ra quyết định tốt hơn.</span></>}
          description="Kiến thức về thiết kế website, UI/UX, SEO và tối ưu chuyển đổi giúp doanh nghiệp xây dựng nền tảng số hiệu quả và bền vững."
          light
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {insightItemsV3.map((item, index) => (
            <motion.div
              key={item.href}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.52, delay: index * 0.07, ease: EASE }}
            >
              <Link
                href={item.href}
                className="liquid-card liquid-touch-item group relative flex min-h-[430px] flex-col overflow-hidden rounded-[28px] border border-kedi-navy/10 bg-[#f7f8fa] transition-all duration-300 hover:-translate-y-1 hover:border-kedi-yellow hover:shadow-[0_24px_60px_rgba(11,45,91,.1)]"
              >
                <div className="relative h-[225px] overflow-hidden bg-kedi-navy">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kedi-navy/[0.45] to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-kedi-navy px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-kedi-yellow">{item.tag}</span>
                    <ArrowUpRight className="h-5 w-5 text-kedi-navy/[0.35] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-kedi-navy" />
                  </div>
                  <h3 className="mt-auto max-w-sm pt-8 text-[28px] font-semibold leading-[1.04] tracking-[-0.035em]">{item.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-semibold text-kedi-navy hover:text-[#92700b]">
            Xem toàn bộ Blog
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
