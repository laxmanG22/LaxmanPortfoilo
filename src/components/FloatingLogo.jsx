import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import lgLogo from '../assets/LG_Logo.png';

export default function FloatingLogo() {
  const [isAtAbout, setIsAtAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const aboutEl = document.getElementById('about');

      if (aboutEl) {
        const aboutTop = aboutEl.getBoundingClientRect().top;
        // Transition when scrolling towards About section
        setIsAtAbout(aboutTop <= window.innerHeight * 0.75 || scrollY > 260);
      } else {
        setIsAtAbout(scrollY > 260);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      layout
      onClick={scrollToTop}
      title={isAtAbout ? "Laxman Gudimalla • Back to Top" : "Laxman Gudimalla"}
      transition={{
        type: "spring",
        stiffness: 55,
        damping: 15,
        mass: 1.1,
      }}
      className={`fixed z-50 p-0 bg-transparent border-0 outline-none cursor-pointer no-print focus:outline-none transition-shadow duration-300 ${
        isAtAbout
          ? "bottom-6 right-6 sm:bottom-8 sm:right-8"
          : "top-3.5 sm:top-4 left-1/2 -translate-x-1/2"
      }`}
    >
      <motion.img
        layout
        src={lgLogo}
        alt="Laxman Gudimalla Logo"
        className={`object-contain filter transition-all duration-300 ${
          isAtAbout
            ? "w-12 h-12 sm:w-14 sm:h-14 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] hover:drop-shadow-[0_0_20px_rgba(255,87,34,0.55)] hover:scale-110"
            : "w-8 h-8 sm:w-9 sm:h-9 drop-shadow-[0_2px_10px_rgba(255,87,34,0.35)] hover:drop-shadow-[0_0_16px_rgba(255,87,34,0.6)] hover:scale-110"
        }`}
      />
    </motion.button>
  );
}
