import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={revealRef}
      className="reveal-on-scroll py-20 md:py-28 bg-[#F6F3EC] dark:bg-[#171A20] text-[#1E232B] dark:text-[#F6F3EC] border-b border-[#E5E0D5] dark:border-[#2D323C] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-[#B07A3A] uppercase mb-2">
            Work History & Impact
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#171A20] dark:text-[#F6F3EC] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Professional experience in manual & API quality engineering.
          </h2>
          <p className="text-base text-[#525B6C] dark:text-[#A7AFBD] mt-4 max-w-2xl leading-relaxed">
            Hands-on QA delivery across full-time and internship tenures in high-velocity agile delivery environments.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="mt-14 relative pl-6 sm:pl-8 border-l border-[#D6CFC3] dark:border-[#2D323C]">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative group ${idx !== 0 ? 'mt-16' : ''}`}
            >
              {/* Timeline Node marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] dark:bg-[#171A20] border-2 border-[#B07A3A] group-hover:scale-125 transition-transform" />

              {/* Main Card Container */}
              <div className="bg-[#FFFFFF] dark:bg-[#20242B] border border-[#E5E0D5] dark:border-[#2D323C] rounded-xl p-6 md:p-8 shadow-sm transition-all duration-200 hover:border-[#D4CCA9] dark:hover:border-[#B07A3A]/50 hover:shadow-md">
                {/* Header Lockup */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2.5 pb-4 border-b border-[#EFEBE1] dark:border-[#2D323C]">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#171A20] dark:text-[#F6F3EC]">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#4E5666] dark:text-[#A7AFBD] mt-1">
                      <span className="font-semibold text-[#171A20] dark:text-[#F6F3EC] flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[#B07A3A]" />
                        {exp.company}
                      </span>
                      <span aria-hidden="true" className="text-[#A5ACBA] dark:text-[#646A76]">·</span>
                      <span className="flex items-center gap-1 text-[#626A7A] dark:text-[#9BA1AC]">
                        <MapPin className="w-3.5 h-3.5 text-[#8C93A0]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Metadata: Dates & Employment Type */}
                  <div className="flex items-center gap-3 text-xs text-[#5D6574] lg:text-right">
                    <span className="font-mono flex items-center gap-1 text-[#B07A3A] font-medium bg-[#FAF6EE] dark:bg-[#171A20] px-2.5 py-1 rounded border border-[#EBE3D3] dark:border-[#2D323C]">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="font-mono text-[#8C93A0] uppercase tracking-wider text-[11px]">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm md:text-base text-[#3A414E] dark:text-[#C5CAD3] mt-4 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Bullets List */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold text-[#171A20] dark:text-[#F6F3EC] uppercase tracking-wide mb-3">
                    Core Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-sm text-[#4B5362] dark:text-[#C5CAD3] flex items-start gap-3 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B07A3A] mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Highlights */}
                <div className="mt-6 pt-5 border-t border-[#EFEBE1] dark:border-[#2D323C] bg-[#FAF8F5] dark:bg-[#1A1D24] -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-6 md:p-8 rounded-b-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-[#B07A3A] uppercase tracking-wide block mb-1.5">
                        Key Testing Highlights
                      </span>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#3D4452] dark:text-[#C5CAD3]">
                        {exp.keyHighlights.map((hl, hlIdx) => (
                          <span key={hlIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B07A3A] shrink-0" />
                            <span>{hl}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tools Used (Clean unboxed inline tags) */}
                    <div className="sm:text-right shrink-0">
                      <span className="text-[11px] font-mono text-[#8C93A0] block mb-1">
                        Tools & Environment
                      </span>
                      <span className="text-xs font-mono text-[#171A20] dark:text-[#F6F3EC] font-medium">
                        {exp.toolsUsed.join(' · ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
