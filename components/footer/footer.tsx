'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Button } from '../ui/button';


import {
  aboutMonaLinks,
  websiteSolutionsLinks,
  onlineMarketingLinks,
  hostingVpsServerLinks,
  managementSolutionsLinks,
  mediaBrandingLinks,
  contactInfo,
  companiesInfo,
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
    <h3 className="text-purple-600 font-semibold mb-4 font-[Archivo_Black,Arial,sans-serif]">{title}</h3>
    <ul className="space-y-2 text-sm text-gray-600">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className="hover:text-purple-600">
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
    <footer className="bg-white py-12 px-6 z-9999 relative ">
      <div className="max-w-7xl mx-auto">
        {/* ✅ RESPONSIVE GRID: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Row 1: Về Mona & Giải pháp website */}
          {renderLinkList(t('footer.aboutMonaTitle'), aboutMonaLinks, t)}
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
          {renderLinkList(
            t('footer.hostingVpsServerTitle'),
            hostingVpsServerLinks,
            t
          )}

          {renderLinkList(
            t('footer.managementSolutionsTitle'),
            managementSolutionsLinks,
            t
          )}
          {renderLinkList(
            t('footer.mediaBrandingTitle'),
            mediaBrandingLinks,
            t
          )}

          {/* Contact Section - spans both columns on mobile */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-purple-600 font-semibold mb-4 font-[Archivo_Black,Arial,sans-serif]">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-purple-600 mt-1" />
                <div>
                  <p>{t('footer.email')}</p>
                  <p className="text-purple-600">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-purple-600 mt-1" />
                <div>
                  <p>{t('footer.address')}</p>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action - spans both columns on mobile */}
          <div className="col-span-2 md:col-span-1 mt-8 relative overflow-visible">
            <div className="bg-purple-600 p-1 text-white text-center relative z-0">
              <p className="text-sm font-medium font-[Archivo_Black,Arial,sans-serif]">{t('footer.callToAction')}</p>
            </div>
            <Image
              src="https://mona.media/template/assets/images/ft-hl-avt.avif"
              alt="Avatar"
              className="w-20 h-20 object-cover absolute -top-10 left-1/2 transform -translate-x-1/2 z-10"
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* Company Info Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {companiesInfo.map((company) => (
            <div key={company.name} className="flex-1 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div
                  className={`w-8 h-8 ${company.bgColor} rounded flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-sm font-[Archivo_Black,Arial,sans-serif]">
                    {company.logoText}
                  </span>
                </div>
                <span className="font-bold font-[Archivo_Black,Arial,sans-serif]">{company.name}</span>
              </div>
              <p className="text-sm text-gray-600">{t(company.fullName)}</p>
              <p className="text-sm text-gray-600">{t(company.taxCode)}</p>
              <p className="text-sm text-gray-600">
                <span className="text-blue-600 font-semibold font-[Archivo_Black,Arial,sans-serif]">
                  {t(company.bankName)}
                </span>
              </p>
              <p className="text-sm text-gray-600">{t(company.bankAccount)}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8" />

        {/* Bottom Section - Stack on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs">
                  {bottomLeftSection.logo}
                </span>
              </div>
              <div>
                <span className="font-bold font-[Archivo_Black,Arial,sans-serif]">
                  {t(bottomLeftSection.companyName)}
                </span>
                <p className="text-xs text-gray-500">
                  {t(bottomLeftSection.description)}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-26 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold font-[Archivo_Black,Arial,sans-serif]">
                  {t(bottomRightSection.notification)}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {t(bottomRightSection.notificationSub)}
              </span>
            </div>
            <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold font-[Archivo_Black,Arial,sans-serif]">
                {t(bottomRightSection.dmca)}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Stack on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-100 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {t('footer.allRights')}
            </span>
            <Button
              onClick={() => navigateTo('/dieu-khoan')}
              onKeyDown={(e) => handleKeyPress(e, '/dieu-khoan')}
              className="text-purple-600 hover:text-purple-700 cursor-pointer"
            >
              {t('footer.terms')}
            </Button>
          </div>

          <div className="flex space-x-2">
            <Button
              onClick={() => navigateTo('/facebook')}
              onKeyDown={(e) => handleKeyPress(e, '/facebook')}
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
            >
              <Facebook className="w-4 h-4 text-white" />
            </Button>
            <Button
              onClick={() => navigateTo('/linkedin')}
              onKeyDown={(e) => handleKeyPress(e, '/linkedin')}
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </Button>
            <Button
              onClick={() => navigateTo('/youtube')}
              onKeyDown={(e) => handleKeyPress(e, '/youtube')}
              className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer"
            >
              <Youtube className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
