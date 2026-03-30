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
    technologies: ["Python", "PyQt6", "NumPy", "Scientific Computing", "Hardware Control"],
    githubUrl: "https://github.com/jameshuang12/qudi-iqo-modules",
    featured: true,
    category: "Scientific Software",
    startDate: "2022-09",
    endDate: "2025-05",
    highlights: [
      "Built PyQt6-based UI framework for orchestrating multiple microscope instruments",
      "Developed multi-device control modules (motor, keyboard, stage, camera)",
      "Standardized repeatable lab testing procedures",
      "Implemented real-time data acquisition and visualization",
    ],
  },
  {
    id: "low-latency-trading",
    title: "Low-Latency Trading System",
    description: "High-performance trading system with microsecond-level latency optimization",
    longDescription: "Designed and implemented a low-latency trading system focusing on performance optimization, efficient data structures, and real-time market data processing. Explored modern C++ techniques for high-frequency trading applications.",
    technologies: ["C++", "Low-Latency", "Multithreading", "Performance Optimization"],
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
    ],
  },
  {
    id: "stock-analyzer",
    title: "Stock Analyzer",
    description: "User-friendly GUI application for stock analysis and investment strategy computation",
    longDescription: "Produced a comprehensive stock analysis tool with a user-friendly GUI to facilitate stock functions and generate stock charts. Collaborated with partners in data retrieval from an API and formulated algorithms for computing investment strategies.",
    technologies: ["Python", "PyQt5", "Matplotlib", "API Integration", "Data Analysis"],
    featured: true,
    category: "Financial Technology",
    startDate: "2023-01",
    endDate: "2023-03",
    highlights: [
      "Built user-friendly GUI using Python's PyQt5",
      "Integrated real-time stock data from financial APIs",
      "Generated interactive stock charts with Matplotlib",
      "Implemented algorithms for computing investment strategies",
    ],
  },
  {
    id: "portfolio-website",
    title: "Modern Portfolio Website",
    description: "Personal portfolio built with Next.js 14, TypeScript, and Framer Motion",
    longDescription: "Developed a modern, responsive portfolio website using the latest web technologies. Features include dark/light theme, smooth animations, interactive components, and static site generation for optimal performance.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/jameshuang12/portfolio",
    demoUrl: "https://jameshuang12.github.io/portfolio/",
    featured: false,
    category: "Web Development",
    startDate: "2024-03",
    highlights: [
      "Built with Next.js 14 App Router and TypeScript",
      "Implemented smooth animations with Framer Motion",
      "Designed responsive UI with Tailwind CSS",
      "Optimized for performance with static site generation",
    ],
  },
];

export const projectCategories = [
  "Scientific Software",
  "Systems Programming",
  "Financial Technology",
  "Web Development",
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
