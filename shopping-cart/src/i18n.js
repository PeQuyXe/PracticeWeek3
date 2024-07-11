import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      supportedLngs: ["en", "vi"],
      fallbackLng: "en",
      detection: {
        order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
    },
    (err, t) => {
      if (err) return console.error("i18next initialization failed:", err);
    }
  );

export default i18n;
