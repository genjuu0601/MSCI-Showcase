import type { Language, LocalizedText } from "@/types/content";

export const DEFAULT_LANGUAGE: Language = "vi";

export function localize(value: LocalizedText, language: Language) {
  return value[language];
}
