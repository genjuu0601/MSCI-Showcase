"use client";

import Link from "next/link";
import { useLanguage, useLocalizedMetadata } from "@/components/providers/language-provider";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { TeamGrid } from "@/components/team/team-grid";
import { Icon, type IconName } from "@/components/ui/icon";
import { ProjectVisual } from "@/components/ui/project-visual";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { categoryLabels, statusLabels, technologyCategoryLabels } from "@/data/site";
import type { Project, TeamMember, TechnologyCategory } from "@/types/content";

const processSteps = [
  {
    number: "01",
    title: { vi: "Nghiên cứu", en: "Research" },
    description: { vi: "Phỏng vấn, quan sát và xác định bối cảnh thật.", en: "Interview, observe, and map the real context." },
  },
  {
    number: "02",
    title: { vi: "Định hướng", en: "Direction" },
    description: { vi: "Chọn vấn đề trọng tâm và tiêu chí thành công.", en: "Select the core problem and success criteria." },
  },
  {
    number: "03",
    title: { vi: "Thiết kế", en: "Design" },
    description: { vi: "Prototype luồng chính và kiểm chứng sớm.", en: "Prototype critical flows and validate early." },
  },
  {
    number: "04",
    title: { vi: "Phát triển", en: "Development" },
    description: { vi: "Xây theo lát cắt nhỏ, tích hợp liên tục.", en: "Build in thin slices with continuous integration." },
  },
  {
    number: "05",
    title: { vi: "Kiểm thử", en: "Testing" },
    description: { vi: "Kiểm tra hành vi, accessibility và hiệu suất.", en: "Verify behavior, accessibility, and performance." },
  },
  {
    number: "06",
    title: { vi: "Bàn giao", en: "Delivery" },
    description: { vi: "Đo kết quả và ghi lại bài học cho vòng tiếp theo.", en: "Measure outcomes and capture lessons for the next loop." },
  },
] as const;

const overviewLabels = {
  context: { vi: "Bối cảnh", en: "Context" },
  problem: { vi: "Vấn đề", en: "Problem" },
  goal: { vi: "Mục tiêu", en: "Goal" },
  audience: { vi: "Đối tượng", en: "Audience" },
  solution: { vi: "Giải pháp", en: "Solution" },
  result: { vi: "Kết quả", en: "Outcome" },
} as const;

