"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { Icon } from "@/components/ui/icon";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Logo } from "@/components/ui/logo";
import { projects } from "@/data/projects";
import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  const { language, t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="section-shell py-14 md:py-20">
        <div className="grid gap-12 border-b border-blue-200/10 pb-12 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-6 text-sm leading-7 text-slate-400">{t(siteConfig.description)}</p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300">
              Building ideas. Creating impact.
            </p>
          </div>
          <div>
            <p className="footer-heading">{language === "vi" ? "Điều hướng" : "Navigation"}</p>
            <nav className="mt-5 flex flex-col gap-3" aria-label={language === "vi" ? "Điều hướng cuối trang" : "Footer navigation"}>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {t(item.label)}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="footer-heading">{language === "vi" ? "Dự án gần đây" : "Recent projects"}</p>
            <div className="mt-5 flex flex-col gap-3">
              {projects.slice(0, 4).map((project) => (
                <Link key={project.id} href={`/projects/${project.slug}`} className="footer-link">
                  {t(project.title)}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 MSCI Showcase. {language === "vi" ? "Được thiết kế và phát triển bởi đội ngũ MSCI." : "Designed and developed by the MSCI Team."}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${siteConfig.email}`} className="footer-social" aria-label="Email">
              <Icon name="mail" className="size-4" />
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="footer-social" aria-label="GitHub">
              <Icon name="github" className="size-4" />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="footer-social" aria-label="LinkedIn">
              <Icon name="linkedin" className="size-4" />
            </a>
            <LanguageSwitcher compact />
          </div>
        </div>
      </div>
    </footer>
  );
}
