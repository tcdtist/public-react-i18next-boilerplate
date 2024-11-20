/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";
import { t, changeLanguage, LANGUAGE } from "../config/i18n";

interface LanguageContextType {
  currentLang: string;
  t: typeof t;
  changeLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState(LANGUAGE.EN);

  const changeLang = (lang: string) => {
    setCurrentLang(lang);
    changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, t, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
