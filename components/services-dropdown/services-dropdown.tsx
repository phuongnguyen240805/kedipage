'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/app/globals.css';
import {
  serviceCategories,
  SOFTWARE_SERVICE_MENU_IMAGES,
  VISIBLE_SERVICE_CATEGORY_KEYS,
  type Service,
} from '../services-dropdown/datas/services-data';

type MenuService = Service & {
  mock?: boolean;
  mockBadge?: string;
  mockDescription?: string;
  mockIcon?: string;
};

const CATEGORY_META: Record<
  string,
  { description: string; eyebrow: string }
> = {
  business_services: {
    eyebrow: 'Dịch vụ tăng trưởng',
    description: 'Website, SEO, video và giải pháp triển khai cho doanh nghiệp.',
  },
  selling: {
    eyebrow: 'Bán hàng đa kênh',
    description: 'Website bán hàng, nội dung, chuyển đổi và công cụ vận hành.',
  },
  software_solutions: {
    eyebrow: 'Phần mềm đóng gói',
    description: 'Các hệ thống KEDI đã chuẩn hóa cho từng nhu cầu vận hành.',
  },
  hosting_infrastructure: {
    eyebrow: 'Hạ tầng số',
    description: 'Hosting, VPS, tên miền, SSL và hạ tầng cho sản phẩm số.',
  },
  course_instructor: {
    eyebrow: 'EdTech',
    description: 'Website khóa học, LMS và công cụ cho giảng viên kinh doanh online.',
  },
};

const MOCK_SERVICES: Partial<Record<string, MenuService[]>> = {
  software_solutions: [
    {
      title: 'KEDI CRM',
      mock: true,
      mockBadge: 'UI DEMO',
      mockDescription: 'Mock item để test mật độ và nhịp layout mega menu.',
      mockIcon: 'CRM',
    },
  ],
  course_instructor: [
    {
      title: 'Cổng học viên',
      mock: true,
      mockBadge: 'UI DEMO',
      mockDescription: 'Mock item chờ dữ liệu và đường dẫn thật.',
      mockIcon: 'HV',
    },
    {
      title: 'App học viên',
      mock: true,
      mockBadge: 'UI DEMO',
      mockDescription: 'Mock item chờ dữ liệu và đường dẫn thật.',
      mockIcon: 'APP',
    },
    {
      title: 'Thanh toán khóa học',
      mock: true,
      mockBadge: 'UI DEMO',
      mockDescription: 'Mock item chờ dữ liệu và đường dẫn thật.',
      mockIcon: 'PAY',
    },
    {
      title: 'Automation chăm sóc học viên',
      mock: true,
      mockBadge: 'UI DEMO',
      mockDescription: 'Mock item chờ dữ liệu và đường dẫn thật.',
      mockIcon: 'AUTO',
    },
  ],
};

const CLOUDINARY_BASE =
  'https://res.cloudinary.com/dptsqgnaj/image/upload/c_fill,g_center,f_auto,q_auto';

const KEDI_DROPDOWN_EASE = [0.22, 1, 0.36, 1] as const;

