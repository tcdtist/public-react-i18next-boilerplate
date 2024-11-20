import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitch } from "../components/LanguageSwitch";

export const ContextDemo = () => {
  const { currentLang, t, changeLang } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          {t("demo.context")}
        </h2>
        <p className="text-gray-600 mb-4">{t("common.description")}</p>
        <div className="flex justify-center">
          <LanguageSwitch currentLang={currentLang} onChangeLang={changeLang} />
        </div>
      </div>
    </div>
  );
};
