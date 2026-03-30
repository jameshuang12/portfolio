export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export const projectsData: Project[] = [
  // Add your projects here
  // Example template:
  /*
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management",
    longDescription: "Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Implemented real-time inventory updates and order tracking.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    imageUrl: "/portfolio/images/project-1.jpg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
    category: "Web Application",
    startDate: "2023-06",
    endDate: "2023-12",
    highlights: [
      "Processed 10,000+ transactions with 99.9% uptime",
      "Reduced page load time by 40% through optimization",
      "Implemented secure payment processing with Stripe",
    ],
  },
  */
];

export const projectCategories = [
  "Web Application",
  "Mobile App",
  "API/Backend",
  "DevOps/Infrastructure",
  "Open Source",
  "Personal Project",
];

// Instructions for adding projects:
// 1. Copy the template above
// 2. Fill in your project details
// 3. Add project images to public/images/
// 4. Set featured: true for your best projects
// 5. Include demo and GitHub links if available

// Made with Bob
