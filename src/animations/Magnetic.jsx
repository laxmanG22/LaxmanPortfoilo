import { useRef, useEffect } from 'react';

/**
 * Magnetic component adds subtle cursor pull to buttons/interactive items.
 * Uses requestAnimationFrame and direct DOM transforms to guarantee zero React re-render churn.
 */
export default function Magnetic({ children, strength = 0.35, className = '', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (el) {
        el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        rafId = requestAnimationFrame(animate);
      } else {
        if (el) el.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = (e.clientX - centerX) * strength;
      targetY = (e.clientY - centerY) * strength;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`inline-block ${className}`} {...props}>
      {children}
    </div>
  );
}

