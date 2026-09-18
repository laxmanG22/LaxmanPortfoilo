import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Layers, CheckCircle2 } from 'lucide-react';
import AcreXMapVisual from './visualizations/AcreXMapVisual';
import TejaswiRouteVisual from './visualizations/TejaswiRouteVisual';
import SatyasakshiDashboardVisual from './visualizations/SatyasakshiDashboardVisual';

export default function CaseStudyModal({ project, isOpen, onClose }) {
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

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050508]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b0b10] border border-white/[0.12] rounded-2xl shadow-2xl p-6 sm:p-8"
          style={{
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 87, 34, 0.15)',
          }}
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#ff6b35]">
                <span>PROJECT {project.number}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} /> {project.period}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                {project.name}
              </h2>
              <p className="text-[#94a3b8] text-sm mt-1">{project.tagline}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X size={20} />
            </button>
          </div>

          {/* Interactive Simulation Preview */}
          <div className="my-6">
            <div className="font-mono text-xs text-[#64748b] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
              INTERACTIVE ARCHITECTURE VISUALIZATION
            </div>
            {project.visualizationType === 'map' && <AcreXMapVisual />}
            {project.visualizationType === 'route' && <TejaswiRouteVisual />}
            {project.visualizationType === 'dashboard' && <SatyasakshiDashboardVisual />}
          </div>

          {/* Technologies Used */}
          <div className="mb-6">
            <div className="font-mono text-xs text-[#64748b] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers size={13} /> Technologies & Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-[#cbd5e1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Resume Breakdown: What I Built */}
          <div className="mb-6">
            <div className="font-mono text-xs text-[#ff5722] uppercase tracking-wider mb-3">
              // Engineering Responsibilities & What I Built
            </div>
            <div className="space-y-2.5">
              {project.whatIBuilt.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                >
                  <CheckCircle2 size={16} className="text-[#ff5722] mt-0.5 shrink-0" />
                  <p className="text-sm text-[#cbd5e1] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#64748b]">
              Source of Truth: Resume Specifications
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-mono transition-colors cursor-pointer"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

