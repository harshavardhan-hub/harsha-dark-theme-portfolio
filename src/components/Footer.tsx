export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-50 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="font-playfair text-4xl md:text-6xl text-center mb-6 text-zinc-300">
          Let&apos;s build something together.
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          <a href="mailto:yanakandlaharshavardhan@gmail.com" className="hover:text-zinc-400 transition-colors text-lg tracking-wide border-b border-transparent hover:border-zinc-400 pb-1">Email</a>
          <a href="https://www.linkedin.com/in/harsha-vardhan-yanakandla" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors text-lg tracking-wide border-b border-transparent hover:border-zinc-400 pb-1">LinkedIn</a>
          <a href="https://github.com/harshavardhan-hub" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors text-lg tracking-wide border-b border-transparent hover:border-zinc-400 pb-1">GitHub</a>
          <a href="https://wa.me/919441591443" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors text-lg tracking-wide border-b border-transparent hover:border-zinc-400 pb-1">WhatsApp</a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-zinc-600 text-sm mt-8 border-t border-zinc-900 pt-8">
          <p>© {new Date().getFullYear()} Harsha Vardhan Yanakandla. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with passion.</p>
        </div>
      </div>
    </footer>
  );
}
