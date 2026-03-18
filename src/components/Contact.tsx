'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    
    setStatus('submitting');
    
    const webhookUrl = "https://discord.com/api/webhooks/1483781012310855721/Atn0AwfzHlNlWX8nLEEkaYb2wBiKApVb4OGJ14cyo7Os9x5IRe5ilB7UHZ_RPwfRjzCR";
    
    const payload = {
      embeds: [
        {
          title: "New Contact Form Submission 🚀",
          color: 0x3b82f6,
          fields: [
            { name: "Name", value: formData.name || "N/A", inline: true },
            { name: "Email", value: formData.email || "N/A", inline: true },
            { name: "Phone", value: formData.phone || "N/A", inline: true },
            { name: "Message", value: formData.message || "N/A" }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" aria-label="Contact Harsha Vardhan" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-zinc-950 relative overflow-hidden">
      {/* Background large text for atmospheric effect */}
      <h2 className="sr-only">Contact</h2>
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-playfair font-bold text-zinc-900/50 whitespace-nowrap pointer-events-none select-none z-0">
        Let&apos;s Talk.
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-8"
        >
          <div className="w-16 h-[1px] bg-zinc-600 mb-4" />

          <p className="text-3xl md:text-5xl font-playfair text-zinc-100 max-w-2xl leading-tight">
            Need a developer who can handle entire applications? Let&apos;s make it happen.
          </p>

          <p className="text-xl md:text-2xl text-zinc-400 font-light mb-8">
            Available for full-time opportunities.
          </p>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form 
            onSubmit={handleSubmit}
            className="bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md p-8 md:p-10 rounded-3xl flex flex-col gap-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name <span className="text-rose-500">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email (optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Phone No <span className="text-rose-500">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message <span className="text-rose-500">*</span></label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="relative w-full mt-2 inline-flex items-center justify-center px-8 py-4 bg-zinc-100 text-zinc-950 rounded-xl font-medium tracking-wide text-lg hover:bg-white transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === 'submitting' ? '...' : status === 'success' ? 'Sent!' : 'Send'}
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>

            {status === 'error' && (
              <p className="text-rose-500 text-sm text-center mt-2">
                Something went wrong. Please try again.
              </p>
            )}
            {status === 'success' && (
              <p className="text-emerald-500 text-sm text-center mt-2">
                Your message was sent successfully!
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}

