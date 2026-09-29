/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function PortfolioApp() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F3EC] dark:bg-[#171A20] text-[#1E232B] dark:text-[#F6F3EC] font-sans selection:bg-[#B07A3A]/20 selection:text-[#171A20] dark:selection:text-[#F6F3EC] transition-colors duration-200">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Hero Section with staggered orchestrated entrance */}
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* About Section */}
        <About />

        {/* Skills Section (Grouped exactly as requested) */}
        <Skills />

        {/* Experience Section (Vertical timeline, reverse chronological) */}
        <Experience />

        {/* Projects Section (Shiprocket TMS & DishTV HRMS) */}
        <Projects />

        {/* Education Section (Reverse chronological rows with scores) */}
        <Education />

        {/* Contact Band */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Printable / ATS-Ready Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
