export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    title: "Qudi IQO Modules",
    description: "Developed Python modules for quantum optics experiments using Qudi framework. Implemented hardware interfaces for laser control, data acquisition, and real-time visualization of quantum measurements.",
    technologies: ["Python", "Qt", "Hardware Integration", "Data Visualization"],
    github: "https://github.com/jameshuang12/qudi-iqo-modules",
    category: "Research",
  },
  {
    title: "Low-Latency Trading System",
    description: "Built a high-performance trading system with microsecond-level latency. Implemented order matching engine, market data processing, and risk management using modern C++ and lock-free data structures.",
    technologies: ["C++", "Low-Latency", "Trading", "Performance Optimization"],
    github: "https://github.com/jameshuang12/Low-Latency-Trading-System",
    category: "Finance",
  },
  {
    title: "Stock Analyzer",
    description: "Full-stack web application for stock market analysis with real-time data visualization. Features include technical indicators, portfolio tracking, and predictive analytics using machine learning.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Machine Learning"],
    github: "https://github.com/jameshuang12/stock-analyzer",
    category: "Finance",
  },
  {
    title: "HackDuke 2023 Project",
    description: "Hackathon project developed at Duke University focusing on social impact through technology. Built an innovative solution addressing real-world challenges with a team of developers.",
    technologies: ["JavaScript", "React", "Node.js", "APIs"],
    github: "https://github.com/jameshuang12/hachkduke23",
    category: "Hackathon",
  },
];

export const projectCategories = [
  "Research",
  "Finance",
  "Hackathon",
];

// Made with Bob
