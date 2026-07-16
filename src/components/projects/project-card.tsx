"use client";

import Link from "next/link";
import type { PointerEvent } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { Icon } from "@/components/ui/icon";
import { ProjectVisual } from "@/components/ui/project-visual";
import { categoryLabels, statusLabels } from "@/data/site";
import type { Project } from "@/types/content";

export function ProjectCard({
  project,
  view = "grid",
  priority = false,
}: {
  project: Project;
  view?: "grid" | "list";
  priority?: boolean;
}) {
  const { language, t } = useLanguage();

  const updateSpotlight = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <article
      className={`project-card ${view === "list" ? "is-list" : ""}`}
      onPointerMove={updateSpotlight}
      data-priority={priority || undefined}
    >
      <Link href={`/projects/${project.slug}`} className="project-card-visual" tabIndex={-1} aria-hidden="true">
        <ProjectVisual project={project} language={language} />
        <span className="project-card-index">{String(projectsIndex(project.id)).padStart(2, "0")}</span>
      </Link>
      <div className="project-card-body">
        <div className="flex flex-wrap items-center gap-2">
          <span className="project-category">{t(categoryLabels[project.category])}</span>
          <span className="status-badge" data-status={project.status}>{t(statusLabels[project.status])}</span>
          <span className="ml-auto font-mono text-[10px] text-slate-500">{project.year}</span>
        </div>
        <div>
          <h3>
            <Link href={`/projects/${project.slug}`}>{t(project.title)}</Link>
          </h3>
          <p>{t(project.shortDescription)}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology.name} className="technology-badge">{technology.name}</span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="project-card-action">
          {language === "vi" ? "Xem case study" : "View case study"}
          <Icon name="arrow-right" className="size-4" />
        </Link>
      </div>
    </article>
  );
}

function projectsIndex(id: string) {
  const suffix = id.split("-").reduce((sum, part) => sum + part.length, 0);
  return (suffix % 8) + 1;
}
