import { changeLanguage, I18n } from "@/configs/i18n";
import { create } from "zustand";

interface I18nState {
  language: string;
  setLanguage: (language: string) => void;
}

export const useI18nStore = create<I18nState>((set) => ({
  language: I18n.language,
  setLanguage: (language) => {
    changeLanguage(language);
    set({ language });
  },
}));

export const useLanguage = () => useI18nStore((state) => state.language);

export const useSetLanguage = () => useI18nStore((state) => state.setLanguage);
