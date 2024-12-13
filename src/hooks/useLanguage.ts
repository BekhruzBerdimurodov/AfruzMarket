import { useState, useCallback } from 'react';
import { Language } from '../types';
import translations from '../data/translations.json';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('uz');

  const toggleLanguage = useCallback(() => {
    setLanguage((curr) => (curr === 'uz' ? 'ru' : 'uz'));
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[key]?.[language] || key;
    },
    [language]
  );

  return { language, toggleLanguage, t };
};