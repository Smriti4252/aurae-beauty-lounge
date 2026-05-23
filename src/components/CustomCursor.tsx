import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState<'none' | 'button' | 'card' | 'image'>('none');
  const [hoverText, setHoverText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  // Smooth cursor follow using spring physics
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 280, mass: 0.6 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Event delegation for custom luxury hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const element = target.closest('[data-cursor]');
      if (element) {
        const type = element.getAttribute('data-cursor') || 'button';
        const text = element.getAttribute('data-cursor-text') || '';
        setHoverType(type as any);
        setHoverText(text);
        return;
      }

      // Fallback for native interactive elements
      if (target.closest('button') || target.closest('a') || target.closest('select') || target.closest('input')) {
        setHoverType('button');
        setHoverText('');
        return;
      }
      
      if (target.closest('img') || target.closest('[role="img"]')) {
        setHoverType('image');
        setHoverText('VIEW');
        return;
      }

      setHoverType('none');
      setHoverText('');
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  // Render a responsive dual-element custom cursor (dot + luxury blur halo)
  return (
    <>
      {/* Glow Halo - Lagging spring movement with soft blur */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-muted-rose/20 bg-brand-gold/5 pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center text-[7px] tracking-[0.2em] font-sans font-bold text-brand-muted-rose"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hoverType === 'button' ? 1.6 : hoverType === 'image' ? 2.2 : hoverType === 'card' ? 1.3 : 1,
          backgroundColor: hoverType === 'image' ? 'rgba(229, 209, 184, 0.15)' : 'rgba(166, 139, 91, 0.05)',
          borderColor: hoverType === 'none' ? 'rgba(229, 209, 184, 0.25)' : 'rgba(229, 209, 184, 0.7)',
          boxShadow: hoverType !== 'none' ? '0 0 15px rgba(229, 209, 184, 0.2)' : '0 0 0px rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3 }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="whitespace-nowrap pointer-events-none drop-shadow-sm uppercase font-semibold text-[6px] tracking-[0.3em] font-sans text-brand-muted-rose"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precision Pin */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-muted-rose pointer-events-none z-[10000] mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hoverType !== 'none' ? 0.5 : 1,
          opacity: hoverType === 'image' ? 0.2 : 0.9,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
