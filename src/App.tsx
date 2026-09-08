import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TrajectorySection } from './components/TrajectorySection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { EducationSection } from './components/EducationSection';
import { CareerSection } from './components/CareerSection';
import { GithubLabSection } from './components/GithubLabSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#051424] text-[#d4e4fa] flex flex-col font-sans selection:bg-[#4cd7f6]/30 selection:text-[#acedff]">
      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Main Page Flow with spacing for fixed navbar */}
      <main className="flex-1 w-full pt-16 flex flex-col">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <TrajectorySection />
        <SkillsSection />
        <ProjectsSection />
        <RoadmapSection />
        <EducationSection />
        <CareerSection />
        <GithubLabSection />
        <ContactSection
          isContactModalOpen={isContactModalOpen}
          setIsContactModalOpen={setIsContactModalOpen}
        />
      </main>

      {/* Telemetry Footer */}
      <Footer />

      {/* Interactive Printable Resume Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
