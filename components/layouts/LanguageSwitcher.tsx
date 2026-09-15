'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import i18n from '../../i18n/request';
export default function LanguageSwitcher() {
  const [isPending] = useTransition();
  const router = useRouter();
  // Khởi tạo mặc định là 'vi' để tránh lỗi Hydration
  const [locale, setLocale] = useState('vi');

  // Đồng bộ i18n và lưu cookie nếu chưa có
  useEffect(() => {
    let currentLocale = 'vi';
    const cookieLocale = document.cookie.match(/locale=(\w+)/)?.[1];

    if (cookieLocale) {
      currentLocale = cookieLocale;
    } else if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language?.split('-')[0];
      const supported = ['vi', 'en', 'fr', 'ko', 'ja', 'zh'];
      if (browserLang && supported.includes(browserLang)) {
        currentLocale = browserLang;
      }
    }

    setLocale(currentLocale);

    if (i18n.language !== currentLocale) {
      i18n.changeLanguage(currentLocale);
    }

    // Nếu chưa có cookie, lưu lại và refresh trang để server cập nhật
    if (!cookieLocale) {
      document.cookie = `locale=${currentLocale}; path=/; max-age=31536000`;
      if (currentLocale !== 'vi') {
        router.refresh();
      }
    }
  }, [router]);

  const languages = [
    { code: 'vi', name: 'Tiếng Việt', emoji: '🇻🇳' },
    { code: 'en', name: 'English', emoji: '🇬🇧' },
    { code: 'fr', name: 'Français', emoji: '🇫🇷' },
    { code: 'ko', name: '한국어', emoji: '🇰🇷' },
    { code: 'ja', name: '日本語', emoji: '🇯🇵' },
    { code: 'zh', name: '中文', emoji: '🇨🇳' },
  ];

  const changeLanguage = (newLocale: string) => {
    i18n.changeLanguage(newLocale); // đổi ngôn ngữ ngay lập tức
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 năm
    setLocale(newLocale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-9 items-center gap-1.5 rounded-full border border-white/20 bg-transparent px-2.5 text-white transition-colors duration-200 hover:border-kedi-yellow hover:text-kedi-yellow focus:outline-none data-[state=open]:border-kedi-yellow data-[state=open]:text-kedi-yellow">
        <Globe className="h-3.5 w-3.5" />
        <span className="text-[12px] font-medium uppercase tracking-wider">{locale}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-40 max-h-48 overflow-y-auto z-[100001] bg-kedi-navy text-white border-white/15"
        align="end"
      >
        <DropdownMenuLabel className="text-white">Chọn ngôn ngữ</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            disabled={isPending}
            className={`flex items-center gap-2 ${locale === lang.code ? 'bg-kedi-yellow text-kedi-navy' : 'text-white hover:bg-kedi-yellow/10 hover:text-kedi-yellow'}`}
          >
            <span>{lang.emoji}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
