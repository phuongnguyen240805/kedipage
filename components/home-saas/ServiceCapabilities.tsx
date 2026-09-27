'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionIntro from './SectionIntro';
import { serviceItems } from './data';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServiceCapabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-white px-5 py-20 text-kedi-navy sm:px-8 lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Professional services"
          title={<>Không chỉ phần mềm. <span className="text-[#92700b]">KEDI còn có đội ngũ triển khai.</span></>}
          description="Khi doanh nghiệp cần triển khai nhanh, dịch vụ chuyên môn bổ sung trực tiếp cho hệ sinh thái SaaS."
          light
        />

        <div className="mt-12 border-t border-kedi-navy/12">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.number}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.05, ease: EASE }}
            >
              <Link
                href={service.href}
                className="group grid gap-5 border-b border-kedi-navy/12 py-7 transition-colors duration-300 hover:bg-[#f6f8fb] sm:px-3 lg:grid-cols-[70px_1.1fr_1fr_44px] lg:items-center lg:gap-8"
              >
                <span className="text-xs font-bold text-kedi-navy/30">{service.number}</span>
                <div>
                  <h3 className="text-[26px] font-semibold tracking-[-0.035em] sm:text-[30px]">{service.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-kedi-navy/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-kedi-navy/48">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="max-w-xl text-sm leading-6 text-kedi-navy/55">{service.description}</p>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-kedi-navy/12 transition-all duration-300 group-hover:border-kedi-yellow group-hover:bg-kedi-yellow">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
