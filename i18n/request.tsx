'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../components/messages/en.json';
import vi from '../components/messages/vi.json';
import fr from '../components/messages/fr.json';
import ko from '../components/messages/ko.json';
import ja from '../components/messages/ja.json';
import zh from '../components/messages/zh.json';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
      fr: { translation: fr },
      ko: { translation: ko },
      ja: { translation: ja },
      zh: { translation: zh },
    },
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: { escapeValue: false },
  });
}

export default i18n;
