import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';
import Spotlight from '../animations/Spotlight';
import { TECH_STACK } from '../data/portfolioData';
import {
  Layers,
  Box,
  Wrench,
  Send,
  Bot,
  Terminal,
  Database,
  Server,
  Code2,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const categoryMeta = {
  Frontend: {
    displayName: "Frontend & Mobile",
    description: "Component hierarchies, reactive state pipelines, cross-platform mobile architectures & high-framerate UIs.",
    icon: Layers,
    accent: "#ff5722",
  },
  Backend: {
    displayName: "Backend & Services",
    description: "RESTful endpoints, Node/Express middleware, authentication layers & high-throughput API integrations.",
    icon: Box,
    accent: "#ff6b35",
  },
  Database: {
    displayName: "Database Architecture",
    description: "Relational schema design, optimized indexing, relational queries & data integrity in MySQL.",
    icon: Database,
    accent: "#ff7849",
  },
  Tools: {
    displayName: "Developer Toolchain",
    description: "Version control workflows, API testing collections, native mobile SDKs & compilation pipelines.",
    icon: Wrench,
    accent: "#ff8a65",
  },
  Publishing: {
    displayName: "App Store Publishing",
    description: "Production release tracks, Play Console rollouts & App Store Connect compliance validation.",
    icon: Send,
    accent: "#ff9e80",
  },
  "AI Tools": {
    displayName: "AI & Agentic Tooling",
    description: "LLM-assisted engineering workflows, contextual reasoning, inline generation & autonomous agent pipelines.",
    icon: Bot,
    accent: "#ff6b35",
  },
};

function renderTechIcon(name, category) {
  const lower = (name || '').toLowerCase();
  let Icon = categoryMeta[category]?.icon || Terminal;
  if (lower.includes('react') || lower.includes('javascript') || lower.includes('html') || lower.includes('css')) {
    Icon = Code2;
  } else if (lower.includes('node') || lower.includes('express') || lower.includes('api')) {
    Icon = Server;
  } else if (lower.includes('sql') || lower.includes('data')) {
    Icon = Database;
  } else if (lower.includes('git') || lower.includes('code') || lower.includes('postman') || lower.includes('studio') || lower.includes('xcode')) {
    Icon = Wrench;
  } else if (lower.includes('play') || lower.includes('store') || lower.includes('connect')) {
    Icon = Send;
  } else if (lower.includes('gpt') || lower.includes('ai') || lower.includes('copilot') || lower.includes('cline') || lower.includes('cursor')) {
    Icon = Sparkles;
  }
  return <Icon size={36} className="text-[#ff5722]" />;
}

export default function Stack() {
  const categories = Object.keys(TECH_STACK);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedTech, setSelectedTech] = useState({
    ...TECH_STACK[categories[0]][0],
    category: categories[0]
  });

  const isUserInteractingRef = useRef(false);
  const timeoutRef = useRef(null);

  // Smooth Category Jump Handler
  const scrollToCategory = (cat) => {
    setActiveCategory(cat);
    const element = document.getElementById(`stack-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      const yOffset = -140; // Account for fixed navbar + sticky filters
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // User Selection with Interaction Pause
  const handleSelectTech = (tech, category) => {
    setSelectedTech({ ...tech, category });
    setActiveCategory(category);
    isUserInteractingRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 1800);
  };

  // IntersectionObserver to dynamically detect current category during page window scroll
  useEffect(() => {
    const observerCallback = (entries) => {
      if (isUserInteractingRef.current) return;

      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries.reduce((prev, curr) =>
          prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
        );
        const cat = topEntry.target.getAttribute('data-stack-category');
        if (cat && cat !== activeCategory) {
          setActiveCategory(cat);
          const firstTech = TECH_STACK[cat]?.[0];
          if (firstTech) {
            setSelectedTech({ ...firstTech, category: cat });
          }
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-15% 0px -40% 0px',
      threshold: 0.1,
    });

    const categoryElements = document.querySelectorAll('[data-stack-category]');
    categoryElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeCategory]);

  const activeIndex = categories.indexOf(selectedTech.category || activeCategory);
  const currentCategoryData = categoryMeta[selectedTech.category || activeCategory] || categoryMeta.Frontend;

  return (
    <section
      id="stack"
      className="section-wrapper w-full relative py-24 sm:py-32 lg:py-36 bg-[#060609] border-t border-white/[0.08]"
    >
      {/* Background Ambient Lights (isolated so they never cause horizontal scroll) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#ff5722]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff6b35]/5 rounded-full blur-[140px]" />
      </div>

      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722] tracking-widest uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse" />
                <span>05 // ARSENAL</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                ENGINEERING STACK
              </h2>
            </div>
            <p className="font-mono text-xs text-[#94a3b8] max-w-sm">
              Verified technologies & tools utilized across enterprise web, mobile, and spatial workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            TWO-COLUMN STICKY SPLIT-SCROLL ARCHITECTURE
            Parent grid container: naturally sized to fit all right-side content.
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
          {/* Left Column: Sticky Central Hub Display */}
          <div className="w-full lg:col-span-5 stack-sticky-panel lg:sticky lg:top-28 z-20 mb-8 lg:mb-0">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0f] border border-white/[0.08] relative overflow-hidden shadow-2xl shadow-black/80 flex flex-col justify-between min-h-[480px]">
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5722]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Panel Top HUD Header */}
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-[#ff6b35] uppercase tracking-wider mb-6 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_8px_#ff5722] animate-pulse" />
                    <span className="font-bold">CORE ARCHITECTURAL IDENTITY</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] text-[#cbd5e1]">
                    {selectedTech.category || activeCategory}
                  </div>
                </div>

                {/* Animated Dynamic Tech Presentation Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTech.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center py-2"
                  >
                    {/* Visual Icon Node Graphic */}
                    <div className="relative mb-5">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#ff5722]/20 via-[#0d0d14] to-white/5 border border-[#ff5722]/40 flex items-center justify-center shadow-[0_0_35px_rgba(255,87,34,0.22)]">
                        {renderTechIcon(selectedTech.name, selectedTech.category || activeCategory)}
                      </div>
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#ff5722] text-black font-mono text-[10px] font-bold tracking-widest uppercase shadow-md">
                        {selectedTech.level || "Verified"}
                      </div>
                    </div>

                    {/* Technology Name */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                      {selectedTech.name}
                    </h3>

                    {/* Category & Capability Subtitle */}
                    <div className="text-xs font-mono text-[#ff7849] uppercase tracking-wider mb-4">
                      {currentCategoryData.displayName}
                    </div>

                    {/* Architectural Description (reserved height to prevent vertical jitter) */}
                    <div className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-[#cbd5e1] leading-relaxed text-left">
                      <p className="min-h-[48px]">
                        {selectedTech.desc || "Core architectural foundation for modern digital products and production systems."}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Panel Bottom Progress HUD & Scroll Tracker */}
              <div className="pt-4 mt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#64748b] mb-2.5">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#ff5722]" />
                    <span className="text-[#94a3b8]">CATEGORY {activeIndex + 1} OF {categories.length}</span>
                  </span>
                  <span className="text-[#ff5722] font-semibold">VERIFIED IN RESUME</span>
                </div>

                {/* Progress Indicator Steps */}
                <div className="grid grid-cols-6 gap-1.5 w-full">
                  {categories.map((cat, i) => (
                    <button
                      key={cat}
                      onClick={() => scrollToCategory(cat)}
                      title={`Jump to ${cat}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeIndex
                          ? 'bg-[#ff5722] shadow-[0_0_8px_#ff5722]'
                          : i < activeIndex
                          ? 'bg-[#ff5722]/40'
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-2 text-center">
                  <span className="text-[10px] font-mono text-[#475569]">
                    HOVER OR CLICK ANY NODE • SCROLL TO EXPLORE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Normal Page Scrolling Content
              - NO nested scrollbar
              - NO overflow-y: auto
              - NO fixed height
              - Category filters sticky at top of right column
              - All skill categories and cards move upward with normal page scrolling
              ========================================================================= */}
          <div className="w-full lg:col-span-7">
            {/* Category Filters: Sticky within right column only */}
            <div className="sticky top-20 sm:top-24 z-10 py-3 mb-8 bg-[#060609]/90 backdrop-blur-md border-b border-white/[0.08] flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isCurrent = (selectedTech.category || activeCategory) === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => scrollToCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#ff5722] text-black font-bold shadow-[0_0_12px_rgba(255,87,34,0.35)]'
                        : 'bg-white/[0.03] text-[#94a3b8] hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Skills Content: Normal Document Flow */}
            <div>
              {categories.map((cat, catIdx) => {
                const meta = categoryMeta[cat] || categoryMeta.Frontend;
                const CatIcon = meta.icon || Layers;
                const items = TECH_STACK[cat] || [];

                return (
                  <div
                    key={cat}
                    id={`stack-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    data-stack-category={cat}
                    className="mb-14 scroll-mt-36"
                  >
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center text-[#ff5722]">
                          <CatIcon size={15} />
                        </div>
                        <h3 className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                          0{catIdx + 1} // {meta.displayName}
                        </h3>
                      </div>
                      <span className="font-mono text-[11px] text-[#64748b]">
                        {items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}
                      </span>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {items.map((item) => {
                        const isSelected = selectedTech.name === item.name;
                        return (
                          <Spotlight
                            key={item.name}
                            spotlightColor="rgba(255, 87, 34, 0.22)"
                            spotlightSize={180}
                            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                              isSelected
                                ? 'bg-[#ff5722]/12 border-[#ff5722] text-white shadow-[0_0_18px_rgba(255,87,34,0.18)]'
                                : 'bg-white/[0.02] border-white/[0.06] text-[#94a3b8] hover:border-white/[0.2] hover:bg-white/[0.04]'
                            }`}
                          >
                            <div
                              onClick={() => handleSelectTech(item, cat)}
                              onMouseEnter={() => handleSelectTech(item, cat)}
                              className="h-full flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm font-bold text-white tracking-tight">
                                    {item.name}
                                  </span>
                                  {isSelected && (
                                    <span className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_6px_#ff5722]" />
                                  )}
                                </div>
                                <div className="text-[11px] font-mono text-[#ff7849]">
                                  {item.level ? `Role: ${item.level}` : "Commercial"}
                                </div>
                              </div>

                              <p className="text-[11px] text-[#64748b] line-clamp-2 mt-2 leading-relaxed">
                                {item.desc}
                              </p>

                              <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-[#475569]">
                                <span>INSPECT</span>
                                <ArrowRight size={11} className={isSelected ? 'text-[#ff5722]' : 'text-[#475569]'} />
                              </div>
                            </div>
                          </Spotlight>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
