import type { Metadata } from 'next';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore projects built by Harsha Vardhan Yanakandla – SaaS products, web apps, and full-stack applications using React, Next.js, and Node.js.',
  alternates: {
    canonical: 'https://www.harshavy.in/projects',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.harshavy.in/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Projects',
      item: 'https://www.harshavy.in/projects',
    },
  ],
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Script
        id="breadcrumb-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        strategy="afterInteractive"
      />
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}
