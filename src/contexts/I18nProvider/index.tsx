import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { I18nextProvider } from "react-i18next";

import { changeLanguage, I18n } from "../../configs/i18n";

interface I18nContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
};

const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(I18n.language);

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setLanguage(lng);
    };

    I18n.on("languageChanged", handleLanguageChanged);

    return () => {
      I18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  const handleSetLanguage = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      <I18nextProvider i18n={I18n}>{children}</I18nextProvider>
    </I18nContext.Provider>
  );
};

export default I18nProvider;
