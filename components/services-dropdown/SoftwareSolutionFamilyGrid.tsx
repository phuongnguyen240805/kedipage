'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Service } from './datas/services-data';
import { getSoftwareFamilyGroups } from './software-menu-families';

type Props = {
  services: Service[];
  getTitle: (service: Service) => string;
  getDescription: (service: Service) => string;
  getImage: (service: Service, width?: number, height?: number) => string | null;
  onNavigate: () => void;
};

export default function SoftwareSolutionFamilyGrid({
  services,
  getTitle,
  getDescription,
  getImage,
  onNavigate,
}: Props) {
  const { grouped, ungrouped } = getSoftwareFamilyGroups(services);

  const renderItem = (service: Service) => {
    const title = getTitle(service);
    const description = getDescription(service);
    const image = getImage(service, 160, 108);
    const href = service.href ?? '#';

    return (
      <Link
        key={href}
        href={href}
        onClick={onNavigate}
        className="group grid min-h-[88px] grid-cols-[78px_minmax(0,1fr)] items-center gap-3 rounded-[15px] border border-kedi-navy/[0.06] bg-white px-2.5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-kedi-yellow/45 hover:bg-kedi-yellow/[0.07] hover:shadow-[0_16px_34px_-26px_rgba(8,35,74,.45)]"
      >
        <span className="relative grid h-[58px] w-[78px] place-items-center overflow-hidden rounded-[11px] bg-[#eef1f7] text-[10px] font-black text-kedi-navy">
          {image ? (
            <Image
              src={image}
              alt={title}
              width={156}
              height={116}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <span>{service.icon ?? 'KEDI'}</span>
          )}
        </span>
        <span className="min-w-0">
          <span className="flex items-start gap-2">
            <span className="line-clamp-2 text-[12px] font-black leading-[1.25] text-kedi-navy xl:text-[13px]">
              {title}
            </span>
            <span className="ml-auto shrink-0 text-[13px] font-black text-kedi-navy/20 transition-all group-hover:translate-x-0.5 group-hover:text-[#b57e00]">
              ↗
            </span>
          </span>
          <span className="mt-1 line-clamp-2 block text-[10px] leading-[1.35] text-kedi-navy/48 xl:text-[10.5px]">
            {description}
          </span>
        </span>
      </Link>
    );
  };

  return (
    <div className="col-span-2 min-w-0 space-y-5 pb-2">
      {grouped.map((family) => (
        <section key={family.key} aria-labelledby={`software-family-${family.key}`}>
          <div className="mb-2.5 flex items-end justify-between gap-4 px-1">
            <div className="min-w-0">
              <h4 id={`software-family-${family.key}`} className="text-[11px] font-black uppercase tracking-[0.09em] text-kedi-navy">
                {family.title}
              </h4>
              <p className="mt-0.5 text-[9.5px] leading-[1.35] text-kedi-navy/42">
                {family.description}
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-[#eef1f7] px-2 py-1 text-[9px] font-black text-kedi-navy/55">
              {family.services.length}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 xl:grid-cols-3">
            {family.services.map(renderItem)}
          </div>
        </section>
      ))}

      {ungrouped.length > 0 ? (
        <section>
          <div className="grid grid-cols-2 gap-2 xl:grid-cols-3">{ungrouped.map(renderItem)}</div>
        </section>
      ) : null}
    </div>
  );
}
