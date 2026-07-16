"use client";

import Link from "next/link";
import { useLanguage, useLocalizedMetadata } from "@/components/providers/language-provider";
import { Statistics } from "@/components/home/statistics";
import { TechnologyMarquee } from "@/components/home/technology-marquee";
import { ProjectCard } from "@/components/projects/project-card";
import { TeamGrid } from "@/components/team/team-grid";
import { Icon } from "@/components/ui/icon";
import { ProjectVisual } from "@/components/ui/project-visual";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/projects";
import { teamMembers } from "@/data/team";

const copy = {
  title: { vi: "Nơi ý tưởng trở thành trải nghiệm số", en: "Where ideas become digital experiences" },
  description: {
    vi: "Khám phá các dự án được nghiên cứu, thiết kế và phát triển bởi đội ngũ MSCI.",
    en: "Explore projects researched, designed, and developed by the MSCI team.",
  },
  featured: {
    eyebrow: { vi: "Selected work · 2024—2026", en: "Selected work · 2024—2026" },
    title: { vi: "Những sản phẩm tạo ra tác động rõ ràng.", en: "Products built to create visible impact." },
    description: {
      vi: "Mỗi dự án là một case study hoàn chỉnh: từ vấn đề ban đầu, quyết định thiết kế đến giải pháp kỹ thuật.",
      en: "Each project is a complete case study, from the initial problem and design decisions to the technical solution.",
    },
  },
  technology: {
    eyebrow: { vi: "Technology landscape", en: "Technology landscape" },
    title: { vi: "Công cụ thay đổi. Tư duy hệ thống ở lại.", en: "Tools evolve. Systems thinking remains." },
    description: {
      vi: "Chúng tôi chọn công nghệ dựa trên bài toán, khả năng vận hành và trải nghiệm cần tạo ra.",
      en: "We select technology around the problem, operational reality, and the experience we need to create.",
    },
  },
  about: {
    eyebrow: { vi: "Inside MSCI", en: "Inside MSCI" },
    title: { vi: "Một đội ngũ nhỏ với góc nhìn đa ngành.", en: "A small team with a multidisciplinary view." },
    description: {
      vi: "MSCI kết nối nghiên cứu, thiết kế và kỹ thuật trong cùng một quy trình. Chúng tôi xây sản phẩm bằng dữ liệu, thử nghiệm và sự tò mò có kỷ luật.",
      en: "MSCI connects research, design, and engineering in one process. We build with evidence, experimentation, and disciplined curiosity.",
    },
  },
  team: {
    eyebrow: { vi: "Development team", en: "Development team" },
    title: { vi: "Những người đứng sau từng quyết định.", en: "The people behind every decision." },
    description: {
      vi: "Nhấn vào hồ sơ để xem kỹ năng, vai trò và các dự án mỗi thành viên đã tham gia.",
      en: "Open a profile to see the skills, responsibilities, and projects behind each team member.",
    },
  },
} as const;

const principles = [
  {
    index: "01",
    title: { vi: "Hiểu trước khi xây", en: "Understand before building" },
    description: {
      vi: "Bắt đầu bằng bối cảnh, người dùng và thước đo kết quả.",
      en: "Start with context, people, and a measurable outcome.",
    },
  },
  {
    index: "02",
    title: { vi: "Thiết kế cùng kỹ thuật", en: "Design with engineering" },
    description: {
      vi: "Prototype, kiến trúc và nội dung được kiểm chứng song song.",
      en: "Prototype, architecture, and content are validated together.",
    },
  },
  {
    index: "03",
    title: { vi: "Học từ sản phẩm thật", en: "Learn from real products" },
    description: {
      vi: "Mỗi vòng lặp kết thúc bằng dữ liệu, phản hồi và một quyết định rõ ràng.",
      en: "Every loop ends with evidence, feedback, and a clear decision.",
    },
  },
] as const;

