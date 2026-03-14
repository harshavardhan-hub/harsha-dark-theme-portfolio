'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-zinc-800/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-zinc-800/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-zinc-400 tracking-widest uppercase text-sm font-medium"
          >
            Full Stack Developer
          </motion.h2>
          
          <h1 className="font-playfair text-6xl sm:text-7xl md:text-9xl font-bold leading-[0.9] tracking-tighter">
            <span className="block overflow-hidden pb-2">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="block"
              >
                Harsha
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2 text-zinc-400">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block"
              >
                Vardhan.
              </motion.span>
            </span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, flexGrow: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-[2px] bg-zinc-300 mt-4"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mt-4 font-light text-balance"
          >
            I build fast, scalable, and reliable web applications that are user-friendly, high-performing, and impactful.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-24 flex items-center gap-4"
      >
        <span className="text-xs tracking-widest uppercase text-zinc-500 transform -rotate-90 origin-left">Scroll</span>
        <div className="w-[1px] h-16 bg-zinc-800 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-zinc-400 absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
