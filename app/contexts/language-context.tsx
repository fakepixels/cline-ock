'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { Locale } from '../../i18n.config';
import { i18n } from '../../i18n.config';
import type { Messages } from '../../i18n.config';

interface LanguageContextType {
  locale: Locale;
  messages: Messages;
  setLanguage: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(i18n.defaultLocale);
  const [messages, setMessages] = useState<Messages>({} as Messages);

  // Initialize with default language
  useEffect(() => {
    import('../../messages/en.json').then((defaultMessages) => {
      setMessages(defaultMessages);
    });
  }, []);

  const setLanguage = useCallback(async (newLocale: Locale) => {
    const newMessages = await import(`../../messages/${newLocale}.json`);
    setMessages(newMessages);
    setLocale(newLocale);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, messages, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