const ServicesDropdown = () => {
  const { t } = useTranslation();
  const categoryKeys: string[] = VISIBLE_SERVICE_CATEGORY_KEYS.filter(
    (category) => Boolean(serviceCategories[category])
  );
  const [activeTab, setActiveTab] = useState<string>(categoryKeys[0]);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const activeCategory =
    serviceCategories[activeTab] ?? serviceCategories[categoryKeys[0]];
  const activeIndex = Math.max(0, categoryKeys.indexOf(activeTab));
  const realServices = activeCategory?.services ?? [];
  const mockServices = MOCK_SERVICES[activeTab] ?? [];
  const visibleServices: MenuService[] = [...realServices, ...mockServices];
  const meta =
    CATEGORY_META[activeTab] ??
    ({
      eyebrow: 'KEDI Services',
      description: 'Giải pháp được thiết kế theo nhu cầu thực tế của doanh nghiệp.',
    } as const);

  // UI branding only: keep original href/API values untouched, but never show MONA
  // inside the KEDI services dropdown if an old translation/data item still contains it.
  const brandDisplayText = (value = '') => value.replace(/\bMONA\b/gi, 'KEDI');

  const translate = (key?: string, fallback = '') => {
    if (!key) return brandDisplayText(fallback);

    try {
      const value = t(key);
      return brandDisplayText(value === key ? fallback || key : value);
    } catch {
      return brandDisplayText(fallback || key);
    }
  };

  const getTitle = (service: MenuService) =>
    brandDisplayText(
      service.title ??
        translate(service.titleKey, service.titleKey ?? 'Dịch vụ đang cập nhật')
    );

  const getDescription = (service: MenuService) =>
    brandDisplayText(
      service.mockDescription ??
        translate(
          service.descriptionKey,
          service.descriptionKey ? service.descriptionKey : 'KEDI đang cập nhật mô tả.'
        )
    );

  const getCategoryTitle = (category: string) => {
    const titleKey = serviceCategories[category]?.titleKey;
    return translate(titleKey, category);
  };

  const getImage = (service: MenuService, width = 180, height = 120) => {
    const localSoftwareImage = service.href
      ? SOFTWARE_SERVICE_MENU_IMAGES[service.href]
      : undefined;
    if (localSoftwareImage) return localSoftwareImage;
    if (service.imageUrl) return service.imageUrl;
    if (!service.cloudinaryId) return null;

    return `${CLOUDINARY_BASE},w_${width},h_${height}/${service.cloudinaryId}`;
  };

  const clearHoverTimer = () => {
    if (!hoverTimer.current) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };

  const previewCategory = (category: string) => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => {
      setActiveTab(category);
      hoverTimer.current = null;
    }, 90);
  };

  const selectCategory = (category: string) => {
    clearHoverTimer();
    setActiveTab(category);
  };

  const closeMegaMenu = () => {
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const firstRealService = realServices.find((service) => Boolean(service.href));
  const firstRealServiceHref = firstRealService?.href ?? '/';

  return (
    <motion.div
      className="fixed left-0 right-0 top-16 z-[9999] w-full px-4 pt-3 will-change-transform xl:px-8"
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y: -14, scale: 0.985 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.42, ease: KEDI_DROPDOWN_EASE }
      }
      style={{ transformOrigin: 'top center' }}
    >
      <motion.div
        className="relative mx-auto h-[588px] w-full max-w-[1540px] overflow-hidden rounded-[26px] border border-kedi-yellow/45 bg-[#f7f7fb] p-4 text-kedi-navy shadow-[0_28px_80px_rgba(3,18,48,0.38),0_0_24px_rgba(255,198,41,0.16)] lg:p-5"
        initial={prefersReducedMotion ? false : { opacity: 0.72, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.34, delay: 0.045, ease: KEDI_DROPDOWN_EASE }
        }
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px origin-center bg-gradient-to-r from-transparent via-kedi-yellow to-transparent"
          initial={prefersReducedMotion ? false : { opacity: 0, scaleX: 0.18 }}
          animate={{ opacity: 0.72, scaleX: 1 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.55, delay: 0.08, ease: KEDI_DROPDOWN_EASE }
          }
        />

        <div className="grid h-full min-h-0 grid-cols-[260px_minmax(0,1fr)_238px] gap-0 overflow-hidden rounded-[22px] xl:grid-cols-[340px_minmax(0,1fr)_300px]">
          <motion.aside
            className="flex min-h-0 flex-col rounded-l-[22px] rounded-r-none bg-[#eceef5] p-2 will-change-transform"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.34, delay: 0.1, ease: KEDI_DROPDOWN_EASE }
            }
          >
            <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-0 h-[92px] rounded-[16px] bg-white shadow-[0_12px_28px_-16px_rgba(8,35,74,0.38),0_0_0_1px_rgba(8,35,74,0.06)] transition-transform duration-300 ease-out"
                style={{
                  transform: `translateY(${activeIndex * 96}px)`,
                }}
              />

              <div
                className="relative z-10 flex flex-col gap-1"
                role="tablist"
                aria-label="Nhóm dịch vụ KEDI"
              >
                {categoryKeys.map((category) => {
                  const isActive = category === activeTab;
                  const services = serviceCategories[category]?.services ?? [];
                  const categoryMeta = CATEGORY_META[category];

                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onMouseEnter={() => previewCategory(category)}
                      onMouseLeave={clearHoverTimer}
                      onFocus={() => selectCategory(category)}
                      onClick={() => selectCategory(category)}
                      className="grid h-[92px] w-full grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_auto] items-center gap-x-2 rounded-[16px] px-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-kedi-yellow"
                    >
                      <span
                        className={`line-clamp-2 self-end text-[12px] font-black leading-[1.25] transition-colors xl:text-[13px] ${
                          isActive ? 'text-kedi-navy' : 'text-kedi-navy/70'
                        }`}
                      >
                        {getCategoryTitle(category)}
                      </span>

                      <span className="row-span-2 flex items-center -space-x-2">
                        {services.slice(0, 3).map((service, index) => {
                          const src = getImage(service, 56, 56);
                          return (
                            <span
                              key={`${category}-preview-${index}`}
                              className="relative grid h-7 w-7 place-items-center overflow-hidden rounded-full border-2 border-[#eceef5] bg-kedi-navy text-[8px] font-black text-kedi-yellow"
                            >
                              {src ? (
                                <Image
                                  src={src}
                                  alt=""
                                  width={28}
                                  height={28}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <span>{service.icon ?? 'K'}</span>
                              )}
                            </span>
                          );
                        })}
                      </span>

                      <span className="line-clamp-2 self-start pr-1 text-[10px] leading-[1.35] text-kedi-navy/50 xl:text-[11px]">
                        {categoryMeta?.description ?? 'Xem nhóm giải pháp KEDI'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 shrink-0 rounded-[16px] bg-kedi-navy px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-kedi-yellow text-[11px] font-black text-kedi-navy">
                  K
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.08em] text-kedi-yellow">
                    KEDI.Media
                  </p>
                  <p className="mt-0.5 text-[10px] leading-[1.35] text-white/60">
                    Chọn nhóm bên trên để đổi nhanh nội dung.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.section
            className="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-none bg-white p-4 shadow-[inset_1px_0_0_rgba(8,35,74,0.06),inset_-1px_0_0_rgba(8,35,74,0.06)] will-change-transform xl:p-5"
            role="tabpanel"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -7 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.36, delay: 0.145, ease: KEDI_DROPDOWN_EASE }
            }
          >
            <div className="mb-4 flex shrink-0 items-start justify-between gap-5 border-b border-kedi-navy/10 pb-4">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#b57e00]">
                  {meta.eyebrow}
                </p>
                <h3 className="mt-1 max-w-[760px] text-[22px] font-black leading-[1.12] tracking-[-0.02em] text-kedi-navy xl:text-[26px]">
                  {getCategoryTitle(activeTab)}
                </h3>
                <p className="mt-2 max-w-[760px] text-[12px] leading-relaxed text-kedi-navy/55 xl:text-[13px]">
                  {meta.description}
                </p>
              </div>

              <div className="hidden shrink-0 rounded-full bg-kedi-navy px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-kedi-yellow xl:block">
                {realServices.length} dịch vụ thật
              </div>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-2 content-start gap-x-3 gap-y-1 overflow-y-auto pr-1 [scrollbar-width:thin]">
              {visibleServices.map((service, index) => {
                const title = getTitle(service);
                const description = getDescription(service);
                const image = getImage(service);
                const href = service.href ?? '#';
                const itemClass =
                  'group flex min-h-[74px] items-center gap-3 rounded-[14px] px-2.5 py-2.5 text-left transition-all duration-200 hover:bg-kedi-yellow/10 hover:translate-x-0.5';

                const content = (
                  <>
                    <span className="relative grid h-[50px] w-[70px] shrink-0 place-items-center overflow-hidden rounded-[11px] bg-[#eef1f7] text-[10px] font-black text-kedi-navy">
                      {image ? (
                        <Image
                          src={image}
                          alt={title}
                          width={140}
                          height={100}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <span className="px-1 text-center leading-tight">
                          {service.mockIcon ?? service.icon ?? 'KEDI'}
                        </span>
                      )}

                      {service.mock && (
                        <span className="absolute bottom-1 left-1 rounded bg-kedi-yellow px-1.5 py-0.5 text-[7px] font-black uppercase text-kedi-navy">
                          {service.mockBadge ?? 'DEMO'}
                        </span>
                      )}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-start gap-2">
                        <span className="line-clamp-2 text-[12px] font-black leading-[1.28] text-kedi-navy transition-colors group-hover:text-[#0d478c] xl:text-[13.5px]">
                          {title}
                        </span>
                        {!service.mock && (
                          <span className="ml-auto shrink-0 text-[14px] font-black text-kedi-navy/25 transition-all group-hover:translate-x-0.5 group-hover:text-[#b57e00]">
                            ↗
                          </span>
                        )}
                      </span>

                      <span className="mt-1 line-clamp-2 block text-[10px] leading-[1.4] text-kedi-navy/48 xl:text-[11px]">
                        {description}
                      </span>
                    </span>
                  </>
                );

                if (service.mock) {
                  return (
                    <div
                      key={`mock-${activeTab}-${index}-${title}`}
                      className={`${itemClass} cursor-default border border-dashed border-kedi-navy/10`}
                      aria-disabled="true"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <Link
                    key={`${href}-${index}`}
                    href={href}
                    onClick={closeMegaMenu}
                    className={itemClass}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 flex shrink-0 items-center justify-between gap-4 border-t border-kedi-navy/10 pt-3 text-[10px] text-kedi-navy/45 xl:text-[11px]">
              <span>
                KEDI chọn lọc giải pháp theo đúng mục tiêu triển khai của bạn.
              </span>
              {mockServices.length > 0 && (
                <span className="rounded-full bg-[#eef1f7] px-2.5 py-1 font-bold text-kedi-navy/60">
                  {mockServices.length} nội dung đang cập nhật
                </span>
              )}
            </div>
          </motion.section>

          <motion.aside
            className="relative min-h-0 overflow-hidden rounded-l-none rounded-r-[22px] bg-kedi-navy p-5 text-white will-change-transform"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.38, delay: 0.19, ease: KEDI_DROPDOWN_EASE }
            }
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[34px] border-kedi-yellow/90"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-14 -left-16 h-40 w-40 rounded-full bg-[#245697]/70 blur-2xl"
            />

            <div className="relative z-10 flex h-full flex-col">
              <span className="w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-kedi-yellow">
                KEDI Service Map
              </span>

              <h3 className="mt-8 max-w-[230px] text-[25px] font-black leading-[1.02] tracking-[-0.035em] xl:text-[31px]">
                Chọn đúng nhóm.
                <span className="mt-1 block text-kedi-yellow">Đi đúng lộ trình.</span>
              </h3>

              <p className="mt-4 max-w-[240px] text-[11px] leading-relaxed text-white/60 xl:text-[12px]">
                Chọn một nhóm nhu cầu để KEDI gom đúng các dịch vụ liên quan, sau đó
                đi thẳng vào trang chi tiết của từng giải pháp.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="rounded-[14px] border border-white/10 bg-white/[0.06] p-3">
                  <strong className="block text-[22px] font-black text-kedi-yellow">
                    {realServices.length}
                  </strong>
                  <span className="mt-1 block text-[9px] uppercase tracking-[0.08em] text-white/45">
                    giải pháp
                  </span>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-white/[0.06] p-3">
                  <strong className="block text-[22px] font-black text-kedi-yellow">
                    {mockServices.length}
                  </strong>
                  <span className="mt-1 block text-[9px] uppercase tracking-[0.08em] text-white/45">
                    sắp có
                  </span>
                </div>
              </div>

              <div className="mt-6 flex -space-x-2">
                {realServices.slice(0, 4).map((service, index) => {
                  const src = getImage(service, 64, 64);
                  return (
                    <span
                      key={`active-preview-${index}`}
                      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border-2 border-kedi-navy bg-white/10 text-[9px] font-black text-kedi-yellow"
                    >
                      {src ? (
                        <Image
                          src={src}
                          alt=""
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span>{service.icon ?? 'K'}</span>
                      )}
                    </span>
                  );
                })}
              </div>

              <div className="mt-auto pt-6">
                {firstRealService ? (
                  <Link
                    href={firstRealServiceHref}
                    onClick={closeMegaMenu}
                    className="flex h-11 w-full items-center justify-between rounded-[14px] bg-kedi-yellow px-4 text-[11px] font-black uppercase tracking-[0.06em] text-kedi-navy transition-transform hover:-translate-y-0.5"
                  >
                    <span>Xem gợi ý đầu tiên</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <div className="flex h-11 items-center rounded-[14px] border border-white/10 px-4 text-[10px] text-white/45">
                    Dữ liệu đang được cập nhật
                  </div>
                )}

                <p className="mt-3 text-center text-[9px] leading-relaxed text-white/35">
                  Nhấn vào từng dịch vụ để xem trang chi tiết.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesDropdown;
