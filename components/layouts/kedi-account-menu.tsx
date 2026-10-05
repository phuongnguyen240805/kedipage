"use client";

import { ChevronDown, UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { KediAccount } from "@/hooks/use-kedi-account";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function KediAccountMenu({ account }: { account: KediAccount }) {
  const { t } = useTranslation();
  if (account.loading) return <span className="h-8 w-24 animate-pulse rounded-full bg-white/10" aria-label={t("account.loading", { defaultValue: "Đang kiểm tra tài khoản" })} />;
  if (!account.user || !account.profileUrl) {
    if (!account.enabled || !account.unavailable) return null;
    return <a href="/api/auth/sso/start" className="text-xs text-white/70 underline decoration-white/30 underline-offset-4 hover:text-kedi-yellow">{t("account.retry", { defaultValue: "Thử lại kết nối tài khoản" })}</a>;
  }
  const name = account.user.nickname.trim() || account.user.username.trim() || t("account.you", { defaultValue: "Bạn" });
  const profileUrl = account.profileUrl;
  const greeting = t("account.greeting", { name, defaultValue: "Chào, {{name}}" });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex h-9 min-w-0 items-center gap-1.5 rounded-full px-2 text-white transition-colors hover:text-kedi-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-kedi-yellow" aria-label={greeting}>
        <UserRound className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="max-w-[130px] truncate text-xs font-medium lg:max-w-[100px] min-[1280px]:max-w-[130px] xl:max-w-[150px]">{greeting}</span>
        <ChevronDown className="h-3 w-3 shrink-0" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[100001] border-white/15 bg-kedi-navy text-white">
        <DropdownMenuItem asChild>
          <a href={profileUrl} target="_blank" rel="noopener noreferrer">{t("account.manage", { defaultValue: "Quản lý tài khoản tại Ladipage" })}</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
