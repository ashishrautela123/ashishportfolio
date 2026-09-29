import { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TestMatrixModal } from './TestMatrixModal';
import { Layers, CheckCircle2, ArrowUpRight, Terminal, Sliders } from 'lucide-react';
import tmsImg from '../assets/images/project_shiprocket_tms_1790501107348.jpg';
import hrmsImg from '../assets/images/project_dishtv_hrms_1790501119054.jpg';

export function Projects() {
  const revealRef = useScrollReveal<HTMLElement>();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Map project images correctly
  const projectImages: Record<string, string> = {
    'shiprocket-tms': tmsImg,
    'dishtv-hrms': hrmsImg,
  };

  return (
    <section
      id="projects"
      ref={revealRef}
      className="reveal-on-scroll py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#171A20] text-[#1E232B] dark:text-[#F6F3EC] border-b border-[#E5E0D5] dark:border-[#2D323C] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-[#B07A3A] uppercase mb-2">
            Selected Work & System Scrutiny
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#171A20] dark:text-[#F6F3EC] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Featured enterprise QA engagements and platform verifications.
          </h2>
          <p className="text-base text-[#525B6C] dark:text-[#A7AFBD] mt-4 max-w-2xl leading-relaxed">
            In-depth functional, API, and regression testing across critical B2B logistics and enterprise human resource systems.
          </p>
        </div>

        {/* Two Detailed Cards */}
        <div className="mt-14 space-y-16">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <article
              key={project.id}
              className="bg-[#FAF8F5] dark:bg-[#20242B] border border-[#EBE5DA] dark:border-[#2D323C] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="grid grid-cols-1 items-stretch">
                {/* Visual Preview Container (5 cols) */}
                <div className={`lg:col-span-5 relative bg-[#171A20] overflow-hidden flex flex-col justify-between`}>
                  <div className="relative aspect-[16/10] lg:h-full w-full overflow-hidden group">
                    <img
                      src={projectImages[project.id] || project.imageSrc}
                      alt={`${project.title} interface`}
                      className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171A20]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Overlay Tag */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-[#F6F3EC]">
                      <span className="font-mono text-[11px] bg-[#171A20]/90 px-2.5 py-1 rounded backdrop-blur border border-white/10">
                        {project.clientDomain}
                      </span>
                      <span className="font-mono text-[11px] text-[#B07A3A] bg-[#171A20]/90 px-2 py-1 rounded backdrop-blur">
                        Live B2B System
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-xs text-[#E5E8EE]">
                      <span className="font-serif text-sm block text-white font-medium">
                        {project.title}
                      </span>
                      <span className="text-[11px] text-[#9EA6B4] block mt-0.5">
                        {project.tagline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content & Validation Matrix Summary (7 cols) */}
                <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Unboxed Metadata Header */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#8C7A5E] dark:text-[#C89252] font-mono mb-2">
                      <span>{project.clientDomain}</span>
                      <span aria-hidden="true">·</span>
                      <span>B2B Platform</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#B07A3A] font-semibold">{project.testMatrix.scenariosCount}+ Scenarios</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#171A20] dark:text-[#F6F3EC] tracking-tight">
                      {project.title}
                    </h3>

                    {/* Overview & Scope */}
                    <p className="text-sm md:text-base text-[#3A414E] dark:text-[#C5CAD3] mt-3.5 leading-relaxed">
                      {project.overview}
                    </p>

                    <p className="text-xs sm:text-sm text-[#5C6474] dark:text-[#A7AFBD] mt-2.5 leading-relaxed">
                      <strong className="text-[#171A20] dark:text-[#F6F3EC]">Scope & Rigor:</strong> {project.scopeSummary}
                    </p>

                    {/* Validation Highlights */}
                    <div className="mt-5 pt-4 border-t border-[#EAE3D5] dark:border-[#2D323C]">
                      <h4 className="text-xs font-semibold text-[#171A20] dark:text-[#F6F3EC] uppercase tracking-wide mb-2.5">
                        Key Validations & Quality Criteria:
                      </h4>
                      <ul className="space-y-2">
                        {project.validationHighlights.map((hl, hlIdx) => (
                          <li
                            key={hlIdx}
                            className="text-xs sm:text-sm text-[#464E5D] dark:text-[#C5CAD3] flex items-start gap-2.5 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#B07A3A] mt-0.5 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testing Types & Tools (Clean unboxed inline metadata) */}
                    <div className="mt-6 pt-4 border-t border-[#EAE3D5] dark:border-[#2D323C] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="font-mono text-[#8C93A0] block text-[11px] mb-1">
                          Testing Types Executed
                        </span>
                        <span className="text-[#171A20] dark:text-[#F6F3EC] font-medium leading-snug">
                          {project.testingTypes.join(' · ')}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[#8C93A0] block text-[11px] mb-1">
                          Tools & Utilities
                        </span>
                        <span className="text-[#171A20] dark:text-[#F6F3EC] font-medium leading-snug">
                          {project.tools.join(' · ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-8 pt-5 border-t border-[#EAE3D5] dark:border-[#2D323C] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2.5 text-xs font-semibold text-[#F6F3EC] bg-[#171A20] dark:bg-[#121419] dark:hover:bg-[#2A2E38] hover:bg-[#2B303C] border border-white/5 rounded-md transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Sliders className="w-3.5 h-3.5 text-[#B07A3A]" />
                      <span>Inspect QA Test Matrix & Scenarios</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="text-xs font-mono text-[#6A7282] dark:text-[#8C93A0]">
                      Status: <span className="text-emerald-700 dark:text-emerald-400 font-medium">Release Validated</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <TestMatrixModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
