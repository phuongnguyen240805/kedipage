"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function LadipageAccess({ href, className, onNavigate }: {
  href?: string; className?: string; onNavigate?: () => void;
}) {
  const { t } = useTranslation();
  const label = t("account.ladipage", { defaultValue: "Truy cập Ladipage" });
  const style = cn("liquid-button inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full border border-kedi-yellow/50 bg-kedi-yellow/10 px-3 text-[12px] font-semibold text-kedi-yellow transition-colors hover:bg-kedi-yellow/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kedi-yellow", className);
  const caption = <><span className="ladipage-access-label">{label}</span><span className="ladipage-access-compact hidden" aria-hidden="true">Ladipage</span></>;
  if (!href) return <span aria-disabled="true" aria-label={label} className={cn(style, "opacity-50")}>{caption}</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={style} onClick={onNavigate}>{caption}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>;
}
