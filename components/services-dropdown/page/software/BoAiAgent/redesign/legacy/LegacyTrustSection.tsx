'use client';

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import type { AiAgentPageData } from '../types';
import BrandGhostBackground from '../BrandGhostBackground';
import './legacy-sections.css';

function ScrollWord({
  word,
  index,
  total,
  progress,
  accent,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  accent: boolean;
}) {
  const start = Math.max(0, index / Math.max(total, 1) - 0.08);
  const end = Math.min(1, start + 0.18);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const color = useTransform(
    progress,
    [start, end],
    accent
      ? ['rgba(255,255,255,.20)', 'rgb(255,198,41)']
      : ['rgba(255,255,255,.20)', 'rgb(255,255,255)']
  );

  return (
    <motion.span style={{ opacity, color }} className="kedi-legacy-word">
      {word}{' '}
    </motion.span>
  );
}

function ScrubParagraph({ text, accentTerms = [] }: { text: string; accentTerms?: string[] }) {
  const target = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start 88%', 'end 42%'],
  });
  const words = text.split(/\s+/);

  return (
    <p ref={target} className="bag-scrub">
      {words.map((word, index) => {
        const normalized = word.toLowerCase().replace(/[“”"'.,:;!?()]/g, '');
        const accent = accentTerms.some((term) => normalized.includes(term.toLowerCase()));
        return (
          <ScrollWord
            key={`${word}-${index}`}
            word={word}
            index={index}
            total={words.length}
            progress={scrollYProgress}
            accent={accent}
          />
        );
      })}
    </p>
  );
}

export default function LegacyTrustSection({ data }: { data: AiAgentPageData }) {
  const reduceMotion = useReducedMotion();
  const first = data.evidence.blocks[0];
  const second = data.evidence.blocks[1];

  return (
    <section id="vi-sao-tin-duoc" className="kedi-ai-legacy bag bag-truth bag-dk">
      <BrandGhostBackground
        src="https://assets.kedi.media/images/236244d3329e087e4868-1672.webp"
        dark
        position="right"
        opacity={0.10}
        imageClassName="scale-[1.18] translate-x-[12%]"
      />
      <div className="bag-wrap">
        <div className="bag-truth-top">
          <div>
            <p className="bag-kick">{data.evidence.eyebrow}</p>
            <h2 className="bag-h2">
              Vì sao “đang dùng thật” mới là điều <span className="bag-tg">đáng tin</span>?
            </h2>
          </div>

          <div aria-hidden="true" className="bag-truth-tags">
            {data.evidence.tags.map((tag, index) => (
              <motion.span
                key={tag}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: index % 2 === 0 ? [-5, 5, -5] : [5, -5, 5],
                        x: index % 2 === 0 ? [-2, 3, -2] : [3, -2, 3],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 5.5 + index * 0.55, repeat: Infinity, ease: 'easeInOut' }
                }
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {first ? (
          <ScrubParagraph
            text={first.body}
            accentTerms={['sống', 'va', 'chạm', 'thật', 'hàng', 'nghìn']}
          />
        ) : null}
        {second ? (
          <ScrubParagraph
            text={second.body}
            accentTerms={['không', 'bán', 'chính', 'mình', 'dùng']}
          />
        ) : null}
      </div>
    </section>
  );
}
