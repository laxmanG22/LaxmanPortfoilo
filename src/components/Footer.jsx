import { ArrowUp } from 'lucide-react';
import Magnetic from '../animations/Magnetic';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050508] py-16 relative overflow-hidden w-full">
      {/* Background subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#ff5722]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_8px_#ff5722]" />
            <span className="font-mono font-bold text-base tracking-widest text-white">
              LAXMAN.
            </span>
          </div>
          <p className="font-mono text-xs text-[#94a3b8] tracking-wider uppercase mt-1">
            SOFTWARE ENGINEER
          </p>
          <p className="font-mono text-[11px] text-[#ff7849] tracking-wider mt-1">
            REACT.JS • REACT NATIVE • JAVASCRIPT
          </p>
        </div>

        {/* Center copyright */}
        <div className="text-center font-mono text-xs text-[#64748b]">
          <div>© 2026 LAXMAN GUDIMALLA. ALL RIGHTS RESERVED.</div>
          {/* <div className="text-[11px] text-[#475569] mt-1">BUILT WITH VITE, REACT & TAILORED ARCHITECTURE</div> */}
        </div>

        {/* Right back-to-top */}
        <div className="flex items-center">
          <Magnetic strength={0.3}>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-[#ff5722]/50 text-xs font-mono text-[#cbd5e1] hover:text-[#ff5722] transition-all cursor-pointer"
              aria-label="Back to Top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}

