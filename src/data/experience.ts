/**
 * Experience Data
 *
 * Work experience and professional history displayed in the Experience section.
 * Add new positions by following the template at the bottom of this file.
 *
 * @module data/experience
 */

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string; // e.g., "Jun 2025 – Present", "Sep 2024 – May 2025"
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: "ibm-platform-engineer",
    title: "Platform Engineer",
    company: "IBM",
    location: "New York, NY",
    duration: "Jun 2025 – Present",
    current: true,
    description: "Platform engineering role delivering enterprise PoCs, hybrid-cloud infrastructure, and AI-driven automation solutions for major clients.",
    responsibilities: [
      "Executed over 15 client-facing PoCs across 9 enterprise initiatives, including a pilot that advanced a $5.4M 3-year enterprise license agreement",
      "Accelerated delivery to under 4 weeks per pilot by provisioning dedicated demo environments across hybrid-cloud infrastructure for up to 5 concurrent pilots",
      "Engineered Generative AI and Agentic AI solutions across LLMs, orchestration, and AI governance to validate client evaluation criteria and accelerate enterprise adoption and license agreements",
      "Spearheaded a cross-functional automated vulnerability and patch management pilot, delivering a custom demo, client-tailored use case, and live hands-on lab end-to-end, closing a deployment deal",
      "Deployed solutions across multiple IBM platforms spanning automation, AIOps, enterprise integration, and Z software to cut costs, eliminate manual workflows, and drive operational efficiency for enterprise clients",
      "Led client discovery workshops and technical design sessions, architecting pilot solutions and developing Business Value Assessments to translate enterprise challenges into quantifiable ROI",
    ],
    technologies: ["Pre-Sales", "Field Engineering", "GenAI", "Hybrid-Cloud", "Kubernetes", "Docker", "Podman", "Helm", "ArgoCD", "RHEL", "OCP", "AWS", "GitLab CI/CD", "Terraform", "Vault"],
  },
  {
    id: "chalkline-swe-intern",
    title: "Software Development Intern",
    company: "Chalkline",
    location: "Nashville, TN",
    duration: "Sep 2024 – May 2025",
    current: false,
    description: "Software development internship focused on full-stack automation and operational efficiency improvements.",
    responsibilities: [
      "Drove $30K in annual savings and 10x business scalability by replacing third-party tooling with a custom fulfillment tool",
      "Shipped a full-stack prize fulfillment tool in Next.js and TypeScript with Auth0 role-based access to automate the final 25% of manual steps and reach 100% fulfillment coverage",
    ],
    technologies: ["Next.js", "TypeScript", "Auth0", "Automation"],
  },
  {
    id: "booz-allen-swe-intern",
    title: "Software Engineering Intern",
    company: "Booz Allen Hamilton",
    location: "Remote",
    duration: "Jun 2024 – Feb 2025",
    current: false,
    description: "Software engineering internship with focus on LLM integration, proxy services, and Agile team leadership.",
    responsibilities: [
      "Reduced AI-driven chat assistant response time by 3 seconds to support the client's onboarding process",
      "Architected a high-performance proxy service enabling seamless middleware integration for a client-facing LLM platform",
      "Managed a 6-person team as Scrum Master, facilitating daily standups, sprint planning, and ticket grooming in GitLab",
    ],
    technologies: ["Python", "TypeScript", "Next.js", "FastAPI", "LLM", "Agile/Scrum"],
  },
  {
    id: "vanderbilt-research",
    title: "Research Assistant",
    company: "Vanderbilt School of Engineering",
    location: "Nashville, TN",
    duration: "Sep 2022 – May 2025",
    current: false,
    description: "Research assistant role developing software for microscopy and laboratory automation.",
    responsibilities: [
      "Designed a custom PyQt6 UI framework with standardized motor, stage, and camera control modules to automate multiple microscopy instruments",
    ],
    technologies: ["Python", "PyQt6", "Laboratory Automation", "Hardware Control"],
  },
  {
    id: "jacobs-systems-intern",
    title: "Systems Engineering Intern",
    company: "Jacobs",
    location: "Washington, D.C.",
    duration: "May 2023 – Aug 2023",
    current: false,
    description: "Systems engineering internship focused on SCPI device integration and automated testing.",
    responsibilities: [
      "Built over 10 SCPI device interfaces with object-oriented programming and CI/CD practices, automating device test scripts that slashed hardware setup time by 90% while teaching 4 other interns",
    ],
    technologies: ["Python", "SCPI", "Automated Testing", "OOP", "CI/CD"],
  },
];

// Instructions for adding more experience:
// 1. Copy an existing experience object
// 2. Update the id to be unique (use kebab-case)
// 3. Fill in all fields with your job details
// 4. Use duration in format "Mon YYYY – Mon YYYY" or "Mon YYYY – Present"
// 5. Set current: true for your current position
// 6. Add relevant technologies you used in the role
// 7. List key responsibilities that showcase your impact
