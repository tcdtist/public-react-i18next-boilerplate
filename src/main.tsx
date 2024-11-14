import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import "./index.css";
import I18nProvider from "./contexts/I18nProvider";
import { I18n } from "./configs/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={I18n}>
      <I18nProvider>
        <App />
      </I18nProvider>
    </I18nextProvider>
  </React.StrictMode>
);
