/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import { IMAGES } from '../data';
import { Camera, Eye, Sparkles } from 'lucide-react';

interface GalleryItem {
  image: string;
  category: string;
  title: string;
  span: string;
  aspect: string;
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number; key?: React.Key }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth, heavy cursor parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // High-damping, low-stiffness springs for a weighty, premium glide effect
  const smoothX = useSpring(mouseX, { damping: 65, stiffness: 45 });
  const smoothY = useSpring(mouseY, { damping: 65, stiffness: 45 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly re-center the parallax on mouse leave
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Subtle opposite-drift parallax values (max 12 pixels displacement)
  const imgX = useTransform(smoothX, [0, 1], [12, -12]);
  const imgY = useTransform(smoothY, [0, 1], [12, -12]);

  // Spotlight gradient following the cursor
  const spotXPercent = useTransform(smoothX, [0, 1], [0, 100]);
  const spotYPercent = useTransform(smoothY, [0, 1], [0, 100]);
  const spotlightGradient = useMotionTemplate`radial-gradient(circle 400px at ${spotXPercent}% ${spotYPercent}%, rgba(229, 209, 184, 0.16) 0%, rgba(20, 20, 20, 0) 80%)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${item.span} relative group overflow-hidden rounded-[36px] bg-[#0c0c0c] border border-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.95)] cursor-pointer transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
      style={{
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      data-cursor="image"
      data-cursor-text="VIEW"
    >
      {/* Background ambient glowing/blurring drop-shadow bloom */}
      <div 
        className="absolute -inset-4 bg-[linear-gradient(135deg,rgba(229,209,184,0.06),rgba(216,180,254,0.03))] rounded-[42px] filter blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-[1800ms] pointer-events-none z-0 scale-95 group-hover:scale-105" 
      />

      {/* Aspect Ratio Container */}
      <div className={`relative w-full ${item.aspect} overflow-hidden select-none z-10 rounded-[36px]`}>
        
        {/* Animated Parallax Image Layer with 1.6s ease-in-out scale */}
        <motion.div
          style={{
            x: imgX,
            y: imgY,
          }}
          animate={{
            scale: isHovered ? 1.08 : 1.00,
          }}
          transition={{
            scale: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
          }}
          className="w-full h-full transform origin-center bg-[#070707]"
        >
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover select-none filter transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              filter: isHovered 
                ? 'brightness(1.04) contrast(1.02) saturate(1.03) drop-shadow(0 0 20px rgba(229,209,184,0.04))' 
                : 'brightness(0.92) contrast(0.98)'
            }}
          />
        </motion.div>

        {/* Cinematic Vignette Shader Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/5 mix-blend-multiply pointer-events-none" />

        {/* Dynamic Spotlight Flare following the cursor */}
        <motion.div
          style={{
            background: spotlightGradient,
          }}
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 pointer-events-none mix-blend-screen z-10"
        />

        {/* Top Whispering Category Tag */}
        <div className="absolute top-8 left-8 md:top-10 md:left-10 z-20 font-sans text-[8px] tracking-[0.45em] font-semibold text-brand-gold/80 uppercase flex items-center gap-2 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-pulse" />
          <span>{item.category}</span>
        </div>

        {/* Floating Interactive Frame Details */}
        <div className="absolute inset-x-0 bottom-0 p-10 md:p-14 lg:p-16 flex flex-col justify-end z-25">
          <div className="flex items-center gap-2 mb-5 select-none">
            <motion.span
              animate={{ x: isHovered ? 6 : 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[9px] tracking-[0.35em] font-medium text-brand-gold uppercase"
            >
              Series I
            </motion.span>
            <span className="h-1.5 w-[1.5px] bg-white/20" />
            <div className="overflow-hidden h-4 flex items-center">
              <motion.div
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-1.5 text-white/50"
              >
                <Eye size={11} className="text-brand-muted-rose" />
                <span className="font-sans text-[7.5px] tracking-[0.25em] font-semibold uppercase">EXHIBIT</span>
              </motion.div>
            </div>
          </div>

          <motion.div 
            animate={{ y: isHovered ? 0 : 10 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3.5"
          >
            <h3 className="font-serif text-2xl md:text-3.5xl lg:text-4xl font-light text-white leading-tight tracking-wide drop-shadow-md">
              {item.title}
            </h3>
            
            <motion.p
              animate={{ opacity: isHovered ? 0.85 : 0.45 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[9px] sm:text-[9.5px] tracking-[0.3em] text-[#EBE3D5]/50 uppercase font-light drop-shadow-sm flex items-center gap-2"
            >
              <span>Auraé Fine Arts</span>
              <span className="w-1.5 h-[1px] bg-white/10" />
              <span>Edition • {String(index + 1).padStart(2, '0')}</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Subtle Luxury Glowing Perimeter Border Frame */}
        <div
          style={{
            borderColor: isHovered ? 'rgba(229, 209, 184, 0.28)' : 'rgba(255, 255, 255, 0.03)',
            boxShadow: isHovered 
              ? 'inset 0 0 20px rgba(229, 209, 184, 0.08), 0 0 30px rgba(229, 209, 184, 0.03)' 
              : 'none',
          }}
          className="absolute inset-0 border-[1.5px] rounded-[36px] pointer-events-none z-30 transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>
    </div>
  );
}

export default function GallerySection() {
  const galleryItems = [
    {
      image: IMAGES.loungeInterior,
      category: 'The Sanctuary',
      title: 'Quietude & Spatial Whispers',
      span: 'md:col-span-8',
      aspect: 'aspect-[16/10]',
    },
    {
      image: IMAGES.skincareBottle,
      category: 'The Apothecary',
      title: 'Circadian Active Alchemy',
      span: 'md:col-span-4',
      aspect: 'aspect-[3/4]',
    },
    {
      image: IMAGES.beautyDetail,
      category: 'The Exposure',
      title: 'Chromatic Dermal Gloss Glow',
      span: 'md:col-span-4',
      aspect: 'aspect-[3/4]',
    },
    {
      image: IMAGES.heroPortrait,
      category: 'The Portrait',
      title: 'Presence in Absolute Softness',
      span: 'md:col-span-8',
      aspect: 'aspect-[16/10]',
    },
    {
      image: IMAGES.sculptSilhouette,
      category: 'The Contour',
      title: 'Obscure Silhouette Edge Contour Lighting',
      span: 'md:col-span-12',
      aspect: 'aspect-[16/10] md:aspect-[16/5]',
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-36 bg-[#050505] overflow-hidden px-6 md:px-12"
    >
      {/* Light glow leaks */}
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-blush/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <span className="font-sans text-[10px] tracking-[0.4em] text-brand-muted-rose uppercase font-medium inline-flex items-center gap-2 mb-4">
            <Camera size={10} className="text-brand-gold" />
            The Immersive Gallery
          </span>
          <h2 id="gallery-title" className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter mb-6 leading-tight">
            Cinematic Frames of <br />
            <span className="font-serif italic text-brand-muted-rose">Quiet Refinement</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-charcoal/70 leading-relaxed font-light">
            An atmospheric chronicle celebrating sculptural light, anatomical alignment, and custom micro-batched cellular active formulas.
          </p>
        </div>

        {/* Asymmetrical Parallax Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {galleryItems.map((item, idx) => (
            <GalleryCard key={idx} item={item} index={idx} />
          ))}
        </div>

        {/* Breathing Bottom Quote Accent */}
        <div className="mt-32 md:mt-48 mb-12 md:mb-20 relative w-full flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Subtle warm ambient pulsing glow behind quote */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] sm:h-[350px] bg-[radial-gradient(circle,rgba(229,209,184,0.08)_0%,transparent_70%)] pointer-events-none mix-blend-screen filter blur-[60px] z-0 animate-pulse" style={{ animationDuration: '8s' }} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-3xl px-6 flex flex-col items-center"
          >
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="mb-8 p-3 rounded-full bg-white/[0.02] border border-white/[0.05] shadow-[0_0_20px_rgba(229,209,184,0.06)]"
            >
              <Sparkles size={16} className="text-brand-gold" />
            </motion.div>
            
            <p className="font-serif italic text-xl md:text-3xl lg:text-3.5xl text-brand-muted-rose font-light leading-relaxed tracking-wide mb-8 max-w-2xl">
              “True visual poetry happens in transition, when lighting melts into softness.”
            </p>

            <div className="flex items-center gap-4 text-[9px] tracking-[0.45em] text-white/40 uppercase font-semibold">
              <span className="h-[1px] w-8 bg-white/10" />
              <span>THE AURAÉ MANIFESTO</span>
              <span className="h-[1px] w-8 bg-white/10" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

