/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Sparkles, Clock, Compass, ArrowRight, Heart, Feather, Star } from 'lucide-react';
import { ServiceRitual } from '../types';
import { RITUALS } from '../data';

interface RitualsSectionProps {
  onSelectRitual: (ritual: ServiceRitual) => void;
}

// Customized, high-end sensory copy maps for the luxury treatment manuscript
const JOURNEY_STAGES: Record<string, { label: string; title: string; desc: string; sensoryKey: string }[]> = {
  'skincare-aura': [
    { label: 'Act I', title: 'Epidermal Awakening', desc: 'Bespoke diagnostic aura analysis followed by a warm botanical double amino-acid skin prep wash.', sensoryKey: 'Scent: White Rose & Camellia' },
    { label: 'Act II', title: 'Dermal Synthesis', desc: 'Galvanic micro-current tone optimization & deep infusion of micro-collagen and rich minerals.', sensoryKey: 'Sound: Solfeggio 528Hz Resonance' },
    { label: 'Act III', title: 'Somatic Sculpting', desc: 'Intense micro-firming massage choreography utilizing heavy solid 24K gold gua sha tools.', sensoryKey: 'Touch: Heated Gold & Jade' },
    { label: 'Act IV', title: 'Cellular Sealing', desc: 'Luminous chilled crystal roller pressure to shrink pores, seal dermal serum, and lock the glow.', sensoryKey: 'Temperature: Cryo-ice Compression' }
  ],
  'haute-coiffure': [
    { label: 'Act I', title: 'Thermal Purification', desc: 'Aromatic micro-steaming of natural hair fibers using heated active eucalyptus vapor waves.', sensoryKey: 'Scent: Eucalyptus & French Sage' },
    { label: 'Act II', title: 'Cranial Reliever', desc: 'Precise meridians pressure point scalp stimulation with customized warm organic elixir drops.', sensoryKey: 'Touch: Warm Acupressure Mapping' },
    { label: 'Act III', title: 'Botanical Hair Bath', desc: 'Deep-acting peptide hair glaze freshly custom-blended and massaged slowly under warm waterfall locks.', sensoryKey: 'Sound: Pure Water Rain Cascade' },
    { label: 'Act IV', title: 'Signature Luster Blowout', desc: 'Velvet finishing styling using organic boar bristle brushes and a cold-air glazing shine lock.', sensoryKey: 'Visual: Reflective Structural Volume' }
  ],
  'divine-body': [
    { label: 'Act I', title: 'Sensory Grounding', desc: 'Aura-cleansing botanical inhalation ritual incorporating wild blue lotus absolute and cedarwood.', sensoryKey: 'Scent: Blue Lotus & Sandalwood' },
    { label: 'Act II', title: 'Obsidian Kneading', desc: 'Deep-tissue thermal alignment using hand-collected hot volcanic basalt minerals.', sensoryKey: 'Touch: Volcanic Basalt Radiance' },
    { label: 'Act III', title: 'Structural Contour Flow', desc: 'Long, slow muscle-releasing effleurage utilizing firming champagne yeast extracts and squeeze oils.', sensoryKey: 'Somatic: Deep Skeletal Release' },
    { label: 'Act IV', title: 'Acoustic Harmonization', desc: 'Nervous system recalibration via custom-tuned frosted crystal singing bowl sound wave envelope.', sensoryKey: 'Sound: pure crystalline quartz 432Hz' }
  ],
  'bridal-aura': [
    { label: 'Act I', title: 'Dual Galvanic Lift', desc: 'Double high-frequency facial muscle-toning currents matched with cool oxygen dermal vaporizers.', sensoryKey: 'Scent: Orange Blossom & Jasmine' },
    { label: 'Act II', title: 'Botanical Draping', desc: 'Brightening white-rose silk drapes saturated in hyaluronic acid applied to neck, décolleté, and hands.', sensoryKey: 'Touch: Ultra-weightless Silk Wrap' },
    { label: 'Act III', title: 'Somatometric Heart Calm', desc: 'Somatic tension-melting chest and shoulder acupressure with premium Bulgarian rose absolute oil.', sensoryKey: 'Sensing: Pre-matrimonial Heart Quiet' },
    { label: 'Act IV', title: 'The Luminous Veil Seal', desc: 'Dual cryo-globe eye decompression and complete high-luster collagen protection glaze.', sensoryKey: 'Awakening: Celestial Radiance Refraction' }
  ]
};

