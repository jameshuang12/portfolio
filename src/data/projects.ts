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
  {
    id: "qudi-iqo-modules",
    title: "Qudi IQO Modules",
    description: "Advanced quantum optics control software modules for diamond microscopy",
    longDescription: "Developed custom modules for Qudi (Quantum Diamond) software framework to control and automate quantum diamond microscopy experiments. Implemented hardware interfaces, data acquisition pipelines, and analysis tools for quantum sensing applications.",
    technologies: ["Python", "Qt", "NumPy", "Scientific Computing", "Hardware Control", "Data Analysis"],
    githubUrl: "https://github.com/jameshuang12/qudi-iqo-modules",
    featured: true,
    category: "Scientific Software",
    startDate: "2022-01",
    endDate: "2024-05",
    highlights: [
      "Built modular architecture for quantum experiment control",
      "Implemented real-time data acquisition and visualization",
      "Developed automated measurement protocols",
      "Integrated with laboratory hardware (lasers, cameras, spectrometers)",
      "Created analysis pipelines for quantum sensing data",
    ],
  },
  {
    id: "low-latency-trading",
    title: "Low-Latency Trading System",
    description: "High-performance trading system with microsecond-level latency optimization",
    longDescription: "Designed and implemented a low-latency trading system focusing on performance optimization, efficient data structures, and real-time market data processing. Explored modern C++ techniques for high-frequency trading applications.",
    technologies: ["C++", "Low-Latency", "Multithreading", "Performance Optimization", "Financial Systems"],
    githubUrl: "https://github.com/jameshuang12/Low-Latency-Trading-System-101",
    featured: true,
    category: "Systems Programming",
    startDate: "2023-06",
    endDate: "2024-01",
    highlights: [
      "Achieved microsecond-level latency for order processing",
      "Implemented lock-free data structures for concurrent access",
      "Optimized memory allocation and cache performance",
      "Built real-time market data feed handlers",
      "Designed efficient order matching engine",
    ],
  },
  {
    id: "portfolio-website",
    title: "Modern Portfolio Website",
    description: "Personal portfolio built with Next.js 14, TypeScript, and Framer Motion",
    longDescription: "Developed a modern, responsive portfolio website using the latest web technologies. Features include dark/light theme, smooth animations, interactive components, and static site generation for optimal performance.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    githubUrl: "https://github.com/jameshuang12/portfolio",
    demoUrl: "https://jameshuang12.github.io/portfolio/",
    featured: true,
    category: "Web Development",
    startDate: "2024-03",
    highlights: [
      "Built with Next.js 14 App Router and TypeScript",
      "Implemented smooth animations with Framer Motion",
      "Designed responsive UI with Tailwind CSS",
      "Integrated dark/light theme with system preference detection",
      "Optimized for performance with static site generation",
      "Deployed on GitHub Pages with automated CI/CD",
    ],
  },
];

export const projectCategories = [
  "Scientific Software",
  "Systems Programming",
  "Web Development",
  "Data Analysis",
  "Open Source",
];

// Instructions for adding more projects:
// 1. Copy an existing project object
// 2. Update the id to be unique (use kebab-case)
// 3. Fill in your project details
// 4. Add project images to public/images/ (optional)
// 5. Set featured: true for your best projects (max 3-4)
// 6. Include demo and GitHub links if available
// 7. Choose appropriate category or add new one to projectCategories

// Made with Bob
