import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white shadow-md py-4 mt-auto">
      <div className="container">
        <div className="text-center text-gray-600">{t("footer.copyright")}</div>
      </div>
    </footer>
  );
};
