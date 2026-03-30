export interface Skill {
  name: string;
  icon: string; // Simple Icons slug or emoji
  category: string;
}

export const skillsData: Skill[] = [
  // Languages
  { name: "Python", icon: "python", category: "Languages" },
  { name: "C++", icon: "cplusplus", category: "Languages" },
  { name: "TypeScript", icon: "typescript", category: "Languages" },
  { name: "JavaScript", icon: "javascript", category: "Languages" },
  { name: "Rust", icon: "rust", category: "Languages" },
  { name: "HTML5", icon: "html5", category: "Languages" },
  { name: "CSS3", icon: "css3", category: "Languages" },
  { name: "SQL", icon: "mysql", category: "Languages" },
  
  // Frameworks & Tools
  { name: "FastAPI", icon: "fastapi", category: "Frameworks" },
  { name: "NestJS", icon: "nestjs", category: "Frameworks" },
  { name: "Node.js", icon: "nodedotjs", category: "Frameworks" },
  { name: "React", icon: "react", category: "Frameworks" },
  { name: "Next.js", icon: "nextdotjs", category: "Frameworks" },
  { name: "Flask", icon: "flask", category: "Frameworks" },
  { name: "Streamlit", icon: "streamlit", category: "Frameworks" },
  
  // DevOps & Platforms
  { name: "Podman", icon: "podman", category: "DevOps" },
  { name: "Docker", icon: "docker", category: "DevOps" },
  { name: "Kubernetes", icon: "kubernetes", category: "DevOps" },
  { name: "Helm", icon: "helm", category: "DevOps" },
  { name: "ArgoCD", icon: "argo", category: "DevOps" },
  { name: "GitLab", icon: "gitlab", category: "DevOps" },
  { name: "GitHub", icon: "github", category: "DevOps" },
  { name: "Red Hat", icon: "redhat", category: "DevOps" },
  { name: "OpenShift", icon: "redhatopenshift", category: "DevOps" },
  { name: "AWS", icon: "amazonaws", category: "DevOps" },
  
  // Additional Tools
  { name: "Git", icon: "git", category: "Tools" },
  { name: "Linux", icon: "linux", category: "Tools" },
  { name: "Qt", icon: "qt", category: "Tools" },
  { name: "PostgreSQL", icon: "postgresql", category: "Tools" },
  { name: "MongoDB", icon: "mongodb", category: "Tools" },
];

export const skillCategories = [
  "Languages",
  "Frameworks",
  "DevOps",
  "Tools",
];

// Made with Bob
