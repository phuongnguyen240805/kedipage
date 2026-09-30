'use client';

import Link from 'next/link';
import type { Service } from './datas/services-data';

type Props = {
  services: Service[];
  getTitle: (service: Service) => string;
  getDescription: (service: Service) => string;
  onNavigate: () => void;
};

export default function AiAgentGrid({
  services,
  getTitle,
  getDescription,
  onNavigate,
}: Props) {
  return (
    <div className="grid grid-cols-2 content-start gap-x-4 gap-y-6 pb-2 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-8">
      {services.slice(0, 8).map((service, index) => {
        const title = getTitle(service);
        const description = getDescription(service);
        const href = service.href ?? '/bo-ai-agent';

        return (
          <Link
            key={`${title}-${index}`}
            href={href}
            onClick={onNavigate}
            className="group/agent min-w-0 rounded-[16px] border border-kedi-navy/[0.06] bg-white px-2 py-2 transition-colors duration-200 hover:border-kedi-yellow/45 hover:bg-kedi-yellow/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kedi-yellow/70"
          >
            <span className="mb-3 block h-[72px] w-[72px] scale-100 overflow-hidden rounded-full border border-kedi-navy/10 bg-white shadow-[0_8px_22px_rgba(8,35,74,0.12)] transition-[transform,border-color,box-shadow] duration-300 ease-out group-hover/agent:scale-110 group-hover/agent:border-kedi-yellow/60 group-hover/agent:shadow-[0_10px_24px_rgba(255,198,41,0.18)]">
              {service.imageUrl ? (
                <img
                  src={service.imageUrl}
                  alt=""
                  width={72}
                  height={72}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="grid h-full w-full place-items-center text-[11px] font-black uppercase text-kedi-navy/45">
                  AI
                </span>
              )}
            </span>

            <span className="block text-[13px] font-black leading-[1.3] text-kedi-navy transition-colors duration-200 group-hover/agent:text-[#0d478c] xl:text-[14px]">
              {title}
            </span>
            <span className="mt-1.5 line-clamp-3 block text-[10.5px] leading-[1.45] text-kedi-navy/52 transition-colors duration-200 group-hover/agent:text-kedi-navy/65 xl:text-[11px]">
              {description}
            </span>
          </Link>
        );
      })}
    </div>
  );
}