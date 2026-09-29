import { X, ArrowLeft, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { renderFormattedText } from '../utils/formatText';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#171A20]/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFFFF] dark:bg-[#1E232B] border border-[#E5E0D5] dark:border-[#2D323C] rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden text-[#1E232B] dark:text-[#F6F3EC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (hidden in print) */}
        <div className="bg-[#FAF8F5] dark:bg-[#171A20] border-b border-[#E5E0D5] dark:border-[#2D323C] px-6 py-3.5 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-semibold text-[#171A20] dark:text-[#F6F3EC]">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs font-mono text-[#8C93A0] hidden sm:inline">
              · ATS-Compliant Format
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#171A20] dark:text-[#F6F3EC] bg-white dark:bg-[#20242B] border border-[#D8D2C5] dark:border-[#2D323C] rounded hover:bg-[#F2ECE1] dark:hover:bg-[#2A2E38] transition-colors shadow-sm cursor-pointer"
              title="Back to Page"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#B07A3A]" />
              <span>Back to Page</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#7F8694] hover:text-[#171A20] dark:hover:text-[#F6F3EC] hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto print:p-0 print:overflow-visible text-[#1E232B] dark:text-[#F6F3EC] print:text-black print:bg-white font-sans selection:bg-[#B07A3A]/20">
          {/* Header */}
          <div className="border-b-2 border-[#171A20] dark:border-[#2D323C] print:border-[#171A20] pb-6 mb-6">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#171A20] dark:text-[#F6F3EC] print:text-black">
              {PORTFOLIO_DATA.profile.name}
            </h1>
            <p className="text-base font-medium text-[#B07A3A] mt-1">
              {PORTFOLIO_DATA.profile.role} (Manual & Automation Tester)
            </p>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#4A5260] dark:text-[#C5CAD3] print:text-[#4A5260] mt-3 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#B07A3A]" />
                {PORTFOLIO_DATA.profile.location}
              </span>
              <span>·</span>
              <a
                href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1 text-[#171A20] dark:text-[#F6F3EC] print:text-[#171A20] hover:underline hover:text-[#B07A3A] dark:hover:text-[#B07A3A] transition-colors"
                title={`Call ${PORTFOLIO_DATA.profile.phone}`}
              >
                <Phone className="w-3 h-3 text-[#B07A3A]" />
                {PORTFOLIO_DATA.profile.phone}
              </a>
              <span>·</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex items-center gap-1 text-[#171A20] dark:text-[#F6F3EC] print:text-[#171A20] hover:underline hover:text-[#B07A3A] dark:hover:text-[#B07A3A] transition-colors"
                title={`Email ${PORTFOLIO_DATA.profile.email}`}
              >
                <Mail className="w-3 h-3 text-[#B07A3A]" />
                {PORTFOLIO_DATA.profile.email}
              </a>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#171A20] dark:text-[#F6F3EC] print:text-[#171A20] hover:underline"
              >
                {PORTFOLIO_DATA.profile.linkedin}
              </a>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#171A20] dark:text-[#F6F3EC] print:text-[#171A20] hover:underline"
              >
                {PORTFOLIO_DATA.profile.github}
              </a>
            </div>
          </div>

          {/* Professional Objective / Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#171A20] dark:text-[#F6F3EC] print:text-black border-b border-[#D8D2C5] dark:border-[#2D323C] pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#383F4C] dark:text-[#C5CAD3] print:text-[#383F4C] leading-relaxed">
              {renderFormattedText(PORTFOLIO_DATA.profile.positioning, "font-semibold text-[#171A20] dark:text-[#F6F3EC] print:text-black")}
            </p>
          </section>

          {/* Technical & QA Skills (Grouped exactly as requested) */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#171A20] dark:text-[#F6F3EC] print:text-black border-b border-[#D8D2C5] dark:border-[#2D323C] pb-1 mb-2.5 font-mono">
              Technical & Testing Skills
            </h2>
            <div className="space-y-1.5 text-xs text-[#2E3542] dark:text-[#C5CAD3] print:text-[#2E3542]">
              {PORTFOLIO_DATA.skillsGrouped.map((cat) => (
                <div key={cat.category} className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-3 font-semibold text-[#171A20] dark:text-[#F6F3EC] print:text-black">
                    {cat.category}:
                  </span>
                  <span className="sm:col-span-9 text-[#4B5362] dark:text-[#C5CAD3] print:text-[#4B5362]">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#171A20] dark:text-[#F6F3EC] print:text-black border-b border-[#D8D2C5] dark:border-[#2D323C] pb-1 mb-3 font-mono">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {PORTFOLIO_DATA.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#171A20] dark:text-[#F6F3EC] print:text-black">{exp.role}</strong>
                      <span className="text-[#555E6E] dark:text-[#9BA1AC] print:text-[#555E6E]"> — {exp.company}</span>
                    </div>
                    <span className="font-mono text-xs text-[#6A7383] dark:text-[#8C93A0] print:text-[#6A7383]">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-[#404754] dark:text-[#C5CAD3] print:text-[#404754] list-disc list-outside pl-4 leading-relaxed">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Tested */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#171A20] dark:text-[#F6F3EC] print:text-black border-b border-[#D8D2C5] dark:border-[#2D323C] pb-1 mb-3 font-mono">
              Key Projects Tested
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="text-xs text-[#383F4C] dark:text-[#C5CAD3] print:text-[#383F4C]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <strong className="text-[#171A20] dark:text-[#F6F3EC] print:text-black text-sm">
                      {proj.title}
                    </strong>
                    <span className="font-mono text-[#B07A3A] font-medium">
                      {proj.clientDomain}
                    </span>
                  </div>
                  <p className="mt-1 leading-relaxed text-[#4A5260] dark:text-[#A7AFBD] print:text-[#4A5260]">{proj.overview}</p>
                  <p className="mt-1 font-mono text-[11px] text-[#6A7282] dark:text-[#8C93A0] print:text-[#6A7282]">
                    <strong>Testing Types:</strong> {proj.testingTypes.join(', ')} | <strong>Tools:</strong> {proj.tools.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#171A20] dark:text-[#F6F3EC] print:text-black border-b border-[#D8D2C5] dark:border-[#2D323C] pb-1 mb-2.5 font-mono">
              Education
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs"
                >
                  <div>
                    <strong className="text-[#171A20] dark:text-[#F6F3EC] print:text-black">{edu.degree}</strong>
                    <span className="text-[#555E6E] dark:text-[#9BA1AC] print:text-[#555E6E]"> — {edu.institution}, {edu.location}</span>
                  </div>
                  <div className="font-mono text-[#171A20] dark:text-[#F6F3EC] print:text-black font-semibold sm:text-right">
                    <span>{edu.scoreLabel}: {edu.score}</span>
                    <span className="text-[#8C93A0] font-normal ml-2">({edu.period})</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
