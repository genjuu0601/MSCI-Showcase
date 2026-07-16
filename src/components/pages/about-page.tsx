"use client";

import Link from "next/link";
import { useLanguage, useLocalizedMetadata } from "@/components/providers/language-provider";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const pageCopy = {
  title: { vi: "Về MSCI", en: "About MSCI" },
  description: {
    vi: "Một nhóm công nghệ đa ngành biến vấn đề thật thành sản phẩm số có thể kiểm chứng.",
    en: "A multidisciplinary technology team turning real problems into verifiable digital products.",
  },
} as const;

const values = [
  {
    icon: "spark" as const,
    title: { vi: "Tò mò có kỷ luật", en: "Disciplined curiosity" },
    description: { vi: "Đặt câu hỏi rộng, sau đó kiểm chứng bằng dữ liệu và thử nghiệm nhỏ.", en: "Ask broadly, then validate with evidence and small experiments." },
  },
  {
    icon: "users" as const,
    title: { vi: "Cùng tạo, không bàn giao", en: "Co-create, not hand off" },
    description: { vi: "Nghiên cứu, thiết kế và kỹ thuật cùng chịu trách nhiệm cho trải nghiệm cuối.", en: "Research, design, and engineering share ownership of the final experience." },
  },
  {
    icon: "shield" as const,
    title: { vi: "Chất lượng có chủ đích", en: "Intentional quality" },
    description: { vi: "Độ rõ ràng, khả năng tiếp cận và hiệu suất là yêu cầu từ đầu, không phải bước sửa cuối.", en: "Clarity, accessibility, and performance begin as requirements, not cleanup." },
  },
  {
    icon: "chart" as const,
    title: { vi: "Tác động đo được", en: "Measurable impact" },
    description: { vi: "Một quyết định tốt cần thay đổi hành vi hoặc kết quả theo cách quan sát được.", en: "A good decision should change behavior or outcomes in an observable way." },
  },
] as const;

const milestones = [
  {
    year: "2024",
    title: { vi: "MSCI hình thành", en: "MSCI takes shape" },
    description: { vi: "Bốn thành viên kết nối thiết kế, phần mềm và nghiên cứu ứng dụng.", en: "Four members connect design, software, and applied research." },
  },
  {
    year: "2024",
    title: { vi: "Prototype đầu tiên", en: "First prototype" },
    description: { vi: "Nova Desk đặt nền móng cho quy trình thử nhanh và học nhanh.", en: "Nova Desk establishes a rapid prototype-and-learn practice." },
  },
  {
    year: "2025",
    title: { vi: "Mở rộng lĩnh vực", en: "New disciplines" },
    description: { vi: "Đội ngũ hoàn thiện sản phẩm mobile và game giáo dục đầu tiên.", en: "The team delivers its first mobile and educational game products." },
  },
  {
    year: "2026",
    title: { vi: "Hệ thống hóa năng lực", en: "A system for the craft" },
    description: { vi: "Case study, design system và quy trình kiểm thử được chuẩn hóa.", en: "Case studies, design systems, and testing workflows become repeatable." },
  },
] as const;

const expertise = ["Product Strategy", "Web Platforms", "Mobile Experiences", "AI Prototyping", "Game Design", "UX Research", "Design Systems", "Quality Engineering"];

