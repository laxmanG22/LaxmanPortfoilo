import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Copy, Check } from 'lucide-react';
import Magnetic from '../animations/Magnetic';
import Spotlight from '../animations/Spotlight';
import ScrollReveal from '../animations/ScrollReveal';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="section-wrapper w-full relative py-28 sm:py-36 lg:py-40 bg-[#050507] border-t border-white/[0.08] overflow-hidden">
      {/* Background radial spotlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5722]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10 text-center">
        {/* Section Label */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#ff5722] tracking-widest uppercase mb-6 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
            <span>07 // INITIATE DIALOGUE</span>
          </div>
        </ScrollReveal>

        {/* Dramatic Large Typography */}
        <div className="mb-8">
          <ScrollReveal delay={0.1}>
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.98] text-white">
              <span className="block text-[#64748b]/80">LET'S BUILD</span>
              <span className="block text-white">SOMETHING</span>
              <span className="block bg-gradient-to-r from-[#ff5722] via-[#ff7849] to-white bg-clip-text text-transparent">
                USEFUL.
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Supporting text */}
        <ScrollReveal delay={0.2}>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#94a3b8] font-normal leading-relaxed mb-12">
            Open to software engineering opportunities and interesting projects.
          </p>
        </ScrollReveal>

        {/* Magnetic Primary Action: EMAIL ME → */}
        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mb-16">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Discussion`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#ff5722] hover:bg-[#ff6b35] text-black font-mono font-bold text-sm sm:text-base tracking-wider transition-all duration-300 shadow-[0_0_35px_rgba(255,87,34,0.35)] hover:shadow-[0_0_50px_rgba(255,87,34,0.55)] cursor-pointer group text-decoration-none"
              >
                <span>EMAIL ME</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1.5 transition-transform"
                />
              </a>
            </Magnetic>
          </div>
        </ScrollReveal>

        {/* Contact Info Cards */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {/* Email Card */}
            <Spotlight
              spotlightColor="rgba(255, 87, 34, 0.15)"
              spotlightSize={200}
              className="p-5 rounded-xl bg-[#0a0a0f] border border-white/[0.08] flex flex-col items-center justify-center text-center group"
            >
              <Mail size={20} className="text-[#ff5722] mb-2" />
              <div className="font-mono text-[11px] text-[#64748b] uppercase mb-1">Direct Email</div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-xs sm:text-sm text-white hover:text-[#ff7849] transition-colors truncate max-w-full px-2"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check size={11} className="text-[#10b981]" /> : <Copy size={11} />}
                <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </Spotlight>

            {/* Phone Card */}
            <Spotlight
              spotlightColor="rgba(255, 87, 34, 0.15)"
              spotlightSize={200}
              className="p-5 rounded-xl bg-[#0a0a0f] border border-white/[0.08] flex flex-col items-center justify-center text-center group"
            >
              <Phone size={20} className="text-[#ff5722] mb-2" />
              <div className="font-mono text-[11px] text-[#64748b] uppercase mb-1">Phone Line</div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="font-mono text-xs sm:text-sm text-white hover:text-[#ff7849] transition-colors"
              >
                +91 {PERSONAL_INFO.phone}
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check size={11} className="text-[#10b981]" /> : <Copy size={11} />}
                <span>{copiedPhone ? 'COPIED' : 'COPY'}</span>
              </button>
            </Spotlight>

            {/* Location Card */}
            <Spotlight
              spotlightColor="rgba(255, 87, 34, 0.15)"
              spotlightSize={200}
              className="p-5 rounded-xl bg-[#0a0a0f] border border-white/[0.08] flex flex-col items-center justify-center text-center group"
            >
              <MapPin size={20} className="text-[#ff5722] mb-2" />
              <div className="font-mono text-[11px] text-[#64748b] uppercase mb-1">Base Location</div>
              <div className="font-mono text-xs sm:text-sm text-white">
                {PERSONAL_INFO.location}
              </div>
              <div className="mt-3 font-mono text-[10px] text-[#10b981] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span>OPEN TO HYBRID/REMOTE</span>
              </div>
            </Spotlight>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

