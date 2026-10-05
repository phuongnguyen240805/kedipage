'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCtaV3() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-40 bg-white px-5 pb-20 pt-14 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-24 xl:px-16">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[34px] bg-kedi-yellow px-6 py-12 text-kedi-navy shadow-[0_30px_90px_rgba(11,45,91,.12)] sm:px-10 lg:min-h-[470px] lg:px-14 lg:py-16">
        <Image
          src="https://assets.kedi.media/images/df9c0f9c2227d25f4363-1920.webp"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none absolute inset-0 object-cover opacity-30 mix-blend-multiply"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-kedi-yellow via-kedi-yellow/90 to-kedi-yellow/[0.58]" />
        <motion.div
          animate={reduceMotion ? undefined : { x: ['-15%', '115%'] }}
          transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
        />

        <div className="relative z-20 grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-kedi-navy/50">Start with KEDI</p>
            <h2 className="mt-4 max-w-4xl text-[42px] font-semibold leading-[0.94] tracking-[-0.05em] sm:text-[58px] lg:text-[70px]">
              Chưa biết nên bắt đầu từ sản phẩm nào?
            </h2>
          </div>

          <div className="relative z-20 min-w-0 lg:justify-self-end lg:pb-2 lg:pr-[190px] xl:pr-[240px]">
            <p className="max-w-lg text-sm leading-7 text-kedi-navy/[0.68] sm:text-base">
              Bắt đầu từ nhu cầu kinh doanh. Khám phá hệ sinh thái SaaS hoặc xem nhóm dịch vụ KEDI có thể triển khai cùng doanh nghiệp.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#ecosystem" className="group inline-flex min-h-12 flex-none items-center justify-center gap-3 whitespace-nowrap rounded-full bg-kedi-navy px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(11,45,91,.18)] transition-transform duration-300 hover:-translate-y-1">
                Khám phá SaaS
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/du-an" className="inline-flex min-h-12 flex-none items-center justify-center whitespace-nowrap rounded-full border border-kedi-navy/25 bg-white/10 px-6 text-sm font-semibold backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-kedi-navy hover:text-white">
                Xem dự án
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 34, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -bottom-9 right-0 z-10 hidden w-[240px] drop-shadow-[0_28px_40px_rgba(11,45,91,.22)] lg:block xl:w-[285px]"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={reduceMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="https://assets.kedi.media/images/9d29af5e18269d6c53c0-1600.webp"
              alt="KEDI Golden mascot"
              width={1600}
              height={1600}
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
