import i18n from "i18next";
import { TFunction } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en_translation from "./locales/en/translation.json";
import vi_translation from "./locales/vi/translation.json";

const LANGUAGE = {
  EN: "en",
  VI: "vi",
};

const resources = {
  [LANGUAGE.EN]: {
    translation: en_translation,
  },
  [LANGUAGE.VI]: {
    translation: vi_translation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: LANGUAGE.EN,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

const t = (...args: Parameters<TFunction>) => i18n.t(...args);

const I18n = i18n;

export { I18n, t, changeLanguage, LANGUAGE };
