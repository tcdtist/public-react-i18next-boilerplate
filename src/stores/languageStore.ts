import { create } from "zustand";
import { t, changeLanguage, LANGUAGE } from "../config/i18n";

interface LanguageState {
  currentLang: string;
  t: typeof t;
  changeLang: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLang: LANGUAGE.EN,
  t,
  changeLang: (lang: string) => {
    set({ currentLang: lang });
    changeLanguage(lang);
  },
}));
