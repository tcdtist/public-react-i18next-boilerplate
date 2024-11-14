import React from "react";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./components/LanguageDropdown";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-[2vw]">
      <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
      <p className="mb-4">{t("description")}</p>
      <LanguageDropdown />
    </div>
  );
};

export default App;
