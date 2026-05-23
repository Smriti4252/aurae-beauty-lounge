/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass, Palette, Calendar, Package, Camera } from 'lucide-react';

interface NavigationProps {
  onScrollToSection: (id: string) => void;
}

export default function Navigation({
  onScrollToSection
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGalleryActive, setIsGalleryActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const galleryEl = document.getElementById('gallery');
      if (galleryEl) {
        const rect = galleryEl.getBoundingClientRect();
        // Active when the top is in/above viewport and bottom is below navbar threshold
        const active = rect.top <= 80 && rect.bottom >= 80;
        setIsGalleryActive(active);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Rituals', id: 'rituals', icon: Compass },
    { label: 'Philosophy', id: 'philosophy', icon: Palette },
    { label: 'Gallery', id: 'gallery', icon: Camera },
    { label: 'Journal', id: 'testimonials', icon: Package },
  ];

  return (
    <>
      <header
        id="aurae-nav"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-out ${
          isGalleryActive
            ? 'py-4 bg-transparent border-b border-transparent shadow-none'
            : isScrolled 
              ? 'py-4 bg-[#0C0C0C]/80 backdrop-blur-md border-b border-white/[0.08]' 
              : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onScrollToSection('hero')}
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-light leading-none text-brand-charcoal">
              AURAÉ
            </span>
            <span className="hidden sm:inline-block h-3 w-[1px] bg-brand-muted-rose/30 mt-1" />
            <span className="hidden sm:inline-block font-sans text-[9px] tracking-[0.3em] font-light mt-1 text-brand-muted-rose uppercase">
              Beauty Lounge
            </span>
          </motion.div>

          {/* Desktop Nav Actions */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-xs tracking-[0.2em] uppercase text-brand-charcoal/80">
            {menuItems.map((item, idx) => (
              <motion.button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => onScrollToSection(item.id)}
                className="hover:text-brand-muted-rose transition-colors duration-300 relative py-1 cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Desktop Reservation Button only */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              id="nav-booking-cta"
              onClick={() => onScrollToSection('booking')}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.81 }}
              className="px-6 py-2 bg-brand-muted-rose text-brand-dark text-[10px] tracking-widest font-bold rounded-full shadow-[0_4px_15px_rgba(229,209,184,0.15)] hover:shadow-[0_8px_25px_rgba(229,209,184,0.3)] hover:scale-[1.03] transition-all duration-500 cursor-pointer uppercase"
            >
              Reserve Experience
            </motion.button>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="mobile-menu-burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-charcoal hover:text-brand-muted-rose transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-[73px] left-0 w-full z-30 bg-[#141414]/95 backdrop-blur-lg border-b border-white/[0.08] shadow-lg flex md:hidden flex-col p-6 gap-5 justify-center"
          >
            <div className="flex flex-col gap-4 font-sans text-sm tracking-widest uppercase font-medium pl-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollToSection(item.id);
                  }}
                  className="flex items-center gap-3 py-2 text-brand-charcoal hover:text-brand-muted-rose text-left"
                >
                  <item.icon size={16} className="text-brand-muted-rose/70" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            
            <div className="h-[1px] bg-black/[0.06] my-1" />

            <button
              id="mobile-nav-booking-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToSection('booking');
              }}
              className="w-full text-center py-3 bg-brand-muted-rose text-brand-dark rounded-full text-xs tracking-widest font-bold uppercase"
            >
              Reserve Experience
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
