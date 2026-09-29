import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Database, Server, Cpu, GitBranch, CheckSquare, Workflow } from 'lucide-react';

export function Skills() {
  const revealRef = useScrollReveal<HTMLElement>();

  // Map category icons for clean visual identity
  const categoryIcons: Record<string, React.ReactNode> = {
    Technical: <Database className="w-4 h-4 text-[#B07A3A]" />,
    'API / Backend': <Server className="w-4 h-4 text-[#B07A3A]" />,
    Automation: <Cpu className="w-4 h-4 text-[#B07A3A]" />,
    'CI/CD Tools': <GitBranch className="w-4 h-4 text-[#B07A3A]" />,
    'Testing types': <CheckSquare className="w-4 h-4 text-[#B07A3A]" />,
    Methodology: <Workflow className="w-4 h-4 text-[#B07A3A]" />,
  };

  return (
    <section
      id="skills"
      ref={revealRef}
      className="reveal-on-scroll py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#171A20] text-[#1E232B] dark:text-[#F6F3EC] border-b border-[#E5E0D5] dark:border-[#2D323C] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-[#B07A3A] uppercase mb-2">
            Competencies & Toolset
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#171A20] dark:text-[#F6F3EC] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Specialized skillsets across manual, API, and automation engineering.
          </h2>
          <p className="text-base text-[#525B6C] dark:text-[#A7AFBD] mt-4 max-w-2xl leading-relaxed">
            Proficiencies developed and proven across enterprise transportation logistics and human resource management applications.
          </p>
        </div>

        {/* Grouped Skills Grid - EXACT categories as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PORTFOLIO_DATA.skillsGrouped.map((group) => (
            <div
              key={group.category}
              className="bg-[#FAF8F5] dark:bg-[#20242B] border border-[#EBE6DC] dark:border-[#2D323C] rounded-xl p-6 transition-all duration-200 hover:border-[#D4CCA9]/60 dark:hover:border-[#B07A3A]/40 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#E8E2D5] dark:border-[#2D323C]">
                  {categoryIcons[group.category] || <CheckSquare className="w-4 h-4 text-[#B07A3A]" />}
                  <h3 className="font-serif text-lg font-semibold text-[#171A20] dark:text-[#F6F3EC]">
                    {group.category}
                  </h3>
                </div>

                {/* Skills list inside category - Clean Unboxed Text with Zero-Pill Discipline */}
                <div className="mt-4 divide-y divide-[#EFEBE1] dark:divide-[#2D323C]">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                      <div className="flex items-baseline justify-between">
                        <span className="font-medium text-sm text-[#171A20] dark:text-[#F6F3EC] tracking-tight">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-[#8C7A5E] dark:text-[#C89252]">
                          {skill.focus}
                        </span>
                      </div>
                      <p className="text-xs text-[#5D6574] dark:text-[#A7AFBD] mt-1 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiet footer summary of skills */}
              <div className="mt-5 pt-3 border-t border-[#E8E2D5] dark:border-[#2D323C] flex items-center text-[11px] text-[#7E8694] dark:text-[#8C93A0]">
                <span>Validated in live QA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
