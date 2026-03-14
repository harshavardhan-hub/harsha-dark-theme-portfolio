'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-zinc-500 uppercase tracking-widest text-sm mb-4 block">The Journey</span>
          <h2 className="font-playfair text-4xl md:text-6xl text-zinc-100 tracking-tight">
            Building from day one.
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-800 pl-8 md:pl-16 w-full space-y-20">
          {/* Node 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[37px] md:-left-[69px] top-1 w-2 h-2 rounded-full bg-zinc-400 shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]" />
            <div className="flex flex-col gap-2">
              <span className="text-zinc-500 font-medium">Present — 2026</span>
              <h3 className="font-playfair text-2xl md:text-3xl text-zinc-100">BTech in Computer Science</h3>
              <p className="text-zinc-400 text-lg">Gates Institute of Technology</p>
              <p className="text-zinc-400 font-light mt-4 max-w-2xl">
                Currently pursuing my formal education while actively building real-world products. 
                Instead of waiting for graduation to start my career, I&apos;ve spent my college years launching full-stack applications, designing robust systems, and mastering modern frameworks like Next.js and React.
              </p>
            </div>
          </motion.div>

          {/* Node 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -left-[37px] md:-left-[69px] top-1 w-2 h-2 rounded-full bg-zinc-700" />
            <div className="flex flex-col gap-2">
              <span className="text-zinc-500 font-medium">The Foundation</span>
              <h3 className="font-playfair text-2xl md:text-3xl text-zinc-100">Independent Engineer</h3>
              <p className="text-zinc-400 font-light mt-4 max-w-2xl">
                I&apos;ve architected SaaS dashboards, AI tools, and enterprise interfaces independently. 
                My focus has always been on delivering solutions that are not just technically sound, but visually breathtaking and relentlessly user-centric.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
