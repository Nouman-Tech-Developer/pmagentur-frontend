import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Default language set to German
    lng: 'de',
    
    // Fallback language
    fallbackLng: 'de',
    
    // Available languages
    supportedLngs: ['de', 'en'],
    
    // Debug mode (set to false in production)
    debug: true,
    
    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      checkWhitelist: true,
    },
    
    // React options
    react: {
      useSuspense: false,
    },
  });

export default i18n;