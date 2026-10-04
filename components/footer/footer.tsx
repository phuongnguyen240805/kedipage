'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Globe2, MapPin, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Button } from '../ui/button';


import {
  aboutKediLinks,
  websiteSolutionsLinks,
  onlineMarketingLinks,
  mediaBrandingLinks,
  contactInfo,
  bottomLeftSection,
  bottomRightSection,
} from '@/components/footer/dataFooter';
import { useTranslation } from 'react-i18next';

const navigateTo = (url: string) => {
  window.location.href = url;
};

const handleKeyPress = (e: React.KeyboardEvent, url: string) => {
  if (e.key === 'Enter' || e.key === ' ') {
    navigateTo(url);
  }
};

const renderLinkList = (
  title: string,
  links: { href: string; label: string }[],
  t: (key: string) => string
) => (
  <div>
    <h3 className="text-kedi-navy font-semibold mb-4 font-[Archivo_Black,Arial,sans-serif]">{title}</h3>
    <ul className="space-y-2 text-sm text-gray-600">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className="hover:text-kedi-navy">
            {t(label)} {/* Dịch label bằng i18n */}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer data-glass="background" data-glass-tone="light" className="bg-white py-12 px-6 z-9999 relative ">
      <div className="max-w-7xl mx-auto">
        {/* ✅ RESPONSIVE GRID: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Về Kedi + Liên hệ */}
          <div>
            {renderLinkList(t('footer.aboutKediTitle'), aboutKediLinks, t)}

            <div className="mt-8">
              <h3 className="text-kedi-navy font-semibold mb-4 font-[Archivo_Black,Arial,sans-serif]">
                {t('footer.contact')}
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-kedi-navy mt-1" />
                  <div>
                    <p>Số điện thoại</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-kedi-navy hover:text-kedi-yellow transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Globe2 className="w-4 h-4 text-kedi-navy mt-1" />
                  <div>
                    <p>Website</p>
                    <a
                      href={contactInfo.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-kedi-navy hover:text-kedi-yellow transition-colors"
                    >
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-kedi-navy mt-1" />
                  <div>
                    <p>{t('footer.address')}</p>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {renderLinkList(
            t('footer.websiteSolutionsTitle'),
            websiteSolutionsLinks,
            t
          )}

          {renderLinkList(
            t('footer.onlineMarketingTitle'),
            onlineMarketingLinks,
            t
          )}
          <div>
            {renderLinkList(
              t('footer.mediaBrandingTitle'),
              mediaBrandingLinks,
              t
            )}

            <div className="mt-5 flex justify-start">
              <Image
                src="/homepage/golden-mascot-transparent.webp"
                alt="KEDI golden 3D mascot"
                className="h-auto w-[96px] object-contain drop-shadow-[0_12px_24px_rgba(11,45,91,0.18)]"
                width={96}
                height={96}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-5">
          {/* Compact legal / certification row */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src="/brand/kedi-icon.png"
                alt="Kedi.Media icon"
                width={30}
                height={30}
                className="h-[30px] w-[30px] shrink-0 object-contain"
              />
              <div className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                <span className="shrink-0 whitespace-nowrap font-bold font-[Archivo_Black,Arial,sans-serif]">
                  {t(bottomLeftSection.companyName)}
                </span>
                <span className="whitespace-nowrap text-xs text-gray-500">
                  {t(bottomLeftSection.description)}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 lg:flex-nowrap lg:justify-end">
              <div className="inline-flex h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-4 text-xs font-bold text-white font-[Archivo_Black,Arial,sans-serif]">
                {t(bottomRightSection.notification)}
              </div>
              <span className="shrink-0 whitespace-nowrap text-xs text-gray-500">
                {t(bottomRightSection.notificationSub)}
              </span>
              <div className="inline-flex h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-green-600 px-3 text-[11px] font-bold text-white font-[Archivo_Black,Arial,sans-serif]">
                {t(bottomRightSection.dmca)}
              </div>
            </div>
          </div>

          {/* Terms + social */}
          <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span className="whitespace-nowrap text-sm text-gray-500">
                {t('footer.allRights')}
              </span>
              <Button
                onClick={() => navigateTo('/dieu-khoan')}
                onKeyDown={(e) => handleKeyPress(e, '/dieu-khoan')}
                className="h-9 whitespace-nowrap rounded-xl bg-kedi-yellow px-5 text-sm font-semibold text-kedi-navy hover:bg-kedi-yellow/90 cursor-pointer"
              >
                {t('footer.terms')}
              </Button>
            </div>

            <div className="flex shrink-0 gap-2">
              <Button
                onClick={() => navigateTo('/facebook')}
                onKeyDown={(e) => handleKeyPress(e, '/facebook')}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 p-0 hover:bg-blue-700 cursor-pointer"
              >
                <Facebook className="h-4 w-4 text-white" />
              </Button>
              <Button
                onClick={() => navigateTo('/linkedin')}
                onKeyDown={(e) => handleKeyPress(e, '/linkedin')}
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 p-0 hover:bg-blue-600 cursor-pointer"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </Button>
              <Button
                onClick={() => navigateTo('/youtube')}
                onKeyDown={(e) => handleKeyPress(e, '/youtube')}
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 p-0 hover:bg-red-700 cursor-pointer"
              >
                <Youtube className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
