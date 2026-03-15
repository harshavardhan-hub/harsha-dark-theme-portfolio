import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Harsha Vardhan Yanakandla – Full Stack Developer available for freelance projects, collaborations, and opportunities.',
  alternates: {
    canonical: 'https://www.harshavy.in/contact',
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
      name: 'Contact',
      item: 'https://www.harshavy.in/contact',
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Script
        id="breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        strategy="afterInteractive"
      />
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
