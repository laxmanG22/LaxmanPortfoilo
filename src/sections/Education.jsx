import ScrollReveal from '../animations/ScrollReveal';
import Spotlight from '../animations/Spotlight';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-wrapper w-full relative py-20 sm:py-28 lg:py-32 bg-[#060608] border-t border-white/[0.08] overflow-hidden">
      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722] tracking-widest uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
                <span>06 // ACADEMIC FOUNDATION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                EDUCATION
              </h2>
            </div>
            <p className="font-mono text-xs text-[#64748b]">
              Engineering groundwork & secondary academics.
            </p>
          </div>
        </ScrollReveal>

        {/* Minimal Animated Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <Spotlight
                spotlightColor="rgba(255, 87, 34, 0.12)"
                spotlightSize={250}
                className="p-6 rounded-xl bg-[#09090e] border border-white/[0.07] hover:border-[#ff5722]/30 flex flex-col justify-between h-full transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff7849]">
                      <GraduationCap size={16} />
                    </span>
                    <span className="font-mono text-xs text-[#ff6b35] font-semibold">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-xs text-[#cbd5e1] font-medium leading-relaxed">
                    {edu.institution}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.04] flex items-center gap-1.5 font-mono text-[11px] text-[#64748b]">
                  <MapPin size={12} className="text-[#ff5722]" />
                  <span>{edu.location}</span>
                </div>
              </Spotlight>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

