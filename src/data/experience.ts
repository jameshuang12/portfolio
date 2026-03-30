export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  // Add your work experience here
  // Example template:
  /*
  {
    id: "job-1",
    title: "Software Engineer",
    company: "Company Name",
    location: "New York, NY",
    startDate: "2023-01",
    endDate: "Present",
    current: true,
    description: "Brief overview of your role and impact at the company.",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver features",
      "Implemented CI/CD pipelines and automated testing",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
  },
  */
];

// Instructions for adding experience:
// 1. Copy the template above
// 2. Fill in your job details
// 3. Add to the experienceData array
// 4. Use "Present" for endDate if currently employed
// 5. Set current: true for your current position

// Made with Bob
