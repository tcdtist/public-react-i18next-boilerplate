import { LanguageSwitch } from "@/components/LanguageSwitch";
import { changeLanguage, t } from "@/config/i18n";
import { useAppDispatch, useAppSelector } from "@/stores/redux/hooks";
import { setLanguage } from "@/stores/redux/languageSlice";

export const ReduxDemo = () => {
  const dispatch = useAppDispatch();
  const currentLang = useAppSelector((state) => state.language.currentLang);

  const handleChangeLang = (lang: string) => {
    dispatch(setLanguage(lang));
    changeLanguage(lang);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          {t("demo.redux")}
        </h2>
        <p className="text-gray-600 mb-4">{t("common.description")}</p>
        <div className="flex justify-center">
          <LanguageSwitch
            currentLang={currentLang}
            onChangeLang={handleChangeLang}
          />
        </div>
      </div>
    </div>
  );
};
