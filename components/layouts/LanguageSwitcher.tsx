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
      <DropdownMenuTrigger className="bg-black flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-accent">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{locale}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-40 max-h-48 overflow-y-auto z-[100001] bg-black text-white"
        align="end"
      >
        <DropdownMenuLabel className="text-white">Chọn ngôn ngữ</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            disabled={isPending}
            className={`flex items-center gap-2 ${locale === lang.code ? 'bg-accent text-white' : 'text-white'}`}
          >
            <span>{lang.emoji}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
