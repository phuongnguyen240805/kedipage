'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from './data';
import { SectionTitle } from './common';
import Parallax from './parallax';
import Boderyelow from '@/components/ui/boder-yelow'; // Đảm bảo đường dẫn import chính xác

export default function Langding3Process() {
  return (
    <section id="process" className="flex flex-col gap-10">
      <SectionTitle kicker="Process" title="A crisp four-step flow" />
      <div className="grid gap-6 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <FadeInWrapper key={step.title} index={index}>
            {/* Bọc Boderyelow ở đây để tạo hiệu ứng viền vàng cho từng bước quy trình */}
            <Boderyelow>
              <div className="rounded-xl bg-white p-6 shadow-sm backdrop-blur h-full transition-all">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#6b7280]">
                      {step.subtitle}
                    </p>
                    <h3 className="text-2xl font-semibold text-[#0f172a]">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-5xl font-semibold leading-none text-[#cbd5e1]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="pt-4 text-base leading-relaxed text-[#1f2937]">
                  {step.description}
                </p>
              </div>
            </Boderyelow>
          </FadeInWrapper>
        ))}
      </div>
      <Parallax />
    </section>
  );
}

/**
 * Component bọc hiệu ứng Fade In để giữ code sạch sẽ
 */
function FadeInWrapper({ children, index }: { children: React.ReactNode, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}