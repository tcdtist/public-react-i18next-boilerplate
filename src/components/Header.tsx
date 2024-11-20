import { Link } from "react-router-dom";
import { t } from "../config/i18n";

export const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            {t("header.title")}
          </Link>

          <nav className="space-x-6">
            <Link to="/context" className="nav-link">
              {t("header.nav.context")}
            </Link>
            <Link to="/zustand" className="nav-link">
              {t("header.nav.zustand")}
            </Link>
            <Link to="/i18next" className="nav-link">
              {t("header.nav.i18next")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
