import { Middleware } from "@reduxjs/toolkit";
import { setLanguage } from "./languageSlice";

export const languageMiddleware: Middleware = () => (next) => (action) => {
  const result = next(action);

  if (setLanguage.match(action)) {
    localStorage.setItem("language", action.payload);
  }

  return result;
};
