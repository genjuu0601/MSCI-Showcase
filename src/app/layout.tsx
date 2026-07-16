import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { BackToTop } from "@/components/layout/back-to-top";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeBackground } from "@/components/layout/theme-background";
import { LanguageProvider } from "@/components/providers/language-provider";
import { siteConfig } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: "MSCI Showcase | Where ideas become digital experiences",
    template: "%s | MSCI Showcase",
  },
  description: siteConfig.description.vi,
  applicationName: siteConfig.name,
  keywords: ["MSCI", "technology portfolio", "project showcase", "student projects", "HCMUT"],
  authors: [{ name: "MSCI Team" }],
  creator: "MSCI Team",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    siteName: siteConfig.name,
    title: "MSCI Showcase",
    description: siteConfig.description.vi,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSCI Showcase",
    description: siteConfig.description.en,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05070d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${manrope.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        <LanguageProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <ThemeBackground />
          <ScrollProgress />
          <SiteHeader />
          {children}
          <SiteFooter />
          <BackToTop />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
              email: siteConfig.email,
              sameAs: [siteConfig.github, siteConfig.linkedin],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
