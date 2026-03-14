import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Script from "next/script";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harshavy.in"),
  title: {
    default: "Harsha Vardhan | Full-Stack Developer & SaaS Builder",
    template: "%s | Harsha Vardhan",
  },
  description:
    "Harsha Vardhan Yanakandla – Full-stack developer specializing in SaaS products, web apps, and premium digital experiences. Explore projects, experience, and skills.",
  keywords: [
    "Harsha",
    "Harsha Vardhan",
    "Harsha Vardhan Yanakandla",
    "Harsha developer",
    "Harsha portfolio",
    "harshavy",
    "harshavy.in",
    "Full-Stack Developer",
    "SaaS Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer India",
    "Software Engineer",
    "Portfolio",
    "About Harsha",
    "Projects by Harsha",
    "Harsha experience",
    "Contact Harsha",
  ],
  authors: [{ name: "Harsha Vardhan Yanakandla", url: "https://harshavy.in" }],
  creator: "Harsha Vardhan Yanakandla",
  publisher: "Harsha Vardhan Yanakandla",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://harshavy.in/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshavy.in/",
    siteName: "Harsha Vardhan Portfolio",
    title: "Harsha Vardhan | Full-Stack Developer & SaaS Builder",
    description:
      "Explore the portfolio of Harsha Vardhan — Full-stack developer, SaaS builder, and creator of premium digital experiences.",
    images: [
      {
        url: "/harsha.png",
        width: 1200,
        height: 630,
        alt: "Harsha Vardhan – Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Vardhan | Full-Stack Developer & SaaS Builder",
    description:
      "Portfolio of Harsha Vardhan Yanakandla — Full-stack developer specializing in SaaS, React, and Next.js.",
    images: ["/harsha.png"],
    creator: "@harshavy",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harsha Vardhan Yanakandla",
  alternateName: ["Harsha", "Harsha Vardhan", "harshavy"],
  url: "https://harshavy.in",
  image: "https://harshavy.in/harsha.png",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer specializing in SaaS products, React, Next.js, and premium digital experiences.",
  sameAs: [
    "https://github.com/harshavy",
    "https://linkedin.com/in/harshavy",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "SaaS Products",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://harshavy.in/" />
        <meta name="theme-color" content="#09090b" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
      </head>
      <body className={`${outfit.variable} ${playfair.variable} bg-zinc-950 text-zinc-50 font-outfit antialiased selection:bg-white selection:text-black`}>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
