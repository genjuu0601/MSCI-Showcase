"use client";

import Link from "next/link";
import { useState, type PointerEvent } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { AccessibleDialog } from "@/components/ui/accessible-dialog";
import { Icon } from "@/components/ui/icon";
import { projects } from "@/data/projects";
import type { TeamMember } from "@/types/content";

function MemberCard({ member, onOpen }: { member: TeamMember; onOpen: () => void }) {
  const { language, t } = useLanguage();

  const updateTilt = (event: PointerEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${y * -5}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 6}deg`);
  };

  const resetTilt = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <button
      type="button"
      className="member-card"
      style={{ "--member-accent": member.accent } as React.CSSProperties}
      aria-label={`${language === "vi" ? "Xem hồ sơ" : "View profile"}: ${member.fullName}`}
      onClick={onOpen}
      onPointerMove={updateTilt}
      onPointerLeave={resetTilt}
    >
      <span className="member-avatar" aria-hidden="true">
        <span>{member.initials}</span>
      </span>
      <span className="member-card-copy">
        <span className="member-role">{t(member.role)}</span>
        <strong>{member.fullName}</strong>
        <span>{member.englishName}</span>
      </span>
      <span className="member-card-skills">
        {member.skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}
      </span>
      <span className="member-card-action">
        {language === "vi" ? "Mở hồ sơ" : "Open profile"}
        <Icon name="arrow-up-right" className="size-4" />
      </span>
    </button>
  );
}

function MemberModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  const { language, t } = useLanguage();
  const memberProjects = member
    ? projects.filter((project) => member.projectIds.includes(project.id))
    : [];

  return (
    <AccessibleDialog
      open={Boolean(member)}
      onClose={onClose}
      titleId="member-modal-title"
      closeLabel={language === "vi" ? "Đóng hồ sơ" : "Close profile"}
      className="member-modal"
    >
      {member ? (
        <div className="member-modal-content" style={{ "--member-accent": member.accent } as React.CSSProperties}>
          <div className="member-modal-identity">
            <div className="member-avatar is-large" aria-hidden="true"><span>{member.initials}</span></div>
            <p className="eyebrow">{t(member.role)}</p>
            <h2 id="member-modal-title">{member.fullName}</h2>
            {member.englishName ? <p className="text-slate-500">{member.englishName}</p> : null}
          </div>
          <div className="member-modal-details">
            <blockquote>“{t(member.quote)}”</blockquote>
            <p>{t(member.bio)}</p>
            <div>
              <h3>{language === "vi" ? "Năng lực chính" : "Core skills"}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {member.skills.map((skill) => <span key={skill} className="technology-badge">{skill}</span>)}
              </div>
            </div>
            <div>
              <h3>{language === "vi" ? "Dự án tham gia" : "Selected projects"}</h3>
              <div className="member-project-list">
                {memberProjects.map((project) => (
                  <Link key={project.id} href={`/projects/${project.slug}`} onClick={onClose}>
                    {t(project.title)} <Icon name="arrow-right" className="size-4" />
                  </Link>
                ))}
              </div>
            </div>
            {member.socialLinks ? (
              <div className="member-socials">
                {member.socialLinks.github ? <a href={member.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" className="size-5" /></a> : null}
                {member.socialLinks.linkedin ? <a href={member.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" className="size-5" /></a> : null}
                {member.socialLinks.email ? <a href={member.socialLinks.email} aria-label="Email"><Icon name="mail" className="size-5" /></a> : null}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </AccessibleDialog>
  );
}

export function TeamGrid({ members }: { members: TeamMember[] }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="team-grid">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} onOpen={() => setSelectedMember(member)} />
        ))}
      </div>
      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </>
  );
}