export function AboutPage() {
  const { language, t } = useLanguage();
  useLocalizedMetadata(pageCopy.title, pageCopy.description);

  return (
    <main id="main-content" className="about-page">
      <section className="about-hero section-shell">
        <div>
          <p className="eyebrow">MSCI / Manifesto</p>
          <h1>{language === "vi" ? "Chúng tôi xây cầu nối giữa " : "We build bridges between "}<span className="gradient-text">{language === "vi" ? "ý tưởng và tác động." : "ideas and impact."}</span></h1>
          <p>{t(pageCopy.description)}</p>
        </div>
        <div className="about-hero-symbol" aria-hidden="true">
          <span>RESEARCH</span><span>DESIGN</span><span>ENGINEERING</span>
          <div><strong>MSCI</strong><small>BUILD / LEARN / IMPROVE</small></div>
        </div>
      </section>

      <section className="section-shell detail-section about-story">
        <Reveal variant="left">
          <div>
            <p className="eyebrow">01 · {language === "vi" ? "Câu chuyện" : "Our story"}</p>
            <span className="story-number">04</span>
          </div>
        </Reveal>
        <Reveal variant="right" className="about-story-copy">
          <h2>{language === "vi" ? "Bắt đầu từ một câu hỏi đơn giản: làm thế nào để dự án học thuật tạo ra giá trị ngoài lớp học?" : "It started with one simple question: how can academic projects create value beyond the classroom?"}</h2>
          <p>{language === "vi" ? "MSCI được hình thành khi bốn thành viên nhận ra rằng sản phẩm tốt cần nhiều hơn code chạy được. Nó cần một vấn đề đáng giải quyết, một trải nghiệm dễ hiểu và một hệ thống đủ vững để tiếp tục phát triển." : "MSCI formed when four members recognized that a good product needs more than working code. It needs a problem worth solving, an understandable experience, and a system strong enough to evolve."}</p>
          <p>{language === "vi" ? "Từ đó, mỗi dự án trở thành một phòng thí nghiệm nhỏ: nghiên cứu bối cảnh, tạo prototype, kiểm thử với người dùng và ghi lại những gì thực sự thay đổi." : "Since then, every project has become a small laboratory: research the context, prototype a direction, test with people, and document what truly changed."}</p>
        </Reveal>
      </section>

      <section className="detail-band detail-section">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow={{ vi: "02 · Tầm nhìn và sứ mệnh", en: "02 · Vision and mission" }}
              title={{ vi: "Năng lực được thể hiện qua sản phẩm thật.", en: "Capability made visible through real products." }}
            />
          </Reveal>
          <div className="vision-grid">
            <Reveal variant="left">
              <article>
                <span>VISION / 01</span>
                <h3>{language === "vi" ? "Trở thành không gian nơi thành viên học bằng cách tạo ra tác động có ý nghĩa." : "Become a place where members learn by creating meaningful impact."}</h3>
              </article>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <article>
                <span>MISSION / 02</span>
                <h3>{language === "vi" ? "Biến vấn đề thực tế thành sản phẩm rõ ràng, hữu ích và có thể mở rộng." : "Turn real-world problems into products that are clear, useful, and extensible."}</h3>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell detail-section">
        <Reveal>
          <SectionHeading
            eyebrow={{ vi: "03 · Giá trị cốt lõi", en: "03 · Core values" }}
            title={{ vi: "Bốn nguyên tắc dẫn đường.", en: "Four principles that guide us." }}
          />
        </Reveal>
        <div className="values-grid">
          {values.map((value, index) => (
            <Reveal key={value.title.en} delay={index * 80} variant={index % 2 ? "right" : "up"}>
              <article>
                <div><Icon name={value.icon} className="size-6" /></div>
                <span>0{index + 1}</span>
                <h3>{t(value.title)}</h3>
                <p>{t(value.description)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell detail-section">
        <Reveal>
          <SectionHeading
            eyebrow={{ vi: "04 · Dấu mốc", en: "04 · Milestones" }}
            title={{ vi: "Một hành trình đang tiếp tục.", en: "A journey still in motion." }}
          />
        </Reveal>
        <ol className="about-timeline">
          {milestones.map((milestone, index) => (
            <Reveal key={`${milestone.year}-${index}`} delay={index * 90} variant="up">
              <li>
                <span>{milestone.year}</span>
                <div aria-hidden="true" />
                <h3>{t(milestone.title)}</h3>
                <p>{t(milestone.description)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="expertise-section detail-band">
        <div className="section-shell expertise-layout">
          <Reveal variant="left">
            <SectionHeading
              eyebrow={{ vi: "05 · Lĩnh vực", en: "05 · Expertise" }}
              title={{ vi: "Đủ rộng để nhìn toàn cảnh. Đủ sâu để thực thi.", en: "Broad enough for the whole. Deep enough to deliver." }}
            />
          </Reveal>
          <Reveal variant="right" className="expertise-cloud">
            {expertise.map((item, index) => <span key={item} data-index={String(index + 1).padStart(2, "0")}>{item}</span>)}
          </Reveal>
        </div>
      </section>

      <section className="section-shell home-cta-wrap">
        <Reveal variant="scale">
          <div className="home-cta">
            <div className="home-cta-grid" aria-hidden="true" />
            <p className="eyebrow">Explore the work</p>
            <h2>{language === "vi" ? "Câu chuyện tốt nhất nằm trong những gì chúng tôi đã xây." : "Our best story lives in what we have built."}</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/projects" className="button-primary">{language === "vi" ? "Khám phá dự án" : "Explore projects"}<Icon name="arrow-right" className="size-4" /></Link>
              <Link href="/team" className="button-secondary">{language === "vi" ? "Gặp đội ngũ" : "Meet the team"}</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
