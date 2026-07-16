import type {
  LocalizedText,
  ProjectCategory,
  ProjectStatus,
  TechnologyCategory,
} from "@/types/content";

export const siteConfig = {
  name: "MSCI Showcase",
  shortName: "MSCI",
  description: {
    vi: "Không gian triển lãm số dành cho các dự án công nghệ do đội ngũ MSCI thiết kế và phát triển.",
    en: "A digital exhibition for technology projects designed and developed by the MSCI team.",
  },
  email: "hello@msci-showcase.dev",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  foundedYear: 2024,
} as const;

export const navigation: Array<{ href: string; label: LocalizedText }> = [
  { href: "/", label: { vi: "Trang chủ", en: "Home" } },
  { href: "/projects", label: { vi: "Dự án", en: "Projects" } },
  { href: "/about", label: { vi: "Về MSCI", en: "About" } },
  { href: "/team", label: { vi: "Đội ngũ", en: "Team" } },
  { href: "/contact", label: { vi: "Liên hệ", en: "Contact" } },
];

export const categoryLabels: Record<ProjectCategory, LocalizedText> = {
  website: { vi: "Website", en: "Website" },
  mobile: { vi: "Ứng dụng di động", en: "Mobile App" },
  desktop: { vi: "Ứng dụng desktop", en: "Desktop App" },
  ai: { vi: "AI / Học máy", en: "AI / Machine Learning" },
  game: { vi: "Trò chơi", en: "Game" },
  design: { vi: "Thiết kế UI/UX", en: "UI/UX Design" },
  research: { vi: "Nghiên cứu", en: "Research" },
  other: { vi: "Khác", en: "Other" },
};

export const statusLabels: Record<ProjectStatus, LocalizedText> = {
  completed: { vi: "Hoàn thành", en: "Completed" },
  "in-development": { vi: "Đang phát triển", en: "In Development" },
  maintained: { vi: "Đang duy trì", en: "Maintained" },
  prototype: { vi: "Bản thử nghiệm", en: "Prototype" },
  archived: { vi: "Đã lưu trữ", en: "Archived" },
};

export const technologyCategoryLabels: Record<
  TechnologyCategory,
  LocalizedText
> = {
  frontend: { vi: "Frontend", en: "Frontend" },
  backend: { vi: "Backend", en: "Backend" },
  database: { vi: "Cơ sở dữ liệu", en: "Database" },
  design: { vi: "Thiết kế", en: "Design" },
  deployment: { vi: "Triển khai", en: "Deployment" },
  testing: { vi: "Kiểm thử", en: "Testing" },
  other: { vi: "Khác", en: "Other" },
};

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flutter",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "Figma",
  "TensorFlow",
  "Playwright",
] as const;
