import { useState } from 'react';
import { Check, Compass, Layers, Bug, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function About() {
  const revealRef = useScrollReveal<HTMLElement>();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stlcSteps = [
    {
      step: '01',
      title: 'Requirement & Spec Analysis',
      badge: 'STLC Phase 1',
      description:
        'Deconstruct Product Requirement Documents (PRDs), user journeys, and wireframes. Clarify acceptance criteria with Product Managers to uncover ambiguous edge cases before code is written.',
      activities: ['Functional gap identification', 'Boundary scenario mapping', 'Traceability matrix initialization'],
      output: 'Validated Requirement Checklist & Test Strategy',
    },
    {
      step: '02',
      title: 'Test Design & Scenarios',
      badge: 'STLC Phase 2',
      description:
        'Author comprehensive test cases covering positive pathways, negative deviations, boundary value conditions, and multi-leg state transitions (e.g. logistics parcel statuses, HR payroll tiers).',
      activities: ['Equivalence partitioning', 'Negative input permutation', 'Role-based authorization matrices'],
      output: 'Exhaustive Test Suites (Jira / Spreadsheets)',
    },
    {
      step: '03',
      title: 'API & Environment Validation',
      badge: 'STLC Phase 3',
      description:
        'Leverage Postman to inspect REST endpoints, asserting response status codes, header configurations, JSON payload schemas, token expirations, and mock error handling.',
      activities: ['Postman collection authoring', 'Environment variable configurations', 'Status code verification (200, 201, 400, 401, 500)'],
      output: 'Automated Postman Collection with Assertions',
    },
    {
      step: '04',
      title: 'Execution & Defect Lifecycle',
      badge: 'STLC Phase 4',
      description:
        'Perform exploratory, smoke, functional, and integration runs. When anomalies occur, isolate root causes, document exact steps to reproduce, attach network logs, and triage with engineers.',
      activities: ['Defect replication steps authoring', 'Severity vs Priority classification', 'Chrome DevTools network inspecting'],
      output: 'Actionable Defect Tickets with Reproducible Steps',
    },
    {
      step: '05',
      title: 'Regression & Release Sign-Off',
      badge: 'STLC Phase 5',
      description:
        'Execute deep regression suites on staging builds to verify bug fixes without side-effects. Validate final database entries using SQL and authorize production release sign-off.',
      activities: ['End-to-end regression pass', 'SQL data verification', 'Release readiness review'],
      output: 'Production Release Certification & Audit Log',
    },
  ];

  return (
    <section
      id="about"
      ref={revealRef}
      className="reveal-on-scroll py-20 md:py-28 bg-[#F6F3EC] dark:bg-[#171A20] text-[#1E232B] dark:text-[#F6F3EC] border-b border-[#E5E0D5] dark:border-[#2D323C] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-[#B07A3A] uppercase mb-2">
            Quality Philosophy & Approach
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#171A20] dark:text-[#F6F3EC] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Engineering reliability through structured scrutiny and business-logic rigor.
          </h2>
        </div>

        {/* Narrative & Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-5 text-base md:text-lg text-[#3A414E] dark:text-[#C5CAD3] leading-relaxed">
            <p>
              I am a dedicated Quality Analyst with 1.4+ years of hands-on experience ensuring web platforms meet the highest standards of reliability, performance, and user satisfaction.
            </p>
            <p>
              My expertise centers on <strong className="text-[#171A20] dark:text-[#F6F3EC]">manual and automation testing of complex web applications</strong>, comprehensive test case design, defect reporting, automated test scripts using Playwright and JavaScript, CI/CD integration with GitHub Actions, and cross-tier REST API verification. I operate inside fast-paced Agile/Scrum environments, collaborating seamlessly with developers, product managers, and release engineers.
            </p>
            <p>
              Rather than treating QA as a reactive checkpoint at the end of a sprint, I champion quality as a proactive discipline. Whether validating middle-mile shipment transfers in <strong className="text-[#171A20] dark:text-[#F6F3EC]">Shiprocket TMS</strong> or verifying multi-tier payroll deductions in <strong className="text-[#171A20] dark:text-[#F6F3EC]">DishTV HRMS</strong>, my approach bridges user behavior with system-level backend assertions.
            </p>
          </div>

          {/* Interactive STLC & Defect Lifecycle Explorer */}
          <div className="lg:col-span-6 bg-[#FFFFFF] dark:bg-[#20242B] border border-[#E5E0D5] dark:border-[#2D323C] rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#EFECE4] dark:border-[#2D323C]">
              <div>
                <span className="text-xs font-semibold text-[#B07A3A] uppercase tracking-wide">
                  Methodology Blueprint
                </span>
                <h3 className="font-serif text-lg font-semibold text-[#171A20] dark:text-[#F6F3EC]">
                  5-Stage Testing Life Cycle (STLC)
                </h3>
              </div>
              <span className="text-xs font-mono text-[#8C93A0]">
                Step {activeStepIndex + 1} of 5
              </span>
            </div>

            {/* Step Selector Tabs (Zero-Pill, Segmented Bar) */}
            <div className="grid grid-cols-5 gap-1 p-1 bg-[#F6F3EC] dark:bg-[#171A20] rounded-lg mt-4" role="tablist">
              {stlcSteps.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`py-2 text-xs font-medium rounded transition-all text-center cursor-pointer ${
                    activeStepIndex === idx
                      ? 'bg-white dark:bg-[#2A2F39] text-[#171A20] dark:text-[#F6F3EC] shadow-sm font-semibold'
                      : 'text-[#6D7483] dark:text-[#8C93A0] hover:text-[#171A20] dark:hover:text-[#F6F3EC]'
                  }`}
                  role="tab"
                  aria-selected={activeStepIndex === idx}
                >
                  <span className="block font-mono text-[11px] text-[#B07A3A]">{step.step}</span>
                  <span className="hidden sm:inline text-[11px] truncate">{step.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Step Content */}
            <div className="mt-5 space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono font-medium text-[#B07A3A]">
                  {stlcSteps[activeStepIndex].badge}
                </span>
                <span className="text-xs text-[#8C93A0]">Agile Sprint Integration</span>
              </div>

              <h4 className="font-serif text-xl font-medium text-[#171A20] dark:text-[#F6F3EC]">
                {stlcSteps[activeStepIndex].title}
              </h4>

              <p className="text-sm text-[#4A5160] dark:text-[#C5CAD3] leading-relaxed">
                {stlcSteps[activeStepIndex].description}
              </p>

              {/* Key Activities */}
              <div className="pt-3 border-t border-[#F0ECE2] dark:border-[#2D323C]">
                <span className="text-xs font-semibold text-[#171A20] dark:text-[#F6F3EC] block mb-2">
                  Key Verification Focus:
                </span>
                <ul className="space-y-1.5">
                  {stlcSteps[activeStepIndex].activities.map((act) => (
                    <li key={act} className="text-xs text-[#525B6C] dark:text-[#A7AFBD] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B07A3A] shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Output Deliverable */}
              <div className="p-3 bg-[#F6F3EC]/70 dark:bg-[#171A20]/80 rounded-md border border-[#EBE6DC] dark:border-[#2D323C] flex items-center justify-between text-xs">
                <span className="font-medium text-[#171A20] dark:text-[#F6F3EC]">Stage Deliverable:</span>
                <span className="font-mono text-[#586171] dark:text-[#B0B7C4]">{stlcSteps[activeStepIndex].output}</span>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : 4))}
                  className="text-xs text-[#6B7280] dark:text-[#8C93A0] hover:text-[#171A20] dark:hover:text-[#F6F3EC] font-medium cursor-pointer"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < 4 ? prev + 1 : 0))}
                  className="text-xs text-[#B07A3A] hover:text-[#C89252] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
