import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import { languageMiddleware } from "./middleware";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(languageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
