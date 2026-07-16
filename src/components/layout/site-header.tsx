"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { AccessibleDialog } from "@/components/ui/accessible-dialog";
import { Icon } from "@/components/ui/icon";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Logo } from "@/components/ui/logo";
import { navigation, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const { language, t } = useLanguage();
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateHeader = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setIsCompact(window.scrollY > 48));
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <header className={`site-header ${isCompact ? "is-compact" : ""}`}>
        <div className="site-header-inner">
          <Logo />
          <nav className="desktop-navigation" aria-label={language === "vi" ? "Điều hướng chính" : "Main navigation"}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : ""}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher compact />
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="header-action"
            >
              <Icon name="github" className="size-4" />
              GitHub
              <Icon name="arrow-up-right" className="size-3.5" />
            </a>
          </div>
          <button
            type="button"
            className="mobile-menu-trigger"
            aria-label={language === "vi" ? "Mở menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <Icon name="menu" className="size-5" />
          </button>
        </div>
      </header>

      <AccessibleDialog
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        titleId="mobile-menu-title"
        closeLabel={language === "vi" ? "Đóng menu" : "Close menu"}
        className="mobile-menu-dialog"
      >
        <div className="mobile-menu-content">
          <p id="mobile-menu-title" className="eyebrow">
            {language === "vi" ? "Điều hướng" : "Navigation"}
          </p>
          <nav aria-label={language === "vi" ? "Điều hướng di động" : "Mobile navigation"}>
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : ""}
                style={{ animationDelay: `${80 + index * 55}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>0{index + 1}</span>
                {t(item.label)}
                <Icon name="arrow-right" className="size-5" />
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex items-end justify-between border-t border-blue-200/10 pt-6">
            <LanguageSwitcher />
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-slate-300"
            >
              GitHub <Icon name="arrow-up-right" className="size-4" />
            </a>
          </div>
        </div>
      </AccessibleDialog>
    </>
  );
}
