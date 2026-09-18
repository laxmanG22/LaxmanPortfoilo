import { motion } from 'motion/react';
import { ArrowDownRight, Mail } from 'lucide-react';
import Magnetic from '../animations/Magnetic';
import HeroPortrait from '../components/HeroPortrait';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden w-full"
    >
      {/* Dynamic Technical Grid Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-35 pointer-events-none" />

      {/* Subtle Orange Spotlight Ambient Lights */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ff5722]/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#ff6b35]/8 rounded-full blur-[130px] pointer-events-none"
      />

      {/* Technical HUD Grid Lines */}
      {/* <div className="absolute top-24 left-8 hidden lg:flex flex-col gap-1 text-[10px] font-mono text-[#64748b]/60 pointer-events-none">
        <div>SYS // HYD.IN.TEL</div>
        <div>LAT: 17.3850° N</div>
        <div>LON: 78.4867° E</div>
        <div className="w-16 h-[1px] bg-white/10 mt-1" />
      </div>

      <div className="absolute top-24 right-8 hidden lg:flex flex-col items-end gap-1 text-[10px] font-mono text-[#64748b]/60 pointer-events-none">
        <div>STACK // CORE</div>
        <div>ENV: PRODUCTION</div>
        <div>STATUS: ACTIVE</div>
        <div className="w-16 h-[1px] bg-white/10 mt-1" />
      </div> */}

      {/* Main Hero Content: Two-Column Composition */}
      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Primary Typography & Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Step 1: Status Metadata Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_10px_#ff5722] animate-pulse" />
                <span className="font-mono text-xs text-[#cbd5e1] tracking-wider uppercase">
                  {PERSONAL_INFO.status}
                </span>
                <span className="text-[#64748b]">•</span>
                <span className="font-mono text-xs text-[#ff7849]">{PERSONAL_INFO.location}</span>
              </div>
            </motion.div>

            {/* Step 2: Main Dramatic Typography */}
            <div className="overflow-hidden mb-1 pr-4 py-1">
              <motion.div variants={titleWordVariants}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter text-white leading-[0.98] pr-2">
                  LAXMAN
                </h1>
              </motion.div>
            </div>

            <div className="overflow-hidden mb-4 pr-6 py-1">
              <motion.div variants={titleWordVariants}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter bg-gradient-to-r from-white via-[#cbd5e1] to-[#ff7849] bg-clip-text text-transparent leading-[0.98] pr-4">
                  GUDIMALLA
                </h1>
              </motion.div>
            </div>

            {/* Step 3: Engineering Subtitle */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="h-[1px] w-6 sm:w-12 bg-[#ff5722]/50" />
                <span className="font-mono text-base sm:text-lg md:text-xl font-semibold tracking-widest text-[#ff6b35] uppercase">
                  {PERSONAL_INFO.role}
                </span>
                <div className="h-[1px] w-6 sm:w-12 bg-[#ff5722]/50" />
              </div>
            </motion.div>

            {/* Step 4: Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base sm:text-lg text-[#94a3b8] font-normal leading-relaxed mb-8"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Step 5: Technology Keywords Bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mb-10 max-w-xl"
            >
              {PERSONAL_INFO.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded text-[11px] sm:text-xs font-mono font-medium tracking-wider bg-white/[0.03] border border-white/[0.07] text-[#cbd5e1] hover:border-[#ff5722]/40 hover:text-white transition-colors"
                >
                  {kw}
                </span>
              ))}
            </motion.div>

            {/* Step 6: Magnetic CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <Magnetic strength={0.35}>
                <a
                  href="#work"
                  className="btn-primary group"
                  style={{ textDecoration: 'none' }}
                >
                  <span>VIEW MY WORK</span>
                  <ArrowDownRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
                  />
                </a>
              </Magnetic>

              <Magnetic strength={0.35}>
                <a
                  href="#contact"
                  className="btn-secondary group"
                  style={{ textDecoration: 'none' }}
                >
                  <Mail size={16} className="text-[#ff5722]" />
                  <span>GET IN TOUCH</span>
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Professional Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroPortrait />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono text-[#64748b]"
      >
        <span>SCROLL DOWN</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#ff5722] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
