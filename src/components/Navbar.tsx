'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 transition-all duration-500 ${
          scrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent'
        }`}
      >
        <div className="text-xl font-bold tracking-tighter mix-blend-difference z-10 relative">
          <a href="#hero" className="font-playfair text-2xl uppercase tracking-widest hidden sm:block">Harsha Vardhan</a>
          <a href="#hero" className="font-playfair text-2xl uppercase tracking-widest sm:hidden">HVY.</a>
        </div>

        <nav className="hidden md:flex items-center gap-8 mix-blend-difference z-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-wide hover:text-zinc-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[6px] cursor-pointer z-[60] relative"
          aria-label="Toggle Menu"
        >
          <div className={`w-8 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
          <div className={`w-8 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-playfair text-4xl text-zinc-100 uppercase tracking-widest hover:text-zinc-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
