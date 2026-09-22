/**
 * Profile Data
 *
 * Personal information and professional details displayed throughout the portfolio.
 * Update this file to change your personal information, contact details, and bio.
 *
 * @module data/profile
 */

export const profileData = {
  name: "James Huang",
  title: "Platform Engineer @ IBM",
  tagline: "Vanderbilt CS & Math Graduate",
  location: "New York, NY",
  email: "jameshuang.business@gmail.com",
  linkedin: "https://www.linkedin.com/in/james-huang12/",
  github: "https://github.com/jameshuang12",
  credly: "https://www.credly.com/users/james-huang12/badges",
  portfolio: "https://jameshuang12.github.io/portfolio/",
  
  // Summary — each entry renders as its own paragraph
  summary: [
    `I'm originally from Moulton, Alabama, a small town where my high school extracurriculars first sparked my interest in engineering and business. That interest pushed me to work hard for the opportunity to attend Vanderbilt University, where I studied Computer Science and Applied Mathematics.`,
    `I now work as a Platform Engineer at IBM in New York City, and my focus has shifted over time from automation-driven products to AI and app integration. Much of that work is client-facing: I run discovery sessions, build demos and proofs of concept, and stay involved through deployment.`,
    `When I'm not working, you'll usually find me traveling, spending time with friends and family, trying new restaurants around the city, at the gym, outdoors, playing sports, or keeping up with the latest in tech.`,
  ],

  // Key highlights
  highlights: [
    { label: "Platform Engineering", detail: "Hybrid-cloud infrastructure, AI-driven automation, and enterprise client PoCs" },
    { label: "Generative & Agentic AI", detail: "LLM orchestration and agentic coding workflows" },
    { label: "Full-Stack Development", detail: "Python, TypeScript, React, and Next.js" },
    // Reflects what my manager says it takes to excel in this role
    { label: "Abstraction & Problem Solving", detail: "Scoping open-ended client problems down to something a team can ship" },
    { label: "Client-Facing Communication", detail: "Running demos and workshops for audiences from engineers to executives" },
    { label: "Automation Impact", detail: "$30K saved and 10x operational scale from replacing third-party tooling" },
  ],
  
  // Social links
  social: {
    linkedin: "https://www.linkedin.com/in/james-huang12/",
    github: "https://github.com/jameshuang12",
    credly: "https://www.credly.com/users/james-huang12/badges",
    email: "jameshuang.business@gmail.com",
  },
  
  // Education
  education: {
    school: "Vanderbilt University",
    degree: "Bachelor of Science",
    major: "Computer Science and Applied Mathematics",
    location: "Nashville, TN",
    graduationDate: "May 2025",
  },
  
  // Interests
  interests: [
    "Software Engineering",
    "Financial Technology",
    "AI & Machine Learning",
    "Athletics & Fitness",
    "Film & Acting",
    "Photography",
    "Food & Culinary Arts",
  ],
  
  // Resume/CV link (if available)
  resume: undefined as string | undefined, // Set to "/portfolio/resume.pdf" when you add your resume
};

