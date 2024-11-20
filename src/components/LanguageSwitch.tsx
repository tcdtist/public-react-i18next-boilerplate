import { LANGUAGE } from "../config/i18n";

interface LanguageSwitchProps {
  currentLang: string;
  onChangeLang: (lang: string) => void;
}

export const LanguageSwitch = ({
  currentLang,
  onChangeLang,
}: LanguageSwitchProps) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className={`btn ${
          currentLang === LANGUAGE.EN ? "bg-primary-dark" : ""
        }`}
        onClick={() => onChangeLang(LANGUAGE.EN)}
      >
        English
      </button>
      <button
        className={`btn ${
          currentLang === LANGUAGE.VI ? "bg-primary-dark" : ""
        }`}
        onClick={() => onChangeLang(LANGUAGE.VI)}
      >
        Tiếng Việt
      </button>
    </div>
  );
};
