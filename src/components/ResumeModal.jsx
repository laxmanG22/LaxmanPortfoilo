import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MapPin, Printer, Briefcase, GraduationCap, Cpu } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, EDUCATION_DATA } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0e] border border-white/[0.12] rounded-xl shadow-2xl p-6 sm:p-10 text-[#e2e8f0]"
        >
          {/* Action Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-8">
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722]">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
              VERIFIED RESUME RECORD
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#cbd5e1] hover:text-white transition-colors"
                title="Print or Save as PDF"
              >
                <Printer size={13} />
                <span>PRINT / SAVE PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#94a3b8] hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Resume Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-[#ff7849] font-mono text-sm font-semibold mt-1">
              {PERSONAL_INFO.role}
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-[#94a3b8]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-[#ff5722] text-decoration-none text-inherit transition-colors"
              >
                <Mail size={12} /> {PERSONAL_INFO.email}
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-[#ff5722] text-decoration-none text-inherit transition-colors"
              >
                <Phone size={12} /> +91 {PERSONAL_INFO.phone}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} /> {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-mono tracking-widest text-[#ff5722] uppercase mb-2">
              // Summary
            </h2>
            <p className="text-sm text-[#cbd5e1] leading-relaxed">
              {PERSONAL_INFO.tagline} Experienced in full-lifecycle mobile engineering (React Native) and modern responsive web systems (React.js), with deep background in geospatial mapping, custom polygons, enterprise RBAC security, and scalable REST API integration.
            </p>
          </div>

          {/* Section: Experience */}
          <div className="mb-8">
            <h2 className="text-xs font-mono tracking-widest text-[#ff5722] uppercase mb-4 flex items-center gap-2">
              <Briefcase size={14} /> Professional Experience
            </h2>
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex flex-wrap items-baseline justify-between">
                  <div className="text-base font-bold text-white">{exp.role}</div>
                  <div className="text-xs font-mono text-[#ff6b35]">{exp.period}</div>
                </div>
                <div className="text-xs text-[#94a3b8] font-mono mb-2">
                  {exp.company} • {exp.location}
                </div>
                <ul className="space-y-1.5 pl-4 text-xs text-[#cbd5e1] list-disc">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="leading-relaxed">{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section: Flagship Projects */}
          <div className="mb-8">
            <h2 className="text-xs font-mono tracking-widest text-[#ff5722] uppercase mb-4 flex items-center gap-2">
              <Cpu size={14} /> Key Engineering Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="p-3.5 rounded bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm font-bold text-white">{p.name} — <span className="font-normal text-xs text-[#94a3b8]">{p.tagline}</span></div>
                    <div className="text-xs font-mono text-[#64748b]">{p.period}</div>
                  </div>
                  <div className="text-xs text-[#ff7849] font-mono my-1">
                    {p.stack.join(' • ')}
                  </div>
                  <ul className="space-y-1 pl-4 text-xs text-[#cbd5e1] list-disc mt-2">
                    {p.whatIBuilt.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Stack */}
          <div className="mb-8">
            <h2 className="text-xs font-mono tracking-widest text-[#ff5722] uppercase mb-3">
              // Technical Stack & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05]">
                <span className="font-mono text-[#ff7849] font-semibold block mb-1">Frontend & Mobile:</span>
                <span className="text-[#cbd5e1]">React.js, React Native, JavaScript, HTML5, CSS</span>
              </div>
              <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05]">
                <span className="font-mono text-[#ff7849] font-semibold block mb-1">Backend & Database:</span>
                <span className="text-[#cbd5e1]">Node.js, Express.js, REST APIs, MySQL</span>
              </div>
              <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05]">
                <span className="font-mono text-[#ff7849] font-semibold block mb-1">Tools & Platforms:</span>
                <span className="text-[#cbd5e1]">Git, GitHub, VS Code, Postman, Android Studio, Xcode</span>
              </div>
              <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05]">
                <span className="font-mono text-[#ff7849] font-semibold block mb-1">Publishing & AI:</span>
                <span className="text-[#cbd5e1]">Google Play Console, App Store Connect, ChatGPT, Cursor, Copilot, Claude, Cline</span>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div className="mb-6">
            <h2 className="text-xs font-mono tracking-widest text-[#ff5722] uppercase mb-3 flex items-center gap-2">
              <GraduationCap size={14} /> Education
            </h2>
            <div className="space-y-2">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-semibold text-white">{edu.degree}</span>
                    <span className="text-[#94a3b8]"> — {edu.institution}, {edu.location}</span>
                  </div>
                  <span className="font-mono text-[#ff6b35]">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-white/[0.08] flex justify-between items-center text-xs font-mono text-[#64748b]">
            <span>Laxman Gudimalla • Resume Record</span>
            <button
              onClick={onClose}
              className="text-[#ff5722] hover:underline"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

