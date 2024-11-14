import React from "react";
import { useI18n } from "../contexts/I18nProvider";

const lngs = {
  en: { nativeName: "English" },
  vi: { nativeName: "Tiếng Việt" },
};

const LanguageDropdown: React.FC = () => {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex space-x-2">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          className={`px-3 py-1 rounded ${
            language === lng ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setLanguage(lng)}
          type="button"
        >
          {lngs[lng as keyof typeof lngs].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageDropdown;
