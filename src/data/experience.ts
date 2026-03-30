export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
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
    startDate: "2025-06",
    endDate: "Present",
    current: true,
    description: "Platform engineering role focused on hybrid-cloud solutions, database security, and enterprise client engagements.",
    responsibilities: [
      "Architected and deployed an automated database vulnerability and patch management system, reducing remediation cycle times and manual triage while enhancing enterprise-level vulnerability visibility",
      "Delivered 13 start-to-finish pilots and PoCs across 9 major client-requested initiatives, providing ongoing hybrid-cloud platform engineering support for 9 additional enterprise engagements over 8 months",
      "Accelerated pilot-to-production timelines by engineering secure, scalable, and repeatable client environments in under 4 weeks",
      "Engaged directly with clients on a recurring basis to understand their technical and business challenges, translating requirements into actionable solutions that delivered business value and drove post-pilot adoption",
    ],
    technologies: ["Kubernetes", "Docker", "Podman", "Helm", "ArgoCD", "RHEL", "OCP", "AWS", "GitLab CI/CD"],
  },
  {
    id: "chalkline-swe-intern",
    title: "Software Development Intern",
    company: "Chalkline",
    location: "Nashville, TN",
    startDate: "2024-09",
    endDate: "2025-05",
    current: false,
    description: "Software development internship focused on automation and operational efficiency improvements.",
    responsibilities: [
      "Achieved 100% end-to-end automation of the prize fulfillment process by redesigning the last 25% of manual steps",
      "Eliminated third-party tools with new ops practices, reducing annual cost by $30K and improving scalability by 10×",
    ],
    technologies: ["Python", "Automation", "Process Optimization"],
  },
  {
    id: "booz-allen-swe-intern",
    title: "Software Engineering Intern",
    company: "Booz Allen Hamilton",
    location: "Remote",
    startDate: "2024-06",
    endDate: "2025-02",
    current: false,
    description: "Software engineering internship with focus on LLM integration, proxy services, and Agile team leadership.",
    responsibilities: [
      "Designed and deployed a high-performance proxy service enabling seamless middleware integration for an LLM project",
      "Served as Scrum Master for a 6-person team, leading daily standups, sprint planning, and ticket grooming within GitLab",
      "Decreased the response time of our AI-driven chat assistant by 4 seconds to support our client's new onboarding process",
    ],
    technologies: ["Python", "FastAPI", "LLM", "GitLab", "Agile/Scrum"],
  },
  {
    id: "jacobs-systems-intern",
    title: "Systems Engineering Intern",
    company: "Jacobs",
    location: "Washington, D.C.",
    startDate: "2023-05",
    endDate: "2023-08",
    current: false,
    description: "Systems engineering internship focused on SCPI device integration and automated testing.",
    responsibilities: [
      "Guided a team of 5 in continuous integration and development of 10 SCPI devices using object-oriented programming",
      "Created automated testing scripts that achieved optimization for SCPI device testing, reducing the setup time by 90%",
    ],
    technologies: ["Python", "SCPI", "Automated Testing", "OOP"],
  },
  {
    id: "vanderbilt-research",
    title: "Research Assistant",
    company: "Vanderbilt School of Engineering",
    location: "Nashville, TN",
    startDate: "2022-09",
    endDate: "2025-05",
    current: false,
    description: "Research assistant role developing software for quantum diamond microscopy and laboratory automation.",
    responsibilities: [
      "Built a PyQt6-based UI framework for orchestrating multiple microscope instruments across research flows",
      "Developed multi-device control modules (motor, keyboard, stage, and camera) to standardize repeatable lab testing",
    ],
    technologies: ["Python", "PyQt6", "Laboratory Automation", "Hardware Control"],
  },
];

// Instructions for adding more experience:
// 1. Copy an existing experience object
// 2. Update the id to be unique (use kebab-case)
// 3. Fill in all fields with your job details
// 4. Use "Present" for endDate if currently employed
// 5. Set current: true for your current position
// 6. Add relevant technologies you used in the role
// 7. List 4-6 key responsibilities that showcase your impact

// Made with Bob
