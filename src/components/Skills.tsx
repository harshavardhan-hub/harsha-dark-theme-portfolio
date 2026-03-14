'use client';

import { motion } from 'framer-motion';

const skills = [
  "React", "Next.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Bootstrap",
  "Node.js", "Express.js", "MongoDB", "PostgreSQL", "SQL", "RESTful APIs", "Python",
  "Git/GitHub", "VS Code", "MongoDB Atlas", "Vercel", "Render", "Framer Motion"
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950/50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="w-full md:w-1/3 flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-32 mb-8 md:mb-0"
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-zinc-100 mb-6 tracking-tight">
              Tools of<br/>the trade.
            </h2>
            <p className="text-zinc-400 font-light text-lg">
              A carefully curated stack designed for performance, stability, and stunning user experiences. I only use what I can master.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-2/3 flex flex-wrap gap-4 md:gap-6 items-start content-start">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
              className="px-6 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-zinc-300 font-medium tracking-wide cursor-default transition-colors duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
