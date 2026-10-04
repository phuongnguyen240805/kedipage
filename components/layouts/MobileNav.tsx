'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight, ArrowLeft, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import {
  serviceCategories,
  VISIBLE_SERVICE_CATEGORY_KEYS,
  type Service,
} from '../services-dropdown/datas/services-data';
import {
  ServiceThumbnail,
  getServiceMenuDescription,
  getServiceMenuTitle,
} from '../services-dropdown/dropdown-visuals';
import LanguageSwitcher from '@/components/layouts/LanguageSwitcher';
import { Button } from '../ui/button';
import { isNavItemActive, navigationConfig } from '../../data/navigation-config';
import { usePathname } from 'next/navigation';
import Boderyelow from '../ui/boder-yelow';
import BrandLogo from './brand-logo';
import LiquidNavigation from '@/components/liquid-glass/LiquidNavigation';

function dedupeMobileServices(services: Service[]) {
  const seen = new Set<string>();

  return services.filter((service) => {
    const key = `${service.href ?? ''}|${service.titleKey ?? service.title ?? ''}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

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

  const translatedBack = String(t('common.back'));
  const backLabel = translatedBack === 'common.back' ? 'Quay lại' : translatedBack;

  if (!isOpen) return null;

  const PanelHeader = ({
    title,
    onBack,
  }: {
    title: string;
    onBack: () => void;
  }) => (
    <div className="sticky top-0 z-20 grid min-h-14 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 border-b border-white/15 bg-kedi-navy px-3 pb-3 pt-[max(.75rem,env(safe-area-inset-top))] sm:px-4">
      <Button
        onClick={onBack}
        aria-label={backLabel}
        className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 p-0 text-kedi-yellow shadow-none hover:bg-white/20 sm:flex sm:w-auto sm:gap-1.5 sm:px-3"
      >
        <ArrowLeft size={17} />
        <span className="hidden text-sm font-bold sm:inline">{backLabel}</span>
      </Button>
      <div className="min-w-0 truncate px-1 text-center text-[12px] font-black uppercase tracking-[0.04em] text-white sm:px-2 sm:text-[13px]">
        {title}
      </div>
      <Button
        onClick={closeAll}
        aria-label="Đóng menu"
        className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 p-0 text-gray-300 shadow-none hover:bg-white/20"
      >
        <X size={19} />
      </Button>
    </div>
  );

  const content = (
    <div className="liquid-mobile fixed inset-0 z-[99999] h-[100dvh] overflow-hidden bg-kedi-navy font-sans lg:hidden">
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

        <nav className="h-[calc(100dvh-3.5rem)] space-y-1 overflow-y-auto overscroll-contain p-4 pb-[calc(env(safe-area-inset-bottom)+2rem)] [-webkit-overflow-scrolling:touch]">
          <LiquidNavigation className="liquid-mobile-stack">
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
              <div key={idx} className="mobile-liquid-frame">
              <Boderyelow className="!p-0">
                {item.type === 'link' ? (
                  <Link
                    data-liquid-nav-item=""
                    data-liquid-active={isActive}
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
                    data-liquid-nav-item=""
                    data-liquid-active={isActive}
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
              </div>
            );
          })}
          </LiquidNavigation>
        </nav>
      </div>

      {/* 2. PANEL DỊCH VỤ */}
      <div
        className={`absolute inset-0 z-20 h-[100dvh] overflow-y-auto overscroll-contain bg-kedi-navy transition-transform duration-300 [-webkit-overflow-scrolling:touch] ${activePanel === 'services' ? 'translate-x-0' : 'translate-x-full'}`}
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

        <div className="px-3 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-3 sm:px-5 sm:pt-4">
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
            <div className="grid gap-2.5 animate-in fade-in slide-in-from-right-4 duration-300 md:grid-cols-2 md:gap-3">
              {dedupeMobileServices(serviceCategories[activeCategory]?.services ?? []).map(
                (service, idx) => {
                  const fallbackTitle =
                    service.title ??
                    (service.titleKey ? String(t(service.titleKey)) : 'Dịch vụ KEDI');
                  const fallbackDescription =
                    service.description ??
                    (service.descriptionKey ? String(t(service.descriptionKey)) : '');
                  const title = getServiceMenuTitle(service, fallbackTitle);
                  const description = getServiceMenuDescription(
                    service,
                    fallbackDescription
                  );
                  const href = service.href ?? '#';

                  const content = (
                    <>
                      <ServiceThumbnail
                        service={service}
                        groupKey={activeCategory}
                        className="h-[54px] w-[72px] rounded-[12px] sm:h-[66px] sm:w-[88px]"
                      />

                      <span className="min-w-0 self-center">
                        <span className="line-clamp-2 block text-[14px] font-black leading-[1.2] text-white sm:text-[15px]">
                          {title}
                        </span>
                        <span className="mt-1 line-clamp-2 block text-[11px] leading-[1.35] text-white/55 sm:text-[12px]">
                          {description}
                        </span>
                      </span>

                      <ChevronRight
                        size={17}
                        className="shrink-0 self-center text-kedi-yellow/75 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </>
                  );

                  const cardClass =
                    'group grid min-h-[78px] w-full grid-cols-[72px_minmax(0,1fr)_18px] items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.045] px-2.5 py-2.5 text-left shadow-[0_10px_30px_rgba(0,0,0,.08)] transition-all duration-200 active:scale-[.99] active:border-kedi-yellow/55 active:bg-kedi-yellow/[0.08] sm:min-h-[94px] sm:grid-cols-[88px_minmax(0,1fr)_18px] sm:px-3';

                  if (!service.href) {
                    return (
                      <div key={`disabled-${idx}-${title}`} className={`${cardClass} opacity-45`} aria-disabled="true">
                        {content}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={`${href}-${idx}-${title}`}
                      href={href}
                      onClick={closeAll}
                      className={cardClass}
                    >
                      {content}
                    </Link>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
      {/* 3. PANEL BLOG */}
      <div
        className={`absolute inset-0 z-30 h-[100dvh] overflow-y-auto overscroll-contain bg-kedi-navy transition-transform duration-300 [-webkit-overflow-scrolling:touch] ${activePanel === 'blog' ? 'translate-x-0' : 'translate-x-full'}`}
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