export default function RitualsSection({ onSelectRitual }: RitualsSectionProps) {
  const [activeRitualId, setActiveRitualId] = useState<string>('skincare-aura');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeRitual = RITUALS.find(r => r.id === activeRitualId) || RITUALS[0];
  const activeStages = JOURNEY_STAGES[activeRitualId] || JOURNEY_STAGES['skincare-aura'];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create ultra-premium editorial vertical scroll parallax offset transforms
  const yLeft = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const xText = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  // Parallax tracking for luxurious movement context
  const handleMouseMove = (e: React.MouseEvent) => {
    const rx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ry = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x: rx, y: ry });
  };

  return (
    <section
      ref={sectionRef}
      id="rituals"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen py-28 md:py-36 bg-[#0C0C0C] overflow-hidden px-6 sm:px-12 md:px-20 lg:px-24 select-none"
    >
      {/* Background cinematic atmosphere - matching Hero Section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Soft film grain overlay */}
        <div className="absolute inset-0 w-full h-full film-grain mix-blend-overlay opacity-[0.25]" />
        
        {/* Deep vignettes and linear gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-transparent to-[#0C0C0C] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_50%,rgba(12,12,12,0.9)_100%)] z-10" />

        {/* Ambient warm glow blobs mimicking natural light play */}
        <motion.div
          animate={{
            x: mousePos.x * -25,
            y: mousePos.y * -25,
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#A68B5B]/5 to-transparent blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: mousePos.x * 20,
            y: mousePos.y * 20,
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-[15%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-brand-muted-rose/[0.04] to-transparent blur-[150px] mix-blend-screen"
        />

        {/* Cinematic rich center radial spotlight glow */}
        <div className="absolute top-[30%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(229,209,184,0.018)_0%,transparent_70%)] pointer-events-none mix-blend-screen filter blur-[90px]" />

        {/* Soft floating particles / light specks to create immersive three-dimensional depth */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[
            { top: '15%', left: '10%', size: 3, delay: 0, duration: 18, driftX: 40, driftY: -30 },
            { top: '35%', left: '80%', size: 4, delay: 2, duration: 22, driftX: -50, driftY: -50 },
            { top: '65%', left: '20%', size: 2, delay: 4, duration: 16, driftX: 30, driftY: -40 },
            { top: '80%', left: '75%', size: 3, delay: 1, duration: 25, driftX: -40, driftY: -60 },
            { top: '25%', left: '50%', size: 2.5, delay: 3, duration: 20, driftX: 60, driftY: -35 },
            { top: '50%', left: '90%', size: 3.5, delay: 5, duration: 21, driftX: -35, driftY: -45 },
          ].map((item, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, item.driftY, 0],
                x: [0, item.driftX, 0],
                opacity: [0.08, 0.35, 0.08],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
              style={{
                top: item.top,
                left: item.left,
                width: `${item.size}px`,
                height: `${item.size}px`,
              }}
              className="absolute rounded-full bg-brand-muted-rose/40 shadow-[0_0_10px_rgba(229,209,184,0.4)] pointer-events-none filter blur-[0.5px]"
            />
          ))}
        </div>

        {/* Oversized ultra-low-opacity editorial typography layer in background */}
        <div className="absolute inset-x-0 bottom-[8%] sm:bottom-[10%] overflow-hidden pointer-events-none z-0 flex justify-center">
          <motion.div
            style={{ x: xText }}
            className="font-serif text-[18vw] sm:text-[15vw] font-light tracking-[0.25em] text-[#EBE3D5] opacity-[0.015] whitespace-nowrap select-none italic pointer-events-none uppercase"
          >
            Auraé Ceremony
          </motion.div>
        </div>

        {/* Framing border thin lines */}
        <div className="absolute inset-6 sm:inset-10 border border-white/[0.015] rounded-[36px] sm:rounded-[48px] pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto z-20 relative w-full flex flex-col justify-center">
        
        {/* Section Header: Minimalist and highly editorial */}
        <div className="max-w-3xl text-left mb-24 md:mb-32 lg:mb-36 relative">
          {/* Soft ambient spotlight behind the heading and introductory text */}
          <div className="absolute -top-[40%] -left-[20%] w-[130%] h-[180%] bg-[radial-gradient(circle_at_30%_40%,rgba(229,209,184,0.06)_0%,transparent_60%)] pointer-events-none mix-blend-screen filter blur-[70px] z-0" />
          
          <div className="overflow-hidden mb-4 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: '100%' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[10px] tracking-[0.4em] text-brand-muted-rose uppercase font-medium inline-flex items-center gap-2"
            >
              <Sparkles size={11} className="text-brand-gold animate-pulse" />
              SECTION 02 — THE RITUAL COLLECTION
            </motion.span>
          </div>
          
          <h2 id="rituals-header-title" className="font-serif font-light text-4xl sm:text-5xl md:text-6xl text-[#EBE3D5] tracking-tight leading-[1.05] relative z-10 uppercase">
            Bespoke Ceremonies <br />
            <span className="font-serif italic text-brand-muted-rose font-light low-contrast-glow pl-6 sm:pl-12 block mt-1">For The Transformed Self</span>
          </h2>
          
          <div className="mt-6 max-w-lg">
            <p className="font-sans text-xs sm:text-sm text-[#EBE3D5]/65 leading-relaxed font-light tracking-wide">
              Every Auraé experience is curated as an immersive luxury journey of restorative preparation, slow aromatic drapes, precise cell mobilization, and quiet emotional containment.
            </p>
          </div>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Stack of Interactive Ritual Cards (8 Columns) */}
          <motion.div 
            style={{ y: yLeft }}
            className="lg:col-span-8 flex flex-col gap-8 w-full"
          >
            {RITUALS.map((ritual, idx) => {
              const isActive = activeRitualId === ritual.id;
              
              return (
                <motion.div
                  key={ritual.id}
                  id={`ritual-suite-card-${ritual.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveRitualId(ritual.id)}
                  className={`group relative rounded-[28px] md:rounded-[36px] border overflow-hidden cursor-pointer transition-all duration-[800ms] ${
                    isActive 
                      ? 'bg-[#141414] border-[#E5D1B8]/25 shadow-[0_30px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(229,209,184,0.06)] scale-[1.01]' 
                      : 'bg-[#141414]/30 border-white/[0.03] hover:bg-[#141414]/65 hover:border-[#E5D1B8]/15 hover:scale-[1.008] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(229,209,184,0.03)]'
                  }`}
                >
                  {/* Subtle warm ambient lighting bloom */}
                  <div className={`absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(229,209,184,0.04)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0`} />

                  {/* Subtle luxury light sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5D1B8]/3 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2200ms] ease-out pointer-events-none z-0" />

                  {/* Absolute visual border highlight overlay */}
                  <div className={`absolute inset-0 rounded-[28px] md:rounded-[36px] transition-all duration-700 pointer-events-none border ${
                    isActive 
                      ? 'border-[#E5D1B8]/22 opacity-100 shadow-[inset_0_0_15px_rgba(229,209,184,0.03)]' 
                      : 'border-white/0 opacity-0 group-hover:opacity-100 group-hover:border-[#E5D1B8]/10 group-hover:shadow-[inset_0_0_10px_rgba(229,209,184,0.01)]'
                  }`} />

                  {/* Main Card Content */}
                  <div className="p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start justify-between relative z-15">
                    
                    {/* Visual & Context Left Deck */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-6 items-center sm:items-start text-center sm:text-left">
                      
                      {/* Image container with rich editorial layers */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl md:rounded-[22px] overflow-hidden flex-shrink-0 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.65)] select-none group/img">
                        {/* Film gloss layer */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-10 pointer-events-none" />
                        <img
                          src={ritual.image}
                          alt={ritual.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-[1.07] transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                        {/* Subtle gold halo effect when selected */}
                        {isActive && (
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,209,184,0.18)_0%,transparent_75%)] select-none pointer-events-none z-15" />
                        )}
                      </div>

                      {/* Ritual Core Info Block */}
                      <div className="flex flex-col justify-start">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-2.5">
                          <span className="font-sans text-[9px] tracking-[0.3em] font-bold text-brand-gold uppercase">
                            {ritual.category}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-brand-muted-rose/40" />
                          <span className="font-sans text-[10px] text-brand-muted-rose/80 tracking-wider uppercase font-medium flex items-center gap-1.5">
                            <Clock size={10} className="text-brand-muted-rose/60" />
                            {ritual.duration}
                          </span>
                        </div>
                        
                        <h3 className="font-serif text-xl md:text-2xl font-light text-[#EBE3D5] group-hover:text-white transition-colors duration-500 tracking-tight leading-snug">
                          {ritual.title}
                        </h3>
                        
                        <p className="font-sans text-xs text-[#EBE3D5]/50 leading-relaxed font-light mt-2 max-w-md">
                          {ritual.description}
                        </p>
                      </div>

                    </div>

                    {/* Pricing, CTA & Active indicator panel */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto border-t sm:border-t-0 border-white/[0.04] pt-5 sm:pt-0 flex-shrink-0">
                      
                      {/* Gentle pricing tag */}
                      <div className="font-serif text-2xl font-light text-brand-muted-rose bg-clip-text drop-shadow-sm">
                        {ritual.price}
                      </div>

                      {/* Reserve experience button */}
                      <div className="mt-4 sm:mt-5">
                        <button
                          id={`select-ritual-voyage-${ritual.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectRitual(ritual);
                          }}
                          className={`relative select-none uppercase font-sans text-[9px] tracking-[0.25em] font-bold py-3.5 px-7 rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2 group/ctaBtn overflow-hidden border ${
                            isActive 
                              ? 'bg-brand-muted-rose border-brand-muted-rose text-[#0C0C0C] hover:bg-[#EBE3D5] hover:border-[#EBE3D5] shadow-[0_12px_30px_rgba(229,209,184,0.18),0_0_20px_rgba(229,209,184,0.1)] hover:shadow-[0_15px_35px_rgba(235,227,213,0.3),0_0_25px_rgba(235,227,213,0.15)] hover:scale-[1.04]' 
                              : 'bg-white/5 border-white/10 text-white hover:bg-brand-muted-rose hover:border-brand-muted-rose hover:text-[#0C0C0C] hover:scale-[1.04] hover:shadow-[0_12px_25px_rgba(229,209,184,0.15)]'
                          }`}
                        >
                          {/* Inner glow backdrop */}
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/ctaBtn:opacity-100 transition-opacity duration-700 pointer-events-none" />
                          <span className="relative z-10">Begin Voyage</span>
                          <ArrowRight size={11} className="relative z-10 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/ctaBtn:translate-x-1.5" />
                        </button>
                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT SIDE: Floating Luxury Panel—The Aura Signature Ritual Journey (4 Columns) */}
          <motion.div 
            style={{ y: yRight }}
            className="lg:col-span-4 sticky top-28 self-start w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRitualId}
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -30 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#141414]/50 backdrop-blur-3xl border border-white/[0.06] rounded-[36px] p-8 md:p-10 shadow-[-20px_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden group/manuscript"
              >
                {/* Micro atmospheric warm backing lighting */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-muted-rose/[0.06] rounded-full blur-[48px] pointer-events-none group-hover/manuscript:opacity-100 transition-opacity duration-[1000ms]" />
                <div className="absolute -bottom-16 -left-16 w-50 h-50 bg-[#A68B5B]/[0.04] rounded-full blur-[64px] pointer-events-none" />

                {/* Subtle ornamental corner design elements */}
                <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/[0.12] pointer-events-none" />
                <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/[0.12] pointer-events-none" />
                <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/[0.12] pointer-events-none" />
                <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/[0.12] pointer-events-none" />

                {/* Manuscript Header */}
                <div className="flex items-center gap-3 mb-6 border-b border-white/[0.05] pb-6 relative z-10">
                  <span className="p-1 px-2.5 bg-brand-muted-rose/[0.08] text-brand-muted-rose border border-brand-muted-rose/15 rounded-full text-[8.5px] tracking-[0.25em] uppercase font-bold flex items-center gap-1.5 leading-none">
                    <Feather size={10} className="stroke-[2.5px]" />
                    Sensory Treatment Manuscript
                  </span>
                </div>

                {/* Ritual Itinerary Map */}
                <div className="relative z-10">
                  <span className="font-sans text-[8.5px] tracking-[0.3em] font-medium text-brand-gold uppercase block mb-1">
                    EXPERIENCE VOYAGE
                  </span>
                  
                  <h4 className="font-serif text-2xl sm:text-3xl font-light text-[#EBE3D5] tracking-tight leading-none mb-4 uppercase">
                    The {activeRitual.category} Voyage
                  </h4>
                  
                  <p className="font-sans text-[11px] text-[#EBE3D5]/60 leading-relaxed font-light mb-8 italic">
                    “An anatomical progression composed in discrete acts, choreographing deep cell hydration and supreme peace.”
                  </p>

                  {/* Chronological Manuscript Steps */}
                  <div className="flex flex-col gap-6 relative pl-4 border-l border-[#E5D1B8]/15">
                    {activeStages.map((stage, sIdx) => (
                      <motion.div
                        key={stage.label}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: sIdx * 0.12 }}
                        className="relative flex flex-col gap-1 items-start group/step"
                      >
                        {/* Interactive floating anchor dot */}
                        <span className="absolute left-[-22px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0C0C0C] border border-brand-muted-rose/60 group-hover/step:bg-brand-muted-rose group-hover/step:scale-125 transition-all duration-500" />
                        
                        <div className="flex items-center justify-between w-full">
                          <span className="font-sans text-[9px] tracking-widest font-bold text-brand-gold uppercase">
                            {stage.label} — {stage.title}
                          </span>
                        </div>
                        
                        <p className="font-sans text-xs text-[#EBE3D5]/75 leading-relaxed font-light mt-0.5">
                          {stage.desc}
                        </p>

                        <span className="font-sans text-[8px] text-brand-muted-rose/70 tracking-[0.1em] uppercase font-semibold mt-1">
                          {stage.sensoryKey}
                        </span>

                      </motion.div>
                    ))}
                  </div>

                  {/* Primary Call to Action inside Manuscript */}
                  <div className="mt-10 pt-6 border-t border-white/[0.05]">
                    <button
                      id="manuscript-reserve-experience"
                      onClick={() => onSelectRitual(activeRitual)}
                      className="w-full relative overflow-hidden py-4.5 bg-brand-muted-rose text-[#0C0C0C] text-[10px] sm:text-xs tracking-[0.3em] font-bold rounded-full shadow-[0_15px_35px_rgba(229,209,184,0.15),0_0_25px_rgba(229,209,184,0.06)] hover:shadow-[0_20px_45px_rgba(235,227,213,0.3),0_0_35px_rgba(235,227,213,0.12)] hover:scale-[1.025] active:scale-[0.985] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer uppercase border border-brand-muted-rose hover:border-[#EBE3D5] hover:bg-[#EBE3D5] flex items-center justify-center gap-2.5 group/btnScroll"
                    >
                      {/* Tactile glow layer */}
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btnScroll:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      <Star size={11} className="relative z-10 text-[#0C0C0C] animate-pulse" />
                      <span className="relative z-10">Reserve {activeRitual.title}</span>
                      <ArrowRight size={12} className="relative z-10 group-hover/btnScroll:translate-x-2 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] text-[#0C0C0C]" />
                    </button>
                    
                    <p className="text-center font-sans text-[9px] text-[#EBE3D5]/40 tracking-wider uppercase font-medium mt-3">
                      Includes 30 minutes Botanical decompression lounge access
                    </p>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
