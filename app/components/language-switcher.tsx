'use client';

import { useLanguage } from '../contexts/language-context';
import { i18n } from '../../i18n.config';

export function LanguageSwitcher() {
  const { locale, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      {i18n.locales.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            locale === lang
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {lang === 'en' ? 'English' : '中文'}
        </button>
      ))}
    </div>
  );
}
