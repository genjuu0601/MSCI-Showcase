import type { Metadata } from "next";
import { TeamPage } from "@/components/pages/team-page";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Đội ngũ phát triển",
  description: "Gặp gỡ các thành viên MSCI và khám phá vai trò, kỹ năng cùng những dự án họ đã thực hiện.",
  alternates: { canonical: "/team" },
};

export default function Team() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const structuredData = teamMembers.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.fullName,
    alternateName: member.englishName,
    jobTitle: member.role.en,
    description: member.bio.en,
    url: `${baseUrl}/team#${member.slug}`,
  }));

  return (
    <>
      <TeamPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
