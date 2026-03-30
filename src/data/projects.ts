/**
 * Projects Data
 *
 * Portfolio projects displayed in the Projects section.
 * Add new projects by following the interface structure.
 * Set featured: true to highlight important projects.
 *
 * @module data/projects
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  category: string;
  featured?: boolean;
  highlights?: string[];
}

export const projectsData: Project[] = [
  {
    id: "qudi-iqo-modules",
    title: "Qudi IQO Modules",
    description: "Developed Python modules for quantum optics experiments using Qudi framework. Implemented hardware interfaces for laser control, data acquisition, and real-time visualization of quantum measurements.",
    technologies: ["Python", "Qt", "Hardware Integration", "Data Visualization"],
    githubUrl: "https://github.com/jameshuang12/qudi-iqo-modules",
    category: "Research",
    featured: true,
  },
  {
    id: "low-latency-trading",
    title: "Low-Latency Trading System",
    description: "Built a high-performance trading system with microsecond-level latency. Implemented order matching engine, market data processing, and risk management using modern C++ and lock-free data structures.",
    technologies: ["C++", "Low-Latency", "Trading", "Performance Optimization"],
    githubUrl: "https://github.com/jameshuang12/Low-Latency-Trading-System",
    category: "Finance",
    featured: true,
  },
  {
    id: "stock-analyzer",
    title: "Stock Analyzer",
    description: "Full-stack web application for stock market analysis with real-time data visualization. Features include technical indicators, portfolio tracking, and predictive analytics using machine learning.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Machine Learning"],
    githubUrl: "https://github.com/jameshuang12/stock-analyzer",
    category: "Finance",
  },
  {
    id: "hackduke-2023",
    title: "HackDuke 2023 Project",
    description: "Hackathon project developed at Duke University focusing on social impact through technology. Built an innovative solution addressing real-world challenges with a team of developers.",
    technologies: ["JavaScript", "React", "Node.js", "APIs"],
    githubUrl: "https://github.com/jameshuang12/hachkduke23",
    category: "Hackathon",
  },
];

export const projectCategories = [
  "Research",
  "Finance",
  "Hackathon",
];

