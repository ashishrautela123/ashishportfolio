import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Calendar, MapPin, Check } from 'lucide-react';

export function Education() {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="education"
      ref={revealRef}
      className="reveal-on-scroll py-20 md:py-28 bg-[#F6F3EC] dark:bg-[#171A20] text-[#1E232B] dark:text-[#F6F3EC] border-b border-[#E5E0D5] dark:border-[#2D323C] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-[#B07A3A] uppercase mb-2">
            Academic Foundation
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#171A20] dark:text-[#F6F3EC] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Education & technical grounding in Computer Science.
          </h2>
          <p className="text-base text-[#525B6C] dark:text-[#A7AFBD] mt-4 max-w-2xl leading-relaxed">
            Reverse-chronological academic records demonstrating consistent analytical excellence from B.Tech graduation to secondary schooling.
          </p>
        </div>

        {/* Reverse Chronological Rows */}
        <div className="mt-14 space-y-6">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={edu.degree}
              className="bg-[#FFFFFF] dark:bg-[#20242B] border border-[#E5E0D5] dark:border-[#2D323C] rounded-xl p-6 sm:p-8 shadow-sm transition-all duration-200 hover:border-[#D4CCA9] dark:hover:border-[#B07A3A]/50 hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Degree & Institution (8 cols) */}
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-1.5 text-xs text-[#8C93A0] font-mono mb-1.5">
                    <span className="flex items-center gap-1 text-[#B07A3A] font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#171A20] dark:text-[#F6F3EC]">
                    {edu.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-[#4E5666] dark:text-[#A7AFBD] mt-1.5 font-medium">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#B07A3A]" />
                      <span className="font-semibold text-[#171A20] dark:text-[#F6F3EC]">{edu.institution}</span>
                    </div>
                    <span aria-hidden="true" className="text-[#A5ACBA] dark:text-[#646A76]">·</span>
                    <div className="flex items-center gap-1 text-[#5E6676] dark:text-[#A7AFBD]">
                      <MapPin className="w-3.5 h-3.5 text-[#B07A3A]" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-[#EFEBE1] dark:border-[#2D323C]">
                    <ul className="space-y-1.5">
                      {edu.highlights.map((hl, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs sm:text-sm text-[#4F5766] dark:text-[#C5CAD3] flex items-start gap-2 leading-relaxed"
                        >
                          <Check className="w-3.5 h-3.5 text-[#B07A3A] mt-0.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Score & Academic Standing Column (4 cols) */}
                <div className="lg:col-span-4 lg:border-l lg:border-[#EFEBE1] dark:lg:border-[#2D323C] lg:pl-8 flex flex-col justify-center">
                  <div className="p-4 bg-[#FAF8F5] dark:bg-[#1A1D24] border border-[#EBE4D6] dark:border-[#2D323C] rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#8C7A5E] dark:text-[#C89252] uppercase tracking-wide">
                        Academic Standing
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#171A20] dark:text-[#F6F3EC] font-mono-tabular">
                        {edu.score}
                      </span>
                      <span className="text-xs font-mono text-[#6A7382] dark:text-[#8C93A0]">
                        {edu.scoreLabel}
                      </span>
                    </div>

                    <p className="text-xs text-[#5D6574] dark:text-[#A7AFBD] mt-2 leading-normal">
                      {idx === 0
                        ? 'High-ranking graduation CGPA in Computer Science & Engineering capstone curriculum.'
                        : 'Graduated with academic distinction and strong analytical reasoning.'}
                    </p>
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
