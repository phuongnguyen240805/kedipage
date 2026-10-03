'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Database, Network, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { AiAgentCategory, AiAgentPageData } from '../types';
import { AgentAvatar, PageSection, SectionHeading, StatusBadge } from '../ui';
import BrandGhostBackground from '../BrandGhostBackground';
import './AgentExplorerClone.css';

const SYSTEM_LABELS: Record<string, string> = {
  core: 'KEDI 1.0',
  web: 'KEDI Web 1.0',
  sales: 'KEDI Sales 1.0',
  commerce: 'KEDI Commerce 1.0',
  legal: 'KEDI Legal 1.0',
  care: 'KEDI Care 1.0',
  elearning: 'KEDI eLearning 1.0',
  hrm: 'KEDI HRM 1.0',
};

const EASE = [0.22, 1, 0.36, 1] as const;
export default function AgentExplorerSection({ data }: { data: AiAgentPageData }) {
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<'all' | AiAgentCategory>('all');
  const filteredAgents = useMemo(
    () => (filter === 'all' ? data.agents : data.agents.filter((agent) => agent.categories.includes(filter))),
    [data.agents, filter]
  );
  const [selectedId, setSelectedId] = useState(data.agents[0]?.id ?? 1);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!filteredAgents.some((agent) => agent.id === selectedId)) {
      setSelectedId(filteredAgents[0]?.id ?? data.agents[0]?.id ?? 1);
    }
  }, [data.agents, filteredAgents, selectedId]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;
    const pick = () => {
      frame = 0;
      const rows = Array.from(list.querySelectorAll<HTMLButtonElement>('[data-agent-id]'));
      const readingLine = window.innerHeight * 0.45;
      let row = rows.find((item) => {
        const box = item.getBoundingClientRect();
        return box.top <= readingLine && box.bottom >= readingLine;
      });
      if (!row && rows.length) {
        if (rows[0].getBoundingClientRect().top > readingLine) row = rows[0];
        else if (rows[rows.length - 1].getBoundingClientRect().bottom < readingLine) row = rows[rows.length - 1];
      }
      if (row) setSelectedId(Number(row.dataset.agentId));
    };
    const schedulePick = () => {
      if (!frame) frame = window.requestAnimationFrame(pick);
    };
    window.addEventListener('scroll', schedulePick, { passive: true });
    window.addEventListener('resize', schedulePick);
    const observer = new ResizeObserver(schedulePick);
    observer.observe(list);
    schedulePick();
    return () => {
      window.removeEventListener('scroll', schedulePick);
      window.removeEventListener('resize', schedulePick);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [filteredAgents]);
  const selected = data.agents.find((agent) => agent.id === selectedId) ?? filteredAgents[0] ?? data.agents[0];
  const selectedPosition = Math.max(0, filteredAgents.findIndex((agent) => agent.id === selected?.id));
  const progress = filteredAgents.length ? ((selectedPosition + 1) / filteredAgents.length) * 100 : 0;

  const systemCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    data.agents.forEach((agent) => {
      const key = agent.system || 'core';
      counts[key] = (counts[key] ?? 0) + 1;
    });
    return counts;
  }, [data.agents]);

  const renderAgentContent = (agent: AiAgentPageData['agents'][number], index: number) => (
    <>
      <span className="kedi-agent-clone-n">
        {agent.featured && filter === 'all' ? '★' : String(index + 1).padStart(2, '0')}
      </span>

      <span className="kedi-agent-clone-avatar">
        <AgentAvatar agent={agent} size="md" className="!h-[84px] !w-[84px] !rounded-full" />
      </span>

      <span className="kedi-agent-clone-main">
        <span className="kedi-agent-clone-head">
          <span className="kedi-agent-clone-title">{agent.name}</span>
          <StatusBadge status={agent.status} />
        </span>
        <span className="kedi-agent-clone-role">{agent.role}</span>
        <span className="kedi-agent-clone-desc">{agent.description}</span>
        <span className="kedi-agent-clone-foot">
          <span className="kedi-agent-clone-system">→ {agent.systemLabel || 'KEDI AI Workforce'}</span>
          <span className="kedi-agent-clone-more">Xem chi tiết →</span>
        </span>
      </span>
    </>
  );

  return (
    <PageSection id="danh-sach" tone="light" className="!overflow-clip">
      <BrandGhostBackground src="/homepage/golden-data-journey.webp" position="right" opacity={0.11} imageClassName="scale-[1.22] translate-x-[8%] translate-y-[2%]" />
      <SectionHeading
        eyebrow="Đội ngũ Gâu Đần"
        title="15 AI Agent. Mỗi con gánh một phần việc rõ ràng."
        description="Chọn một Agent để xem vai trò, trạng thái và hệ thống phía sau. Khi cuộn danh sách, Agent đi qua vùng đọc sẽ tự trở thành Agent đang được theo dõi."
        ghost="15"
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {data.filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${filter === item.id ? 'border-kedi-yellow bg-kedi-yellow text-kedi-navy' : 'border-kedi-navy/10 bg-white text-kedi-navy/60 hover:border-kedi-yellow/45 hover:text-kedi-navy'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {selected ? (
        <div className="mt-8 overflow-hidden rounded-[30px] border border-kedi-navy/10 bg-[linear-gradient(100deg,rgba(166,180,198,.96)_0%,rgba(48,81,119,.97)_36%,rgba(7,41,82,.99)_100%)] text-white shadow-[0_28px_70px_rgba(7,26,54,.16)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`intro-${selected.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[320px_minmax(0,1fr)_390px] lg:items-center lg:p-7"
            >
              <div className="flex min-w-0 items-start gap-4 lg:border-r lg:border-white/15 lg:pr-6">
                <AgentAvatar
                  agent={selected}
                  size="lg"
                  className="!h-[116px] !w-[116px] shrink-0 !rounded-[22px] border-white/20 bg-white shadow-[0_12px_34px_rgba(0,0,0,.12)]"
                />
                <div className="min-w-0 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-kedi-yellow">Agent Inspector</p>
                    <StatusBadge status={selected.status} />
                  </div>
                  <h3 className="mt-3 text-[28px] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[32px]">
                    {selected.name}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#c5e3ff]">{selected.role}</p>
                </div>
              </div>

              <div className="min-w-0 lg:px-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74">Nhiệm vụ</p>
                <p className="mt-4 text-[15px] leading-8 text-white/92 sm:text-base">{selected.description}</p>
              </div>

              <div className="rounded-[24px] border border-white/18 bg-white/[0.08] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-[2px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/76">Connected system</p>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {[
                    ['KEDI 1.0', Database],
                    ['Workflow', Network],
                    ['AI runtime', Sparkles],
                    [selected.systemLabel || 'Business system', ArrowRight],
                  ].map(([label, Icon]) => {
                    const IconComponent = Icon as typeof Database;
                    return (
                      <div
                        key={`intro-${String(label)}`}
                        className="flex min-h-12 items-center gap-2 rounded-[14px] border border-white/35 bg-white/[0.08] px-3 py-2 text-xs font-semibold text-white/94"
                      >
                        <IconComponent className="h-4 w-4 shrink-0 text-kedi-yellow" />
                        <span className="line-clamp-2">{String(label)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : null}

      <div className="kedi-agent-clone kedi-agent-clone-body">
        <div className="min-w-0">
          {/* Rows follow the page scroll; the dock tracks the reading line. */}
          <div ref={listRef} className="kedi-agent-clone-rows">
            {filteredAgents.map((agent, index) => {
              const active = selected?.id === agent.id;
              return (
                <motion.button
                  key={`mobile-${agent.id}`}
                  type="button"
                  onClick={() => setSelectedId(agent.id)}
                  data-agent-id={agent.id}
                  onMouseEnter={() => setSelectedId(agent.id)}
                  viewport={{ once: true, amount: 0.08 }}
                  onMouseMove={(event) => {
                    const box = event.currentTarget.getBoundingClientRect();
                    event.currentTarget.style.setProperty('--mx', `${event.clientX - box.left}px`);
                    event.currentTarget.style.setProperty('--my', `${event.clientY - box.top}px`);
                  }}
                  initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: EASE }}
                  className={`kedi-agent-clone-row ${active ? 'is-active' : ''}`}
                >
                  {renderAgentContent(agent, index)}
                </motion.button>
              );
            })}
          </div>

        </div>

        {selected ? (
          <aside className="kedi-agent-clone-dock">
            <AnimatePresence mode="wait">
              <motion.div
                key={`dock-${selected.id}`}
                initial={{ opacity: 0.4, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.4, scale: 0.97 }}
                transition={{ duration: 0.28 }}
                className="kedi-agent-clone-card"
              >
                <div className="kedi-agent-clone-dock-top">
                  <span className="kedi-agent-clone-index">
                    <b>{String(selectedPosition + 1).padStart(2, '0')}</b> / {String(filteredAgents.length).padStart(2, '0')}
                  </span>
                  <StatusBadge status={selected.status} />
                </div>

                <div className="kedi-agent-clone-dock-avatar">
                  <AgentAvatar agent={selected} size="lg" className="!h-[132px] !w-[132px] !rounded-full border-white/20 shadow-[0_0_0_6px_rgba(255,255,255,.12),0_0_0_15px_rgba(255,198,41,.11)]" />
                </div>

                <div className="kedi-agent-clone-name">{selected.name}</div>
                <div className="kedi-agent-clone-dock-role">{selected.role}</div>

                <div className="kedi-agent-clone-bar">
                  <span style={{ width: `${progress}%` }} />
                </div>

                <div className="kedi-agent-clone-label">KEDI 1.0 phía sau</div>
                <ul className="kedi-agent-clone-os">
                  {Object.entries(SYSTEM_LABELS).map(([key, label]) => (
                    <li key={key} className={selected.system === key ? 'is-active' : ''}>
                      {label} <em>{systemCounts[key] ?? 0}</em>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </aside>
        ) : null}
      </div>
    </PageSection>
  );
}