export function HomePage() {
  const { language, t } = useLanguage();
  const heroProject = featuredProjects[0];
  useLocalizedMetadata(copy.title, copy.description);

  return (
    <main id="main-content">
      <section className="home-hero section-shell">
        <div className="home-hero-copy">
          <div className="hero-signal">
            <span aria-hidden="true" />
            {language === "vi" ? "Digital showcase · Đang trực tuyến" : "Digital showcase · Online"}
          </div>
          <h1>
            <span>MSCI Showcase</span>
            {language === "vi" ? "Nơi ý tưởng trở thành " : "Where ideas become "}
            <strong className="gradient-text">{language === "vi" ? "trải nghiệm số." : "digital experiences."}</strong>
          </h1>
          <p>{t(copy.description)}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="button-primary">
              {language === "vi" ? "Khám phá dự án" : "Explore projects"}
              <Icon name="arrow-right" className="size-4" />
            </Link>
            <Link href="/about" className="button-secondary">
              {language === "vi" ? "Tìm hiểu về nhóm" : "About the team"}
            </Link>
          </div>
          <Statistics />
        </div>

        <div className="hero-exhibition" aria-label={language === "vi" ? "Dự án nổi bật" : "Featured project"}>
          <div className="hero-orbit-label">CURATED / 01</div>
          <div className="hero-project-frame">
            <ProjectVisual project={heroProject} language={language} />
            <div className="hero-project-caption">
              <div>
                <span>{t(heroProject.tagline)}</span>
                <strong>{t(heroProject.title)}</strong>
              </div>
              <Link href={`/projects/${heroProject.slug}`} aria-label={`${language === "vi" ? "Xem" : "View"} ${t(heroProject.title)}`}>
                <Icon name="arrow-up-right" className="size-5" />
              </Link>
            </div>
          </div>
          <div className="hero-data-card hero-data-card-one">
            <span>BUILD / STATUS</span>
            <strong>06 / 06</strong>
            <small>{language === "vi" ? "case study sẵn sàng" : "case studies ready"}</small>
          </div>
          <div className="hero-data-card hero-data-card-two">
            <span>FOCUS / 2026</span>
            <strong>Human + Tech</strong>
            <small>{language === "vi" ? "thiết kế có mục đích" : "purposeful design"}</small>
          </div>
        </div>
        <a href="#featured-projects" className="hero-scroll-cue">
          <span /> {language === "vi" ? "Cuộn để khám phá" : "Scroll to explore"}
        </a>
      </section>

      <section id="featured-projects" className="section-shell home-section">
        <Reveal>
          <div className="section-heading-row">
            <SectionHeading {...copy.featured} />
            <Link href="/projects" className="section-text-link">
              {language === "vi" ? "Tất cả dự án" : "All projects"}
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </div>
        </Reveal>
        <div className="featured-project-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90} variant={index % 2 ? "right" : "up"}>
              <ProjectCard project={project} priority={index < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="technology-section">
        <div className="section-shell">
          <Reveal variant="blur">
            <SectionHeading {...copy.technology} align="center" />
          </Reveal>
        </div>
        <Reveal delay={120}>
          <TechnologyMarquee />
        </Reveal>
      </section>

      <section className="section-shell home-section">
        <div className="about-preview">
          <Reveal variant="left" className="about-preview-copy">
            <SectionHeading {...copy.about} />
            <Link href="/about" className="button-secondary mt-8">
              {language === "vi" ? "Câu chuyện MSCI" : "The MSCI story"}
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </Reveal>
          <div className="principles-list">
            {principles.map((principle, index) => (
              <Reveal key={principle.index} delay={index * 100} variant="right">
                <article>
                  <span>{principle.index}</span>
                  <div>
                    <h3>{t(principle.title)}</h3>
                    <p>{t(principle.description)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell home-section">
        <Reveal>
          <div className="section-heading-row">
            <SectionHeading {...copy.team} />
            <Link href="/team" className="section-text-link">
              {language === "vi" ? "Gặp toàn đội" : "Meet the team"}
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120} variant="scale">
          <TeamGrid members={teamMembers} />
        </Reveal>
      </section>

      <section className="section-shell home-cta-wrap">
        <Reveal variant="scale">
          <div className="home-cta">
            <div className="home-cta-grid" aria-hidden="true" />
            <p className="eyebrow">Next collaboration</p>
            <h2>{language === "vi" ? "Có một ý tưởng muốn cùng chúng tôi phát triển?" : "Have an idea worth building together?"}</h2>
            <p>{language === "vi" ? "Hãy bắt đầu bằng vấn đề bạn muốn giải quyết. Chúng tôi sẽ cùng bạn tìm hướng đi rõ ràng." : "Start with the problem you want to solve. We will help shape a clear path forward."}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="button-primary">{language === "vi" ? "Liên hệ với nhóm" : "Contact the team"}<Icon name="send" className="size-4" /></Link>
              <Link href="/projects" className="button-secondary">{language === "vi" ? "Xem tất cả dự án" : "View all projects"}</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
