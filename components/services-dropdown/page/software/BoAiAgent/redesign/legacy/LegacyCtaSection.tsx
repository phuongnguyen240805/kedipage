'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { AiAgentPageData } from '../types';
import BrandGhostBackground from '../BrandGhostBackground';
import './legacy-sections.css';

export default function LegacyCtaSection({ data }: { data: AiAgentPageData }) {
  const reduceMotion = useReducedMotion();
  const crew = data.agents.slice(0, 9);

  return (
    <section id="lien-he" className="kedi-ai-legacy bag bag-end bag-dk">
      <BrandGhostBackground
        dark
        position="right"
        opacity={0.13}
        imageClassName="scale-[1.25] translate-x-[14%] translate-y-[6%]"
      />

      <div className="bag-wrap relative z-10">
        <motion.div
          className="bag-crew"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } },
          }}
        >
          {crew.map((agent) => (
            <motion.span
              key={agent.id}
              variants={{
                hidden: reduceMotion ? { opacity: 1 } : { opacity: 0.18, scale: 0.72, y: 12 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
            >
              {agent.image ? (
                <Image src={agent.image} alt="" fill sizes="72px" className="object-cover" />
              ) : (
                <span className="grid h-full w-full place-items-center text-xs font-black text-kedi-navy">
                  {agent.mono ?? 'AI'}
                </span>
              )}
            </motion.span>
          ))}
        </motion.div>

        <p className="bag-kick justify-center">{data.cta.eyebrow}</p>
        <h2 className="bag-h2 mx-auto mt-4 max-w-[1000px] text-center text-white">
          {data.cta.title}
        </h2>
        <p className="bag-lead mx-auto mt-6 max-w-[760px] text-center text-white/65">
          {data.cta.description}
        </p>

        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {['Bán hàng', 'CSKH', 'Website', 'Vận hành', 'Tuyển dụng'].map((item) => (
            <span key={item} className="bag-end-chip">{item}</span>
          ))}
        </div>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="#danh-sach" className="bag-legacy-btn">
            Xem đội AI Agent <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:1900636648" className="bag-end-secondary">
            Gọi 1900 636 648
          </a>
        </div>
      </div>
    </section>
  );
}
