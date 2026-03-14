'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-zinc-950 relative overflow-hidden">
      {/* Background large text for atmospheric effect */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-playfair font-bold text-zinc-900/50 whitespace-nowrap pointer-events-none select-none z-0">
        Let&apos;s Talk.
      </h2>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="w-16 h-[1px] bg-zinc-600 mb-4" />
          
          <h3 className="text-3xl md:text-5xl font-playfair text-zinc-100 max-w-2xl leading-tight">
            Got an idea? Need a developer who understands design? Let&apos;s make it happen.
          </h3>
          
          <h4 className="text-xl md:text-2xl text-zinc-400 font-light mb-8">
            Available for freelance opportunities and full-time roles.
          </h4>
          
          <a href="mailto:contact@harsha.com" className="relative inline-flex items-center justify-center px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-medium tracking-wide text-lg hover:bg-zinc-300 transition-colors duration-300 group overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Say Hello
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
