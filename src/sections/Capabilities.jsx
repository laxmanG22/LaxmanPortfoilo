import { useState } from 'react';
import ScrollReveal from '../animations/ScrollReveal';
import Spotlight from '../animations/Spotlight';
import { CAPABILITIES } from '../data/portfolioData';
import { ArrowUpRight, Globe, Smartphone, MapPin, Database, Zap } from 'lucide-react';

const icons = {
  "01": Globe,
  "02": Smartphone,
  "03": MapPin,
  "04": Database,
  "05": Zap
};

export default function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="capabilities" className="section-wrapper w-full relative py-24 sm:py-32 lg:py-36 bg-[#060608] border-t border-white/[0.08] overflow-hidden">
      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722] tracking-widest uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
                <span>02 // CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                WHAT I BUILD
              </h2>
            </div>
            <p className="font-mono text-xs text-[#94a3b8] max-w-sm">
              Engineered for real-world operational workflows, high performance, and cross-platform fidelity.
            </p>
          </div>
        </ScrollReveal>

        {/* Structured Two-Column Capabilities List */}
        <div className="flex flex-col divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = icons[cap.id] || Globe;
            const isHovered = hoveredIndex === idx;

            return (
              <Spotlight
                key={cap.id}
                spotlightColor="rgba(255, 87, 34, 0.12)"
                spotlightSize={450}
                className="group relative cursor-pointer transition-colors duration-300"
              >
                <div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => setHoveredIndex(idx)}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-start md:items-center py-8 sm:py-10 px-4 sm:px-8 transition-colors duration-200"
                  style={{
                    backgroundColor: isHovered ? 'rgba(255, 87, 34, 0.03)' : 'transparent',
                  }}
                >
                  {/* Left Column: Number (Fixed) + Icon (Fixed) + Capability Title */}
                  <div className="md:col-span-5 lg:col-span-5 flex items-center gap-4 sm:gap-6">
                    {/* Fixed Number Column */}
                    <span
                      className="font-mono text-xl sm:text-2xl font-bold w-10 sm:w-12 shrink-0 transition-colors duration-300"
                      style={{
                        color: isHovered ? '#ff5722' : '#64748b',
                      }}
                    >
                      {cap.id}
                    </span>

                    {/* Fixed Icon Container */}
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                      <Icon
                        size={22}
                        className="transition-colors duration-300"
                        style={{
                          color: isHovered ? '#ff7849' : '#64748b',
                        }}
                      />
                    </div>

                    {/* Aligned Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight flex-1">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Right Column: Description + Tech Tags + Action Button */}
                  <div className="md:col-span-7 lg:col-span-7 flex items-start md:items-center justify-between gap-6">
                    {/* Description & Tags Column */}
                    <div className="flex-1 min-w-0 pr-2">
                      <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-3">
                        {cap.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {cap.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] text-[#cbd5e1] border border-white/[0.06]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Arrow Button (Consistently Aligned on the Right) */}
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] group-hover:border-[#ff5722]/50 group-hover:bg-[#ff5722]/10 transition-all">
                      <ArrowUpRight
                        size={18}
                        className="text-[#64748b] group-hover:text-[#ff5722] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Spotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
}
