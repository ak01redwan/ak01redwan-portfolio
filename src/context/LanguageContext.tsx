"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

const translations: Record<'en' | 'ar', Record<string, any>> = {
  en,
  ar,
};

interface LanguageContextType {
  language: 'en' | 'ar';
  changeLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string, defaultValue?: string) => string;
}

const defaultContextValue: LanguageContextType = {
  language: 'en',
  changeLanguage: () => {},
  t: (key: string, defaultValue?: string) => defaultValue || key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('user_lang') as 'en' | 'ar';
      if (saved === 'en' || saved === 'ar') {
        setLanguage(saved);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language]);

  const changeLanguage = useCallback((lang: 'en' | 'ar') => {
    setLanguage(lang);
    try {
      localStorage.setItem('user_lang', lang);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: string, defaultValue?: string): string => {
      const keys = key.split('.');
      let current: any = translations[language];
      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          current = undefined;
          break;
        }
      }

      if (typeof current === 'string') {
        return current;
      }

      // Fallback to English
      let fallbackCurrent: any = translations['en'];
      for (const k of keys) {
        if (fallbackCurrent && typeof fallbackCurrent === 'object' && k in fallbackCurrent) {
          fallbackCurrent = fallbackCurrent[k];
        } else {
          fallbackCurrent = undefined;
          break;
        }
      }

      if (typeof fallbackCurrent === 'string') {
        return fallbackCurrent;
      }

      return defaultValue || key;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      changeLanguage,
      t,
    }),
    [language, changeLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LanguageContext) || defaultContextValue;
  const language = context.language || 'en';
  const changeLanguage = context.changeLanguage || (() => {});
  const t = context.t || ((k: string, def?: string) => def || k);

  return {
    t,
    i18n: {
      language,
      changeLanguage,
    },
  };
}
