/**
 * Certificates Data
 *
 * Professional certifications and credentials displayed in the Certificates section.
 * Add PDFs to public/images/ and reference them in the pdfPath field.
 * Use credentialUrl for Credly badges or other verification links.
 *
 * @module data/certificates
 */

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  credentialImageUrl?: string; // Actual badge artwork (e.g. from Credly), preferred over the issuer logo when present
  pdfPath?: string;
  skills: string[];
  description: string;
}

export const certificatesData: Certificate[] = [
  {
    id: "ibm-explorer-project-manager",
    title: "IBM Explorer Project Manager",
    issuer: "IBM",
    issueDate: "March 2026",
    credentialUrl: "https://www.credly.com/badges/bef8428a-1a2e-4c43-8f1d-05bc88c235b4",
    credentialImageUrl: "https://images.credly.com/size/340x340/images/86f1f003-7c50-47d9-a6f0-f12f43a940df/PM-Explorer.png",
    skills: ["Project Planning", "Risk Management", "Change Management", "Issue Management", "Progress Tracking"],
    description: "Foundational project management training paired with real hands-on PM experience — creating project plans, tracking progress, and managing change, risk, and resources.",
  },
  {
    id: "watsonx-orchestrate-technical-sales",
    title: "watsonx Orchestrate Technical Sales Intermediate",
    issuer: "IBM",
    issueDate: "July 2026",
    credentialUrl: "https://www.credly.com/badges/251f3033-7e05-4983-af43-f0002d288a9c",
    credentialImageUrl: "https://images.credly.com/size/340x340/images/94c4be15-befd-41ef-a955-c6fe458d0ed1/watsonx_20Orchestrate_20Technical_20Sales_20Intermediate.png",
    skills: ["watsonx", "Business Automation", "Orchestrate", "Technology Sales", "Trusted Advisor"],
    description: "Technical sales knowledge for watsonx Orchestrate — positioning it to clients and delivering technical demos combining pre-built skills, conversational AI, and decision management.",
  },
  {
    id: "enterprise-design-thinking-practitioner",
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM SkillsBuild",
    issueDate: "February 2026",
    credentialUrl: "https://www.credly.com/badges/1bd12f42-ce48-4207-83d7-3f914e837a63",
    credentialImageUrl: "https://images.credly.com/size/340x340/images/520b12b6-dac0-4731-a4f6-e41427201422/BadgeEmblem_EnterpriseDesignThinkingPractitioner.png",
    skills: ["Enterprise Design Thinking", "User Experience (UX)", "Prototyping", "User Research", "Collaboration"],
    description: "Applying the Enterprise Design Thinking framework to solve complex, human-centered problems — design research, prototyping, and storytelling to align teams around user needs.",
  },
  {
    id: "agile-software-development",
    title: "Agile Software Development",
    issuer: "LinkedIn Learning",
    issueDate: "2024",
    pdfPath: "/images/CertificateOfCompletion_Agile Software Development.pdf",
    skills: ["Agile", "Scrum", "Software Development", "Project Management"],
    description: "Comprehensive training in Agile methodologies, including Scrum practices, sprint planning, and iterative development processes.",
  },
  {
    id: "agile-testing",
    title: "Agile Testing",
    issuer: "LinkedIn Learning",
    issueDate: "2024",
    pdfPath: "/images/CertificateOfCompletion_Agile Testing.pdf",
    skills: ["Agile", "Testing", "QA", "Test Automation"],
    description: "Advanced training in Agile testing methodologies, test-driven development, and continuous testing practices.",
  },
  {
    id: "software-architecture-foundations",
    title: "Software Architecture Foundations",
    issuer: "LinkedIn Learning",
    issueDate: "2024",
    pdfPath: "/images/CertificateOfCompletion_Software Architecture Foundations.pdf",
    skills: ["Software Architecture", "Design Patterns", "System Design", "Best Practices"],
    description: "Foundational knowledge in software architecture principles, design patterns, and architectural decision-making.",
  },
];

// Instructions for adding new certificates:
// 1. Copy the certificate object template below
// 2. Fill in your certificate details
// 3. Add the PDF to the public/images/ folder
// 4. Update the pdfPath to match your file location
// 5. For Credly badges, add the credentialUrl

/*
TEMPLATE - Copy this to add a new certificate:

{
  id: "unique-certificate-id",
  title: "Certificate Title",
  issuer: "Issuing Organization",
  issueDate: "YYYY-MM",
  credentialId: "ABC123XYZ", // Optional
  credentialUrl: "https://www.credly.com/badges/...", // Optional - for Credly badges
  pdfPath: "/images/your-certificate.pdf", // Optional - for PDF certificates
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  description: "Brief description of what this certificate covers and what you learned.",
},

*/

