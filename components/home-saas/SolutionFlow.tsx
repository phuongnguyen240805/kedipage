'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionIntro from './SectionIntro';
import { journeyItems } from './data';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SolutionFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-kedi-navy px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Connected journey"
          title={<>Từ một công cụ đến <span className="text-kedi-yellow">một hệ thống vận hành.</span></>}
          description="Mỗi nhóm sản phẩm đảm nhiệm một phần của hành trình, từ thu hút demand đến chuyển đổi, quản lý, tự động hóa và đo lường."
        />

        <div className="relative mt-14">
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: EASE }}
            className="absolute left-0 right-0 top-[21px] hidden h-px origin-left bg-gradient-to-r from-kedi-yellow via-white/30 to-white/10 lg:block"
          />

          <div className="grid gap-4 lg:grid-cols-5">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.step}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 + index * 0.08, ease: EASE }}
                className="relative rounded-[22px] border border-white/10 bg-white/[0.035] p-5 lg:border-0 lg:bg-transparent lg:p-0 lg:pr-6"
              >
                <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-kedi-yellow/55 bg-kedi-navy text-xs font-black text-kedi-yellow">
                  {item.step}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-2 text-sm text-white/45">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
