'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Database, MousePointer2, Network, Sparkles } from 'lucide-react';
import type { ConnectedProduct } from '../types';
import { usePointerTilt } from '../motion-system';

const PRODUCT_POSITIONS = [
  { x: 15, y: 58, z: 38 },
  { x: 39, y: 43, z: 62 },
  { x: 66, y: 45, z: 54 },
  { x: 84, y: 61, z: 34 },
] as const;

const CORE = { x: 50, y: 24 };
const DATA = { x: 50, y: 84 };

export default function ConnectedSystem3D({
  products,
  activeId,
  onActiveChange,
}: {
  products: ConnectedProduct[];
  activeId: ConnectedProduct['id'];
  onActiveChange: (id: ConnectedProduct['id']) => void;
}) {
  const {
    reduceMotion,
    rotateX,
    rotateY,
    shiftX,
    shiftY,
    handlePointerMove,
    resetPointer,
  } = usePointerTilt({ maxRotate: 6.2, maxShift: 16, stiffness: 95, damping: 20 });

  const activeIndex = Math.max(0, products.findIndex((product) => product.id === activeId));
  const activePosition = PRODUCT_POSITIONS[activeIndex] ?? PRODUCT_POSITIONS[0];
  const activePath = `M ${CORE.x} ${CORE.y} L ${activePosition.x} ${activePosition.y} L ${DATA.x} ${DATA.y}`;

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/10 bg-[#06172f] shadow-[0_42px_110px_rgba(0,0,0,.32)] [perspective:1600px] sm:min-h-[660px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_20%,rgba(255,198,41,.11),transparent_22%),radial-gradient(circle_at_72%_68%,rgba(46,118,197,.22),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:46px_46px]" />

      <motion.div
        style={reduceMotion ? undefined : { rotateX, rotateY }}
        className="absolute inset-[7%] [transform-style:preserve-3d]"
      >
        <div
          className="absolute inset-[11%_4%_7%] rounded-[32px] border border-[#2e76c5]/15 bg-[#0b2d5b]/24"
          style={{ transform: 'translateZ(-95px) rotateX(2deg)' }}
        />
        <div
          className="absolute inset-[7%_7%_11%] rounded-[30px] border border-white/[0.07] bg-[#0b2d5b]/20"
          style={{ transform: 'translateZ(-48px)' }}
        />

        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" aria-hidden="true" style={{ transform: 'translateZ(22px)' }}>
          {products.map((product, index) => {
            const position = PRODUCT_POSITIONS[index] ?? PRODUCT_POSITIONS[0];
            const selected = product.id === activeId;
            return (
              <g key={product.id}>
                <line
                  x1={CORE.x}
                  y1={CORE.y}
                  x2={position.x}
                  y2={position.y}
                  stroke={selected ? 'rgba(255,198,41,.75)' : 'rgba(117,183,247,.23)'}
                  strokeWidth={selected ? '0.8' : '0.45'}
                />
                <line
                  x1={position.x}
                  y1={position.y}
                  x2={DATA.x}
                  y2={DATA.y}
                  stroke={selected ? 'rgba(255,198,41,.55)' : 'rgba(117,183,247,.18)'}
                  strokeWidth={selected ? '0.7' : '0.4'}
                  strokeDasharray="2.4 2.4"
                />
              </g>
            );
          })}
          <motion.path
            key={activeId}
            d={activePath}
            fill="none"
            stroke="#ffc629"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="4 5"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, strokeDashoffset: reduceMotion ? 0 : -18 }}
            transition={reduceMotion ? { duration: 0 } : { pathLength: { duration: 0.6 }, opacity: { duration: 0.25 }, strokeDashoffset: { duration: 1.25, repeat: Infinity, ease: 'linear' } }}
          />
        </svg>

        <div className="absolute left-1/2 top-[6%] z-30 -translate-x-1/2 [transform-style:preserve-3d]">
          <motion.div style={reduceMotion ? undefined : { x: shiftX, y: shiftY }}>
            <div style={{ transform: 'translateZ(196px)' }}>
              <motion.div
                animate={reduceMotion ? undefined : { y: [-5, 5, -5] }}
                transition={reduceMotion ? undefined : { duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-full border border-kedi-yellow/55 bg-kedi-yellow px-5 py-3 text-kedi-navy shadow-[0_24px_65px_rgba(255,198,41,.18)]"
              >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-black uppercase tracking-[0.12em]">Gâu Đần · AI Agent</span>
            </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute left-1/2 top-[24%] z-20 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]">
          <motion.div
            animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 0 rgba(255,198,41,.18)', '0 0 0 22px rgba(255,198,41,0)', '0 0 0 0 rgba(255,198,41,0)'] }}
            transition={reduceMotion ? undefined : { duration: 2.7, repeat: Infinity, ease: 'easeOut' }}
            className="w-[190px] rounded-[26px] border border-kedi-yellow/45 bg-gradient-to-br from-[#174f85] via-[#0b2d5b] to-[#071a36] p-5 text-center shadow-[0_32px_90px_rgba(0,0,0,.4)]"
            style={{ transform: 'translateZ(142px)' }}
          >
            <BrainCircuit className="mx-auto h-7 w-7 text-kedi-yellow" />
            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/42">Agentic operating core</p>
            <p className="mt-1 text-2xl font-black text-white">KEDI 1.0</p>
          </motion.div>
        </div>

        {products.map((product, index) => {
          const position = PRODUCT_POSITIONS[index] ?? PRODUCT_POSITIONS[0];
          const active = product.id === activeId;
          return (
            <div
              key={product.id}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
              style={{ left: `${position.x}%`, top: `${position.y}%` }}
            >
              <motion.button
                type="button"
                onPointerEnter={() => onActiveChange(product.id)}
                onFocus={() => onActiveChange(product.id)}
                onClick={() => onActiveChange(product.id)}
                animate={reduceMotion ? undefined : { z: active ? position.z + 72 : position.z, scale: active ? 1.08 : 1, y: active ? -6 : 0 }}
                transition={{ duration: 0.32, ease: 'easeOut' }}
                className={`min-w-[128px] rounded-2xl border px-4 py-3 text-left shadow-[0_22px_55px_rgba(0,0,0,.3)] backdrop-blur-xl transition-colors sm:min-w-[150px] ${active ? 'border-kedi-yellow/75 bg-kedi-yellow text-kedi-navy' : 'border-white/12 bg-[#0e376b]/92 text-white hover:border-kedi-yellow/45'}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`grid h-7 w-7 place-items-center rounded-lg ${active ? 'bg-kedi-navy/10' : 'bg-white/[0.07]'}`}>
                    <Network className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-xs font-black">{product.label}</p>
                </div>
                <p className={`mt-2 text-[9px] leading-4 ${active ? 'text-kedi-navy/65' : 'text-white/42'}`}>{product.detail}</p>
              </motion.button>
            </div>
          );
        })}

        <div className="absolute left-1/2 top-[84%] z-10 w-[64%] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]">
          <div
            className="rounded-[24px] border border-white/10 bg-[#071a36]/92 p-4 text-center shadow-[0_30px_80px_rgba(0,0,0,.35)]"
            style={{ transform: 'translateZ(-8px)' }}
          >
            <div className="flex items-center justify-center gap-2 text-kedi-yellow">
              <Database className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">KEDI Data Layer</span>
            </div>
            <p className="mt-2 text-xs font-semibold text-white/70 sm:text-sm">CRM · đơn hàng · hội thoại · hồ sơ · lịch sử</p>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#071a36]/75 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35 backdrop-blur-xl">
        <MousePointer2 className="h-3.5 w-3.5 text-kedi-yellow" />
        Hover node · di chuột để xoay hệ thống
      </div>
    </div>
  );
}