export function ProjectDetailPage({
  project,
  members,
  relatedProjects,
}: {
  project: Project;
  members: TeamMember[];
  relatedProjects: Project[];
}) {
  const { language, t } = useLanguage();
  useLocalizedMetadata(project.title, project.shortDescription);

  const technologyGroups = project.technologies.reduce<Partial<Record<TechnologyCategory, typeof project.technologies>>>((groups, technology) => {
    groups[technology.category] = [...(groups[technology.category] ?? []), technology];
    return groups;
  }, {});

  return (
    <main id="main-content" className="project-detail-page">
      <section className="project-detail-hero section-shell">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">{language === "vi" ? "Trang chủ" : "Home"}</Link>
          <Icon name="chevron-right" className="size-3.5" />
          <Link href="/projects">{language === "vi" ? "Dự án" : "Projects"}</Link>
          <Icon name="chevron-right" className="size-3.5" />
          <span aria-current="page">{t(project.title)}</span>
        </nav>
        <div className="project-detail-heading">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="project-category">{t(categoryLabels[project.category])}</span>
              <span className="status-badge" data-status={project.status}>{t(statusLabels[project.status])}</span>
            </div>
            <h1>{t(project.title)}</h1>
            <p className="project-tagline">{t(project.tagline)}</p>
            <p className="project-summary">{t(project.shortDescription)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#gallery" className="button-primary">{language === "vi" ? "Xem thư viện" : "View gallery"}<Icon name="arrow-right" className="size-4" /></a>
              {project.links?.demo ? <a href={project.links.demo} target="_blank" rel="noreferrer" className="button-secondary">Live Demo<Icon name="arrow-up-right" className="size-4" /></a> : null}
              {project.links?.github ? <a href={project.links.github} target="_blank" rel="noreferrer" className="button-secondary">GitHub<Icon name="github" className="size-4" /></a> : null}
            </div>
          </div>
          <dl className="project-meta-list">
            <div><dt>{language === "vi" ? "Năm" : "Year"}</dt><dd>{project.year}</dd></div>
            <div><dt>{language === "vi" ? "Vai trò" : "Role"}</dt><dd>{t(project.role)}</dd></div>
            <div><dt>{language === "vi" ? "Đội ngũ" : "Team"}</dt><dd>{members.length} {language === "vi" ? "thành viên" : "members"}</dd></div>
          </dl>
        </div>
        <Reveal variant="scale" className="project-cover-frame">
          <ProjectVisual project={project} language={language} />
        </Reveal>
      </section>

      <section className="section-shell detail-section project-overview-section">
        <Reveal variant="left">
          <SectionHeading
            eyebrow={{ vi: "01 · Tổng quan", en: "01 · Overview" }}
            title={{ vi: "Từ bối cảnh đến kết quả.", en: "From context to outcome." }}
            description={{ vi: "Một case study được kể bằng vấn đề, quyết định và bằng chứng thay vì danh sách tính năng.", en: "A case study told through problems, decisions, and evidence instead of a feature list." }}
          />
        </Reveal>
        <div className="overview-grid">
          {(Object.keys(overviewLabels) as Array<keyof typeof overviewLabels>).map((key, index) => (
            <Reveal key={key} delay={index * 70} variant={index % 2 ? "right" : "up"}>
              <article>
                <span>0{index + 1}</span>
                <h3>{t(overviewLabels[key])}</h3>
                <p>{t(project.overview[key])}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="detail-section detail-band">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow={{ vi: "02 · Chức năng", en: "02 · Features" }}
              title={{ vi: "Những khả năng làm nên sản phẩm.", en: "Capabilities that shape the product." }}
            />
          </Reveal>
          <div className="feature-grid">
            {project.features.map((feature, index) => (
              <Reveal key={feature.title.en} delay={index * 90} variant="up">
                <article>
                  <div><Icon name={feature.icon as IconName} className="size-6" /></div>
                  <span>0{index + 1}</span>
                  <h3>{t(feature.title)}</h3>
                  <p>{t(feature.description)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell detail-section">
        <div className="technology-detail-layout">
          <Reveal variant="left">
            <SectionHeading
              eyebrow={{ vi: "03 · Technology stack", en: "03 · Technology stack" }}
              title={{ vi: "Mỗi công cụ có một vai trò rõ ràng.", en: "Every tool has a clear role." }}
            />
          </Reveal>
          <div className="technology-groups">
            {(Object.entries(technologyGroups) as Array<[TechnologyCategory, typeof project.technologies]>).map(([category, items], index) => (
              <Reveal key={category} delay={index * 70} variant="right">
                <article>
                  <h3>{t(technologyCategoryLabels[category])}</h3>
                  <div>{items.map((technology) => <span key={technology.name}>{technology.name}</span>)}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell detail-section">
        <Reveal>
          <SectionHeading
            eyebrow={{ vi: "04 · Gallery", en: "04 · Gallery" }}
            title={{ vi: "Giao diện, hệ thống và những điểm chạm.", en: "Interfaces, systems, and touchpoints." }}
            description={{ vi: "Chọn một khung hình để xem ở chế độ toàn màn hình; dùng phím mũi tên để chuyển ảnh.", en: "Open a frame in the lightbox and use arrow keys to move through the gallery." }}
          />
        </Reveal>
        <Reveal delay={100} variant="scale" className="mt-10">
          <ProjectGallery project={project} />
        </Reveal>
      </section>

      <section className="detail-section detail-band">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow={{ vi: "05 · Quy trình", en: "05 · Process" }}
              title={{ vi: "Tiến về phía trước bằng những vòng lặp nhỏ.", en: "Moving forward through small loops." }}
            />
          </Reveal>
          <ol className="process-timeline">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 70} variant="up">
                <li>
                  <span>{step.number}</span>
                  <h3>{t(step.title)}</h3>
                  <p>{t(step.description)}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell detail-section">
        <div className="challenges-layout">
          <Reveal variant="left">
            <SectionHeading
              eyebrow={{ vi: "06 · Thách thức", en: "06 · Challenges" }}
              title={{ vi: "Những điểm khó tạo ra bài học tốt nhất.", en: "The hard parts create the best lessons." }}
            />
          </Reveal>
          <div className="challenge-list">
            {project.challenges.map((challenge, index) => (
              <Reveal key={challenge.title.en} delay={index * 80} variant="right">
                <article>
                  <span>0{index + 1}</span>
                  <h3>{t(challenge.title)}</h3>
                  <div><strong>{language === "vi" ? "Thách thức" : "Challenge"}</strong><p>{t(challenge.challenge)}</p></div>
                  <div><strong>{language === "vi" ? "Giải pháp" : "Solution"}</strong><p>{t(challenge.solution)}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell detail-section">
        <Reveal>
          <SectionHeading
            eyebrow={{ vi: "07 · Đội ngũ dự án", en: "07 · Project team" }}
            title={{ vi: "Những người đã đưa dự án vào thực tế.", en: "The people who brought it to life." }}
          />
        </Reveal>
        <Reveal delay={100} variant="scale"><TeamGrid members={members} /></Reveal>
      </section>

      <section className="section-shell detail-section related-projects">
        <Reveal>
          <div className="section-heading-row">
            <SectionHeading
              eyebrow={{ vi: "Tiếp tục khám phá", en: "Continue exploring" }}
              title={{ vi: "Các dự án có liên quan.", en: "Related projects." }}
            />
            <Link href="/projects" className="section-text-link">{language === "vi" ? "Tất cả dự án" : "All projects"}<Icon name="arrow-right" className="size-4" /></Link>
          </div>
        </Reveal>
        <div className="related-project-grid">
          {relatedProjects.map((relatedProject, index) => <Reveal key={relatedProject.id} delay={index * 80}><ProjectCard project={relatedProject} /></Reveal>)}
        </div>
      </section>
    </main>
  );
}
