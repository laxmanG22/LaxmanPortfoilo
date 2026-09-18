import { useEffect, useRef } from 'react';

/**
 * CustomCursor
 * Renders a precision dot + smooth trailing glow ring on desktop.
 * Uses direct DOM manipulation via requestAnimationFrame for zero-churn 60+ FPS performance.
 * Completely disabled on mobile and touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Check if device is touch or mobile
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isVisible = false;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }

      // Check if target is interactive
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer, [data-cursor]');
      isHovered = !!isInteractive;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const render = () => {
      // Smooth lerp for outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      
      const scale = isHovered ? 1.6 : 1;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
      ring.style.borderColor = isHovered ? '#ff5722' : 'rgba(255, 87, 34, 0.4)';
      ring.style.backgroundColor = isHovered ? 'rgba(255, 87, 34, 0.1)' : 'transparent';

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Precision inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] opacity-0 transition-opacity duration-200"
        style={{
          width: '6px',
          height: '6px',
          marginTop: '-3px',
          marginLeft: '-3px',
          borderRadius: '50%',
          backgroundColor: '#ff5722',
          boxShadow: '0 0 10px #ff5722',
          willChange: 'transform'
        }}
      />
      {/* Trailing soft glow ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] opacity-0 transition-[border-color,background-color] duration-200"
        style={{
          width: '32px',
          height: '32px',
          marginTop: '-16px',
          marginLeft: '-16px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 87, 34, 0.4)',
          boxShadow: '0 0 16px rgba(255, 87, 34, 0.2)',
          willChange: 'transform'
        }}
      />
    </>
  );
}

