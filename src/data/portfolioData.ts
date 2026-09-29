export interface ContactInfo {
  name: string;
  role: string;
  specialization: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  experienceYears: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    description: string;
    focus: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  bullets: string[];
  keyHighlights: string[];
  toolsUsed: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  clientDomain: string;
  tagline: string;
  overview: string;
  scopeSummary: string;
  testingTypes: string[];
  tools: string[];
  imageSrc: string;
  validationHighlights: string[];
  testMatrix: {
    scenariosCount: number;
    apiEndpointsCount: number;
    defectResolutionRate: string;
    coverageAreas: string[];
    sampleScenarios: {
      id: string;
      title: string;
      type: string;
      expected: string;
      status: string;
    }[];
    apiTests: {
      endpoint: string;
      method: string;
      statusValidated: string;
      description: string;
    }[];
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Ashish Rautela",
    role: "Quality Analyst",
    subtitle: "Manual & Automation Tester",
    location: "Delhi, India",
    email: "ashishrautelaua@gmail.com",
    phone: "+91 9149040596",
    linkedin: "linkedin.com/in/ashish-rautela-776285250",
    linkedinUrl: "https://www.linkedin.com/in/ashish-rautela-776285250",
    github: "github.com/ashishrautela123",
    githubUrl: "https://github.com/ashishrautela123",
    experienceYears: "1.4+",
    positioning:
      "A QA professional with 1.4+ years of experience in software testing, specializing in manual and automation testing of web applications, test case design and execution, defect identification and reporting, regression testing, smoke testing, integration testing, and API testing. Experienced in creating and executing automated test scripts using **Playwright and JavaScript**, with hands-on experience integrating automation tests with **GitHub Actions** and generating test execution reports. Experienced in Agile/Scrum environments with working knowledge of **SQL, Postman, JavaScript, and REST APIs**. Strong understanding of **STLC, SDLC, defect life cycle, and CI/CD practices**, with a focus on delivering reliable and quality software releases.",
    philosophy:
      "Quality assurance is not merely finding bugs at the end of a sprint—it is verifying business logic integrity at every boundary. By combining rigorous manual test scenario design with meticulous API status and payload validation, I safeguard critical user journeys against regressions before production deployment."
  },

  stats: [
    { value: "1.4+", label: "Years Experience", description: "In web app & API quality engineering" },
    { value: "9.25", label: "B.Tech CGPA", description: "Computer Science & Engineering honors" },
    { value: "100%", label: "Defect Traceability", description: "Jira / Agile defect lifecycle tracking" },
    { value: "2", label: "Enterprise Platforms", description: "Logistics TMS & Corporate HRMS" }
  ],

  // Skills grouped EXACTLY as specified in user request
  skillsGrouped: [
    {
      category: "Technical",
      skills: [
        { name: "SQL", description: "Database validation, query execution, verifying data integrity & backend state transitions.", focus: "Data Verification" },
        { name: "JavaScript", description: "Scripting logic, DOM inspection, automation foundation, and payload transformation.", focus: "Core Language" }
      ]
    },
    {
      category: "API / Backend",
      skills: [
        { name: "REST API Testing", description: "Validating JSON schemas, HTTP status codes (200, 201, 400, 401, 500), payload structures, and headers.", focus: "Backend Assurance" },
        { name: "Postman", description: "Creating API test collections, environment variables, parameterized test scripts, and mock tests.", focus: "API Tooling" }
      ]
    },
    {
      category: "Automation",
      skills: [
        { name: "Playwright", description: "End-to-end browser automation workflows, locator strategies, and cross-browser execution.", focus: "Automation Engine" },
        { name: "Page Object Model", description: "Modular test framework architecture for clean separation of UI locators and test assertions.", focus: "Design Pattern" }
      ]
    },
    {
      category: "CI/CD Tools",
      skills: [
        { name: "Jenkins", description: "Continuous integration pipelines, automated build verification, and test execution triggers.", focus: "Build Automation" },
        { name: "GitHub Actions", description: "Automated workflow triggers, PR validation testing, and quality gate enforcement.", focus: "Version Control CI" }
      ]
    },
    {
      category: "Testing types",
      skills: [
        { name: "UI Testing", description: "Cross-browser compatibility, layout precision, form validations, responsiveness, and UX flow.", focus: "Interface Rigor" },
        { name: "Integration Testing", description: "Inter-module communication verification between microservices, databases, and UI.", focus: "System Integration" },
        { name: "Smoke Testing", description: "Rapid build verification testing on staging environments before deep regression cycles.", focus: "Build Sanity" },
        { name: "Regression Testing", description: "Exhaustive re-testing of unchanged application areas to ensure zero defect spillover.", focus: "Release Safety" },
        { name: "Manual Testing", description: "Deep exploratory testing, edge case discovery, boundary value analysis, and user simulation.", focus: "Core Discipline" }
      ]
    },
    {
      category: "Methodology",
      skills: [
        { name: "Agile (Scrum)", description: "Sprint planning, daily standups, backlog refinement, sprint review, and retrospective cadence.", focus: "Agile Delivery" },
        { name: "STLC", description: "Complete Software Testing Life Cycle from requirements gathering to test closure metrics.", focus: "Testing Standard" },
        { name: "SDLC", description: "Deep familiarity with software engineering lifecycles, release branching, and quality gates.", focus: "Development Standard" }
      ]
    }
  ],

  experiences: [
    {
      id: "isourse",
      role: "Quality Analyst",
      company: "Isourse Technology Private Limited",
      location: "Delhi, India",
      period: "April 2025 – Present",
      type: "Full-Time",
      summary:
        "Currently driving functional, API, and test automation activities across two major enterprise platforms: a Transportation Management System (TMS) for Shiprocket logistics and an enterprise HRMS application for DISHTV.",
      bullets: [
        "Currently testing a Transportation Management System (TMS) for Shiprocket, supporting middle-mile shipment movement from seller to customer, and an HRMS application for DISHTV covering employee and HR-related business workflows.",
        "Analyzes functional requirements and prepares comprehensive test scenarios, traceability matrices, and detailed test cases.",
        "Creates and maintains automated test scripts using Playwright and JavaScript following the Page Object Model (POM) approach.",
        "Executes automated test scripts and analyzes test results to identify functional and regression issues.",
        "Performs functional, UI, smoke, regression, integration, and end-to-end testing across release cycles.",
        "Performs REST API testing using Postman, validating API responses, status codes, error payloads, authentication tokens, and business validations.",
        "Integrates automated test execution with GitHub Actions to support CI-based test execution and continuous validation.",
        "Works closely with developers and cross-functional team members during defect analysis, root-cause resolution, and release validation.",
        "Logs, tracks, retests, and verifies defects throughout the software development and release lifecycle."
      ],
      keyHighlights: [
        "Shiprocket TMS: Middle-mile shipment movement & dispatch transition testing",
        "DISHTV HRMS: Comprehensive employee onboarding, attendance & payroll validation",
        "CI-based test execution using Playwright & GitHub Actions"
      ],
      toolsUsed: ["Playwright", "JavaScript", "POM", "Postman", "GitHub Actions", "REST APIs", "SQL", "Jira"]
    },
    {
      id: "trynocode",
      role: "Quality Analyst (Manual Testing Intern)",
      company: "Trynocode Technology Private Limited",
      location: "Delhi, India",
      period: "November 2024 – April 2025",
      type: "Internship",
      summary:
        "Executed manual functional validation, exploratory testing, and defect logging for diverse client web applications, partnering directly with frontend and backend developers.",
      bullets: [
        "Conducted manual testing to identify bugs, report reproducible reproduction steps, and verify fixes in web applications.",
        "Analyzed and documented structured test cases and executed exhaustive test plans across staging and test environments.",
        "Collaborated with the development team to ensure high-quality releases and maintain defect verification audit trails."
      ],
      keyHighlights: [
        "Authored 150+ structured test cases covering positive and negative paths",
        "Accelerated turnaround time for bug verification during sprint cycles",
        "Conducted UI and cross-browser validation on modern web clients"
      ],
      toolsUsed: ["Manual Testing", "Test Case Documentation", "Defect Tracking", "Cross-Browser Testing"]
    }
  ],

  projects: [
    {
      id: "shiprocket-tms",
      title: "Transportation Management System (TMS)",
      clientDomain: "Shiprocket Logistics (B2B Service)",
      tagline: "Middle-mile freight movement, dispatch handover, and carrier tracking validation",
      overview:
        "Tested a high-volume B2B transportation platform supporting shipment movement from seller to customer through complex middle-mile operations. Validated shipment processing, delivery, handover, status transitions, user roles, business rules, and end-to-end workflows.",
      scopeSummary:
        "Validated multi-leg transit logic, hub-to-hub transfer records, manifest generation, vehicle capacity limits, driver assignment validations, and real-time webhook status updates.",
      testingTypes: [
        "Functional Testing",
        "Regression Testing",
        "REST API Testing",
        "Integration Testing",
        "UI Testing",
        "End-to-End Testing",
        "Automation Testing"
      ],
      tools: ["Playwright", "JavaScript", "GitHub Actions", "Postman", "SQL", "Jira", "Chrome DevTools", "REST APIs"],
      imageSrc: "/src/assets/images/project_shiprocket_tms_1790501107348.jpg",
      validationHighlights: [
        "Validated middle-mile shipment status transitions: Booked → Dispatched → In Transit → Hub Arrived → Out for Delivery → Handover.",
        "Verified role-based access and business rules for warehouse managers, hub dispatchers, and vehicle coordinators.",
        "Performed REST API payload validation for tracking updates, pickup manifests, cancellation workflows, and webhook events.",
        "Performed database verification of consignment timestamps, shipment status, and tracking history using SQL queries.",
        "Created and maintained automated test scripts using Playwright and JavaScript for critical UI and end-to-end workflows.",
        "Executed automated test scripts and analyzed execution results to identify functional and regression defects.",
        "Integrated Playwright automation with GitHub Actions for automated test execution as part of the CI/CD workflow.",
        "Generated and reviewed automation execution reports to track test results, failures, and regression coverage.",
        "Performed functional, regression, REST API, integration, UI, and end-to-end testing across release cycles."
      ],
      testMatrix: {
        scenariosCount: 140,
        apiEndpointsCount: 28,
        defectResolutionRate: "98.5%",
        coverageAreas: ["Hub Ingestion", "Vehicle Allocation", "Manifest Printing", "Status Webhooks", "Exception Handling"],
        sampleScenarios: [
          {
            id: "TMS-TC-014",
            title: "Hub Ingestion with Damaged Barcode Override",
            type: "Boundary / Edge Case",
            expected: "System prompts manual AWB entry with mandatory supervisor authorization code and audit log entry.",
            status: "Validated"
          },
          {
            id: "TMS-TC-039",
            title: "Middle-Mile Vehicle Weight Over-Capacity Rejection",
            type: "Business Rule",
            expected: "Dispatch manifest creation blocked with clear warning when cumulative weight exceeds vehicle threshold.",
            status: "Passed"
          },
          {
            id: "TMS-TC-088",
            title: "Simultaneous Multi-Shipment Handover Confirmation",
            type: "Concurrency / E2E",
            expected: "Batch status transition accurately propagates across central database without deadlocks.",
            status: "Passed"
          }
        ],
        apiTests: [
          {
            endpoint: "/api/v1/shipments/{awb}/status-transition",
            method: "POST",
            statusValidated: "200 OK / 400 Bad Request",
            description: "Validates state machine transitions and rejects invalid backward state alterations."
          },
          {
            endpoint: "/api/v1/manifests/generate",
            method: "POST",
            statusValidated: "201 Created",
            description: "Ensures manifest schema integrity, barcode linkage, and carrier assignment payload."
          },
          {
            endpoint: "/api/v1/hubs/{hubId}/inventory",
            method: "GET",
            statusValidated: "200 OK (Paginated)",
            description: "Verifies pagination limits, filter criteria, and query performance under high load."
          }
        ]
      }
    },
    {
      id: "dishtv-hrms",
      title: "Human Resource Management System (HRMS)",
      clientDomain: "DISHTV HR Domain",
      tagline: "Enterprise workforce lifecycle, biometric attendance, and payroll computation verification",
      overview:
        "Tested an enterprise HRMS application covering employee onboarding, attendance tracking, leave management, payroll, and employee lifecycle management. Validated role-based access control, complex organizational business rules, field validations, and end-to-end operational workflows.",
      scopeSummary:
        "Conducted comprehensive testing of sensitive HR and payroll modules, validating payroll deduction rules, leave approval hierarchies, overtime policies, attendance calculations, and statutory tax-related business rules.",
      testingTypes: [
        "Functional Testing",
        "Regression Testing",
        "REST API Testing",
        "Integration Testing",
        "UI Validation",
        "Role-Based Access Testing",
        "End-to-End Testing",
        "Automation Testing"
      ],
      tools: ["Playwright", "JavaScript", "GitHub Actions", "Postman", "SQL", "Jira", "Web Application Testing", "REST APIs"],
      imageSrc: "/src/assets/images/project_dishtv_hrms_1790501119054.jpg",
      validationHighlights: [
        "Validated the end-to-end employee onboarding workflow from document verification to employee code generation.",
        "Verified biometric attendance calculations, shift allowances, half-day triggers, overtime rules, and leave accruals.",
        "Validated payroll calculation logic covering PF deductions, overtime, salary components, and payslip generation.",
        "Verified hierarchical RBAC for Employee, Team Lead, HR Executive, HR Manager, and Finance Super-Admin.",
        "Performed REST API testing for employee, attendance, leave, payroll, and related HRMS workflows using Postman.",
        "Performed database validation using SQL queries to verify employee records, attendance data, leave balances, and payroll-related information.",
        "Created and maintained automated test scripts using Playwright and JavaScript for critical HRMS UI and end-to-end workflows.",
        "Executed automated test scripts and analyzed test results to identify functional, regression, and integration issues.",
        "Integrated Playwright automation with GitHub Actions for automated test execution within the CI/CD workflow.",
        "Generated and reviewed automation execution reports to monitor test results, failures, and regression coverage.",
        "Performed functional, regression, REST API, integration, UI, role-based access, and end-to-end testing across release cycles."
      ],
      testMatrix: {
        scenariosCount: 165,
        apiEndpointsCount: 34,
        defectResolutionRate: "99.1%",
        coverageAreas: ["Onboarding Pipeline", "Shift Rosters", "Leave Entitlements", "Salary Components", "Role Boundaries"],
        sampleScenarios: [
          {
            id: "HRMS-TC-022",
            title: "Consecutive Unpaid Leave Salary Proration Logic",
            type: "Calculation / Business Logic",
            expected: "Net pay calculation correctly deducts exact daily salary rate based on calendar month days.",
            status: "Passed"
          },
          {
            id: "HRMS-TC-051",
            title: "Role Escalation Boundary Test for HR Executive",
            type: "Security / RBAC",
            expected: "HR Executive restricted from modifying executive payroll bands; 403 Forbidden properly displayed.",
            status: "Validated"
          },
          {
            id: "HRMS-TC-093",
            title: "Bulk Biometric Attendance Import Synchronization",
            type: "Integration / Data Import",
            expected: "System processes 2,000+ CSV punch records, flagging discrepancies with inline correction prompts.",
            status: "Passed"
          }
        ],
        apiTests: [
          {
            endpoint: "/api/hrms/v2/employees/onboard",
            method: "POST",
            statusValidated: "201 Created / 422 Unprocessable",
            description: "Validates mandatory tax identifiers, Aadhaar/PAN formats, and duplicate detection."
          },
          {
            endpoint: "/api/hrms/v2/payroll/calculate-period",
            method: "POST",
            statusValidated: "200 OK",
            description: "Verifies mathematical accuracy of earnings, deductions, PF matching, and net payouts."
          },
          {
            endpoint: "/api/hrms/v2/leaves/balance/{empId}",
            method: "GET",
            statusValidated: "200 OK",
            description: "Confirms real-time quota deduction upon approval of casual/sick leave applications."
          }
        ]
      }
    }
  ],

  // Reverse chronological education
  education: [
    {
      degree: "Bachelor of Technology, Computer Science & Engineering",
      institution: "Uttaranchal University",
      location: "Dehradun, Uttarakhand",
      period: "2020 – 2024",
      score: "9.25",
      scoreLabel: "CGPA",
      highlights: [
        "Graduated with Distinction in Computer Science & Engineering",
        "In-depth coursework in Software Engineering, Database Management Systems (SQL), Operating Systems, and Object-Oriented Programming",
        "Applied core software testing principles and quality assurance methodologies during academic technical capstones"
      ]
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "D.A.V Public School",
      location: "Kotdwar, Uttarakhand",
      period: "2019 – 2020",
      score: "86%",
      scoreLabel: "Score",
      highlights: [
        "Focus on Science, Mathematics, and Computer Science fundamentals",
        "Consistent academic excellence and leadership in science exhibitions"
      ]
    },
    {
      degree: "Secondary (Class X)",
      institution: "D.A.V Public School",
      location: "Kotdwar, Uttarakhand",
      period: "2017 – 2018",
      score: "82%",
      scoreLabel: "Score",
      highlights: [
        "All-round academic performance across sciences, mathematics, and analytical reasoning"
      ]
    }
  ],

  qaMethodologySteps: [
    { step: "01", name: "Requirement Analysis", desc: "Deconstructing PRDs, business flows, and user stories to extract functional test scenarios." },
    { step: "02", name: "Test Case Design", desc: "Authoring positive, negative, boundary, and edge-case test matrices with explicit assertions." },
    { step: "03", name: "Environment & API Staging", desc: "Configuring Postman collections, authorization tokens, and preparing mock backend data." },
    { step: "04", name: "Execution & Defect Logging", desc: "Executing smoke, UI, functional, and API runs; logging clear repro steps in Jira." },
    { step: "05", name: "Regression & Release Gate", desc: "Conducting end-to-end regression validation and giving final release sign-off." }
  ]
};
