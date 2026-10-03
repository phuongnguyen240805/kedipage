'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Building2, Network } from 'lucide-react';
import { useState } from 'react';
import type { AiAgentPageData } from '../types';
import { PageSection, SectionHeading } from '../ui';

export default function DepartmentSection({ data }: { data: AiAgentPageData }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = data.departments.items[selectedIndex] ?? data.departments.items[0];

  return (
    <PageSection id="phong-ban" tone="light">
      <SectionHeading eyebrow={data.departments.eyebrow} title={data.departments.title} description={data.departments.description} ghost="08" />

      <div className="mt-12 rounded-[30px] border border-kedi-navy/10 bg-[#f7f9fc] p-5 sm:p-7 lg:p-9">
        <div className="mx-auto flex max-w-sm items-center justify-center gap-3 rounded-2xl border border-kedi-yellow/35 bg-kedi-yellow/10 px-5 py-4 text-kedi-navy">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-kedi-yellow"><Building2 className="h-5 w-5" /></span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-kedi-navy/45">Doanh nghiệp</p>
            <p className="text-sm font-black">KEDI Connected Operations</p>
          </div>
        </div>

        <div className="mx-auto h-10 w-px bg-gradient-to-b from-kedi-yellow to-kedi-navy/15" />
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-[8%] right-[8%] top-0 hidden h-px bg-kedi-navy/12 md:block" />
          <div className="grid gap-3 pt-4 sm:grid-cols-2 md:grid-cols-4">
            {data.departments.items.map((item, index) => {
              const active = index === selectedIndex;
              return (
                <button
                  key={item.index}
                  type="button"
                  onMouseEnter={() => setSelectedIndex(index)}
                  onFocus={() => setSelectedIndex(index)}
                  onClick={() => setSelectedIndex(index)}
                  className={`group/dept relative rounded-[20px] border p-4 text-left transition-colors ${active ? 'border-kedi-yellow/70 bg-white shadow-[0_16px_40px_rgba(8,35,74,.08)]' : 'border-kedi-navy/8 bg-white/70 hover:border-kedi-yellow/45 hover:bg-white'}`}
                >
                  <span className="absolute -top-4 left-1/2 hidden h-4 w-px -translate-x-1/2 bg-kedi-navy/12 md:block" />
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[10px] font-black text-kedi-navy/30">{item.index}</span>
                    <span className={`relative h-10 w-10 overflow-hidden rounded-xl border bg-white transition-transform duration-300 group-hover/dept:scale-110 ${active ? 'border-kedi-yellow/55' : 'border-kedi-navy/10'}`}>
                      <Image src={item.image} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                  </div>
                  <p className="mt-5 text-sm font-black text-kedi-navy">{item.name}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-kedi-navy/48">{item.title}</p>
                </button>
              );
            })}
          </div>
        </div>

        {selected ? (
          <div className="mt-6 overflow-hidden rounded-[24px] bg-kedi-navy text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
                className="grid gap-6 p-6 lg:grid-cols-[1fr_260px] lg:items-center lg:p-8"
              >
                <div>
                  <div className="flex items-center gap-2 text-kedi-yellow">
                    <Network className="h-4 w-4" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">Signal route · {selected.name}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl">{selected.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-white/60">{selected.description}</p>
                </div>
                <div className="group/selected-agent flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-kedi-yellow/30 bg-white transition-transform duration-300 group-hover/selected-agent:scale-110">
                    <Image src={selected.image} alt="" fill sizes="64px" className="object-cover" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/38">Agent phụ trách</p>
                    <p className="mt-1 font-black text-white">{selected.agent}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : null}
      </div>
    </PageSection>
  );
}
