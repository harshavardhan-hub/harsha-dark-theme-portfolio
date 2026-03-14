'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: "CareOps",
    description: "Seamless booking and scheduling system for medical professionals with automated calendar management.",
    tech: ["React", "Node.js", "Google Calendar API", "Tailwind"],
    image: "/careops.png",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Marketing Optimization Backend",
    description: "Core algorithmic backbone utilizing constraint-based logic to maximize marketing ROI across platforms.",
    tech: ["FastAPI", "Python", "Algorithms", "PostgreSQL"],
    image: "/marketing.png",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time data visualization and metrics tracking with sub-second latency for enterprise clients.",
    tech: ["React", "PostgreSQL", "REST APIs", "Framer Motion"],
    image: "/analytics.png",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Travel Planning App",
    description: "AI-integrated smart itinerary generator that plans optimized travel routes based on user preferences.",
    tech: ["Next.js", "TypeScript", "AI Integration", "Vercel"],
    image: "/travel.png",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2 }}
      className={`flex flex-col gap-6 ${index % 2 === 0 ? 'mt-0' : 'md:mt-32'}`}
    >
      <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer bg-zinc-900">
        <motion.div style={{ y: imageY }} className="absolute -top-[15%] left-0 w-full h-[130%]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        </motion.div>
        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="font-playfair text-3xl font-medium text-zinc-100 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-4 text-zinc-400">
            <a href={project.githubUrl} className="hover:text-zinc-100 transition-colors"><Github size={20} /></a>
            <a href={project.liveUrl} className="hover:text-zinc-100 transition-colors"><ArrowUpRight size={22} /></a>
          </div>
        </div>

        <p className="text-zinc-400 font-light text-lg line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs tracking-widest uppercase text-zinc-500 font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-zinc-100 tracking-tight leading-none">
            Selected<br />Works.
          </h2>
          <p className="text-zinc-400 max-w-md font-light text-lg pb-1">
            A showcase of products built from the ground up, combining powerful architecture with intuitive design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-24">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
