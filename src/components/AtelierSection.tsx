/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import { ShoppingBag, X, Sparkles, AlertCircle, ShoppingCart, Eye, ArrowRight } from 'lucide-react';
import { ATELIER_PRODUCTS } from '../data';
import { AtelierProduct } from '../types';

interface AtelierSectionProps {
  onAddToCart: (p: AtelierProduct) => void;
  cartCount: number;
}

// Sophisticated sensory profiles to override default text with intense luxury chemistry poetry
const LUXURY_PROFILES: Record<string, {
  label: string;
  poeticDescription: string;
  cta: string;
  philosophy: string;
}> = {
  'product-aura-juice': {
    label: 'Ritual Composition',
    poeticDescription: 'A light-infused dermal catalyst suspended in triple-filtered active flower water. Rare Camellia Oleifera molecules weave with edelweiss stem cells and a pure diamond dust matrix, whispering immediate skin repair.',
    cta: 'Explore Composition',
    philosophy: 'CHRONO-BIOMIMETIC CATALYST • EDITION I'
  },
  'product-rose-butter': {
    label: 'Atelier Formula',
    poeticDescription: 'Whipped Bulgarian white rose distillate layered with protective lipid barriers and moisture-locking ceramide spheres. Formulated to melt effortlessly on skin contour, leaving a velvet, satin-glow drape.',
    cta: 'Discover Formula',
    philosophy: 'EPIDERMAL RECONSTRUCTION • THERMAL RICH'
  },
  'product-amber-oil': {
    label: 'Private Collection',
    poeticDescription: 'A warm, subtemperate liquid solar nectar. Imbued with active grape-seed polyphenols, skin-firming champagne yeast, and deep squalane absolute, restoring raw organic brilliance and depth.',
    cta: 'Reveal Ritual Notes',
    philosophy: 'SOLAR COHERENCE SHIELD • ACTIVE DEPT'
  }
};

