import { motion } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';
import Spotlight from '../animations/Spotlight';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Store } from 'lucide-react';

export default function Experience() {
  const exp = EXPERIENCE_DATA[0];

  return (
    <section id="experience" className="section-wrapper w-full relative py-24 sm:py-32 lg:py-36 bg-[#07070a] border-t border-white/[0.08] overflow-hidden">
      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722] tracking-widest uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
                <span>03 // CAREER TRACK</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                WORK EXPERIENCE
              </h2>
            </div>
            <div className="font-mono text-xs text-[#ff6b35] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-ping" />
              <span>CURRENTLY ACTIVE POSITION</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Animated Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          {/* Progressive SVG Line that draws down */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-white/[0.08]">
            <motion.div
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-gradient-to-b from-[#ff5722] via-[#ff7849] to-[#ff5722]/20 shadow-[0_0_12px_#ff5722]"
            />
          </div>

          {/* Timeline Node */}
          <div className="relative">
            {/* Timeline Pulsing Beacon */}
            <div className="absolute -left-[30px] sm:-left-[46px] top-1 w-4 h-4 rounded-full bg-[#07070a] border-2 border-[#ff5722] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff5722] animate-pulse" />
            </div>

            {/* Experience Card */}
            <Spotlight
              spotlightColor="rgba(255, 87, 34, 0.12)"
              spotlightSize={500}
              className="p-6 sm:p-10 rounded-2xl bg-[#0c0c12] border border-white/[0.08] relative"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff7849] mb-3">
                    <Briefcase size={12} />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-base sm:text-lg text-[#cbd5e1] font-medium mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 font-mono text-xs text-[#94a3b8]">
                  <span className="flex items-center gap-1.5 text-[#ff6b35] font-semibold">
                    <Calendar size={13} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="mb-8">
                <div className="font-mono text-xs text-[#ff5722] uppercase tracking-wider mb-4">
                  // Core Responsibilities & Impact
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((bullet, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * idx, duration: 0.5 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-colors"
                    >
                      <CheckCircle2 size={16} className="text-[#ff5722] mt-0.5 shrink-0" />
                      <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies Leveraged */}
              <div>
                <div className="font-mono text-xs text-[#64748b] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Store size={13} /> Production Tooling & Environment
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded text-xs font-mono bg-white/[0.03] text-[#94a3b8] border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}

