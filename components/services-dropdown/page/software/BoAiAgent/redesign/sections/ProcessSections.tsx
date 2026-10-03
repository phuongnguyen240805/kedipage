'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import type { AiAgentPageData } from '../types';
import { PageSection, SectionHeading } from '../ui';

export function WorkflowSection({ data }: { data: AiAgentPageData }) {
  const reduceMotion = useReducedMotion();

  return (
    <PageSection id="quy-trinh" tone="soft">
      <SectionHeading eyebrow={data.workflow.eyebrow} title={data.workflow.title} description={data.workflow.description} ghost="05" />

      <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1fr)_290px]">
        <div className="grid gap-3 sm:grid-cols-3">
          {data.workflow.warnings.map((warning) => (
            <div key={warning} className="flex min-h-24 items-start gap-3 rounded-[22px] border border-kedi-navy/8 bg-white p-4 text-sm leading-6 text-kedi-navy/68">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-kedi-yellow text-kedi-navy"><X className="h-4 w-4" /></span>
              <span>{warning}</span>
            </div>
          ))}
        </div>

        <div className="rounded-[22px] bg-kedi-navy p-5 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-kedi-yellow">KEDI principle</p>
          <p className="mt-2 text-base font-semibold leading-7">AI phải đi vào quy trình thật, dữ liệu thật và hành động thật.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5 xl:items-stretch">
        {data.workflow.steps.map((step, index) => (
          <motion.article
            key={step.step}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.48, delay: index * 0.055 }}
            className="group relative flex min-h-[270px] h-full flex-col overflow-hidden rounded-[24px] border border-kedi-navy/10 bg-white p-5 shadow-[0_18px_50px_rgba(8,35,74,.045)] transition-colors duration-300 hover:border-kedi-yellow/55"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-kedi-yellow text-[10px] font-black text-kedi-navy">
                {step.step}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-kedi-navy/30">
                {String(index + 1).padStart(2, '0')} / {String(data.workflow.steps.length).padStart(2, '0')}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-black leading-7 tracking-[-0.025em] text-kedi-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-kedi-navy/60">{step.description}</p>
            <div className="mt-auto pt-6">
              <div className="h-px bg-gradient-to-r from-kedi-yellow/70 via-kedi-yellow/15 to-transparent" />
            </div>
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-kedi-yellow/0 blur-3xl transition-colors group-hover:bg-kedi-yellow/8" />
          </motion.article>
        ))}
      </div>
    </PageSection>
  );
}
