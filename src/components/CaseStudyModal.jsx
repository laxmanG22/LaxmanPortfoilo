import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  Layers,
  CheckCircle2,
  Globe,
  Smartphone,
  Apple,
  ExternalLink
} from 'lucide-react';
import AcreXMapVisual from './visualizations/AcreXMapVisual';
import TejaswiRouteVisual from './visualizations/TejaswiRouteVisual';
import SatyasakshiDashboardVisual from './visualizations/SatyasakshiDashboardVisual';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [showLinksModal, setShowLinksModal] = useState(false);

  const handleModalClose = useCallback(() => {
    setShowLinksModal(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (showLinksModal) {
          setShowLinksModal(false);
        } else {
          handleModalClose();
        }
      }
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
  }, [isOpen, showLinksModal, handleModalClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleModalClose}
          className="absolute inset-0 bg-[#050508]/85 backdrop-blur-md"
        />

        {/* Main Modal Window */}
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
            <div className="flex-1 mr-4">
              <div className="flex items-center gap-3 font-mono text-xs text-[#ff6b35]">
                <span>PROJECT {project.number}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} /> {project.period}
                </span>
              </div>

              {/* Title row with option button at the right end of the project name */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-1.5">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.name}
                </h2>

                {/* Option at the right end of project name */}
                {project.links && project.links.length > 0 && (
                  project.links.length === 1 ? (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#ff5722]/15 hover:bg-[#ff5722] text-[#ff6b35] hover:text-black border border-[#ff5722]/40 hover:border-[#ff5722] font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(255,87,34,0.15)] group"
                    >
                      <Globe size={13} />
                      <span>VISIT WEBSITE</span>
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setShowLinksModal(true)}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#ff5722]/15 hover:bg-[#ff5722] text-[#ff6b35] hover:text-black border border-[#ff5722]/40 hover:border-[#ff5722] font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(255,87,34,0.15)] cursor-pointer group"
                    >
                      <Globe size={13} />
                      <span>PROJECT LINKS ({project.links.length})</span>
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  )
                )}
              </div>

              <p className="text-[#94a3b8] text-sm mt-1">{project.tagline}</p>
            </div>

            <button
              onClick={handleModalClose}
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#94a3b8] hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Close Case Study"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Access Live Links Banner */}
          {project.links && project.links.length > 0 && (
            <div className="my-5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="font-mono text-xs text-[#ff5722] uppercase tracking-wider mb-2.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Globe size={13} /> Live Deployments & Project Links
                </span>
                <span className="text-[10px] text-[#64748b]">OFFICIAL RELEASE</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {project.links.map((link, idx) => {
                  const LinkIcon =
                    link.type === 'appstore'
                      ? Apple
                      : link.type === 'playstore'
                      ? Smartphone
                      : Globe;

                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-[#ff5722]/10 border border-white/[0.06] hover:border-[#ff5722]/40 transition-all text-xs font-mono text-[#cbd5e1] hover:text-white group"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <LinkIcon size={14} className="text-[#ff5722] shrink-0" />
                        <span className="truncate">{link.title}</span>
                      </div>
                      <ExternalLink size={12} className="text-[#64748b] group-hover:text-[#ff5722] shrink-0 ml-1" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

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

          {/* Highlights & Footer CTAs */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#64748b]">
              Source of Truth: Resume Specifications
            </div>
            <div className="flex items-center gap-3">
              {project.links && project.links.length > 0 && (
                <button
                  onClick={() => {
                    if (project.links.length === 1) {
                      window.open(project.links[0].url, '_blank', 'noopener,noreferrer');
                    } else {
                      setShowLinksModal(true);
                    }
                  }}
                  className="px-4 py-2 rounded-lg bg-[#ff5722]/15 hover:bg-[#ff5722] text-[#ff7849] hover:text-black text-xs font-mono font-semibold transition-all border border-[#ff5722]/30 hover:border-[#ff5722] cursor-pointer flex items-center gap-1.5"
                >
                  <Globe size={13} />
                  <span>VISIT LIVE {project.links.length > 1 ? `(${project.links.length})` : ''}</span>
                  <ExternalLink size={12} />
                </button>
              )}
              <button
                onClick={handleModalClose}
                className="px-5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-mono transition-colors cursor-pointer"
              >
                CLOSE CASE STUDY
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dedicated Project Links Popup Dialog */}
        <AnimatePresence>
          {showLinksModal && project.links && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
              {/* Dim backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowLinksModal(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 w-full max-w-lg bg-[#0e0e14] border border-[#ff5722]/30 rounded-2xl p-6 shadow-2xl shadow-black"
                style={{
                  boxShadow: '0 20px 50px -10px rgba(0,0,0,0.95), 0 0 30px rgba(255,87,34,0.18)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse" />
                    <span>{project.name} // OFFICIAL LINKS</span>
                  </div>
                  <button
                    onClick={() => setShowLinksModal(false)}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                <p className="text-xs text-[#94a3b8] mb-4">
                  Select a live platform below to view the deployment:
                </p>

                {/* Links List */}
                <div className="space-y-3">
                  {project.links.map((link, idx) => {
                    const LinkIcon =
                      link.type === 'appstore'
                        ? Apple
                        : link.type === 'playstore'
                        ? Smartphone
                        : Globe;

                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.02] hover:bg-[#ff5722]/10 border border-white/[0.08] hover:border-[#ff5722]/50 transition-all duration-200 group text-left overflow-hidden"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className="w-9 h-9 rounded-lg bg-[#ff5722]/10 border border-[#ff5722]/20 flex items-center justify-center text-[#ff5722] group-hover:scale-110 transition-transform shrink-0">
                            <LinkIcon size={18} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-white group-hover:text-[#ff7849] transition-colors truncate">
                              {link.title}
                            </div>
                            <div className="text-[11px] font-mono text-[#64748b] truncate">
                              {link.url}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#ff5722]/10 border border-[#ff5722]/30 text-xs font-mono text-[#ff5722] group-hover:bg-[#ff5722] group-hover:text-black transition-all shrink-0">
                          <span>OPEN</span>
                          <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex justify-end">
                  <button
                    onClick={() => setShowLinksModal(false)}
                    className="px-4 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
