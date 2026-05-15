import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations } from './translations.js';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'esff-lang';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'de' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === 'en' ? 'de' : 'en'));
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function useT() {
  return useLanguage().t;
}
