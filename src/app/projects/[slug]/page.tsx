import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/pages/project-detail-page";
import { getProjectBySlug, getRelatedProjects, projects } from "@/data/projects";
import { getProjectMembers } from "@/data/team";
import { categoryLabels } from "@/data/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title.vi,
    description: project.shortDescription.vi,
    keywords: project.seo.keywords,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title.vi,
      description: project.shortDescription.vi,
      url: `/projects/${project.slug}`,
      publishedTime: `${project.year}-01-01`,
      tags: project.seo.keywords,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const members = getProjectMembers(project.memberIds);
  const relatedProjects = getRelatedProjects(project);
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: project.title.en,
        description: project.shortDescription.en,
        applicationCategory: categoryLabels[project.category].en,
        dateCreated: `${project.year}-01-01`,
        author: { "@type": "Organization", name: "MSCI Team" },
        url: `${baseUrl}/projects/${project.slug}`,
        keywords: project.seo.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${baseUrl}/projects` },
          { "@type": "ListItem", position: 3, name: project.title.en, item: `${baseUrl}/projects/${project.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <ProjectDetailPage project={project} members={members} relatedProjects={relatedProjects} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
