import { ArrowRight, FileText } from 'lucide-react';
import Magnetic from '../animations/Magnetic';
import Spotlight from '../animations/Spotlight';
import ScrollReveal from '../animations/ScrollReveal';

export default function ResumeCTA({ onOpenResume }) {
  return (
    <section className="section-wrapper w-full relative py-20 sm:py-28 lg:py-32 bg-[#07070a] border-t border-white/[0.08] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ff5722]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        <ScrollReveal>
          <Spotlight
            spotlightColor="rgba(255, 87, 34, 0.16)"
            spotlightSize={450}
            className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#0e0e15] to-[#09090d] border border-white/[0.1] text-center flex flex-col items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff7849] mb-4">
              <FileText size={13} />
              <span>AUTHENTIC CAREER RECORD</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              WANT THE FULL STORY?
            </h2>

            <p className="max-w-xl text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-8">
              Explore the complete professional trajectory, technical responsibilities, and project architectures in a clean, comprehensive format.
            </p>

            <Magnetic strength={0.35}>
              <button
                onClick={onOpenResume}
                className="btn-primary group"
              >
                <span>VIEW RESUME</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Magnetic>
          </Spotlight>
        </ScrollReveal>
      </div>
    </section>
  );
}

