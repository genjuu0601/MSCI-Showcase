import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ đội ngũ MSCI để trao đổi về dự án, hợp tác hoặc cơ hội nghiên cứu.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <ContactPage />;
}
