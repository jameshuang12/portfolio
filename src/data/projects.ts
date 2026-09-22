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
    id: "agentic-ai-platform",
    title: "Agentic AI Development Platform",
    description: "Prototyped an agentic Python platform unifying Salesforce, Monday, Box, and Slack to automate POC engagements. Orchestrated agents that extract CRM data, auto-provision boards, assign tasks, and push live status to distributed teams.",
    technologies: ["Python", "Agentic AI", "Salesforce", "Slack", "Monday.com"],
    category: "AI",
    featured: true,
    highlights: [
      "Unified Salesforce, Monday, Box, and Slack into a single agentic automation platform",
      "Orchestrated agents that extract CRM data, auto-provision boards, and push live status to teams",
    ],
  },
  {
    id: "qudi-iqo-modules",
    title: "Qudi IQO Modules",
    description: "Python modules for quantum optics experiments on the Qudi framework, covering laser control, data acquisition, and live visualization of measurements.",
    technologies: ["Python", "Qt", "Hardware Integration", "Data Visualization"],
    githubUrl: "https://github.com/jameshuang12/qudi-iqo-modules",
    category: "Research",
    featured: true,
  },
  {
    id: "low-latency-trading",
    title: "Low-Latency Trading System",
    description: "A trading system in modern C++ built on lock-free data structures, with an order matching engine, market data processing, and risk management running at microsecond latency.",
    technologies: ["C++", "Low-Latency", "Trading", "Performance Optimization"],
    githubUrl: "https://github.com/jameshuang12/Low-Latency-Trading-System-101",
    category: "Finance",
    featured: true,
  },
  {
    id: "vandy-flights",
    title: "Vandy Flights",
    description: "Flight booking app built with a team. I worked full stack on it: the FastAPI backend and API, plus the React interface on top.",
    technologies: ["React", "FastAPI", "Firebase", "Python", "JavaScript"],
    githubUrl: "https://github.com/lanierjh/VandyFlights",
    category: "Web",
  },
  {
    id: "stock-analyzer",
    title: "Stock Analyzer",
    description: "Stock market analysis app with real-time charts, technical indicators, portfolio tracking, and an ML model for predictive analytics.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Machine Learning"],
    githubUrl: "https://github.com/jameshuang12/GraphAnalyzer",
    category: "Finance",
  },
  {
    id: "hackduke-2023",
    title: "HackDuke 2023 Project",
    description: "Team project from HackDuke 2023, built around the hackathon's social-impact theme. I set up the Node.js backend and the API wiring behind it.",
    technologies: ["JavaScript", "React", "Node.js", "APIs"],
    githubUrl: "https://github.com/jameshuang12/hachkduke23",
    category: "Hackathon",
  },
];

export const projectCategories = [
  "AI",
  "Research",
  "Finance",
  "Hackathon",
  "Web",
];
