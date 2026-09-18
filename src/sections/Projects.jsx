import { useState } from 'react';
import ScrollReveal from '../animations/ScrollReveal';
import Spotlight from '../animations/Spotlight';
import Magnetic from '../animations/Magnetic';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowUpRight, Eye, CheckCircle2 } from 'lucide-react';
import AcreXMapVisual from '../components/visualizations/AcreXMapVisual';
import TejaswiRouteVisual from '../components/visualizations/TejaswiRouteVisual';
import SatyasakshiDashboardVisual from '../components/visualizations/SatyasakshiDashboardVisual';

export default function Projects({ onSelectProject }) {
  const [activeProjectTab, setActiveProjectTab] = useState('acrex');

  const renderVisual = (type) => {
    switch (type) {
      case 'map':
        return <AcreXMapVisual />;
      case 'route':
        return <TejaswiRouteVisual />;
      case 'dashboard':
        return <SatyasakshiDashboardVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="section-wrapper w-full relative py-24 sm:py-32 lg:py-36 bg-[#050508] border-t border-white/[0.08] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ff5722]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722] tracking-widest uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
                <span>04 // FEATURED SYSTEMS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                FLAGSHIP PROJECTS
              </h2>
            </div>
            <p className="font-mono text-xs text-[#94a3b8] max-w-sm">
              Production architectures engineered with React.js, React Native, and geospatial intelligence.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Navigation Quick Tabs */}
        <div className="flex items-center gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
          {PROJECTS_DATA.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveProjectTab(proj.id);
                const el = document.getElementById(`project-${proj.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className={`px-4 py-2 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                activeProjectTab === proj.id
                  ? 'bg-[#ff5722]/15 border-[#ff5722] text-white shadow-[0_0_12px_rgba(255,87,34,0.2)]'
                  : 'bg-white/[0.03] border-white/[0.08] text-[#94a3b8] hover:text-white hover:border-white/[0.2]'
              }`}
            >
              {proj.number} // {proj.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Showcase Items (Large Sticky-Feel Showcase Stack) */}
        <div className="space-y-16 sm:space-y-24">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="scroll-mt-28"
            >
              <Spotlight
                spotlightColor="rgba(255, 87, 34, 0.14)"
                spotlightSize={600}
                className="group rounded-2xl bg-[#09090e] border border-white/[0.08] hover:border-[#ff5722]/40 p-6 sm:p-10 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Project Details & Breakdown */}
                  <div className="lg:col-span-6 space-y-6">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-xs text-[#ff6b35]">
                        <span>PROJECT {project.number}</span>
                        <span>•</span>
                        <span>{project.period}</span>
                      </div>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/[0.04] text-[#94a3b8] border border-white/[0.06]">
                        {project.stack[0]} + {project.stack[1]}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#ff7849] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm sm:text-base text-[#94a3b8] mt-1 font-medium">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-[#cbd5e1] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Feature Bullets from Resume */}
                    <div className="space-y-2">
                      <div className="font-mono text-xs text-[#64748b] uppercase tracking-wider">
                        // Key Engineering Highlights
                      </div>
                      {project.whatIBuilt.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                          <CheckCircle2 size={15} className="text-[#ff5722] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((stk) => (
                        <span
                          key={stk}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] text-[#94a3b8] border border-white/[0.06]"
                        >
                          {stk}
                        </span>
                      ))}
                    </div>

                    {/* Explore Project CTA */}
                    <div className="pt-4">
                      <Magnetic strength={0.3}>
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06] hover:bg-[#ff5722] text-[#f8fafc] hover:text-black font-mono text-xs font-semibold tracking-wider transition-all duration-300 border border-white/[0.1] hover:border-[#ff5722] cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(255,87,34,0.4)]"
                        >
                          <span>EXPLORE PROJECT</span>
                          <ArrowUpRight size={15} />
                        </button>
                      </Magnetic>
                    </div>
                  </div>

                  {/* Right Column: Abstract Interactive Simulation */}
                  <div className="lg:col-span-6">
                    <div className="relative group/canvas">
                      {renderVisual(project.visualizationType)}

                      {/* Click overlay prompt */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#070709]/80 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono text-[#cbd5e1] hover:text-[#ff5722] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye size={12} /> DEEP DIVE
                      </button>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

