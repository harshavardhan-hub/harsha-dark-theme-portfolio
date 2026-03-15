import type { Metadata } from 'next';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Harsha Vardhan Yanakandla – Full Stack Developer specializing in React, Next.js, SaaS products, and premium digital experiences.',
  alternates: {
    canonical: 'https://www.harshavy.in/about',
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
      name: 'About',
      item: 'https://www.harshavy.in/about',
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Script
        id="breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        strategy="afterInteractive"
      />
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
