"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_LANGUAGE } from "@/lib/i18n";
import type { Language, LocalizedText } from "@/types/content";

const STORAGE_KEY = "msci-language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (value: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

    if (storedLanguage === "vi" || storedLanguage === "en") {
      startTransition(() => setLanguageState(storedLanguage));
      document.documentElement.lang = storedLanguage;
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    startTransition(() => setLanguageState(nextLanguage));
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.cookie = `msci-language=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = nextLanguage;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: (value) => value[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function useLocalizedMetadata(
  title: LocalizedText,
  description: LocalizedText,
) {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = `${title[language]} | MSCI Showcase`;

    const descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    descriptionTag?.setAttribute("content", description[language]);

    const ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    );
    ogTitle?.setAttribute("content", `${title[language]} | MSCI Showcase`);
  }, [description, language, title]);
}
