export type Locale = 'en' | 'zh';

export const i18n = {
  defaultLocale: 'en' as const,
  locales: ['en', 'zh'] as const,
};

export type Messages = typeof import('./messages/en.json');
