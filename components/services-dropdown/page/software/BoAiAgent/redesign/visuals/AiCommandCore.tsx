'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity, BrainCircuit, Database, Sparkles, Workflow } from 'lucide-react';
import type { AiAgentPageData } from '../types';
import { KEDI_MOTION_EASE, usePointerTilt } from '../motion-system';

const TASK_CARDS = [
  { label: 'Context', detail: 'CRM · lịch sử · dữ liệu', icon: Database, position: 'left-[2%] top-[54%]', z: 58 },
  { label: 'Reasoning', detail: 'Hiểu mục tiêu · chia việc', icon: BrainCircuit, position: 'right-[1%] top-[37%]', z: 84 },
  { label: 'Actions', detail: 'Workflow · tool · API', icon: Workflow, position: 'right-[7%] bottom-[7%]', z: 46 },
] as const;

export default function AiCommandCore({ data }: { data: AiAgentPageData }) {
  const {
    reduceMotion,
    rotateX,
    rotateY,
    shiftX,
    shiftY,
    handlePointerMove,
    resetPointer,
  } = usePointerTilt({ maxRotate: 4.8, maxShift: 13 });
  const primaryAgent = data.agents[0];
  const supportingAgents = data.agents.slice(1, 4);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative min-h-[590px] [perspective:1500px] sm:min-h-[650px]"
    >
      <div className="pointer-events-none absolute inset-[8%] rounded-[42px] bg-kedi-yellow/[0.06] blur-3xl" />
      <motion.div
        style={reduceMotion ? undefined : { rotateX, rotateY }}
        className="absolute inset-0 [transform-style:preserve-3d]"
      >
        <div
          className="absolute inset-[13%_8%_12%] rounded-[34px] border border-white/[0.09] bg-[#071a36]/55 shadow-[0_46px_120px_rgba(0,0,0,.32)] backdrop-blur-xl"
          style={{ transform: 'translateZ(-92px) rotateX(2deg)' }}
        />
        <div
          className="absolute inset-[10%_11%_15%] rounded-[30px] border border-[#2e76c5]/20 bg-[#0b2d5b]/45"
          style={{ transform: 'translateZ(-42px)' }}
        />
        <div
          className="absolute inset-[7%_14%_18%] overflow-hidden rounded-[28px] border border-white/12 bg-[#082b57]/82 shadow-[0_35px_90px_rgba(0,0,0,.3)]"
          style={{ transform: 'translateZ(0px)' }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kedi-yellow/65 to-transparent" />
        </div>

        <div className="absolute left-1/2 top-[14%] z-30 -translate-x-1/2 [transform-style:preserve-3d]">
          <motion.div
            style={reduceMotion ? undefined : { x: shiftX, y: shiftY }}
          >
            <div style={{ transform: 'translateZ(168px)' }}>
              <motion.div
                animate={reduceMotion ? undefined : { y: [-5, 5, -5] }}
                transition={reduceMotion ? undefined : { duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex min-w-[240px] items-center gap-4 rounded-[24px] border border-kedi-yellow/45 bg-[#071f3f]/95 p-4 shadow-[0_28px_80px_rgba(0,0,0,.42)] backdrop-blur-xl"
              >
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-kedi-yellow/30 bg-white">
              {primaryAgent?.image ? <Image src={primaryAgent.image} alt="" fill sizes="56px" className="object-cover" /> : null}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,.8)]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/42">AI Agent online</p>
              </div>
              <p className="mt-1 truncate text-base font-black text-white">{primaryAgent?.name ?? 'Kedi Agent'}</p>
              <p className="mt-1 text-[10px] text-white/45">Nhận mục tiêu · tự chia việc · thực thi</p>
            </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute left-1/2 top-[43%] z-20 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]">
          <motion.div
            animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 0 rgba(255,198,41,.18)', '0 0 0 26px rgba(255,198,41,0)', '0 0 0 0 rgba(255,198,41,0)'] }}
            transition={reduceMotion ? undefined : { duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
            className="grid h-[142px] w-[142px] place-items-center rounded-[30px] border border-kedi-yellow/60 bg-gradient-to-br from-[#174f85] via-[#0b2d5b] to-[#071a36] shadow-[0_30px_80px_rgba(0,0,0,.38)]"
            style={{ transform: 'translateZ(116px) rotateZ(8deg)' }}
          >
            <div className="-rotate-[8deg] text-center">
              <BrainCircuit className="mx-auto h-8 w-8 text-kedi-yellow" />
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/42">Agentic core</p>
              <p className="mt-1 text-xl font-black text-white">KEDI 1.0</p>
            </div>
          </motion.div>
        </div>

        <div
          className="absolute left-1/2 top-[43%] h-[300px] w-px -translate-x-1/2 bg-gradient-to-b from-kedi-yellow/0 via-kedi-yellow/75 to-[#2e76c5]/10"
          style={{ transform: 'translateZ(88px)' }}
        >
          <motion.span
            animate={reduceMotion ? undefined : { y: [-60, 160], opacity: [0, 1, 1, 0] }}
            transition={reduceMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: 'linear' }}
            className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-kedi-yellow shadow-[0_0_18px_rgba(255,198,41,.9)]"
          />
        </div>

        {TASK_CARDS.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.65, delay: 0.36 + index * 0.1, ease: KEDI_MOTION_EASE }}
              className={`absolute z-20 ${item.position} hidden sm:block [transform-style:preserve-3d]`}
            >
              <div
                className="min-w-[170px] rounded-2xl border border-white/12 bg-[#0b2d5b]/92 p-3 shadow-[0_24px_55px_rgba(0,0,0,.3)] backdrop-blur-xl"
                style={{ transform: `translateZ(${item.z}px)` }}
              >
                <div className="flex items-center gap-2 text-kedi-yellow">
                  <Icon className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.12em]">{item.label}</span>
                </div>
                <p className="mt-2 text-[11px] leading-5 text-white/52">{item.detail}</p>
              </div>
            </motion.div>
          );
        })}

        <div className="absolute bottom-[21%] left-[18%] right-[18%] z-10 grid grid-cols-3 gap-2 [transform-style:preserve-3d]">
          {supportingAgents.map((agent, index) => (
            <div key={agent.id} style={{ transform: `translateZ(${36 + index * 14}px)` }}>
              <motion.div
                animate={reduceMotion ? undefined : { y: index % 2 === 0 ? [0, -5, 0] : [-4, 2, -4] }}
                transition={reduceMotion ? undefined : { duration: 5 + index * 0.7, repeat: Infinity, ease: 'easeInOut' }}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.055] p-2.5 backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-white">
                  {agent.image ? <Image src={agent.image} alt="" fill sizes="32px" className="object-cover" /> : null}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-bold text-white">{agent.name}</p>
                  <p className="mt-0.5 truncate text-[8px] text-white/38">{['Đang đọc dữ liệu', 'Đang gọi workflow', 'Đang hoàn tất'][index]}</p>
                </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-[5%] left-[12%] right-[12%] z-20 grid grid-cols-3 gap-2" style={{ transform: 'translateZ(18px)' }}>
          {data.hero.stats.map((stat, index) => (
            <div key={stat.value} className="rounded-2xl border border-white/10 bg-[#071a36]/78 p-3 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-kedi-yellow">
                {index === 0 ? <Sparkles className="h-3.5 w-3.5" /> : index === 1 ? <Activity className="h-3.5 w-3.5" /> : <Workflow className="h-3.5 w-3.5" />}
                <span className="text-base font-black tracking-[-0.03em]">{stat.value}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-[9px] leading-4 text-white/38">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
