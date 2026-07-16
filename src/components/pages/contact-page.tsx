"use client";

import { useState } from "react";
import { useLanguage, useLocalizedMetadata } from "@/components/providers/language-provider";
import { ContactForm } from "@/components/contact/contact-form";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

const pageCopy = {
  title: { vi: "Liên hệ với MSCI", en: "Contact MSCI" },
  description: {
    vi: "Chia sẻ vấn đề, ý tưởng hoặc cơ hội hợp tác. Chúng tôi sẽ bắt đầu từ bối cảnh của bạn.",
    en: "Share a problem, an idea, or a collaboration opportunity. We will start with your context.",
  },
} as const;

export function ContactPage() {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  useLocalizedMetadata(pageCopy.title, pageCopy.description);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <main id="main-content" className="contact-page">
      <section className="contact-hero section-shell">
        <Reveal variant="left">
          <div>
            <p className="eyebrow">Open channel / MSCI</p>
            <h1>{language === "vi" ? "Hãy bắt đầu bằng " : "Start with "}<span className="gradient-text">{language === "vi" ? "một vấn đề đáng giải quyết." : "a problem worth solving."}</span></h1>
            <p>{t(pageCopy.description)}</p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={100}>
          <div className="contact-signal" aria-hidden="true">
            <div><span /><span /><span /></div>
            <strong>CHANNEL / OPEN</strong>
            <small>RESPONSE WINDOW · 24—48H</small>
          </div>
        </Reveal>
      </section>

      <section className="section-shell contact-layout pb-28">
        <Reveal variant="left" className="contact-details">
          <p className="eyebrow">Direct contact</p>
          <h2>{language === "vi" ? "Gửi một tín hiệu. Chúng tôi sẽ nối tiếp cuộc trò chuyện." : "Send a signal. We will continue the conversation."}</h2>
          <p>{language === "vi" ? "Phù hợp cho trao đổi dự án, hợp tác học thuật, cơ hội thực tập hoặc phản hồi về sản phẩm." : "Best for project discussions, academic collaboration, internship opportunities, or product feedback."}</p>
          <div className="contact-methods">
            <button type="button" onClick={copyEmail}>
              <span><Icon name="mail" className="size-5" /></span>
              <span><small>Email</small><strong>{siteConfig.email}</strong></span>
              <Icon name={copied ? "check" : "copy"} className="size-4" />
            </button>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <span><Icon name="github" className="size-5" /></span>
              <span><small>GitHub</small><strong>MSCI Organization</strong></span>
              <Icon name="arrow-up-right" className="size-4" />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              <span><Icon name="linkedin" className="size-5" /></span>
              <span><small>LinkedIn</small><strong>MSCI Network</strong></span>
              <Icon name="arrow-up-right" className="size-4" />
            </a>
          </div>
          {copied ? <p className="copy-confirmation" role="status">{language === "vi" ? "Đã sao chép email." : "Email copied."}</p> : null}
        </Reveal>
        <Reveal variant="right" delay={100} className="contact-form-panel glass-panel">
          <div className="contact-form-heading">
            <span>01 / MESSAGE</span>
            <h2>{language === "vi" ? "Kể cho chúng tôi về ý tưởng của bạn." : "Tell us about your idea."}</h2>
          </div>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}
