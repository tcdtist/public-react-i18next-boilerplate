import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "../components/LanguageSwitch";

export const I18nextDemo = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          {t("demo.i18next")}
        </h2>
        <p className="text-gray-600 mb-4">{t("common.description")}</p>
        <div className="flex justify-center">
          <LanguageSwitch
            currentLang={i18n.language}
            onChangeLang={(lang) => i18n.changeLanguage(lang)}
          />
        </div>
      </div>
    </div>
  );
};
