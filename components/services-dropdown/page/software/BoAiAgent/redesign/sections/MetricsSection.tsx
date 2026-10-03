'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { AiAgentPageData } from '../types';
import { PageSection, SectionHeading } from '../ui';

export default function MetricsSection({ data }: { data: AiAgentPageData }) {
  const reduceMotion = useReducedMotion();

  return (
    <PageSection id="metrics" tone="navy">
      <SectionHeading
        eyebrow="KEDI metrics"
        title="AI Agent mang lại gì cho doanh nghiệp, tính bằng con số."
        description="Giá trị của một Agent không nằm ở chữ AI, mà ở việc nó gánh được bao nhiêu giờ người và giữ quy trình chạy ổn định đến đâu."
        dark
        ghost="KPI"
      />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {data.metrics.map((metric, index) => (
          <motion.div
            key={metric.value}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.05 }}
            className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6"
          >
            <p className="text-[42px] font-black leading-none tracking-[-0.05em] text-kedi-yellow lg:text-[52px]">{metric.value}</p>
            <p className="mt-4 text-sm leading-6 text-white/55">{metric.label}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 max-w-4xl text-lg font-semibold leading-8 text-white/75">
        Lợi ích lớn nhất là chi phí không tăng tuyến tính: muốn làm nhiều hơn, doanh nghiệp nạp thêm năng lực vào hệ thống AI thay vì chỉ tăng đầu người cho những việc lặp lại.
      </p>
    </PageSection>
  );
}
