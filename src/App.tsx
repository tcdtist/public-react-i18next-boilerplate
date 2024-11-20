import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LanguageProvider } from "./contexts/LanguageContext";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { ContextDemo } from "./pages/ContextDemo";
import { HomeDemo } from "./pages/HomeDemo";
import { I18nextDemo } from "./pages/I18nextDemo";
import { ZustandDemo } from "./pages/ZustandDemo";
import { useLanguageNavigation } from "./hooks/useLanguageNavigation";

function AppContent() {
  useLanguageNavigation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container py-8 flex-grow">
        <Routes>
          <Route path="/" element={<HomeDemo />} />
          <Route path="/context" element={<ContextDemo />} />
          <Route path="/zustand" element={<ZustandDemo />} />
          <Route path="/i18next" element={<I18nextDemo />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
