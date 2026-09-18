import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import portraitImg from '../assets/portrait.png';

export default function HeroPortrait() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    // Disable 3D tilt on touch screens or small devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let curRotX = 0;
    let curRotY = 0;
    let targetScale = 1;
    let curScale = 1;
    let rafId = null;

    const animate = () => {
      curRotX += (targetRotX - curRotX) * 0.12;
      curRotY += (targetRotY - curRotY) * 0.12;
      curScale += (targetScale - curScale) * 0.12;

      if (card) {
        card.style.transform = `perspective(1000px) rotateX(${curRotX.toFixed(2)}deg) rotateY(${curRotY.toFixed(2)}deg) scale3d(${curScale.toFixed(3)}, ${curScale.toFixed(3)}, 1)`;
      }

      if (
        Math.abs(targetRotX - curRotX) > 0.05 ||
        Math.abs(targetRotY - curRotY) > 0.05 ||
        Math.abs(targetScale - curScale) > 0.005
      ) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle rotation bounds (-7deg to +7deg)
      targetRotX = -((y - centerY) / centerY) * 7;
      targetRotY = ((x - centerX) / centerX) * 7;
      targetScale = 1.03;

      // Set spotlight CSS variables directly on DOM
      container.style.setProperty('--spotlight-x', `${x}px`);
      container.style.setProperty('--spotlight-y', `${y}px`);

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      targetScale = 1.03;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      targetRotX = 0;
      targetRotY = 0;
      targetScale = 1;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto select-none"
    >
      {/* Outer Ambient Glow Aura */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 transition-all duration-700 pointer-events-none"
        style={{
          background: isHovered
            ? 'radial-gradient(circle at center, rgba(255, 87, 34, 0.35) 0%, rgba(255, 87, 34, 0.1) 50%, transparent 80%)'
            : 'radial-gradient(circle at center, rgba(255, 87, 34, 0.16) 0%, transparent 70%)',
          filter: isHovered ? 'blur(35px)' : 'blur(25px)',
          transform: isHovered ? 'scale(1.12)' : 'scale(1)',
        }}
      />

      {/* Frame Container with 3D context */}
      <div
        ref={containerRef}
        className="relative group cursor-pointer"
        style={{ perspective: '1000px' }}
      >
        {/* Tilting Card Wrapper */}
        <div
          ref={cardRef}
          className="relative rounded-2xl overflow-hidden bg-[#0a0a0f] border border-white/[0.12] transition-[border-color,box-shadow] duration-500 will-change-transform"
          style={{
            boxShadow: isHovered
              ? '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 87, 34, 0.35)'
              : '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 87, 34, 0.1)',
            borderColor: isHovered ? 'rgba(255, 87, 34, 0.5)' : 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Animated Tracing Border Accent */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20 rounded-2xl"
            style={{
              strokeDasharray: '400 600',
              strokeDashoffset: isHovered ? '0' : '500',
              transition: 'stroke-dashoffset 1.4s ease-in-out, opacity 0.5s ease',
              opacity: isHovered ? 1 : 0.4,
            }}
          >
            <rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="15"
              fill="none"
              stroke="#ff5722"
              strokeWidth="1.5"
            />
          </svg>

          {/* Interactive Cursor Spotlight Glow */}
          <div
            className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(280px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(255, 87, 34, 0.22), transparent 75%)`,
            }}
          />

          {/* Portrait Image Container */}
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#070709]">
            <img
              src={portraitImg}
              alt="Laxman Gudimalla — Software Engineer"
              className="w-full h-full object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                filter: isHovered
                  ? 'grayscale(0%) brightness(1) contrast(1)'
                  : 'grayscale(100%) brightness(0.9) contrast(1.08)',
                transform: isHovered ? 'scale(1.04)' : 'scale(1)',
              }}
              loading="eager"
            />

            {/* Cinematic Gradient Vignette (blends portrait seamlessly into dark theme) */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                background:
                  'linear-gradient(to top, rgba(7, 7, 9, 0.92) 0%, rgba(7, 7, 9, 0.25) 30%, transparent 60%), linear-gradient(to bottom, rgba(7, 7, 9, 0.4) 0%, transparent 25%)',
                opacity: isHovered ? 0.75 : 0.95,
              }}
            />

            {/* Subtle Film Grain / Grid Accent over portrait */}
            <div className="absolute inset-0 tech-grid-bg opacity-15 pointer-events-none" />

            {/* Corner Decorative HUD Markers */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-[#ff5722]/70 pointer-events-none" />
            <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[#ff5722]/70 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#ff5722]/70 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#ff5722]/70 pointer-events-none" />

            {/* Bottom Inner Metadata Strip */}
            <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: isHovered ? '#10b981' : '#ff5722',
                    boxShadow: isHovered ? '0 0 8px #10b981' : '0 0 8px #ff5722',
                  }}
                />
                <span className="text-[#f8fafc] font-semibold tracking-wider text-[10px]">
                  PORTRAIT // LAXMAN
                </span>
              </div>
              <span
                className="text-[10px] font-medium tracking-wider px-2 py-0.5 rounded backdrop-blur-md transition-all duration-300"
                style={{
                  backgroundColor: isHovered ? 'rgba(255, 87, 34, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                  color: isHovered ? '#ff7849' : '#94a3b8',
                  border: isHovered ? '1px solid rgba(255, 87, 34, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {isHovered ? 'FULL COLOR' : 'B&W ARCHIVE'}
              </span>
            </div>
          </div>
        </div>

        {/* Outer Floating Minimal Technical Tag */}
        <div
          className="mt-3 flex items-center justify-between px-2 font-mono text-[10px] text-[#64748b] transition-colors duration-300"
          style={{ color: isHovered ? '#cbd5e1' : '#64748b' }}
        >
          <span className="flex items-center gap-1.5">
            <Terminal size={11} className="text-[#ff5722]" />
            <span>DEV // HYD.IN</span>
          </span>
          <span className="tracking-widest">
            {isHovered ? 'HOVER ACTIVE' : 'HOVER TO REVEAL'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

