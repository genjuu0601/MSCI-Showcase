export type Language = "vi" | "en";

export type LocalizedText = Record<Language, string>;

export const PROJECT_CATEGORIES = [
  "website",
  "mobile",
  "desktop",
  "ai",
  "game",
  "design",
  "research",
  "other",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECT_STATUSES = [
  "completed",
  "in-development",
  "maintained",
  "prototype",
  "archived",
] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export type TechnologyCategory =
  | "frontend"
  | "backend"
  | "database"
  | "design"
  | "deployment"
  | "testing"
  | "other";

export type ProjectVisualMotif =
  | "orbit"
  | "routes"
  | "vision"
  | "circuit"
  | "research"
  | "windows";

export interface Technology {
  name: string;
  category: TechnologyCategory;
}

export interface ProjectFeature {
  title: LocalizedText;
  description: LocalizedText;
  icon: "spark" | "shield" | "chart" | "users" | "code" | "layers";
}

export interface ProjectGalleryItem {
  id: string;
  scene: "overview" | "detail" | "system";
  alt: LocalizedText;
  caption: LocalizedText;
}

export interface ProjectChallenge {
  title: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
}

export interface Project {
  id: string;
  slug: string;
  title: LocalizedText;
  tagline: LocalizedText;
  shortDescription: LocalizedText;
  category: ProjectCategory;
  status: ProjectStatus;
  year: number;
  featured: boolean;
  role: LocalizedText;
  overview: {
    context: LocalizedText;
    problem: LocalizedText;
    goal: LocalizedText;
    audience: LocalizedText;
    solution: LocalizedText;
    result: LocalizedText;
  };
  visual: {
    motif: ProjectVisualMotif;
    primary: string;
    secondary: string;
    tertiary: string;
  };
  technologies: Technology[];
  features: ProjectFeature[];
  gallery: ProjectGalleryItem[];
  challenges: ProjectChallenge[];
  memberIds: string[];
  links?: {
    demo?: string;
    github?: string;
    documentation?: string;
    figma?: string;
  };
  seo: {
    keywords: string[];
  };
}

export interface TeamMember {
  id: string;
  slug: string;
  fullName: string;
  englishName?: string;
  initials: string;
  avatar?: string;
  role: LocalizedText;
  bio: LocalizedText;
  quote: LocalizedText;
  skills: string[];
  projectIds: string[];
  accent: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    portfolio?: string;
    email?: string;
  };
}
