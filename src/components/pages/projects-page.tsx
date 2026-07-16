"use client";

import { useDeferredValue, useState } from "react";
import { useLanguage, useLocalizedMetadata } from "@/components/providers/language-provider";
import { ProjectCard } from "@/components/projects/project-card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { categoryLabels, statusLabels } from "@/data/site";
import { teamMembers } from "@/data/team";
import {
  PROJECT_CATEGORIES,
  PROJECT_STATUSES,
  type ProjectCategory,
  type ProjectStatus,
} from "@/types/content";

const pageCopy = {
  title: { vi: "Dự án của chúng tôi", en: "Our projects" },
  description: {
    vi: "Khám phá sản phẩm theo lĩnh vực, công nghệ hoặc trạng thái phát triển.",
    en: "Explore products by discipline, technology, or development status.",
  },
} as const;

type CategoryFilter = "all" | ProjectCategory;
type StatusFilter = "all" | ProjectStatus;

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

export function ProjectsPage() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const deferredQuery = useDeferredValue(query);
  useLocalizedMetadata(pageCopy.title, pageCopy.description);

  const normalizedQuery = normalize(deferredQuery);
  const filteredProjects = projects.filter((project) => {
    if (category !== "all" && project.category !== category) return false;
    if (status !== "all" && project.status !== status) return false;
    if (!normalizedQuery) return true;

    const memberNames = project.memberIds.flatMap((memberId) => {
      const member = teamMembers.find((item) => item.id === memberId);
      return member ? [member.fullName, member.englishName ?? ""] : [];
    });
    const searchableText = [
      project.title.vi,
      project.title.en,
      project.shortDescription.vi,
      project.shortDescription.en,
      ...project.technologies.map((technology) => technology.name),
      ...memberNames,
    ].join(" ");

    return normalize(searchableText).includes(normalizedQuery);
  });

  const hasFilters = query || category !== "all" || status !== "all";
  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setStatus("all");
  };

  return (
    <main id="main-content" className="projects-page">
      <section className="page-hero section-shell">
        <div>
          <p className="eyebrow">Archive / {projects.length.toString().padStart(2, "0")}</p>
          <h1>{t(pageCopy.title)}</h1>
          <p>{t(pageCopy.description)}</p>
        </div>
        <div className="page-hero-graphic" aria-hidden="true">
          <span>06</span>
          <div />
          <small>PROJECT SYSTEM / 2026</small>
        </div>
      </section>

      <section className="section-shell pb-28">
        <Reveal variant="blur">
          <div className="project-explorer glass-panel">
            <div className="project-search-row">
              <label className="search-input">
                <Icon name="search" className="size-5" />
                <span className="sr-only">{language === "vi" ? "Tìm kiếm dự án" : "Search projects"}</span>
                <input
                  type="search"
                  name="project-search"
                  autoComplete="off"
                  spellCheck={false}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={language === "vi" ? "Tìm theo tên, công nghệ hoặc thành viên…" : "Search by name, technology, or member…"}
                />
                {query ? (
                  <button type="button" onClick={() => setQuery("")} aria-label={language === "vi" ? "Xóa tìm kiếm" : "Clear search"}>
                    <Icon name="close" className="size-4" />
                  </button>
                ) : null}
              </label>
              <label className="status-select">
                <span className="sr-only">{language === "vi" ? "Lọc theo trạng thái" : "Filter by status"}</span>
                <Icon name="filter" className="size-4" />
                <select value={status} onChange={(event) => setStatus(event.target.value as StatusFilter)}>
                  <option value="all">{language === "vi" ? "Mọi trạng thái" : "All statuses"}</option>
                  {PROJECT_STATUSES.map((item) => <option key={item} value={item}>{t(statusLabels[item])}</option>)}
                </select>
              </label>
              <div className="view-switcher" role="group" aria-label={language === "vi" ? "Kiểu hiển thị" : "Display style"}>
                <button type="button" className={view === "grid" ? "is-active" : ""} aria-pressed={view === "grid"} onClick={() => setView("grid")} aria-label={language === "vi" ? "Dạng lưới" : "Grid view"}><Icon name="grid" className="size-4" /></button>
                <button type="button" className={view === "list" ? "is-active" : ""} aria-pressed={view === "list"} onClick={() => setView("list")} aria-label={language === "vi" ? "Dạng danh sách" : "List view"}><Icon name="list" className="size-4" /></button>
              </div>
            </div>
            <div className="category-filter" role="group" aria-label={language === "vi" ? "Lọc theo danh mục" : "Filter by category"}>
              <button type="button" className={category === "all" ? "is-active" : ""} aria-pressed={category === "all"} onClick={() => setCategory("all")}>
                {language === "vi" ? "Tất cả" : "All"} <span>{projects.length}</span>
              </button>
              {PROJECT_CATEGORIES.map((item) => {
                const count = projects.filter((project) => project.category === item).length;
                if (!count) return null;
                return (
                  <button key={item} type="button" className={category === item ? "is-active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>
                    {t(categoryLabels[item])} <span>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="projects-result-bar" aria-live="polite">
          <p><strong>{filteredProjects.length}</strong> {language === "vi" ? "dự án phù hợp" : "matching projects"}</p>
          {hasFilters ? <button type="button" onClick={clearFilters}>{language === "vi" ? "Xóa tất cả bộ lọc" : "Clear all filters"}<Icon name="close" className="size-3.5" /></button> : null}
        </div>

        {filteredProjects.length ? (
          <div className={`all-projects-grid ${view === "list" ? "is-list" : ""}`}>
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={Math.min(index * 55, 220)} variant="up">
                <ProjectCard project={project} view={view} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div><Icon name="search" className="size-7" /></div>
            <h2>{language === "vi" ? "Chưa tìm thấy dự án phù hợp" : "No matching project found"}</h2>
            <p>{language === "vi" ? "Thử từ khóa ngắn hơn hoặc xóa bớt bộ lọc để mở rộng kết quả." : "Try a shorter query or remove filters to broaden the results."}</p>
            <button type="button" className="button-secondary" onClick={clearFilters}>{language === "vi" ? "Xóa bộ lọc" : "Clear filters"}</button>
          </div>
        )}
      </section>
    </main>
  );
}
