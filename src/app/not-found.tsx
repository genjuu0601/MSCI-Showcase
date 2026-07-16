"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { Icon } from "@/components/ui/icon";

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <main id="main-content" className="not-found-page section-shell">
      <div className="not-found-grid" aria-hidden="true" />
      <p className="eyebrow">Lost signal / Route unavailable</p>
      <div className="not-found-code" aria-hidden="true"><span>4</span><i /><span>4</span></div>
      <h1>{language === "vi" ? "Trang bạn tìm kiếm không tồn tại." : "The page you are looking for does not exist."}</h1>
      <p>{language === "vi" ? "Đường dẫn có thể đã thay đổi hoặc dự án đã được chuyển sang một không gian khác." : "The route may have changed, or the project has moved to another space."}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="button-primary">{language === "vi" ? "Về trang chủ" : "Back home"}<Icon name="arrow-right" className="size-4" /></Link>
        <Link href="/projects" className="button-secondary">{language === "vi" ? "Khám phá dự án" : "Explore projects"}</Link>
      </div>
    </main>
  );
}
