/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Quote, Star, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-36 bg-[#0C0C0C] overflow-hidden px-6 md:px-12"
    >
      {/* Immersive breathing radial glow backdrop */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          opacity: [0.6, 0.85, 0.55, 0.75, 0.6],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/[0.04] rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* Drifting soft warm light texture */}
      <motion.div
        animate={{
          x: [-40, 40, -20, 30, -40],
          y: [-30, 45, -45, 25, -30],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-brand-muted-rose/[0.025] rounded-full blur-[160px] pointer-events-none z-0"
      />

      {/* Floating atmospheric luxury particles crawling upwards */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => {
          const size = i % 2 === 0 ? 3 : 5;
          const delay = i * 2.2;
          const duration = 16 + (i * 3.5);
          const left = `${12 + (i * 11)}%`;
          
          return (
            <motion.div
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{
                y: "-10%",
                opacity: [0, 0.35, 0.5, 0.15, 0],
                x: [0, (i % 2 === 0 ? 25 : -25), (i % 3 === 0 ? -12 : 12), 0]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              style={{
                left: left,
                width: `${size}px`,
                height: `${size}px`,
              }}
              className="absolute rounded-full bg-[#E5D1B8]/30 filter blur-[0.4px] shadow-[0_0_10px_rgba(229,209,184,0.15)]"
            />
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.4em] text-brand-muted-rose uppercase font-medium inline-flex items-center gap-2 mb-4">
            <MessageCircle size={10} className="text-brand-gold animate-pulse" />
            Whispers of Appreciation
          </span>
          <h2 id="testimonials-title" className="font-serif font-light text-4xl md:text-5xl text-white tracking-tighter leading-none">
            Sanctuary <span className="font-serif italic text-brand-muted-rose">Aura Stories</span>
          </h2>
        </div>

        {/* Cinematic Testimonial Card Frame with ultra-subtle floating motion */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-[#141414]/25 backdrop-blur-3xl border border-white/[0.035] rounded-[40px] p-8 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.07),inset_0_0_50px_rgba(0,0,0,0.4)] relative select-none overflow-hidden"
        >
          {/* Subtle luxurious internal warm/cool gradient light blurs inside the panel */}
          <div className="absolute top-0 inset-x-0 h-[250px] bg-[radial-gradient(circle_at_50%_0%,rgba(229,209,184,0.05)_0%,transparent_70%)] pointer-events-none z-0" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(216,180,254,0.02)_0%,transparent_65%)] pointer-events-none z-0" />
          
          {/* Premium soft glass perimeter light shimmer ring */}
          <div className="absolute inset-0 border border-[#E5D1B8]/[0.02] rounded-[40px] pointer-events-none z-10" />
          
          {/* Quote Icon watermark */}
          <div className="absolute top-8 left-8 text-brand-muted-rose/10 pointer-events-none z-0">
            <Quote size={80} className="stroke-[1]" />
          </div>

          <div className="relative min-h-[170px] flex flex-col justify-between z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
                data-cursor="card"
              >
                {/* Rating alignment */}
                <div className="flex gap-1 justify-center">
                  {Array.from({ length: activeTestimonial.rating }).map((_, sIdx) => (
                    <Star key={sIdx} size={13} className="text-brand-gold fill-brand-gold animate-pulse" />
                  ))}
                </div>

                {/* Substantive Quote Block */}
                <blockquote className="max-w-2xl md:max-w-[42rem] mx-auto text-center">
                  <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-light tracking-wide px-4">
                    “{activeTestimonial.quote}”
                  </p>
                </blockquote>

                {/* Author Credentials */}
                <div className="text-center">
                  <span className="font-serif text-lg text-brand-muted-rose tracking-wide block mb-1">
                    {activeTestimonial.author}
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.25em] text-[#EBE3D5]/50 uppercase font-medium block">
                    {activeTestimonial.role}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls pipeline */}
          <div className="relative z-10 flex items-center justify-between mt-12 pt-8 border-t border-white/[0.04]">
            {/* Step Counter index */}
            <div className="font-sans text-[10px] tracking-widest text-[#EBE3D5]/40 uppercase font-mono">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </div>

            {/* Custom Interactive buttons with triggers */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                data-cursor="button"
                className="w-11 h-11 rounded-full border border-white/10 hover:border-brand-muted-rose/40 hover:bg-[#0C0C0C]/50 text-white flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                data-cursor="button"
                className="w-11 h-11 rounded-full border border-white/10 hover:border-brand-muted-rose/40 hover:bg-[#0C0C0C]/50 text-white flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
