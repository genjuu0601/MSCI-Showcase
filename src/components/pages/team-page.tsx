"use client";

import Link from "next/link";
import { useLanguage, useLocalizedMetadata } from "@/components/providers/language-provider";
import { TeamGrid } from "@/components/team/team-grid";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/data/team";

const pageCopy = {
  title: { vi: "Đội ngũ phát triển", en: "Development team" },
  description: {
    vi: "Bốn góc nhìn khác nhau, một tiêu chuẩn chung cho sản phẩm tốt.",
    en: "Four different perspectives, one shared standard for good products.",
  },
} as const;

const workflow = [
  {
    index: "01",
    title: { vi: "Cùng hiểu vấn đề", en: "Shared understanding" },
    description: { vi: "Mọi vai trò cùng tham gia nghiên cứu và xác định tiêu chí thành công.", en: "Every discipline joins research and defines success together." },
  },
  {
    index: "02",
    title: { vi: "Cùng kiểm chứng", en: "Shared validation" },
    description: { vi: "Quyết định thiết kế và kỹ thuật được thử bằng prototype có thể đo lường.", en: "Design and technical decisions are tested through measurable prototypes." },
  },
  {
    index: "03",
    title: { vi: "Cùng chịu trách nhiệm", en: "Shared ownership" },
    description: { vi: "Chất lượng cuối cùng là trách nhiệm của cả đội, không phải một bước bàn giao.", en: "Final quality belongs to the whole team, not a handoff stage." },
  },
] as const;

export function TeamPage() {
  const { language, t } = useLanguage();
  useLocalizedMetadata(pageCopy.title, pageCopy.description);

  return (
    <main id="main-content" className="team-page">
      <section className="page-hero section-shell team-page-hero">
        <div>
          <p className="eyebrow">People / Process / Craft</p>
          <h1>{language === "vi" ? "Những người biến " : "The people turning "}<span className="gradient-text">{language === "vi" ? "tò mò thành sản phẩm." : "curiosity into products."}</span></h1>
          <p>{t(pageCopy.description)}</p>
        </div>
        <div className="team-hero-roster" aria-hidden="true">
          {teamMembers.map((member, index) => (
            <div key={member.id} style={{ "--member-accent": member.accent, "--roster-index": index } as React.CSSProperties}>
              <span>{member.initials}</span>
            </div>
          ))}
          <strong>04</strong>
          <small>MEMBERS / ONE SYSTEM</small>
        </div>
      </section>

      <section className="section-shell pb-28">
        <Reveal>
          <SectionHeading
            eyebrow={{ vi: "Hồ sơ thành viên", en: "Member profiles" }}
            title={{ vi: "Bốn chuyên môn. Một nhịp làm việc.", en: "Four disciplines. One working rhythm." }}
            description={{ vi: "Chọn một thành viên để xem vai trò, kỹ năng và các sản phẩm họ đã tham gia.", en: "Select a member to explore their role, skills, and project contributions." }}
          />
        </Reveal>
        <Reveal delay={100} variant="scale"><TeamGrid members={teamMembers} /></Reveal>
      </section>

      <section className="detail-band detail-section">
        <div className="section-shell team-workflow-layout">
          <Reveal variant="left">
            <SectionHeading
              eyebrow={{ vi: "Cách chúng tôi cộng tác", en: "How we collaborate" }}
              title={{ vi: "Không có bức tường giữa thiết kế và kỹ thuật.", en: "No wall between design and engineering." }}
              description={{ vi: "Quy trình được tổ chức để mọi quyết định quan trọng đều có đủ góc nhìn sản phẩm, trải nghiệm và hệ thống.", en: "The process gives every important decision product, experience, and system perspectives." }}
            />
          </Reveal>
          <div className="team-workflow-list">
            {workflow.map((item, index) => (
              <Reveal key={item.index} delay={index * 90} variant="right">
                <article>
                  <span>{item.index}</span>
                  <div><h3>{t(item.title)}</h3><p>{t(item.description)}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell home-cta-wrap">
        <Reveal variant="scale">
          <div className="home-cta">
            <div className="home-cta-grid" aria-hidden="true" />
            <p className="eyebrow">Work with MSCI</p>
            <h2>{language === "vi" ? "Một dự án tốt bắt đầu bằng cuộc trò chuyện đúng." : "A good project starts with the right conversation."}</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="button-primary">{language === "vi" ? "Bắt đầu trao đổi" : "Start a conversation"}<Icon name="send" className="size-4" /></Link>
              <Link href="/projects" className="button-secondary">{language === "vi" ? "Xem năng lực qua dự án" : "See our work"}</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
