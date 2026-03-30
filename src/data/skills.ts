export interface Skill {
  name: string;
  icon: string; // Simple Icons slug or emoji
  category: string;
}

export const skillsData: Skill[] = [
  // Languages
  { name: "Python", icon: "python", category: "Languages" },
  { name: "C++", icon: "cplusplus", category: "Languages" },
  { name: "C", icon: "c", category: "Languages" },
  { name: "JavaScript", icon: "javascript", category: "Languages" },
  { name: "TypeScript", icon: "typescript", category: "Languages" },
  { name: "Java", icon: "java", category: "Languages" },
  { name: "MATLAB", icon: "🔢", category: "Languages" },
  { name: "SQL", icon: "mysql", category: "Languages" },
  
  // Frontend
  { name: "React", icon: "react", category: "Frontend" },
  { name: "Next.js", icon: "nextdotjs", category: "Frontend" },
  { name: "HTML5", icon: "html5", category: "Frontend" },
  { name: "CSS3", icon: "css3", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend" },
  
  // Backend & Tools
  { name: "Node.js", icon: "nodedotjs", category: "Backend" },
  { name: "Flask", icon: "flask", category: "Backend" },
  { name: "Django", icon: "django", category: "Backend" },
  { name: "REST APIs", icon: "🔌", category: "Backend" },
  
  // Database
  { name: "PostgreSQL", icon: "postgresql", category: "Database" },
  { name: "MongoDB", icon: "mongodb", category: "Database" },
  { name: "Redis", icon: "redis", category: "Database" },
  
  // DevOps & Tools
  { name: "Git", icon: "git", category: "DevOps" },
  { name: "GitHub", icon: "github", category: "DevOps" },
  { name: "Docker", icon: "docker", category: "DevOps" },
  { name: "Linux", icon: "linux", category: "DevOps" },
  { name: "AWS", icon: "amazonaws", category: "DevOps" },
  
  // Scientific & Data
  { name: "NumPy", icon: "numpy", category: "Scientific" },
  { name: "Pandas", icon: "pandas", category: "Scientific" },
  { name: "Jupyter", icon: "jupyter", category: "Scientific" },
  { name: "LabVIEW", icon: "🔬", category: "Scientific" },
  { name: "Data Analysis", icon: "📊", category: "Scientific" },
];

export const skillCategories = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Scientific",
];

// Made with Bob
