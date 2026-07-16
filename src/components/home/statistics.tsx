"use client";

import { useLanguage } from "@/components/providers/language-provider";
import type { LocalizedText } from "@/types/content";

const statistics: Array<{ value: number; suffix?: string; label: LocalizedText }> = [
  { value: 6, suffix: "+", label: { vi: "Dự án", en: "Projects" } },
  { value: 4, label: { vi: "Thành viên", en: "Members" } },
  { value: 12, suffix: "+", label: { vi: "Công nghệ", en: "Technologies" } },
  { value: 2, suffix: "+", label: { vi: "Năm sáng tạo", en: "Years building" } },
];

export function Statistics() {
  const { t } = useLanguage();

  return (
    <dl className="hero-statistics">
      {statistics.map((statistic) => (
        <div key={statistic.label.en}>
          <dt>{t(statistic.label)}</dt>
          <dd>{statistic.value}{statistic.suffix}</dd>
        </div>
      ))}
    </dl>
  );
}
