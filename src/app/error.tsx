"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { Icon } from "@/components/ui/icon";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { language } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="error-page section-shell">
      <div className="error-code">ERR / 500</div>
      <h1>{language === "vi" ? "Một tín hiệu đã bị gián đoạn." : "A signal was interrupted."}</h1>
      <p>{language === "vi" ? "Trang chưa thể hiển thị đúng lúc này. Bạn có thể thử tải lại phần nội dung." : "The page could not render correctly. You can retry this section now."}</p>
      <button type="button" className="button-primary" onClick={reset}>
        {language === "vi" ? "Thử lại" : "Try again"}<Icon name="arrow-right" className="size-4" />
      </button>
    </main>
  );
}
