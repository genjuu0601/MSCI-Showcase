import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/projects-page";

export const metadata: Metadata = {
  title: "Dự án",
  description: "Khám phá các dự án website, mobile, AI, game và nghiên cứu của đội ngũ MSCI.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return <ProjectsPage />;
}
