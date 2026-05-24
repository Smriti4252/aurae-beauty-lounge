/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Lenis from 'lenis';
import { Sparkles, Instagram, Mail, Calendar, Compass, ShieldCheck } from 'lucide-react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import RitualsSection from './components/RitualsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import AtelierSection from './components/AtelierSection';
import BookingSection from './components/BookingSection';
import CustomCursor from './components/CustomCursor';
import { AtelierProduct, ServiceRitual } from './types';

export default function App() {
  const [selectedRitualForBooking, setSelectedRitualForBooking] = useState<ServiceRitual | null>(null);
  
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  
  // Luxury bag checkout counter
  const [cart, setCart] = useState<AtelierProduct[]>([]);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectRitualForBooking = (ritual: ServiceRitual) => {
    setSelectedRitualForBooking(ritual);
    // Scroll directly to reservation station
    handleScrollToSection('booking');
  };

  const handleAddToCart = (product: AtelierProduct) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div id="aurae-app-root" className="relative min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-muted-rose/20 selection:text-brand-muted-rose overflow-x-hidden">
      
      {/* Luxury Custom Cursor */}
      <CustomCursor />

      {/* Background radial blobs from the Immersive UI Design */}
      <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-[#A68B5B] rounded-full blur-[150px] opacity-[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-5%] w-[800px] h-[800px] bg-[#D4A373] rounded-full blur-[180px] opacity-[0.12] pointer-events-none z-0" />

      {/* Cinematic Film Grain overlay for editorial texture */}
      <div className="fixed inset-0 film-grain z-50 pointer-events-none" />

      {/* Elegant sticky header bar */}
      <Navigation
        onScrollToSection={handleScrollToSection}
      />

      {/* Primary experiential modules */}
      <main className="relative">
        
        {/* Act I: Hero storytelling entry */}
        <HeroSection
          onScrollToSection={handleScrollToSection}
        />

        {/* Act II: The Sensory treatments */}
        <RitualsSection
          onSelectRitual={handleSelectRitualForBooking}
        />

        {/* Act III: The Brand philosophy core */}
        <PhilosophySection />

        {/* Act IV: Immersive luxury campaign frames */}
        <GallerySection />

        {/* Act V: Whispers of appreciation / testimonials */}
        <TestimonialsSection />

        {/* Act VI: The Apothecary micro-boutique */}
        <AtelierSection
          onAddToCart={handleAddToCart}
          cartCount={cart.length}
        />

        {/* Act VII: The luxury booking Terminal */}
        <BookingSection
          preselectedRitual={selectedRitualForBooking}
        />

      </main>

      {/* Cinematic footer presenting design system alignments */}
      <motion.footer 
        id="editorial-footer" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.15,
            }
          }
        }}
        className="bg-gradient-to-b from-[#050505] via-[#080808] to-[#120f0d] text-[#EBE3D5]/80 border-t border-white/[0.035] py-24 md:py-32 px-6 md:px-12 select-none relative overflow-hidden"
      >
        
        {/* Breathing editorial light bloom backdrop inside the footer */}
        <motion.div
          animate={{
            scale: [1, 1.15, 0.95, 1.05, 1],
            opacity: [0.15, 0.22, 0.12, 0.18, 0.15],
            x: [0, 15, -10, 10, 0],
            y: [0, -10, 10, -5, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#E5D1B8]/[0.10] blur-[140px] pointer-events-none z-0"
        />

        {/* Top-left slow-breathing light leak bloom */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#A68B5B]/[0.08] blur-[120px] pointer-events-none z-0"
        />

        {/* Soft bottom-up atmospheric warm glow */}
        <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[80vw] h-[30vw] rounded-full bg-[radial-gradient(circle_at_bottom,rgba(229,209,184,0.045)_0%,transparent_70%)] pointer-events-none z-0" />

        {/* Extremely subtle floating cinematic dust particles inside footer closing scene */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => {
            const size = i % 2 === 0 ? 2 : 3;
            const delay = i * 2.8;
            const duration = 24 + i * 6;
            return (
              <motion.div
                key={i}
                initial={{ y: "115%", opacity: 0 }}
                animate={{
                  y: "-15%",
                  opacity: [0, 0.2, 0.32, 0.12, 0],
                  x: [0, i % 2 === 0 ? 8 : -8, i % 3 === 0 ? -4 : 4, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${10 + i * 16}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                }}
                className="absolute rounded-full bg-[#E5D1B8]/12 filter blur-[0.3px]"
              />
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Brand Col */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="md:col-span-4 space-y-6"
          >
            <div className="relative inline-block group/logo">
              {/* Subtle warm glow bloom behind local logo */}
              <motion.div
                animate={{
                  opacity: [0.06, 0.13, 0.06],
                  scale: [0.96, 1.03, 0.96],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-6 bg-[#E5D1B8] blur-[24px] pointer-events-none rounded-full"
              />
              
              <motion.span 
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 font-serif text-3.5xl tracking-[0.38em] font-light text-white block pr-2 cursor-default selection:bg-transparent"
              >
                AURAÉ
                {/* Shimmer sweep */}
                <motion.span
                  initial={{ x: "-100%" }}
                  animate={{ x: "130%" }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 11,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5D1B8]/18 to-transparent -skew-x-12 pointer-events-none"
                />
              </motion.span>
            </div>
            
            <p className="font-sans text-[11px] text-[#EBE3D5]/45 leading-relaxed max-w-sm font-light">
              An immersive design framework constructed under the rigorous ideals of modern fashion, editorial imagery, and fluid time physics. Created for portfolios of premium digital experiences.
            </p>
            
            <div className="flex items-center gap-5 text-[#EBE3D5]/45 pt-1">
              <a 
                href="#instagram"
                className="p-2.5 bg-white/[0.01] border border-white/[0.035] rounded-full text-[#EBE3D5]/45 hover:text-[#EBE3D5] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 shadow-sm hover:shadow-[0_0_20px_rgba(229,209,184,0.18),inset_0_0_10px_rgba(229,209,184,0.08)] hover:border-[#E5D1B8]/45"
              >
                <Instagram size={14} className="stroke-[1.5]" />
              </a>
              <a 
                href="#mail"
                className="p-2.5 bg-white/[0.01] border border-white/[0.035] rounded-full text-[#EBE3D5]/45 hover:text-[#EBE3D5] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 shadow-sm hover:shadow-[0_0_20px_rgba(229,209,184,0.18),inset_0_0_10px_rgba(229,209,184,0.08)] hover:border-[#E5D1B8]/45"
              >
                <Mail size={14} className="stroke-[1.5]" />
              </a>
            </div>
          </motion.div>

          {/* Links col */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="md:col-span-3 space-y-5"
          >
            <h5 className="font-sans text-[8.5px] tracking-[0.45em] text-white/95 uppercase font-semibold">
              Experiential Acts
            </h5>
            <ul className="space-y-3.5 font-sans text-xs text-[#EBE3D5]/45 font-light">
              {[
                { id: 'rituals', label: 'Act I: Sensory Rituals' },
                { id: 'philosophy', label: 'Act II: Space & Philosophy' },
                { id: 'gallery', label: 'Act III: Immersive Gallery' },
                { id: 'testimonials', label: 'Act IV: Sanctuary Whispers' },
                { id: 'atelier', label: 'Act V: Organic Apothecary' },
                { id: 'booking', label: 'Act VI: Reservation Terminal' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollToSection(item.id)}
                    className="group/item text-left cursor-pointer text-[#EBE3D5]/45 hover:text-[#E2C299] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center"
                  >
                    <span className="relative py-0.5 tracking-normal group-hover/item:tracking-wider transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.2px] bg-[#E2C299]/40 group-hover/item:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Design Specs col */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="md:col-span-5 space-y-5"
          >
            <h5 className="font-sans text-[8.5px] tracking-[0.45em] text-white/95 uppercase font-semibold">
              Design System Spec Sheets
            </h5>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-[11px] font-sans text-[#EBE3D5]/45 font-light">
              <div>
                <span className="text-white/80 font-medium block">Colors Spectrum</span>
                <span className="block mt-1 font-mono text-[9px] text-[#EBE3D5]/35 uppercase tracking-[0.05em]">#0C0C0C, #E5D1B8, #A68B5B</span>
              </div>
              <div>
                <span className="text-white/80 font-medium block">Text Hierarchy</span>
                <span className="block mt-1 font-mono text-[9px] text-[#EBE3D5]/35 uppercase tracking-[0.05em]">Cormorant Garamond, Inter</span>
              </div>
              <div>
                <span className="text-white/80 font-medium block">Motion curves</span>
                <span className="block mt-1 font-mono text-[9px] text-[#EBE3D5]/35 tracking-[0.05em]">cubic-bezier(0.16, 1, 0.3, 1)</span>
              </div>
              <div>
                <span className="text-white/80 font-medium block">Corners Radius</span>
                <span className="block mt-1 font-mono text-[9px] text-[#EBE3D5]/35 uppercase tracking-[0.05em]">Ritual Cards: 24px-32px, Pill: 999px</span>
              </div>
            </div>

            <div className="pt-5.5 border-t border-white/[0.03] flex items-center justify-start sm:justify-end mt-6">
              <div className="flex items-center gap-2 text-[8px] tracking-[0.25em] uppercase text-[#EBE3D5]/30 font-medium font-mono select-none">
                <ShieldCheck size={11} className="text-[#A68B5B]/50 stroke-[1.5]" />
                <span>AURAÉ SYSTEM VERIFIED</span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Cinematic Closing Line */}
        <div className="w-full text-center mt-24 mb-6 relative z-10 select-none">
          <motion.p
            animate={{ opacity: [0.15, 0.22, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="font-serif italic text-sm md:text-base tracking-[0.2em] text-[#E5D1B8] block max-w-lg mx-auto"
          >
            “An editorial sanctuary of sensory refinement.”
          </motion.p>
        </div>

        {/* Bottom Credits section */}
        <div className="max-w-7xl mx-auto border-t border-white/[0.035] mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[9px] tracking-[0.2em] text-[#EBE3D5]/30 uppercase font-light relative z-10 select-none">
          <span>© {new Date().getFullYear()} Auraé Beauty Lounge. All rights reserved.</span>
          <span className="mt-2.5 sm:mt-0 font-serif italic text-xs tracking-[0.05em] text-[#E5D1B8]/25">Designed for connoisseurs of pure luxury</span>
        </div>

      </motion.footer>

    </div>
  );
}
