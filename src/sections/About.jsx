import { motion } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';
import Spotlight from '../animations/Spotlight';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';
import {
  Terminal,
  Layers,
  Compass,
  Server,
  Rocket,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';

const PILLAR_ICONS = [Layers, Compass, Server, Rocket];

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
              <Spotlight
                spotlightColor="rgba(255, 87, 34, 0.12)"
                spotlightSize={300}
                className="p-6 sm:p-8 rounded-2xl bg-[#0d0d14] border border-white/[0.08] hover:border-white/[0.16] transition-colors duration-500 relative"
              >
                {/* Header HUD */}
                <div className="font-mono text-xs text-[#ff6b35] tracking-widest uppercase mb-5 flex items-center justify-between pb-3 border-b border-white/[0.06] group/head">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] animate-pulse" />
                    <span>ENGINEERING CAPABILITIES</span>
                  </div>
                  <Terminal
                    size={14}
                    className="text-[#64748b] group-hover/head:text-[#ff5722] group-hover/head:rotate-12 transition-all duration-300"
                  />
                </div>

                {/* Interactive Pillar Rows */}
                <div className="space-y-3">
                  {ABOUT_DATA.pillars.map((pillar, idx) => {
                    const Icon = PILLAR_ICONS[idx] || Layers;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="group p-3.5 sm:p-4 rounded-xl bg-white/[0.015] hover:bg-[#ff5722]/[0.05] border border-white/[0.05] hover:border-[#ff5722]/35 transition-all duration-300 relative overflow-hidden cursor-pointer"
                      >
                        {/* Left edge orange glow bar on hover */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-[#ff5722] to-[#ff7849] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Top row with Pillar index and arrow indicator */}
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2 text-xs font-mono text-[#64748b] group-hover:text-[#ff7849] transition-colors duration-200">
                            <Icon
                              size={13}
                              className="text-[#64748b] group-hover:text-[#ff5722] group-hover:scale-110 transition-all duration-200"
                            />
                            <span>PILLAR 0{idx + 1}</span>
                          </div>
                          <ArrowUpRight
                            size={13}
                            className="text-[#64748b] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[#ff5722] transition-all duration-300"
                          />
                        </div>

                        {/* Pillar Title */}
                        <div className="text-sm font-bold text-white group-hover:text-white transition-colors duration-200 mb-2 tracking-tight">
                          {pillar.label}
                        </div>

                        {/* Skill Tags with Hover Glow */}
                        <div className="flex flex-wrap gap-1.5">
                          {pillar.value.split('•').map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.02] border border-white/[0.06] text-[#94a3b8] group-hover:text-[#cbd5e1] group-hover:border-white/[0.1] hover:!text-white hover:!border-[#ff5722]/50 hover:!bg-[#ff5722]/15 transition-all duration-200"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Interactive Location Footer */}
                <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-[#94a3b8] group/loc p-2 rounded-lg hover:bg-white/[0.02] transition-colors duration-200">
                  <span className="flex items-center gap-1.5">
                    <MapPin
                      size={12}
                      className="text-[#ff5722] group-hover/loc:scale-125 transition-transform duration-300"
                    />
                    <span>CURRENT LOCATION</span>
                  </span>
                  <span className="text-white font-semibold group-hover/loc:text-[#ff7849] transition-colors duration-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </Spotlight>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
