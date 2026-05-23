/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  alpha: number;
  decay: number;
}

export default function AtmosphericCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 45;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    // Initialize layout dimensions
    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const createParticle = (initYAtBottom = false): Particle => {
      const size = Math.random() * 1.5 + 0.5;
      return {
        x: Math.random() * canvas.width,
        y: initYAtBottom ? canvas.height + 10 : Math.random() * canvas.height,
        size,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.7 + 0.1,
        decay: Math.random() * 0.002 + 0.001,
      };
    };

    // Populate initially
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(false));
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        // Move particle
        p.y += p.speedY;
        p.x += p.speedX;
        
        // Dynamic sine sway
        p.x += Math.sin(p.y * 0.01 + p.size) * 0.1;

        // Draw glowing gold micro dust
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `rgba(229, 209, 184, ${p.alpha})`);
        gradient.addColorStop(1, `rgba(166, 139, 91, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Recycle if out of bounds or faded
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
          particles[index] = createParticle(true);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70 mix-blend-screen"
    />
  );
}
