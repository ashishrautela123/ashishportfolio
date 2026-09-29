import { X, CheckCircle, ShieldAlert, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface TestMatrixModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function TestMatrixModal({ project, onClose }: TestMatrixModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171A20]/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFFFF] dark:bg-[#1E232B] border border-[#E5E0D5] dark:border-[#2D323C] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#1E232B] dark:text-[#F6F3EC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#FFFFFF]/95 dark:bg-[#1E232B]/95 backdrop-blur-md border-b border-[#E5E0D5] dark:border-[#2D323C] px-6 py-4 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-semibold text-[#B07A3A] uppercase tracking-wide">
              QA Test Architecture & Matrix
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#171A20] dark:text-[#F6F3EC]">
              {project.title}
            </h3>
            <p className="text-xs text-[#6B7280] dark:text-[#8C93A0] font-mono mt-0.5">
              Client Domain: {project.clientDomain}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7F8694] hover:text-[#171A20] dark:hover:text-[#F6F3EC] hover:bg-[#F6F3EC] dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Key Metric Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#FBF9F6] dark:bg-[#171A20] border border-[#EBE5DA] dark:border-[#2D323C] rounded-lg">
            <div>
              <span className="text-xs text-[#6B7280] dark:text-[#8C93A0]">Test Scenarios Authored</span>
              <div className="font-serif text-2xl font-semibold text-[#171A20] dark:text-[#F6F3EC] font-mono-tabular mt-0.5">
                {project.testMatrix.scenariosCount}+
              </div>
            </div>
            <div>
              <span className="text-xs text-[#6B7280] dark:text-[#8C93A0]">REST Endpoints Validated</span>
              <div className="font-serif text-2xl font-semibold text-[#171A20] dark:text-[#F6F3EC] font-mono-tabular mt-0.5">
                {project.testMatrix.apiEndpointsCount}
              </div>
            </div>
            <div>
              <span className="text-xs text-[#6B7280] dark:text-[#8C93A0]">Defect Closure Rate</span>
              <div className="font-serif text-2xl font-semibold text-[#B07A3A] font-mono-tabular mt-0.5">
                {project.testMatrix.defectResolutionRate}
              </div>
            </div>
            <div>
              <span className="text-xs text-[#6B7280] dark:text-[#8C93A0]">Core Testing Scope</span>
              <div className="text-xs font-medium text-[#171A20] dark:text-[#F6F3EC] mt-1 line-clamp-2">
                {project.testingTypes.slice(0, 3).join(', ')}
              </div>
            </div>
          </div>

          {/* Test Coverage Areas */}
          <div>
            <h4 className="text-xs font-semibold text-[#171A20] dark:text-[#F6F3EC] uppercase tracking-wide mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#B07A3A]" />
              <span>Coverage Modules & Operational Domains</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.testMatrix.coverageAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 bg-[#F6F3EC] dark:bg-[#171A20] border border-[#E5E0D5] dark:border-[#2D323C] rounded text-[#2E3542] dark:text-[#C5CAD3] font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Sample Scenarios Executed */}
          <div>
            <h4 className="text-xs font-semibold text-[#171A20] dark:text-[#F6F3EC] uppercase tracking-wide mb-3 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#B07A3A]" />
              <span>Sample High-Risk Scenarios & Edge Cases Executed</span>
            </h4>
            <div className="border border-[#E5E0D5] dark:border-[#2D323C] rounded-lg overflow-hidden divide-y divide-[#EFEBE1] dark:divide-[#2D323C]">
              {project.testMatrix.sampleScenarios.map((scen) => (
                <div key={scen.id} className="p-4 bg-white dark:bg-[#1E232B] hover:bg-[#FAF8F5] dark:hover:bg-[#252A34] transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[#B07A3A]">{scen.id}</span>
                      <span aria-hidden="true" className="text-[#A5ACBA] dark:text-[#646A76]">·</span>
                      <span className="text-xs font-medium text-[#646B7B] dark:text-[#9BA1AC]">{scen.type}</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/60 font-medium">
                      {scen.status}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#171A20] dark:text-[#F6F3EC]">{scen.title}</div>
                  <div className="text-xs text-[#525B6C] dark:text-[#A7AFBD] mt-1.5 leading-relaxed bg-[#F8F6F1] dark:bg-[#171A20] p-2.5 rounded border border-[#EAE4D7] dark:border-[#2D323C]">
                    <span className="font-medium text-[#171A20] dark:text-[#F6F3EC]">Assertion / Expected Behavior:</span> {scen.expected}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REST API Test Suite Details */}
          <div>
            <h4 className="text-xs font-semibold text-[#171A20] dark:text-[#F6F3EC] uppercase tracking-wide mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#B07A3A]" />
              <span>API Endpoint Validations (Postman Collections)</span>
            </h4>
            <div className="border border-[#E5E0D5] dark:border-[#2D323C] rounded-lg overflow-hidden divide-y divide-[#EFEBE1] dark:divide-[#2D323C]">
              {project.testMatrix.apiTests.map((api, idx) => (
                <div key={idx} className="p-4 bg-white dark:bg-[#1E232B]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                        api.method === 'POST'
                          ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
                          : 'bg-blue-100 dark:bg-blue-950/70 text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                      }`}
                    >
                      {api.method}
                    </span>
                    <span className="font-mono text-xs font-medium text-[#171A20] dark:text-[#F6F3EC]">
                      {api.endpoint}
                    </span>
                    <span className="text-[11px] font-mono text-[#6A7382] dark:text-[#8C93A0] ml-auto">
                      Status: <strong className="text-[#171A20] dark:text-[#F6F3EC]">{api.statusValidated}</strong>
                    </span>
                  </div>
                  <p className="text-xs text-[#525B6C] dark:text-[#A7AFBD] mt-2 leading-relaxed">
                    {api.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Validation Highlights */}
          <div className="p-4 bg-[#FAF8F5] dark:bg-[#171A20] border border-[#E8E2D5] dark:border-[#2D323C] rounded-lg">
            <span className="text-xs font-semibold text-[#171A20] dark:text-[#F6F3EC] uppercase tracking-wide block mb-2">
              End-to-End Workflow Verification Highlights
            </span>
            <ul className="space-y-1.5">
              {project.validationHighlights.map((hl, i) => (
                <li key={i} className="text-xs text-[#4E5666] dark:text-[#C5CAD3] flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B07A3A] mt-0.5 shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF8F5] dark:bg-[#171A20] border-t border-[#E5E0D5] dark:border-[#2D323C] px-6 py-4 flex items-center justify-between">
          <span className="text-xs font-mono text-[#6B7280] dark:text-[#8C93A0]">
            Executed in Agile Sprint Cycles · Documented in Jira & Postman
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#F6F3EC] bg-[#171A20] dark:bg-[#20242B] dark:hover:bg-[#2D323C] hover:bg-[#2A2E38] border border-white/10 rounded-md transition-colors cursor-pointer"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  );
}
