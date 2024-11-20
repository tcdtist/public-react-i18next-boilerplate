import { i18n } from "@/config/i18n";
import { useNavigate, useLocation } from "react-router-dom";

export const useLanguageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    navigate(location.pathname, { replace: true });
  };

  return {
    currentLang: i18n.language,
    changeLang,
  };
};
