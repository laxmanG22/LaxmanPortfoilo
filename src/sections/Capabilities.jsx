import { useState } from 'react';
import { motion } from 'motion/react';
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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="capabilities" className="section-wrapper w-full relative py-24 sm:py-32 lg:py-36 bg-[#060608] border-t border-white/[0.08] overflow-hidden">
      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722] tracking-widest uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_8px_#ff5722] animate-pulse" />
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

        {/* Dynamic Architectural Capabilities Cards */}
        <div
          onMouseLeave={() => setHoveredIndex(null)}
          className="flex flex-col gap-4 sm:gap-5"
        >
          {CAPABILITIES.map((cap, idx) => {
            const Icon = icons[cap.id] || Globe;
            const isHovered = hoveredIndex === idx;

            return (
              <Spotlight
                key={cap.id}
                spotlightColor="rgba(255, 87, 34, 0.18)"
                spotlightSize={500}
                className="rounded-2xl"
              >
                <motion.div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => setHoveredIndex(idx)}
                  animate={{
                    y: isHovered ? -3 : 0,
                    scale: isHovered ? 1.01 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 420, damping: 26 }}
                  className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isHovered
                      ? 'bg-gradient-to-r from-[#14111c] via-[#0f0e15] to-[#09090e] border-[#ff5722]/55 shadow-[0_12px_42px_rgba(0,0,0,0.85),0_0_30px_rgba(255,87,34,0.18)]'
                      : 'bg-[#0a0a0f]/75 border-white/[0.07] hover:border-white/[0.14]'
                  }`}
                >
                  {/* Left Radiant Energy Pulse Line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-b from-[#ff5722] via-[#ff7849] to-[#ff5722] shadow-[0_0_18px_#ff5722]'
                        : 'bg-transparent'
                    }`}
                  />

                  {/* Top Laser Precision Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-r from-transparent via-[#ff5722]/70 to-transparent opacity-100'
                        : 'opacity-0'
                    }`}
                  />

                  {/* Ambient Cyber Light Glow in Top Corner */}
                  <div
                    className={`absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#ff5722]/15 blur-3xl pointer-events-none transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* High-Tech Shimmer Sheen on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none transition-transform duration-700 ${
                      isHovered ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}
                  />

                  {/* Card Content Grid */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-start md:items-center py-7 sm:py-9 px-5 sm:px-9">
                    {/* Left Column: Number + Icon Container + Title */}
                    <div className="md:col-span-5 lg:col-span-5 flex items-center gap-4 sm:gap-6">
                      {/* Fixed Number Column */}
                      <span
                        className={`font-mono text-2xl sm:text-3xl font-black w-10 sm:w-12 shrink-0 transition-all duration-300 ${
                          isHovered
                            ? 'text-[#ff5722] scale-105 drop-shadow-[0_0_8px_rgba(255,87,34,0.4)]'
                            : 'text-[#475569]'
                        }`}
                      >
                        {cap.id}
                      </span>

                      {/* Elevated Icon Container */}
                      <div
                        className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? 'bg-[#ff5722] text-black shadow-[0_0_24px_rgba(255,87,34,0.55)] rotate-3 scale-110'
                            : 'bg-white/[0.04] text-[#ff7849] border border-white/[0.08]'
                        }`}
                      >
                        <Icon
                          size={22}
                          className={`transition-colors duration-300 ${
                            isHovered ? 'text-black' : 'text-[#ff7849]'
                          }`}
                        />
                      </div>

                      {/* Aligned Title */}
                      <h3
                        className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight flex-1 transition-colors duration-300 ${
                          isHovered ? 'text-white' : 'text-[#e2e8f0]'
                        }`}
                      >
                        {cap.title}
                      </h3>
                    </div>

                    {/* Right Column: Description + Tech Tags + Action Arrow */}
                    <div className="md:col-span-7 lg:col-span-7 flex items-start md:items-center justify-between gap-6">
                      {/* Description & Tags Column */}
                      <div className="flex-1 min-w-0 pr-2">
                        <p
                          className={`text-sm sm:text-base leading-relaxed mb-3 transition-colors duration-300 ${
                            isHovered ? 'text-[#cbd5e1]' : 'text-[#94a3b8]'
                          }`}
                        >
                          {cap.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {cap.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-2.5 py-1 rounded text-xs font-mono transition-all duration-300 ${
                                isHovered
                                  ? 'bg-[#ff5722]/15 text-[#ff9e80] border border-[#ff5722]/40 shadow-[0_0_10px_rgba(255,87,34,0.12)]'
                                  : 'bg-white/[0.03] text-[#94a3b8] border border-white/[0.06]'
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Arrow Button */}
                      <div
                        className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 ${
                          isHovered
                            ? 'bg-[#ff5722] border-[#ff5722] text-black shadow-[0_0_20px_rgba(255,87,34,0.5)] -translate-y-0.5 translate-x-0.5'
                            : 'border-white/[0.08] bg-white/[0.03] text-[#64748b]'
                        }`}
                      >
                        <ArrowUpRight
                          size={19}
                          className={`transition-transform duration-300 ${
                            isHovered
                              ? 'rotate-45 text-black'
                              : 'text-[#94a3b8]'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Spotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
}
