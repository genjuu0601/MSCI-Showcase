import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "Về MSCI",
  description: "Tìm hiểu câu chuyện, tầm nhìn, giá trị và phương pháp làm việc của đội ngũ MSCI.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return <AboutPage />;
}
