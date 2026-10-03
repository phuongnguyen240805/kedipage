'use client';

import Link from 'next/link';
import type { AiAgentPageData } from '../types';
import BrandGhostBackground from '../BrandGhostBackground';
import './legacy-sections.css';

export default function LegacyFaqSection({ data }: { data: AiAgentPageData }) {
  const midpoint = Math.ceil(data.faqs.length / 2);
  const columns = [data.faqs.slice(0, midpoint), data.faqs.slice(midpoint)];

  return (
    <section id="faq" className="kedi-ai-legacy bag bag-faq">
      <BrandGhostBackground position="left" opacity={0.03} imageClassName="scale-[1.12] -translate-x-[12%] translate-y-[8%]" />
      <div className="bag-wrap">
        <header className="bag-mast">
          <div className="bag-mast-l">
            <span aria-hidden="true" className="bag-ghost">?</span>
            <p className="bag-kick">Hỏi đáp</p>
            <h2 className="bag-h2">Câu hỏi thường gặp về <span className="bag-tg2">AI Agent</span></h2>
          </div>
          <div className="bag-mast-r">
            <p className="bag-lead">Những câu khách hỏi KEDI nhiều nhất trước khi lắp AI Agent đầu tiên cho doanh nghiệp.</p>
          </div>
        </header>

        <div className="bag-faq-grid">
          {columns.map((items, columnIndex) => (
            <div key={columnIndex} className="bag-faq-col">
              {items.map((item) => (
                <details key={item.question} className="bag-q">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
              {columnIndex === 1 ? (
                <div className="bag-faq-ask">
                  <p>Chưa thấy câu hỏi của anh chị? KEDI có thể tư vấn theo đúng quy trình đang nghẽn.</p>
                  <Link href="#lien-he" className="bag-legacy-btn">Tư vấn AI Agent <span aria-hidden="true">→</span></Link>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
