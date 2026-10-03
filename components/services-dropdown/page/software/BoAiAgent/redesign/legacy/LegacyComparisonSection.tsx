'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { AiAgentPageData } from '../types';
import BrandGhostBackground from '../BrandGhostBackground';
import './legacy-sections.css';

function HighlightTitle({ title, highlight }: { title: string; highlight: string }) {
  const index = title.indexOf(highlight);
  if (index < 0) return <>{title}</>;

  return (
    <>
      {title.slice(0, index)}
      <span className="bag-tg2">{highlight}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

function SpineCell({ children, side }: { children: ReactNode; side: 'left' | 'right' }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.p
      className={side === 'left' ? 'bag-sp-l' : 'bag-sp-r'}
      initial={reduceMotion ? false : { opacity: 0, x: side === 'left' ? -52 : 52 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.55 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.p>
  );
}

export default function LegacyComparisonSection({ data }: { data: AiAgentPageData }) {
  const comparison = data.comparison;

  return (
    <section id="so-sanh" className="kedi-ai-legacy bag bag-vs">
      <BrandGhostBackground
        src="/homepage/golden-insights-light.webp"
        position="right"
        opacity={0.045}
        imageClassName="scale-[1.14] translate-x-[14%] translate-y-[4%]"
      />
      <div className="bag-wrap">
        <header className="bag-mast">
          <div className="bag-mast-l">
            <span aria-hidden="true" className="bag-ghost">VS</span>
            <p className="bag-kick">{comparison.eyebrow}</p>
            <h2 className="bag-h2">
              <HighlightTitle title={comparison.title} highlight={comparison.highlight} />
            </h2>
          </div>
          <div className="bag-mast-r">
            <p className="bag-lead">{comparison.description}</p>
          </div>
        </header>

        <div className="bag-dict">
          <div>
            <span className="bag-dict-term">{comparison.definition.term}</span>
            <span className="bag-dict-pos">{comparison.definition.pos}</span>
            <p className="bag-dict-see">{comparison.definition.note}</p>
          </div>
          <ol className="bag-dict-def">
            {comparison.definition.items.map((item) => (
              <li key={item}><span>{item}</span></li>
            ))}
          </ol>
        </div>

        <div className="bag-spine">
          <div className="bag-spine-hd">
            <div>
              {comparison.headers.beforeLabel}
              <b>{comparison.headers.beforeTitle}</b>
            </div>
            <span />
            <div>
              {comparison.headers.afterLabel}
              <b>{comparison.headers.afterTitle}</b>
            </div>
          </div>

          {comparison.rows.map((row) => (
            <div key={row.key} className="bag-spine-row">
              <SpineCell side="left">{row.before}</SpineCell>
              <span className="bag-sp-k">{row.key}</span>
              <SpineCell side="right">{row.after}</SpineCell>
            </div>
          ))}

          <div className="bag-spine-end">
            <p>{comparison.conclusion.before}</p>
            <p>{comparison.conclusion.after}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
