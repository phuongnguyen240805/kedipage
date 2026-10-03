'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Activity, CheckCircle2, CircleDot, Gauge, ShieldCheck } from 'lucide-react';
import type { AiAgentPageData } from '../types';
import { PageSection, SectionHeading } from '../ui';

export function ActivitySection({ data }: { data: AiAgentPageData }) {
  const reduceMotion = useReducedMotion();

  return (
    <PageSection id="activity" tone="navy">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_30%,rgba(46,118,197,.25),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(255,198,41,.09),transparent_26%)]" />
      <SectionHeading eyebrow={data.activity.eyebrow} title={data.activity.title} description={data.activity.description} dark ghost="LIVE" />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#071f3f]/80">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Activity className="h-4 w-4 text-kedi-yellow" /> Workforce stream
            </div>
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-white/40"><CircleDot className="h-3 w-3 text-emerald-300" /> active</span>
          </div>
          <div className="divide-y divide-white/8">
            {data.activity.items.map((item, index) => (
              <motion.div
                key={item.agent}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.06 }}
                className="group/activity flex gap-4 px-5 py-5 transition-colors hover:bg-kedi-yellow/[0.05]"
              >
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white transition-transform duration-300 group-hover/activity:scale-110">
                  <Image src={item.image} alt="" fill sizes="48px" className="object-cover" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-white">{item.agent}</p>
                    <span className="rounded-full border border-kedi-yellow/25 bg-kedi-yellow/10 px-2.5 py-1 text-[10px] font-semibold text-kedi-yellow">{item.state}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/52">{item.action}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {data.hero.stats.map((stat, index) => (
            <div key={stat.value} className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black tracking-[-0.04em] text-kedi-yellow">{stat.value}</span>
                {index === 0 ? <Gauge className="h-5 w-5 text-white/30" /> : index === 1 ? <CheckCircle2 className="h-5 w-5 text-white/30" /> : <ShieldCheck className="h-5 w-5 text-white/30" />}
              </div>
              <p className="mt-3 text-sm leading-6 text-white/52">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export function EvidenceSection({ data }: { data: AiAgentPageData }) {
  return (
    <PageSection id="bang-chung" tone="soft">
      <SectionHeading eyebrow={data.evidence.eyebrow} title={data.evidence.title} ghost="PROOF" />

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <div className="rounded-[28px] border border-kedi-navy/10 bg-kedi-navy p-7 text-white lg:col-span-7 lg:min-h-[360px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-kedi-yellow">01 · {data.evidence.blocks[0]?.title}</p>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 tracking-[-0.02em] sm:text-2xl sm:leading-9">{data.evidence.blocks[0]?.body}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {data.evidence.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold text-white/62">{tag}</span>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-kedi-navy/10 bg-white p-7 lg:col-span-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f85]">02 · {data.evidence.blocks[1]?.title}</p>
          <p className="mt-5 text-lg font-semibold leading-8 text-kedi-navy">{data.evidence.blocks[1]?.body}</p>
          <div className="mt-8 rounded-2xl bg-[#f4f6f9] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-kedi-navy/35">Evidence pattern</p>
            <div className="mt-3 space-y-2">
              {['Việc thật', 'Dữ liệu thật', 'Người dùng thật', 'Có log và kết quả'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-kedi-navy/65">
                  <CheckCircle2 className="h-4 w-4 text-[#174f85]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageSection>
  );
}
