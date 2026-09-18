import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Capabilities from './sections/Capabilities';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import ResumeCTA from './sections/ResumeCTA';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070709] text-[#f8fafc] selection:bg-[#ff5722] selection:text-black relative w-full">
      {/* Refined Desktop Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Flow */}
      <main id="main-content" className="w-full flex flex-col items-center">
        <Hero />

        <About />

        <Capabilities />

        <Experience />

        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        <Stack />

        <ResumeCTA onOpenResume={() => setIsResumeModalOpen(true)} />

        <Education />

        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Case Study Fullscreen Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Structured Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
