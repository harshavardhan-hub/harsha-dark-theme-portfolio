'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={containerRef} className="py-32 pt-40 md:py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col gap-8">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-zinc-100 leading-tight"
          >
            Building the future, one line at a time.
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 font-light space-y-6"
          >
            <p>
              My name is Harsha Vardhan Yanakandla. I&apos;m a Full Stack Developer who builds modern applications with technologies like NextJS, Typescript, React, Node.js, and PostgreSQL, enhancing them with AI-powered features.
            </p>
            <p>
              My passion lies in transforming ideas into impactful digital products that deliver value. Whether developing from the ground up or improving existing systems, I approach every project with curiosity, creativity, and a results-driven mindset.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact" className="inline-block mt-4 text-zinc-100 uppercase tracking-widest text-sm border-b border-zinc-100 pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors">
              Let&apos;s talk
            </a>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
          <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-2xl border border-zinc-800/50">
            <motion.div style={{ y: imageY }} className="w-full h-[120%] absolute -top-[10%] left-0">
              <Image 
                src="/harsha.png" 
                alt="Harsha Vardhan" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                priority
              />
            </motion.div>
            {/* Subtle inner dark shadow to make it pop */}
            <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none box-border border-4 border-zinc-950/30" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
