'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Boxes, Layers3 } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { AiAgentPageData, ConnectedProduct } from '../types';
import { PageSection, SectionHeading } from '../ui';
import ConnectedSystem3D from '../visuals/ConnectedSystem3D';

export default function ConnectedSystemSection({ data }: { data: AiAgentPageData }) {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<ConnectedProduct['id']>('crm');
  const active = useMemo(
    () => data.system.products.find((product) => product.id === activeId) ?? data.system.products[0],
    [activeId, data.system.products]
  );

  return (
    <PageSection id="he-thong-kedi" tone="dark">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_28%_24%,rgba(46,118,197,.20),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(255,198,41,.10),transparent_25%)]" />
      <SectionHeading eyebrow={data.system.eyebrow} title={data.system.title} description={data.system.description} dark ghost="3D" />

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)]">
        <ConnectedSystem3D products={data.system.products} activeId={activeId} onActiveChange={setActiveId} />

        <div className="space-y-4 lg:sticky lg:top-24">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(0,0,0,.15)]">
            <div className="flex items-center gap-3 text-kedi-yellow">
              <Boxes className="h-5 w-5" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Active connected module</span>
            </div>
            <motion.div
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.28 }}
            >
              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">{active.label}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">{active.detail}. Node được nối vào KEDI 1.0 để Agent có ngữ cảnh, quyền hạn và công cụ thực thi trên hệ thống thật.</p>
              <Link href={active.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-kedi-yellow hover:text-[#ffd557]">
                Xem sản phẩm <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#071a36]/70 p-4">
            <div className="mb-3 flex items-center gap-2 px-2 text-white/45">
              <Layers3 className="h-4 w-4 text-kedi-yellow" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">System depth</span>
            </div>
            <div className="space-y-2">
              {data.system.layers.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={reduceMotion ? { duration: 0 } : { delay: index * 0.07, duration: 0.42 }}
                  className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-kedi-yellow/25 bg-kedi-yellow/10 text-[10px] font-black text-kedi-yellow">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/32">{layer.eyebrow}</p>
                    <p className="mt-1 text-sm font-bold text-white">{layer.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/46">{layer.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
