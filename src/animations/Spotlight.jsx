import { useRef, useEffect } from 'react';

/**
 * Spotlight Card / Container
 * Applies high-performance radial cursor spotlight using CSS variables.
 * Avoids React re-renders completely.
 */
export default function Spotlight({
  children,
  className = '',
  spotlightColor = 'rgba(255, 87, 34, 0.15)',
  spotlightSize = 350,
  ...props
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--spotlight-x', `${x}px`);
      el.style.setProperty('--spotlight-y', `${y}px`);
      el.style.setProperty('--spotlight-opacity', '1');
    };

    const handleMouseLeave = () => {
      el.style.setProperty('--spotlight-opacity', '0');
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        '--spotlight-size': `${spotlightSize}px`,
        '--spotlight-color': spotlightColor,
        '--spotlight-opacity': '0',
      }}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: 'var(--spotlight-opacity)',
          background: `radial-gradient(var(--spotlight-size) circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), var(--spotlight-color), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