function AtelierProductPanel({
  p,
  idx,
  onAdd,
  onOpenQuickView
}: {
  p: AtelierProduct;
  idx: number;
  onAdd: (product: AtelierProduct) => void;
  onOpenQuickView: (product: AtelierProduct) => void;
  key?: React.Key;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // High-damping luxury springs for weighty 3D parallax tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { damping: 55, stiffness: 50 });
  const smoothY = useSpring(mouseY, { damping: 55, stiffness: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Subtle opposite-move parallax for structural separation (3-5px restrained luxury drift)
  const imgX = useTransform(smoothX, [0, 1], [4, -4]);
  const imgY = useTransform(smoothY, [0, 1], [4, -4]);

  // Premium spotlight follow light flare
  const spotXPercent = useTransform(smoothX, [0, 1], [0, 100]);
  const spotYPercent = useTransform(smoothY, [0, 1], [0, 100]);
  const spotlightGradient = useMotionTemplate`radial-gradient(circle 380px at ${spotXPercent}% ${spotYPercent}%, rgba(229, 209, 184, 0.12) 0%, rgba(20, 20, 20, 0) 80%)`;

  const profile = LUXURY_PROFILES[p.id] || {
    label: 'Atelier Blend',
    poeticDescription: p.description,
    cta: 'Reveal Ritual Notes',
    philosophy: 'ORGANIC LUMINESCENCE'
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-between group overflow-hidden rounded-[40px] bg-[#0d0d0d] border border-white/[0.02] shadow-[0_25px_70px_rgba(0,0,0,0.85)] cursor-pointer transition-all duration-[1600ms] cubic-bezier(0.16,1,0.3,1)"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      {/* Background luxury bloom edge radiance */}
      <div 
        className="absolute -inset-6 bg-[linear-gradient(135deg,rgba(229,209,184,0.04),rgba(216,180,254,0.02))] rounded-[46px] filter blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-[1800ms] pointer-events-none z-0 scale-95 group-hover:scale-105" 
      />

      <div className="relative p-5 z-10">
        {/* Editorial Frame Image Wrapper */}
        <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-[#070707] select-none">
          
          {/* Animated Parallax Skincare Bottle image */}
          <motion.div
            style={{
              x: imgX,
              y: imgY,
            }}
            animate={{
              scale: isHovered ? 1.05 : 1.00,
            }}
            transition={{
              scale: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className="w-full h-full transform origin-center"
          >
            <img
              src={p.image}
              alt={p.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                filter: isHovered 
                  ? 'brightness(1.04) contrast(1.02) saturate(1.02) drop-shadow(0 0 25px rgba(229,209,184,0.06))' 
                  : 'brightness(0.94) contrast(0.98)'
              }}
            />
          </motion.div>

          {/* Premium vignette shading with high elegance - lightened by ~20% for extreme luminosity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent mix-blend-multiply pointer-events-none" />

          {/* Dynamic Spotlight following the cursor */}
          <motion.div
            style={{
              background: spotlightGradient,
            }}
            animate={{
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 pointer-events-none mix-blend-screen z-10"
          />

          {/* Whispering Formula series label (Top Left) */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-2 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-pulse" />
            <span className="font-sans text-[8px] tracking-[0.35em] font-semibold text-brand-gold/80 uppercase">
              {profile.philosophy}
            </span>
          </div>

          {/* Delicate Volume Stamp (Top Right) */}
          <div className="absolute top-6 right-6 z-20 font-sans text-[8px] tracking-[0.25em] font-medium text-white/50 uppercase">
            {p.volume}
          </div>

          {/* Luxury Discover CTAs appearing poetically */}
          <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onOpenQuickView(p);
              }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 15,
                scale: isHovered ? 1.02 : 0.95
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 py-3 bg-[#E5D1B8] text-[#0C0C0C] text-[9px] tracking-[0.3em] font-bold rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:bg-[#EBE3D5] hover:scale-105 duration-300 transition-all uppercase cursor-pointer"
            >
              {profile.cta}
            </motion.button>
          </div>

        </div>
      </div>

      {/* Narrative Info Box */}
      <div className="p-9 pt-3 flex-grow flex flex-col justify-between z-10 relative">
        <div className="space-y-4.5">
          {/* Whisper Category */}
          <div className="flex items-center justify-between text-[#E5D1B8]/40 font-mono text-[8px] tracking-[0.3em] uppercase">
            <span>{profile.label}</span>
            <span className="w-8 h-[1px] bg-white/[0.08]" />
            <span>Edition 01</span>
          </div>

          <h3 className="font-serif text-2xl font-light text-white leading-tight tracking-wide group-hover:text-[#E5D1B8] transition-colors duration-1000 ease-out">
            {p.name}
          </h3>

          <p className="font-sans text-[11.5px] leading-relaxed text-[#EBE3D5]/65 font-light">
            {profile.poeticDescription}
          </p>
        </div>

        {/* Sensory interaction row (Removed product price layout emphasis, replaced with editorial layout) */}
        <div className="flex items-center justify-between border-t border-white/[0.04] pt-7 mt-9">
          <div>
            <span className="font-sans text-[8px] text-[#A68B5B] tracking-[0.35em] uppercase block mb-1">
              Micro-Batched Formula
            </span>
            <span className="font-serif italic text-sm text-[#EBE3D5]/50 group-hover:text-[#E5D1B8]/80 transition-colors duration-1000">
              {p.volume} • {p.price} Value
            </span>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAdd(p);
            }}
            data-cursor="button"
            className="group/btn px-4.5 py-2.5 bg-white/[0.02] hover:bg-[#E5D1B8] border border-white/[0.06] hover:border-transparent text-[#EBE3D5]/70 hover:text-[#0C0C0C] rounded-full text-[8.5px] tracking-[0.25em] font-sans uppercase transition-all duration-[800ms] flex items-center gap-1.5 cursor-pointer shadow-md hover:shadow-[0_10px_25px_rgba(229,209,184,0.12)] hover:scale-105"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <span>Acquire</span>
            <ArrowRight size={10} className="transform group-hover/btn:translate-x-1 duration-500 transition-transform" />
          </button>
        </div>
      </div>

      {/* Deluxe Glassmorphism Shimmer Outline */}
      <div
        style={{
          borderColor: isHovered ? 'rgba(229, 209, 184, 0.28)' : 'rgba(255, 255, 255, 0.03)',
          boxShadow: isHovered 
            ? 'inset 0 0 25px rgba(229, 209, 184, 0.06), 0 0 35px rgba(229, 209, 184, 0.03)' 
            : 'none',
        }}
        className="absolute inset-0 border-[1.5px] rounded-[40px] pointer-events-none z-30 transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      />
    </div>
  );
}

export default function AtelierSection({
  onAddToCart,
  cartCount
}: AtelierSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<AtelierProduct | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Elixirs' | 'Essential'>('All');
  const [notification, setNotification] = useState<string | null>(null);

  const filteredProducts = activeCategory === 'All'
    ? ATELIER_PRODUCTS
    : ATELIER_PRODUCTS.filter((p) => p.category === activeCategory);

  const handleProductAdd = (p: AtelierProduct) => {
    onAddToCart(p);
    setNotification(`Successfully drafted: ${p.name} added to your selection.`);
    setTimeout(() => setNotification(null), 3000);
  };

  const modalProfile = selectedProduct ? (LUXURY_PROFILES[selectedProduct.id] || {
    label: 'Atelier Blend',
    poeticDescription: selectedProduct.description,
    cta: 'Reveal Ritual Notes',
    philosophy: 'AURAÉ APOTHECARY • PRIVATE ARCHIVE'
  }) : null;

  return (
    <section
      id="atelier"
      className="relative py-28 md:py-40 bg-[#0C0C0C] overflow-hidden px-6 md:px-12"
    >
      {/* Dynamic Ambient Cinematic Lights pulsing */}
      <motion.div
        animate={{
          scale: [1, 1.12, 0.96, 1.05, 1],
          opacity: [0.35, 0.55, 0.4, 0.5, 0.35],
          y: [-20, 20, -10, 15, -20]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-brand-gold/[0.04] rounded-full blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          opacity: [0.3, 0.45, 0.35, 0.4, 0.3],
          x: [-35, 35, -15, 25, -35]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-brand-blush/[0.03] rounded-full blur-[140px] pointer-events-none z-0"
      />

      {/* Floating cosmetic micro-particles drifting upwards in apothecary sanctuary */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => {
          const delay = i * 3.1;
          const duration = 18 + (i * 4);
          const leftPercent = `${15 + (i * 15)}%`;
          return (
            <motion.div
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{
                y: "-10%",
                opacity: [0, 0.25, 0.4, 0.15, 0],
                x: [0, (i % 2 === 0 ? 15 : -15), (i % 3 === 0 ? -10 : 10), 0]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              style={{
                left: leftPercent,
                width: i % 2 === 0 ? '3px' : '4px',
                height: i % 2 === 0 ? '3px' : '4px',
              }}
              className="absolute rounded-full bg-[#E5D1B8]/20 filter blur-[0.6px] shadow-[0_0_8px_rgba(229,209,184,0.1)]"
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Premium Editorial Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20 md:mb-32">
          <div className="lg:col-span-8">
            <span className="font-sans text-[9px] tracking-[0.45em] text-brand-gold font-semibold uppercase block mb-5">
              THE AURAÉ ATELIER
            </span>
            <h2 id="atelier-title" className="font-serif font-light text-4xl sm:text-5xl md:text-6.5xl text-white tracking-tight leading-[1.08]">
              High-Science Apothecary.<br />
              <span className="font-serif italic text-brand-muted-rose font-light">Organic Luminescence.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <p className="font-sans text-xs text-[#EBE3D5]/60 leading-relaxed max-w-sm mb-8 text-left lg:text-right font-light">
              Micro-batched formulations infused with botanical intelligence, cinematic softness, and ritual-grade precision.
            </p>
            
            {/* Category selection */}
            <div className="flex gap-2.5 p-1 rounded-full bg-white/[0.02] border border-white/[0.05] shadow-inner">
              {(['All', 'Elixirs', 'Essential'] as const).map((cat) => (
                <button
                  key={cat}
                  id={`atelier-cat-${cat.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat)}
                  data-cursor="button"
                  className={`px-5 py-2 rounded-full font-sans text-[9px] tracking-[0.25em] uppercase transition-all duration-700 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#E5D1B8] text-[#0C0C0C] font-semibold shadow-[0_10px_20px_rgba(12,12,12,0.6)]'
                      : 'bg-transparent text-[#EBE3D5]/50 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Global Cart Toast Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed bottom-8 right-8 z-50 bg-[#121212]/90 border border-brand-muted-rose/25 text-white px-6 py-4.5 rounded-2xl flex items-center gap-4 shadow-[0_30px_70px_rgba(0,0,0,0.9)] max-w-sm backdrop-blur-3xl"
            >
              <ShoppingCart size={15} className="text-[#E5D1B8] animate-pulse" />
              <p className="font-sans text-xs text-[#EBE3D5] font-light">{notification}</p>
              <button onClick={() => setNotification(null)} className="text-white/30 hover:text-white cursor-pointer ml-2">
                <X size={13} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cinematic Formulation Bento Showcase Grid with increased spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {filteredProducts.map((p, idx) => (
            <AtelierProductPanel 
              key={p.id} 
              p={p} 
              idx={idx} 
              onAdd={handleProductAdd} 
              onOpenQuickView={setSelectedProduct} 
            />
          ))}
        </div>

        {/* Detailed Private Formulation Sheet Modal */}
        <AnimatePresence>
          {selectedProduct && modalProfile && (
            <motion.div
              id="apothecary-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0C0C0C]/92 backdrop-blur-2xl flex items-center justify-center p-6"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0f0f0f] w-full max-w-3xl rounded-[40px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.95)] relative border border-white/[0.04] flex flex-col md:flex-row cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Modal Left Image */}
                <div className="md:w-1/2 aspect-[4/5] md:aspect-auto select-none bg-[#070707] relative overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/30 to-transparent" />
                  
                  {/* Whispering info block at bottom */}
                  <div className="absolute bottom-8 left-8 z-10 text-white flex flex-col">
                    <span className="font-sans text-[8px] tracking-[0.40em] font-semibold uppercase text-[#E5D1B8]">
                      {modalProfile.philosophy}
                    </span>
                    <span className="font-serif text-2xl font-light tracking-wide text-white mt-1.5">
                      Private Formula Archive
                    </span>
                  </div>
                </div>

                {/* Modal Right Formula Spec Content */}
                <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-between relative">
                  <div>
                    <button
                      id="close-apothecary-modal"
                      onClick={() => setSelectedProduct(null)}
                      data-cursor="button"
                      className="absolute top-6 right-6 p-2 rounded-full border border-white/[0.05] bg-black/60 text-white/70 hover:text-[#E5D1B8] hover:scale-105 duration-300 transition-all cursor-pointer"
                    >
                      <X size={14} />
                    </button>

                    <div className="flex items-center gap-3.5 mt-2 mb-3">
                      <span className="font-sans text-[9px] tracking-[0.3em] text-[#A68B5B] uppercase font-semibold">
                        {selectedProduct.category}
                      </span>
                      <span className="w-1.5 h-[1px] bg-white/10" />
                      <span className="font-sans text-[8px] tracking-[0.2em] text-[#EBE3D5]/40 uppercase">
                        {selectedProduct.volume}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-3xl font-light text-white leading-tight mb-5">
                      {selectedProduct.name}
                    </h3>

                    <p className="font-sans text-xs text-[#EBE3D5]/70 leading-relaxed mb-6 font-light">
                      {modalProfile.poeticDescription}
                    </p>

                    {/* Scientific Ingredients Box */}
                    <div className="bg-[#070707]/90 rounded-2xl p-5 border border-white/[0.03] space-y-2.5">
                      <div className="flex items-center gap-2 text-[8px] tracking-[0.25em] text-[#E5D1B8] uppercase font-semibold">
                        <AlertCircle size={11} className="text-brand-gold animate-pulse" />
                        <span>Botanical Active Base</span>
                      </div>
                      <p className="font-sans text-[11px] text-[#EBE3D5]/80 leading-relaxed font-light">
                        {selectedProduct.ingredients}
                      </p>
                    </div>
                  </div>

                  {/* Formula value & add checkout */}
                  <div className="flex items-center justify-between border-t border-white/[0.04] pt-6 mt-8">
                    <div>
                      <span className="font-sans text-[8px] text-[#A68B5B] uppercase tracking-[0.25em] block mb-1">
                        Atelier Value
                      </span>
                      <span className="font-serif text-2xl font-light text-[#E5D1B8]">
                        {selectedProduct.price}
                      </span>
                    </div>

                    <button
                      id="modal-add-to-bag"
                      onClick={() => {
                        handleProductAdd(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      data-cursor="button"
                      className="px-6 py-3.5 bg-[#E5D1B8] hover:bg-[#EBE3D5] text-[#0C0C0C] font-sans text-[10px] tracking-[0.25em] font-semibold rounded-full shadow-lg transition-all duration-500 uppercase cursor-pointer"
                    >
                      Draft Blend
                    </button>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
