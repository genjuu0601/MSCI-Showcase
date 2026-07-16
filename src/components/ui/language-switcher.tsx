"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`language-switcher ${compact ? "is-compact" : ""}`}
      role="group"
      aria-label={language === "vi" ? "Chọn ngôn ngữ" : "Choose language"}
    >
      {(["vi", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          className={language === item ? "is-active" : ""}
          aria-pressed={language === item}
          onClick={() => setLanguage(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
