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
  metadataBase: new URL("https://www.harshavy.in"),
  title: {
    default: "Harsha Vardhan Yanakandla | Portfolio",
    template: "%s | Harsha Vardhan Yanakandla Portfolio",
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
    canonical: "https://www.harshavy.in/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.harshavy.in/",
    siteName: "Harsha Vardhan Yanakandla",
    title: "Harsha Vardhan Yanakandla",
    description:
      "Explore the portfolio of Harsha Vardhan Yanakandla — Full-stack developer, specializing in React, Next.js, and premium digital experiences.",
    images: [
      {
        url: "/harsha.png",
        width: 1200,
        height: 630,
        alt: "Harsha Vardhan Yanakandla – Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Vardhan Yanakandla",
    description:
      "Portfolio of Harsha Vardhan Yanakandla — Full-stack developer specializing in React and Next.js.",
    images: ["/harsha.png"],
    creator: "@harshavy",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/favicon-192x192.png", sizes: "180x180", type: "image/png" },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harsha Vardhan Yanakandla",
  alternateName: ["Harsha", "Harsha Vardhan", "harshavy"],
  url: "https://www.harshavy.in",
  image: "https://www.harshavy.in/harsha.png",
  jobTitle: "Full Stack Developer",
  description:
    "Full-stack developer specializing in SaaS products, React, Next.js, and premium digital experiences.",
  sameAs: [
    "https://github.com/harshavy",
    "https://linkedin.com/in/harshavy",
    "https://twitter.com/harshavy",
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

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Harsha Vardhan Yanakandla Portfolio",
  url: "https://www.harshavy.in",
};

const jsonLdCreativeWork = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Harsha Vardhan's Projects",
  author: {
    "@type": "Person",
    name: "Harsha Vardhan Yanakandla"
  },
  url: "https://www.harshavy.in/projects"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-192x192.png" />
        <link rel="canonical" href="https://www.harshavy.in/" />
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
        <Script
          id="json-ld-creative-work"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCreativeWork) }}
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
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
