import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import Magnetic from '../animations/Magnetic';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'STACK', href: '#stack' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['contact', 'stack', 'work', 'about'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 sm:py-4"
        style={{
          backgroundColor: scrolled ? 'rgba(7, 7, 9, 0.28)' : 'rgba(7, 7, 9, 0.12)',
          backdropFilter: 'blur(24px) saturate(190%)',
          WebkitBackdropFilter: 'blur(24px) saturate(190%)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.03)',
        }}
      >
        <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Magnetic strength={0.25}>
            <a
              href="#"
              className="group flex items-center gap-2 text-decoration-none"
              aria-label="Laxman Gudimalla Home"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5722] shadow-[0_0_8px_#ff5722] group-hover:scale-125 transition-transform" />
              <span className="font-mono font-bold text-sm tracking-widest text-[#f8fafc] group-hover:text-[#ff6b35] transition-colors">
                LAXMAN.
              </span>
            </a>
          </Magnetic>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative py-1 text-decoration-none transition-colors duration-200"
                  style={{
                    color: isActive ? '#f8fafc' : '#94a3b8',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6b35')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive ? '#f8fafc' : '#94a3b8')
                  }
                >
                  <span className="flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] animate-pulse" />
                    )}
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#ff5722] shadow-[0_0_8px_#ff5722]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Resume Button */}
            <Magnetic strength={0.3}>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#ff5722]/15 text-[#ff7849] border border-[#ff5722]/40 hover:bg-[#ff5722]/25 hover:border-[#ff5722]/60 hover:text-white transition-all cursor-pointer shadow-[0_0_12px_rgba(255,87,34,0.15)]"
              >
                <FileText size={12} className="text-[#ff7849]" />
                <span>RESUME</span>
              </button>
            </Magnetic>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#ff5722]/15 text-[#ff7849] border border-[#ff5722]/40 hover:bg-[#ff5722]/25"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#94a3b8] hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#070709]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            {/* Background Grid Accent */}
            <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col space-y-6">
              <div className="font-mono text-xs text-[#ff5722] tracking-widest uppercase">
                // Navigation Index
              </div>
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="group flex items-center justify-between py-3 border-b border-white/[0.06] text-decoration-none"
                >
                  <span className="text-2xl font-mono font-bold text-[#f8fafc] group-hover:text-[#ff6b35] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs font-mono text-[#64748b] group-hover:text-[#ff5722] flex items-center gap-1">
                    0{idx + 1} <ArrowUpRight size={16} />
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="relative z-10 pt-8 border-t border-white/[0.08] flex flex-col gap-4 font-mono text-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 rounded-lg bg-[#ff5722] text-black font-semibold flex items-center justify-center gap-2"
              >
                <FileText size={15} />
                <span>VIEW RESUME</span>
              </button>
              <div className="text-[#64748b] text-center text-[11px]">
                Laxman Gudimalla • Software Engineer • Hyderabad
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

