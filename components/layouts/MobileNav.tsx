'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight, ArrowLeft, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import ServiceItem from '../services-dropdown/service-item';
import {
  serviceCategories,
  VISIBLE_SERVICE_CATEGORY_KEYS,
} from '../services-dropdown/datas/services-data';
import LanguageSwitcher from '@/components/layouts/LanguageSwitcher';
import { Button } from '../ui/button';
import { isNavItemActive, navigationConfig } from '../../data/navigation-config';
import { usePathname } from 'next/navigation';
import Boderyelow from '../ui/boder-yelow';
import BrandLogo from './brand-logo';

export default function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [activePanel, setActivePanel] = useState<'main' | 'services' | 'blog'>(
    'main'
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeAll = () => {
    setActivePanel('main');
    setActiveCategory(null);
    onClose?.();
  };

  const blogPosts = useMemo(
    () => navigationConfig.find((i) => i.dropdownType === 'blog')?.items || [],
    []
  );

  if (!isOpen) return null;

  const PanelHeader = ({
    title,
    onBack,
  }: {
    title: string;
    onBack: () => void;
  }) => (
    <div className="px-4 py-3 border-b border-white/15 flex items-center justify-between sticky top-0 bg-kedi-navy z-20">
      <Button
        onClick={onBack}
        className="bg-white/10 text-kedi-yellow hover:bg-white/20 px-3 py-1.5 h-auto rounded-lg text-sm font-bold flex items-center gap-1 shadow-none"
      >
        <ArrowLeft size={16} /> {t('common.back') || 'Quay lại'}
      </Button>
      <div className="flex-1 text-center font-bold text-white truncate px-2 uppercase text-[13px]">
        {title}
      </div>
      <Button
        onClick={closeAll}
        className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-gray-300 shadow-none"
      >
        <X size={20} />
      </Button>
    </div>
  );

  const content = (
    <div className="fixed inset-0 z-[99999] lg:hidden bg-kedi-navy overflow-hidden font-sans">
      {/* 1. MÀN HÌNH CHÍNH */}
      <div
        className={`absolute inset-0 bg-kedi-navy transition-transform duration-300 z-10 ${activePanel === 'main' ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-14 items-center justify-between border-b border-white/15 px-4">
          <Link href="/" onClick={closeAll} className="flex items-center">
            <BrandLogo className="h-8" />
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              onClick={closeAll}
              className="p-2 bg-white/10 border-none rounded-xl text-white"
            >
              <X size={24} />
            </Button>
          </div>
        </div>

        <nav className="p-4 overflow-y-auto h-full pb-32 space-y-1">
          {navigationConfig.map((item, idx) => {
            const label = item.labelKey
              ? t(`navigation.${item.labelKey}`)
              : item.label || 'Link';

            // TĂNG PADDING Ở ĐÂY (py-4) ĐỂ KHÔNG BỊ XẸP
            const isActive = isNavItemActive(item, pathname);
            const InnerContent = (
              <div className="flex items-center justify-between w-full text-left py-4 px-3">
                <span
                  className={`text-[15px] font-bold uppercase tracking-wide leading-tight ${
                    isActive ? 'text-kedi-navy' : 'text-white'
                  }`}
                >
                  {label}
                </span>
                {item.type !== 'link' && (
                  <ChevronRight
                    size={18}
                    className={`shrink-0 ${isActive ? 'text-kedi-navy' : 'text-kedi-yellow'}`}
                  />
                )}
              </div>
            );

            return (
              <Boderyelow key={idx} className="!p-0">
                {item.type === 'link' ? (
                  <Link
                    href={item.href || '#'}
                    onClick={closeAll}
                    className={`block w-full rounded-xl transition-colors duration-300 ${
                      isActive ? 'bg-kedi-yellow' : 'hover:bg-kedi-yellow/10'
                    }`}
                  >
                    {InnerContent}
                  </Link>
                ) : (
                  <button
                    className={`w-full rounded-xl transition-colors duration-300 ${
                      isActive ? 'bg-kedi-yellow' : 'hover:bg-kedi-yellow/10'
                    }`}
                    onClick={() =>
                      setActivePanel(
                        item.dropdownType === 'services' ? 'services' : 'blog'
                      )
                    }
                  >
                    {InnerContent}
                  </button>
                )}
              </Boderyelow>
            );
          })}
        </nav>
      </div>

      {/* 2. PANEL DỊCH VỤ */}
      <div
        className={`absolute inset-0 bg-kedi-navy transition-transform duration-300 z-20 overflow-y-auto ${activePanel === 'services' ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <PanelHeader
          title={
            activeCategory
              ? t(serviceCategories[activeCategory]?.titleKey)
              : t('nav.services') || 'Dịch vụ'
          }
          onBack={() =>
            activeCategory ? setActiveCategory(null) : setActivePanel('main')
          }
        />

        <div className="p-4 pb-20">
          {!activeCategory ? (
            /* --- Màn hình chọn danh mục lớn --- */
            <div className="space-y-2">
              {VISIBLE_SERVICE_CATEGORY_KEYS.map((key) => (
                <Boderyelow key={key} className="!p-0">
                  <button
                    onClick={() => setActiveCategory(key)}
                    className="w-full flex items-center justify-between text-left py-5 px-5"
                  >
                    <span className="text-[14px] font-black text-white uppercase leading-tight pr-4">
                      {t(serviceCategories[key].titleKey)}
                    </span>
                    <ChevronRight
                      size={18}
                      className="text-kedi-yellow shrink-0"
                    />
                  </button>
                </Boderyelow>
              ))}
            </div>
          ) : (
            /* --- Màn hình hiển thị các dịch vụ con --- */
            <div className="grid gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
              {serviceCategories[activeCategory]?.services.map(
                (service, idx) => (
                  <Boderyelow key={idx} className="!p-0">
                    <div
                      className={`w-full ${!service.href ? 'opacity-40 pointer-events-none' : ''}`}
                    >
                      <ServiceItem
                        service={service}
                        index={idx}
                        layout={
                          service.layoutType ||
                          serviceCategories[activeCategory].layout ||
                          'compact-list'
                        }
                        t={t}
                        onNavigate={closeAll}
                      />
                    </div>
                  </Boderyelow>
                )
              )}
            </div>
          )}
        </div>
      </div>
      {/* 3. PANEL BLOG */}
      <div
        className={`absolute inset-0 bg-kedi-navy transition-transform duration-300 z-30 overflow-y-auto ${activePanel === 'blog' ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <PanelHeader
          title={t('nav.blog') || 'Blog'}
          onBack={() => setActivePanel('main')}
        />

        <div className="p-4 grid gap-3 pb-32">
          {blogPosts.length > 0 ? (
            blogPosts.map((post: any, idx: number) => (
              <Boderyelow key={idx} className="!p-0">
                <Link
                  href={post.href}
                  onClick={closeAll}
                  className={`flex items-center justify-between w-full py-5 px-5 group rounded-xl transition-colors duration-300 ${
                    pathname === post.href
                      ? 'bg-kedi-yellow'
                      : 'hover:bg-kedi-yellow/10 active:bg-white/5'
                  }`}
                >
                  <div className="flex flex-col">
                    <span
                      className={`text-[15px] font-bold leading-tight ${
                        pathname === post.href ? 'text-kedi-navy' : 'text-white'
                      }`}
                    >
                      {post.labelKey ? t(`blog.${post.labelKey}`) : post.label}
                    </span>
                    {/* Nếu muốn thêm icon hoặc text phụ nhỏ ở đây */}
                  </div>
                </Link>
              </Boderyelow>
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              {t('blog.noPosts') || 'Không có bài viết nào'}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
