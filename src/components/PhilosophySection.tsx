/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Eye, Shield, Compass, Sparkles } from 'lucide-react';
import { IMAGES } from '../data';

export default function PhilosophySection() {
  const qualities = [
    {
      icon: Eye,
      title: 'Cinematic Visual Rhythm',
      desc: 'Our sanctuary is framed by the soothing dance of soft-focus light and physical rest, fostering a visual choreography that heals on sight.'
    },
    {
      icon: Shield,
      title: 'Bespoke Pure Atelier',
      desc: 'No mass production. Every serum, scent, and tone sequence is blended live at your chairside to address the micro-climate of your skin.'
    },
    {
      icon: Compass,
      title: 'Fashion-Inspired Pacing',
      desc: 'We adopt the deliberate poise of an editorial campaign layout, giving you space and silence to breathe between sensory rituals.'
    }
  ];

  return (
    <section
      id="philosophy"
      className="relative py-24 md:py-36 bg-[#0C0C0C] overflow-hidden px-6 md:px-12"
    >
      {/* Absolute light leak backgrounds */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-blush/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section with oversized typography and elegant line breaks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline mb-20 md:mb-28">
          <div className="md:col-span-8">
            <span className="font-sans text-[10px] tracking-[0.4em] text-brand-muted-rose uppercase font-medium block mb-4">
              The Philosophy
            </span>
            <h2 id="philosophy-title" className="font-serif font-light text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter leading-none">
              A luxury editorial brought <br className="hidden sm:inline" />
              to life through <span className="font-serif italic text-brand-muted-rose">cinematic motion</span>.
            </h2>
          </div>
          <div className="md:col-span-4 select-none">
            <p className="font-sans text-xs tracking-[0.25em] text-brand-muted-rose/80 uppercase mt-2 border-b border-white/[0.08] pb-4">
              Crafted for presence & softness
            </p>
          </div>
        </div>

        {/* Asymmetric Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Overlocking Image Layers and Subtle Glass Cards */}
          <div className="lg:col-span-6 order-2 lg:order-1 select-none">
            <div className="relative">
              
              {/* Main large image with slow scale layout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-[16/9] md:aspect-[4/3] rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10 group/img"
              >
                <img
                  src={IMAGES.loungeInterior}
                  alt="Auraé Luxury Lounging Sanctuary Interior"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover/img:scale-[1.06]"
                />
              </motion.div>

              {/* Smaller overlay portrait image with floating spring parallax */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 70 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  translateY: [0, -10, 0]
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.4, 
                  delay: 0.25,
                  translateY: { repeat: Infinity, duration: 7, ease: 'easeInOut' }
                }}
                className="absolute right-[-12px] sm:right-[-32px] bottom-[-40px] sm:bottom-[-60px] w-1/2 max-w-[200px] sm:max-w-[240px] aspect-[3/4] rounded-[32px] overflow-hidden border-4 border-[#0C0C0C] shadow-[-10px_20px_50px_rgba(0,0,0,0.9)] z-20"
              >
                <img
                  src={IMAGES.sculptSilhouette}
                  alt="Cinematic Silhouette Contour Play"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover scale-[1.05] hover:scale-[1.12] transition-transform duration-[1500ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </motion.div>

              {/* Minimalist Floating Card near the corner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  translateY: [0, 8, 0]
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.45,
                  translateY: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
                }}
                className="absolute top-[-30px] left-[-15px] sm:left-[-30px] z-20 bg-[#141414]/90 backdrop-blur-md rounded-3xl p-5 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.5)] max-w-[190px]"
              >
                <div className="flex gap-1.5 mb-2.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Sparkles key={s} size={10} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="font-serif text-[13px] italic leading-relaxed text-[#EBE3D5] font-light">
                  “A beautiful, tranquil refuge from the busy world that breathes art.”
                </p>
                <div className="font-sans text-[8px] tracking-widest text-[#E5D1B8] uppercase mt-3 font-semibold">
                  L’Oiseau Editorial
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Editorial Philosophy Writing */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start gap-12">
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="max-w-xl"
              >
                <p className="font-serif italic text-2xl md:text-3xl font-light text-brand-muted-rose mb-6 leading-normal">
                  “Luxury comes from spacing, restraint, typography, composition, motion quality, and visual hierarchy.”
                </p>
                
                <p className="font-sans text-sm md:text-base text-[#EBE3D5]/80 font-light leading-relaxed mb-6">
                  At Auraé, we dismiss the noisy flashing neon and clutter of contemporary commercial salons. We believe in soft layered shadows, breathing room, and a tactile sensory rhythm that restores physical tranquility. Our design operates with premium quiet restraint.
                </p>
              </motion.div>
            </div>

            {/* List of luxurious design rules or qualities */}
            <div className="flex flex-col gap-6 w-full partition-line">
              {qualities.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={index}
                    id={`qualities-item-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.15 }}
                    className="relative overflow-hidden flex gap-5 p-6 rounded-[24px] bg-[#141414]/30 border border-white/[0.03] hover:bg-[#141414]/75 hover:border-[#E5D1B8]/20 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(229,209,184,0.03)] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] transition-all cursor-default group"
                  >
                    {/* Subtle internal warm lighting bloom inside the card */}
                    <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(229,209,184,0.03)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0" />
                    
                    <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-[#0C0C0C] flex items-center justify-center text-brand-muted-rose/85 border border-white/10 group-hover:text-brand-muted-rose group-hover:bg-[#E5D1B8]/10 group-hover:shadow-[0_0_15px_rgba(229,209,184,0.12)] group-hover:border-[#E5D1B8]/35 duration-500 transition-all">
                      <IconComp size={16} className="transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-serif text-lg font-normal text-white/90 mb-1.5 group-hover:text-brand-muted-rose duration-500">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-[#EBE3D5]/60 leading-relaxed font-light group-hover:text-[#EBE3D5]/80 duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
