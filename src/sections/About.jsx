import ScrollReveal from '../animations/ScrollReveal';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export default function About() {

  return (
    <section id="about" className="section-wrapper w-full relative py-24 sm:py-32 lg:py-36 bg-[#070709] border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#ff5722]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Editorial Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722] tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
            <span>01 // ABOUT THE ENGINEER</span>
          </div>
        </ScrollReveal>

        {/* Large Editorial Statement */}
        <div className="mb-16 sm:mb-20">
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.02] text-white">
            <ScrollReveal delay={0.1}>
              <span className="block text-[#64748b]/80">I BUILD</span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <span className="block text-white">DIGITAL</span>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <span className="block bg-gradient-to-r from-[#ff5722] via-[#ff7849] to-white bg-clip-text text-transparent">
                EXPERIENCES.
              </span>
            </ScrollReveal>
          </div>
        </div>

        {/* Two-Column Technical Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            {ABOUT_DATA.paragraphs.map((para, idx) => (
              <ScrollReveal key={idx} delay={0.15 * idx}>
                <p className="text-base sm:text-lg text-[#cbd5e1] font-normal leading-relaxed">
                  {para}
                </p>
              </ScrollReveal>
            ))}

            {/* Core Competencies Quick Tags */}
            <ScrollReveal delay={0.5}>
              <div className="pt-4">
                <div className="text-xs font-mono text-[#64748b] uppercase tracking-wider mb-3">
                  // Highlighted Focus Areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "React Native",
                    "Frontend Architecture",
                    "Geospatial Mapping",
                    "Custom Polygons",
                    "REST APIs",
                    "Auth & RBAC",
                    "Cross-Platform",
                    "Performance Tuning"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-[#94a3b8] hover:text-[#ff7849] hover:border-[#ff5722]/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Technical Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal delay={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0d14] border border-white/[0.08] relative">
                <div className="font-mono text-xs text-[#ff6b35] tracking-widest uppercase mb-4 flex items-center justify-between">
                  <span>ENGINEERING CAPABILITIES</span>
                  <Terminal size={14} />
                </div>

                <div className="space-y-4 divide-y divide-white/[0.06]">
                  {ABOUT_DATA.pillars.map((pillar, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-4" : ""}>
                      <div className="text-xs font-mono text-[#64748b] mb-1">
                        PILLAR 0{idx + 1}
                      </div>
                      <div className="text-sm font-bold text-white mb-0.5">
                        {pillar.label}
                      </div>
                      <div className="text-xs text-[#94a3b8] font-mono">
                        {pillar.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-[#94a3b8]">
                  <span>CURRENT LOCATION</span>
                  <span className="text-white font-semibold">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

