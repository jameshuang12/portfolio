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
  pdfPath?: string;
  skills: string[];
  description: string;
}

export const certificatesData: Certificate[] = [
  {
    id: "agile-software-development",
    title: "Agile Software Development",
    issuer: "LinkedIn Learning",
    issueDate: "2024",
    pdfPath: "/portfolio/images/CertificateOfCompletion_Agile Software Development.pdf",
    skills: ["Agile", "Scrum", "Software Development", "Project Management"],
    description: "Comprehensive training in Agile methodologies, including Scrum practices, sprint planning, and iterative development processes.",
  },
  {
    id: "agile-testing",
    title: "Agile Testing",
    issuer: "LinkedIn Learning",
    issueDate: "2024",
    pdfPath: "/portfolio/images/CertificateOfCompletion_Agile Testing.pdf",
    skills: ["Agile", "Testing", "QA", "Test Automation"],
    description: "Advanced training in Agile testing methodologies, test-driven development, and continuous testing practices.",
  },
  {
    id: "software-architecture-foundations",
    title: "Software Architecture Foundations",
    issuer: "LinkedIn Learning",
    issueDate: "2024",
    pdfPath: "/portfolio/images/CertificateOfCompletion_Software Architecture Foundations.pdf",
    skills: ["Software Architecture", "Design Patterns", "System Design", "Best Practices"],
    description: "Foundational knowledge in software architecture principles, design patterns, and architectural decision-making.",
  },
  {
    id: "software-project-management",
    title: "Software Project Management Foundations",
    issuer: "LinkedIn Learning",
    issueDate: "2024",
    pdfPath: "/portfolio/images/CertificateOfCompletion_Software Project Management Foundations.pdf",
    skills: ["Project Management", "Planning", "Risk Management", "Team Leadership"],
    description: "Essential project management skills including planning, execution, monitoring, and team coordination for software projects.",
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
  pdfPath: "/portfolio/images/your-certificate.pdf", // Optional - for PDF certificates
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  description: "Brief description of what this certificate covers and what you learned.",
},

*/

