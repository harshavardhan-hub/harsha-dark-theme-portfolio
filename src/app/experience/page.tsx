import type { Metadata } from 'next';
import Experience from '@/components/Experience';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'View the professional experience of Harsha Vardhan Yanakandla – roles, companies, and achievements as a Full Stack Developer.',
  alternates: {
    canonical: 'https://www.harshavy.in/experience',
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
      name: 'Experience',
      item: 'https://www.harshavy.in/experience',
    },
  ],
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Script
        id="breadcrumb-experience"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        strategy="afterInteractive"
      />
      <Navbar />
      <Experience />
      <Footer />
    </main>
  );
}
