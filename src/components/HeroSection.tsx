/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { IMAGES } from '../data';
import AtmosphericCanvas from './AtmosphericCanvas';

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

type CampaignType = 'luminance' | 'alignment' | 'sensory';

export default function HeroSection({
  onScrollToSection
}: HeroSectionProps) {
  const [activeCampaign, setActiveCampaign] = useState<CampaignType>('luminance');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Luxury mouse parallax feedback
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Automatic slow swap of campaign stories every 14 seconds for living campaign feel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCampaign((prev) => {
        if (prev === 'luminance') return 'alignment';
        if (prev === 'alignment') return 'sensory';
        return 'luminance';
      });
    }, 14000);
    return () => clearInterval(interval);
  }, []);

  const campaignData = {
    luminance: {
      image: IMAGES.heroPortrait,
      label: 'EXPOSURE SERIES 01 / THE REFRACTIVE GLOW',
      titleLine1: 'A Quiet',
      titleLine2: 'Luminance.',
      quote: '"Skincare is an act of whispering back to the soul."',
      description: 'Auraé crafts immersive beauty rituals inspired by cinematic light, sculptural elegance, and modern femininity. Sourcing cellular hydration suspended in active rose waters.',
      priceGuide: 'ATELIER ESSENTIALS'
    },
    alignment: {
      image: IMAGES.sculptSilhouette,
      label: 'PORTRAIT SERIES 02 / THE PERFECT SCULPT',
      titleLine1: 'Beauty,',
      titleLine2: 'Beyond Form.',
      quote: '"The sculpture of contour is the architecture of eternity."',
      description: 'Integrating customized cellular serum infusions, advanced light-refracted gua sha, and warm volcanic stone massage to completely realign biological tension lines.',
      priceGuide: 'HAUTE COIFFURE & SCALP'
    },
    sensory: {
      image: IMAGES.loungeInterior,
      label: 'SENSORY SERIES 03 / THE LIQUID SUNSET',
      titleLine1: 'Vibrant',
      titleLine2: 'Presence.',
      quote: '"Time slows when we allow our senses to touch clarity."',
      description: 'A celebration of modern poise and natural warmth. Discover our botanical lounge experiences, where crisp champagne pairings meet raw sensory therapies.',
      priceGuide: 'BOTANICAL LOUNGE SEGMENTS'
    }
  };

  const current = campaignData[activeCampaign];

  return (
    <section
      id="hero"
      className="relative min-h-screen xl:h-screen w-full bg-[#0C0C0C] flex items-center overflow-hidden pt-28 pb-20 lg:py-0 px-6 sm:px-12 md:px-20 lg:px-24 select-none"
    >
      {/* Immersive Cinematic Fullscreen Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCampaign}
            initial={{ opacity: 0, scale: 1.15, filter: 'blur(8px)' }}
            animate={{ 
              opacity: 0.52, 
              scale: 1.05,
              filter: 'blur(0px)',
              x: mousePos.x * -20,
              y: mousePos.y * -20
            }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
            transition={{ 
              opacity: { duration: 1.8, ease: 'easeInOut' },
              scale: { duration: 2.4, ease: 'easeOut' },
              x: { type: 'spring', damping: 60, stiffness: 18 },
              y: { type: 'spring', damping: 60, stiffness: 18 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={current.image}
              alt="Auraé Immersive Campaign Film Background"
              referrerPolicy="no-referrer"
              decoding="async"
              className="w-full h-full object-cover object-center scale-[1.03]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Global Cinematic Vignette, Shadows & Linear Fade System */}
        {/* Solid left overlay to guarantee ultimate readability for the light labels on the left */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[75%] bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/85 to-transparent z-10 pointer-events-none" />
        {/* Soft bottom edge to melt cleanly into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/40 z-10 pointer-events-none" />
        {/* Top-down vignetting to frame the logo and menu items */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#0C0C0C]/85 to-transparent z-10 pointer-events-none" />
        {/* Circular cinematic frame focus wrapper */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(12,12,12,0.7)_100%)] z-10 pointer-events-none" />

        {/* Soft grain texture to evoke high-end film stock */}
        <div className="absolute inset-0 w-full h-full pointer-events-none film-grain z-20 mix-blend-overlay opacity-30" />

        {/* Dynamic ambient golden sunset light bloom */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-[#A68B5B]/25 to-[#E5D1B8]/0 filter blur-[120px] z-10 pointer-events-none mix-blend-screen"
        />

        {/* Elegant luxury bordered campaign frame */}
        <div className="absolute inset-6 sm:inset-10 border border-white/[0.025] rounded-[32px] sm:rounded-[40px] pointer-events-none z-20" />
      </div>

      {/* Real-time Organic Glowing Gold Dust Particles Floating above backdrop */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <AtmosphericCanvas />
      </div>

      {/* Decorative Atmospheric Blur Glow Blobs */}
      <div 
        id="hero-glow-1" 
        className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full cinematic-glow blur-3xl opacity-40 z-10 pointer-events-none" 
      />

      {/* Main Structural Content Layout: elegant wide single-column presentation */}
      <div className="max-w-4xl mx-auto w-full z-20 relative flex flex-col justify-center items-start min-h-full py-12 md:py-0">
        
        {/* Copy Deck: Editorial Typography & Poetic Narrative */}
        <div className="max-w-3xl flex flex-col items-start text-left">
          
          {/* Campaign Metadata Capsule Tag */}
          <div className="overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCampaign}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <span className="flex items-center justify-center p-1 border border-brand-muted-rose/20 rounded-full bg-white/[0.02]">
                  <Sparkles size={8} className="text-brand-muted-rose animate-pulse" />
                </span>
                <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-brand-muted-rose font-semibold">
                  {current.label}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Oversized Cinematic typography with a delicate, atmospheric ambient warm glow behind it */}
          <div className="relative w-full mb-8">
            {/* Outer soft ambient rose glow - highly diffused */}
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[90%] h-[150%] bg-brand-muted-rose/[0.04] rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen animate-pulse" style={{ animationDuration: '9s' }} />
            
            {/* Inner warm organic gold aura for sophisticated contrast */}
            <div className="absolute top-[40%] left-[25%] -translate-y-1/2 w-[60%] h-[110%] bg-[#A68B5B]/[0.035] rounded-full blur-[90px] pointer-events-none z-0 mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />

            <h1 id="hero-heading" className="relative z-10 select-none tracking-tight">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCampaign}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
                    exit: { opacity: 0 }
                  }}
                >
                  {/* First Line: Thin modern Roman Sans/Serif blend */}
                  <motion.span
                    variants={{
                      initial: { opacity: 0, y: 40, filter: 'blur(10px)' },
                      animate: { opacity: 0.95, y: 0, filter: 'blur(0px)' }
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-serif font-light text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] text-brand-charcoal uppercase leading-[0.9] tracking-[0.03em]"
                  >
                    {current.titleLine1}
                  </motion.span>

                  {/* Second Line: Beautiful deep gold Italic with asymmetric drag */}
                  <motion.span
                    variants={{
                      initial: { opacity: 0, y: 50, filter: 'blur(10px)' },
                      animate: { opacity: 1, y: 0, filter: 'blur(0px)' }
                    }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-serif italic text-6xl sm:text-8xl md:text-9xl lg:text-[7.2rem] xl:text-[8.5rem] text-brand-muted-rose font-light pl-6 sm:pl-16 md:pl-28 mt-2 leading-[0.8]"
                  >
                    {current.titleLine2}
                  </motion.span>
                </motion.div>
              </AnimatePresence>
            </h1>
          </div>

          {/* Luxury core copy & poetic quote wrapper */}
          <div className="space-y-5 max-w-xl mb-12 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCampaign}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="font-serif italic text-lg sm:text-xl text-[#F9F6F0] font-light leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  {current.quote}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#EBE3D5]/88 leading-relaxed font-light tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Station - Cinematic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex flex-wrap items-center gap-5"
          >
            {/* Primary soft warm gold glow button wrapped with gorgeous cinematic ambient glow */}
            <div className="relative group/cta">
              {/* Ultra-soft, barely visible breathing warm ambient backing glow */}
              <motion.div
                animate={{
                  opacity: [0.12, 0.22, 0.12],
                  scale: [0.97, 1.05, 0.97],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-[#E5D1B8]/15 rounded-full blur-[20px] pointer-events-none mix-blend-screen group-hover/cta:bg-[#E5D1B8]/28 group-hover/cta:blur-[25px] transition-all duration-700"
              />
              
              <button
                id="hero-reserve-cta"
                onClick={() => onScrollToSection('booking')}
                className="relative z-10 px-10 py-4.5 bg-brand-muted-rose text-[#0C0C0C] text-[10px] sm:text-xs tracking-[0.3em] font-bold rounded-full shadow-[0_10px_30px_rgba(229,209,184,0.12)] hover:shadow-[0_12px_40px_rgba(229,209,184,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-700 cursor-pointer uppercase border border-brand-muted-rose hover:bg-[#EBE3D5]"
              >
                Reserve Experience
              </button>
            </div>

            {/* Secondary transparent frosted glass button */}
            <button
              id="hero-rituals-cta"
              onClick={() => onScrollToSection('rituals')}
              className="flex items-center gap-2 px-10 py-4.5 border border-white/10 hover:border-brand-muted-rose/40 text-[#EBE3D5] hover:bg-white/10 rounded-full text-[10px] sm:text-xs tracking-[0.3em] font-bold transition-all duration-500 cursor-pointer uppercase bg-white/5 backdrop-blur-md hover:scale-[1.03]"
            >
              <span>View Signature Rituals</span>
              <ArrowRight size={12} className="text-brand-muted-rose" />
            </button>
          </motion.div>

        </div>

      </div>

      {/* Dynamic Editorial Infinite Carousel Switcher at the lower right */}
      <div className="absolute bottom-12 right-6 sm:right-12 lg:right-20 z-20 flex items-center gap-2 sm:gap-4 font-mono text-[9px] tracking-[0.25em] uppercase">
        <button
          id="hero-campaign-selector-1"
          onClick={() => setActiveCampaign('luminance')}
          className={`transition-all duration-500 py-1.5 px-2.5 rounded-full cursor-pointer border ${
            activeCampaign === 'luminance'
              ? 'text-brand-muted-rose border-brand-muted-rose/35 bg-white/[0.02] font-bold scale-105 shadow-[0_4px_15px_rgba(229,209,184,0.1)]'
              : 'text-[#EBE3D5]/40 border-transparent hover:text-[#EBE3D5]'
          }`}
        >
          01. LUMINANCE
        </button>
        <span className="h-[1px] w-4 bg-white/[0.08] hidden xs:block" />
        <button
          id="hero-campaign-selector-2"
          onClick={() => setActiveCampaign('alignment')}
          className={`transition-all duration-500 py-1.5 px-2.5 rounded-full cursor-pointer border ${
            activeCampaign === 'alignment'
              ? 'text-brand-muted-rose border-brand-muted-rose/35 bg-white/[0.02] font-bold scale-105 shadow-[0_4px_15px_rgba(229,209,184,0.1)]'
              : 'text-[#EBE3D5]/40 border-transparent hover:text-[#EBE3D5]'
          }`}
        >
          02. ALIGNMENT
        </button>
        <span className="h-[1px] w-4 bg-white/[0.08] hidden xs:block" />
        <button
          id="hero-campaign-selector-3"
          onClick={() => setActiveCampaign('sensory')}
          className={`transition-all duration-500 py-1.5 px-2.5 rounded-full cursor-pointer border ${
            activeCampaign === 'sensory'
              ? 'text-brand-muted-rose border-brand-muted-rose/35 bg-white/[0.02] font-bold scale-105 shadow-[0_4px_15px_rgba(229,209,184,0.1)]'
              : 'text-[#EBE3D5]/40 border-transparent hover:text-[#EBE3D5]'
          }`}
        >
          03. SENSORY
        </button>
      </div>

      {/* Centered Scroll Indicator at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity duration-300 z-20 hidden md:flex">
        <motion.span 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="font-sans text-[8px] tracking-[0.45em] text-brand-charcoal uppercase select-none font-bold text-center"
        >
          Begin Experience
        </motion.span>
        <motion.button
          onClick={() => onScrollToSection('rituals')}
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="p-1.5 border border-[#E5D1B8]/15 rounded-full bg-white/[0.02] cursor-pointer"
        >
          <ArrowDown size={11} className="text-brand-muted-rose" />
        </motion.button>
      </div>

    </section>
  );
}
