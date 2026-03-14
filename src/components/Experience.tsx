'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" aria-label="Harsha Vardhan Work Experience" className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 relative">
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

        <div className="relative border-l border-zinc-800 pl-8 md:pl-16 w-full space-y-16 md:space-y-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[37px] md:-left-[69px] top-1 w-2 h-2 rounded-full bg-zinc-400 shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]" />
            <div className="flex flex-col gap-2">
              <span className="text-zinc-500 font-medium">Professional Experience</span>
              <h3 className="font-playfair text-2xl md:text-3xl text-zinc-100">Paid Intern</h3>
              <p className="text-zinc-400 text-lg">Raizzify</p>
              <p className="text-zinc-400 font-light mt-4 max-w-2xl">
                Contributed to building complete web applications and integrated AI-powered features to enhance functionality. Focused on innovation, scalability, and solving practical challenges for real business needs.
              </p>
            </div>
          </motion.div>



          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -left-[37px] md:-left-[69px] top-1 w-2 h-2 rounded-full bg-zinc-700" />
            <div className="flex flex-col gap-2">
              <span className="text-zinc-500 font-medium">2022 — 2026</span>
              <h3 className="font-playfair text-2xl md:text-3xl text-zinc-100">BTech in Electronics & Communication</h3>
              <p className="text-zinc-400 text-lg">Jawaharlal Nehru Technological University Anantapur</p>
            </div>
          </motion.div>



        </div>

      </div>
    </section>
  );
}
