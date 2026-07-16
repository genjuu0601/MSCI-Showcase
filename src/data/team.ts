import type { LocalizedText, TeamMember } from "@/types/content";

const text = (vi: string, en: string): LocalizedText => ({ vi, en });

export const teamMembers: TeamMember[] = [
  {
    id: "minh-anh",
    slug: "nguyen-minh-anh",
    fullName: "Nguyễn Minh Anh",
    englishName: "Mina Nguyen",
    initials: "MA",
    role: text("Product Lead · Frontend", "Product Lead · Frontend"),
    bio: text(
      "Minh Anh kết nối nghiên cứu người dùng với kiến trúc giao diện, tập trung vào những sản phẩm rõ ràng và có thể đo lường.",
      "Minh Anh connects user research with interface architecture, focusing on products that are clear and measurable.",
    ),
    quote: text(
      "Một giao diện tốt không chỉ đẹp; nó giúp người dùng tự tin đi tiếp.",
      "A good interface does more than look polished; it gives people confidence to continue.",
    ),
    skills: ["Product Strategy", "Next.js", "TypeScript", "Design Systems"],
    projectIds: ["project-nexus-campus", "project-med-lens", "project-circuit-quest", "project-lab-sync"],
    accent: "#37b6ff",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:hello@msci-showcase.dev",
    },
  },
  {
    id: "gia-huy",
    slug: "tran-gia-huy",
    fullName: "Trần Gia Huy",
    englishName: "Hugh Tran",
    initials: "GH",
    role: text("Tech Lead · Backend", "Tech Lead · Backend"),
    bio: text(
      "Gia Huy thiết kế hệ thống dữ liệu và API, ưu tiên tính quan sát được, hiệu suất và khả năng mở rộng từng bước.",
      "Gia Huy designs data systems and APIs with an emphasis on observability, performance, and incremental scale.",
    ),
    quote: text(
      "Hệ thống đáng tin cậy bắt đầu từ những ranh giới dữ liệu rõ ràng.",
      "Reliable systems begin with clear data boundaries.",
    ),
    skills: ["Node.js", "PostgreSQL", "System Design", "Docker"],
    projectIds: ["project-nexus-campus", "project-terra-route", "project-med-lens", "project-lab-sync"],
    accent: "#1677ff",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:hello@msci-showcase.dev",
    },
  },
  {
    id: "thao-vy",
    slug: "le-thao-vy",
    fullName: "Lê Thảo Vy",
    englishName: "Vivian Le",
    initials: "TV",
    role: text("UI/UX Designer · Researcher", "UI/UX Designer · Researcher"),
    bio: text(
      "Thảo Vy biến hành vi và nhu cầu người dùng thành hệ thống tương tác có nhịp điệu, dễ tiếp cận và giàu cá tính.",
      "Thảo Vy turns user behavior and needs into interaction systems that are rhythmic, accessible, and distinctive.",
    ),
    quote: text(
      "Mỗi chuyển động nên giải thích điều gì đang xảy ra, không chỉ trang trí.",
      "Every motion should explain what is happening, not merely decorate it.",
    ),
    skills: ["UX Research", "Figma", "Interaction Design", "Accessibility"],
    projectIds: ["project-nexus-campus", "project-terra-route", "project-circuit-quest", "project-nova-desk"],
    accent: "#21d4fd",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:hello@msci-showcase.dev",
    },
  },
  {
    id: "quang-khang",
    slug: "pham-quang-khang",
    fullName: "Phạm Quang Khang",
    englishName: "Ken Pham",
    initials: "QK",
    role: text("Creative Developer · QA", "Creative Developer · QA"),
    bio: text(
      "Quang Khang xây dựng các tương tác giàu cảm giác và thiết kế chiến lược kiểm thử để trải nghiệm vẫn ổn định trên nhiều thiết bị.",
      "Quang Khang builds expressive interactions and testing strategies that keep experiences stable across devices.",
    ),
    quote: text(
      "Chi tiết đáng nhớ chỉ có giá trị khi trải nghiệm cốt lõi vẫn vững chắc.",
      "Memorable details matter only when the core experience stays solid.",
    ),
    skills: ["React", "Creative Coding", "Playwright", "Performance"],
    projectIds: ["project-terra-route", "project-med-lens", "project-circuit-quest", "project-lab-sync", "project-nova-desk"],
    accent: "#6366f1",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:hello@msci-showcase.dev",
    },
  },
];

export function getMemberById(id: string) {
  return teamMembers.find((member) => member.id === id);
}

export function getProjectMembers(memberIds: string[]) {
  return memberIds.flatMap((id) => {
    const member = getMemberById(id);
    return member ? [member] : [];
  });
}
