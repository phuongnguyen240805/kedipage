import Image from 'next/image';
import type { ReactNode } from 'react';
import type { AiAgent, AiAgentStatus } from './types';

const STATUS_LABELS: Record<AiAgentStatus, string> = {
  ban: 'Đang bán',
  chay: 'Đang chạy',
  trienkhai: 'Đang triển khai',
  xay: 'Đang xây',
  noibo: 'Dùng nội bộ',
};

const STATUS_CLASSES: Record<AiAgentStatus, string> = {
  ban: 'border-kedi-yellow/35 bg-kedi-yellow/15 text-[#9a6c00]',
  chay: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700',
  trienkhai: 'border-blue-500/20 bg-blue-500/10 text-[#174f85]',
  xay: 'border-slate-400/25 bg-slate-400/10 text-slate-600',
  noibo: 'border-kedi-navy/20 bg-kedi-navy/10 text-kedi-navy',
};

export function PageSection({
  id,
  tone = 'light',
  children,
  className = '',
}: {
  id?: string;
  tone?: 'light' | 'soft' | 'dark' | 'navy';
  children: ReactNode;
  className?: string;
}) {
  const tones = {
    light: 'bg-white text-kedi-navy',
    soft: 'bg-[#f4f6f9] text-kedi-navy',
    dark: 'bg-[#071a36] text-white',
    navy: 'bg-kedi-navy text-white',
  } as const;

  return (
    <section id={id} className={`relative isolate overflow-hidden ${tones[tone]} ${className}`}>
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = 'left',
  ghost,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: 'left' | 'center';
  ghost?: string;
}) {
  const center = align === 'center';

  if (center) {
    return (
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-kedi-yellow shadow-[0_0_18px_rgba(255,198,41,.65)]" />
          <span className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? 'text-white/58' : 'text-kedi-navy/52'}`}>
            {eyebrow}
          </span>
        </div>
        <h2 className={`text-[40px] font-black leading-[1.06] tracking-[-0.045em] sm:text-[50px] lg:text-[64px] ${dark ? 'text-white' : 'text-kedi-navy'}`}>
          {title}
        </h2>
        {description ? (
          <p className={`mx-auto mt-6 max-w-3xl text-[15px] leading-7 sm:text-base lg:text-lg lg:leading-8 ${dark ? 'text-white/62' : 'text-kedi-navy/60'}`}>
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  const ghostText = ghost ?? eyebrow.slice(0, 4).toUpperCase();

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,.94fr)] lg:items-end lg:gap-14">
      <div className="relative min-w-0">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -left-[0.04em] bottom-[calc(100%-0.43em)] z-0 select-none text-[clamp(104px,13vw,210px)] font-black leading-none tracking-[-0.075em] text-transparent ${dark ? 'opacity-80' : 'opacity-100'}`}
          style={{ WebkitTextStroke: dark ? '2px rgba(255,198,41,.20)' : '2px rgba(11,45,91,.13)' }}
        >
          {ghostText}
        </span>

        <div className="relative z-10 mb-3 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-kedi-yellow shadow-[0_0_18px_rgba(255,198,41,.65)]" />
          <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${dark ? 'text-[#FFE07A]' : 'text-[#9A6C00]'}`}>
            {eyebrow}
          </span>
        </div>

        <h2 className={`relative z-10 text-[40px] font-black leading-[1.08] tracking-[-0.045em] sm:text-[50px] lg:text-[64px] ${dark ? 'text-white' : 'text-kedi-navy'}`}>
          {title}
        </h2>
      </div>

      {description ? (
        <p className={`relative z-10 max-w-3xl text-[16px] leading-8 lg:text-[18px] ${dark ? 'text-white/62' : 'text-kedi-navy/62'}`}>
          {description}
        </p>
      ) : (
        <div />
      )}
    </div>
  );
}

export function StatusBadge({ status }: { status: AiAgentStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${STATUS_CLASSES[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {STATUS_LABELS[status]}
    </span>
  );
}

export function AgentAvatar({
  agent,
  size = 'md',
  className = '',
}: {
  agent: AiAgent;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizes = {
    sm: 'h-10 w-10',
    md: 'h-16 w-16',
    lg: 'h-24 w-24',
  } as const;

  return (
    <span className={`relative grid shrink-0 place-items-center overflow-hidden rounded-2xl border border-kedi-navy/10 bg-white shadow-[0_10px_30px_rgba(8,35,74,.10)] ${sizes[size]} ${className}`}>
      {agent.image ? (
        <Image src={agent.image} alt="" fill sizes="96px" className="object-cover" />
      ) : (
        <span className="text-sm font-black text-kedi-navy">{agent.mono ?? 'AI'}</span>
      )}
    </span>
  );
}

export function KediSignal({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`relative block h-px w-full overflow-hidden ${dark ? 'bg-white/10' : 'bg-kedi-navy/10'}`}>
      <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-kedi-yellow to-transparent" />
    </span>
  );
}
