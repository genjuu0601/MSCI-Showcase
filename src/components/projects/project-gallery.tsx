"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { AccessibleDialog } from "@/components/ui/accessible-dialog";
import { Icon } from "@/components/ui/icon";
import { ProjectVisual } from "@/components/ui/project-visual";
import type { Project } from "@/types/content";

function ImageLightbox({
  project,
  initialIndex,
  onClose,
}: {
  project: Project;
  initialIndex: number;
  onClose: () => void;
}) {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const activeItem = project.gallery[activeIndex];
  const showPrevious = () => setActiveIndex((current) => (current - 1 + project.gallery.length) % project.gallery.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % project.gallery.length);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + project.gallery.length) % project.gallery.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % project.gallery.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project.gallery.length]);

  return (
    <AccessibleDialog
      open
      onClose={onClose}
      titleId="lightbox-title"
      closeLabel={language === "vi" ? "Đóng thư viện ảnh" : "Close gallery"}
      className="lightbox-dialog"
    >
      <div className="lightbox-content">
        <div className="lightbox-visual">
          <ProjectVisual project={project} language={language} galleryItem={activeItem} />
        </div>
        <div className="lightbox-caption">
          <div>
            <p className="eyebrow">{activeIndex + 1} / {project.gallery.length}</p>
            <h2 id="lightbox-title">{t(activeItem.caption)}</h2>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={showPrevious} aria-label={language === "vi" ? "Ảnh trước" : "Previous image"}><Icon name="chevron-left" className="size-5" /></button>
            <button type="button" onClick={showNext} aria-label={language === "vi" ? "Ảnh tiếp theo" : "Next image"}><Icon name="chevron-right" className="size-5" /></button>
          </div>
        </div>
      </div>
    </AccessibleDialog>
  );
}

export function ProjectGallery({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="project-gallery-grid" id="gallery">
        {project.gallery.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={index === 0 ? "is-primary" : ""}
            onClick={() => setSelectedIndex(index)}
            aria-label={`${language === "vi" ? "Mở ảnh" : "Open image"}: ${t(item.caption)}`}
          >
            <ProjectVisual project={project} language={language} galleryItem={item} />
            <span><span>{t(item.caption)}</span><Icon name="arrow-up-right" className="size-4" /></span>
          </button>
        ))}
      </div>
      {selectedIndex !== null ? (
        <ImageLightbox
          key={selectedIndex}
          project={project}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      ) : null}
    </>
  );
}
