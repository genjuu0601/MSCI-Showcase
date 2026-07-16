"use client";

import { useLanguage } from "@/components/providers/language-provider";
import type { LocalizedText } from "@/types/content";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description?: LocalizedText;
  align?: "left" | "center";
}) {
  const { t } = useLanguage();

  return (
    <div className={`section-heading ${align === "center" ? "text-center" : ""}`}>
      <p className="eyebrow">{t(eyebrow)}</p>
      <h2>{t(title)}</h2>
      {description ? <p className="section-description">{t(description)}</p> : null}
    </div>
  );
}
