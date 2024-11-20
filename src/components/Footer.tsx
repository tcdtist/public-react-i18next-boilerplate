import { t } from "../config/i18n";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-4 mt-auto">
      <div className="container">
        <div className="text-center text-gray-600">{t("footer.copyright")}</div>
      </div>
    </footer>
  );
};
