/**
 * Skills Data
 *
 * Technical skills and proficiencies displayed in the Skills section.
 * Add or remove skills by editing the skillsData array.
 *
 * @module data/skills
 */

export interface Skill {
  name: string;
  icon: string; // DevIcon slug, Simple Icons slug, or "FALLBACK" for text-only
  iconSource: "devicon" | "simpleicons" | "fallback";
  category: string;
}

export const skillsData: Skill[] = [
  // Languages
  { name: "Python", icon: "python", iconSource: "devicon", category: "Languages" },
  { name: "C++", icon: "cplusplus", iconSource: "devicon", category: "Languages" },
  { name: "TypeScript", icon: "typescript", iconSource: "devicon", category: "Languages" },
  { name: "JavaScript", icon: "javascript", iconSource: "devicon", category: "Languages" },
  { name: "Rust", icon: "rust", iconSource: "devicon", category: "Languages" },
  { name: "HTML5", icon: "html5", iconSource: "devicon", category: "Languages" },
  { name: "CSS3", icon: "css3", iconSource: "devicon", category: "Languages" },
  { name: "SQL", icon: "mysql", iconSource: "devicon", category: "Languages" },
  
  // Frameworks & Tools
  { name: "FastAPI", icon: "fastapi", iconSource: "simpleicons", category: "Frameworks" },
  { name: "NestJS", icon: "nestjs", iconSource: "simpleicons", category: "Frameworks" },
  { name: "Node.js", icon: "nodejs", iconSource: "devicon", category: "Frameworks" },
  { name: "React", icon: "react", iconSource: "devicon", category: "Frameworks" },
  { name: "Next.js", icon: "nextjs", iconSource: "devicon", category: "Frameworks" },
  { name: "Flask", icon: "flask", iconSource: "devicon", category: "Frameworks" },
  { name: "Streamlit", icon: "streamlit", iconSource: "simpleicons", category: "Frameworks" },
  
  // DevOps & Platforms
  { name: "Podman", icon: "podman", iconSource: "devicon", category: "DevOps" },
  { name: "Docker", icon: "docker", iconSource: "devicon", category: "DevOps" },
  { name: "Kubernetes", icon: "kubernetes", iconSource: "devicon", category: "DevOps" },
  { name: "Helm", icon: "helm", iconSource: "simpleicons", category: "DevOps" },
  { name: "ArgoCD", icon: "argocd", iconSource: "devicon", category: "DevOps" },
  { name: "GitLab", icon: "gitlab", iconSource: "devicon", category: "DevOps" },
  { name: "GitHub", icon: "github", iconSource: "devicon", category: "DevOps" },
  { name: "Red Hat", icon: "redhat", iconSource: "devicon", category: "DevOps" },
  { name: "OpenShift", icon: "redhatopenshift", iconSource: "simpleicons", category: "DevOps" },
  { name: "AWS", icon: "amazonwebservices", iconSource: "devicon", category: "DevOps" },
  
  // Additional Tools
  { name: "Git", icon: "git", iconSource: "devicon", category: "Tools" },
  { name: "Linux", icon: "linux", iconSource: "devicon", category: "Tools" },
  { name: "Qt", icon: "qt", iconSource: "devicon", category: "Tools" },
  { name: "PostgreSQL", icon: "postgresql", iconSource: "devicon", category: "Tools" },
  { name: "MongoDB", icon: "mongodb", iconSource: "devicon", category: "Tools" },
];

export const skillCategories = [
  "Languages",
  "Frameworks",
  "DevOps",
  "Tools",
];

