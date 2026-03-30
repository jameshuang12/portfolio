export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export const skillsData: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Framer Motion", level: 75, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "Java", level: 75, category: "Backend" },
  { name: "REST APIs", level: 85, category: "Backend" },
  { name: "GraphQL", level: 70, category: "Backend" },
  
  // Database
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "Redis", level: 70, category: "Database" },
  
  // Cloud & DevOps
  { name: "AWS", level: 75, category: "Cloud & DevOps" },
  { name: "Docker", level: 80, category: "Cloud & DevOps" },
  { name: "Git", level: 90, category: "Cloud & DevOps" },
  { name: "CI/CD", level: 75, category: "Cloud & DevOps" },
  
  // Tools & Methodologies
  { name: "Agile/Scrum", level: 85, category: "Methodologies" },
  { name: "Software Architecture", level: 80, category: "Methodologies" },
  { name: "Testing (Jest, Pytest)", level: 80, category: "Methodologies" },
  { name: "Project Management", level: 85, category: "Methodologies" },
];

export const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "Methodologies",
];

// Made with Bob
