'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionIntro from './SectionIntro';

const EASE = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    label: 'Digital experience',
    title: 'Website & Growth',
    description: 'Các dự án kết hợp trải nghiệm số, nội dung và tăng trưởng cho doanh nghiệp.',
  },
  {
    label: 'Revenue operations',
    title: 'Commerce & CRM',
    description: 'Các bài toán bán hàng, dữ liệu khách hàng và vận hành thương mại điện tử.',
  },
  {
    label: 'Intelligent operations',
    title: 'AI & Automation',
    description: 'Các hướng triển khai AI, workflow và tự động hóa trong vận hành.',
  },
];

export default function HomeProjects() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f4f6f9] px-5 py-20 text-kedi-navy sm:px-8 lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Selected work"
          title={<>Từ công nghệ đến <span className="text-[#92700b]">bài toán kinh doanh.</span></>}
          description="Homepage chỉ giới thiệu các hướng dự án. Trang Dự án tiếp tục là nơi trình bày chi tiết từng case khi dữ liệu thực sẵn sàng."
          light
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay: index * 0.08, ease: EASE }}
            >
              <Link
                href="/du-an"
                className="group relative flex min-h-[410px] flex-col overflow-hidden rounded-[28px] bg-kedi-navy p-7 text-white shadow-[0_18px_55px_rgba(11,45,91,.14)]"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[42px] border-kedi-yellow/80 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-[-40%] left-[-18%] h-80 w-80 rounded-full bg-[#1f5796]/50 blur-[70px]" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-kedi-yellow">{card.label}</span>
                  <span className="text-xs text-white/30">0{index + 1}</span>
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="max-w-xs text-[36px] font-semibold leading-[0.98] tracking-[-0.045em]">{card.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/52">{card.description}</p>
                  <span className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-kedi-yellow">
                    Xem dự án
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
