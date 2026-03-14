'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const certificates = [
  'https://media-content.ccbp.in/certificates/share/IIYBIHSQAD.png',
  'https://media-content.ccbp.in/certificates/share/NQUYIYCZTR.png',
  'https://media-content.ccbp.in/certificates/share/EFZNPGPJYM.png',
  'https://media-content.ccbp.in/certificates/share/AUOMVYSKJS.png',
  'https://media-content.ccbp.in/certificates/share/DWLGKLFLZI.png',
  'https://media-content.ccbp.in/certificates/share/CCKZUQZLAL.png',
  'https://media-content.ccbp.in/certificates/share/NHYVZKECZO.png',
  'https://media-content.ccbp.in/certificates/share/GJYQQMZAVH.png'
];

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  const handleCertificateClick = (certUrl: string) => {
    window.open(certUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="certificates"
      ref={containerRef}
      className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="flex flex-col gap-6">
            <h2 className="font-playfair text-5xl md:text-7xl text-zinc-100 tracking-tight leading-none">
              Certifications.
            </h2>
            <p className="text-zinc-400 max-w-xl font-light text-lg pb-1 text-balance">
              Professional credentials that validate my expertise and commitment to continuous learning.
            </p>
          </div>
        </motion.div>

        {/* Desktop: Marquee Animation */}
        <div className="hidden lg:block relative w-full overflow-hidden">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 py-4">
            {/* First Set */}
            {certificates.map((cert, index) => (
              <div
                key={`first-${index}`}
                className="relative w-[400px] aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer bg-zinc-900 flex-shrink-0"
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Premium colored overlay appears on hover */}
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500" />

                {/* View Certificate Button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="bg-zinc-100 text-zinc-950 hover:bg-white px-6 py-2.5 rounded-full font-medium text-sm tracking-wide shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Certificate
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicated Set for Seamless Looping */}
            {certificates.map((cert, index) => (
              <div
                key={`second-${index}`}
                className="relative w-[400px] aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer bg-zinc-900 flex-shrink-0"
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="bg-zinc-100 text-zinc-950 hover:bg-white px-6 py-2.5 rounded-full font-medium text-sm tracking-wide shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Certificate
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: Grid with Show More */}
        <div className="lg:hidden flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleCertificates.map((cert, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={index}
                className="relative w-full aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer bg-zinc-900"
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="bg-zinc-100 text-zinc-950 hover:bg-white px-6 py-2.5 rounded-full font-medium text-sm tracking-wide shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {certificates.length > 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-block mt-4 text-zinc-100 uppercase tracking-widest text-sm border-b border-zinc-100 pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors"
              >
                {showAll ? 'Show Less' : `View All (${certificates.length})`}
              </button>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
