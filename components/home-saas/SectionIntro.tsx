import type { ReactNode } from 'react';

type SectionIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  light = false,
}: SectionIntroProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <p
          className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-kedi-navy/55' : 'text-kedi-yellow'
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`max-w-5xl text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[48px] lg:text-[64px] ${
            light ? 'text-kedi-navy' : 'text-white'
          }`}
        >
          {title}
        </h2>
      </div>

      {description ? (
        <p
          className={`max-w-xl text-sm leading-7 lg:col-span-4 lg:justify-self-end lg:text-base ${
            light ? 'text-kedi-navy/60' : 'text-white/55'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
