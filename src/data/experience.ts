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
  {
    id: "vanderbilt-research",
    title: "Undergraduate Research Assistant",
    company: "Vanderbilt University",
    location: "Nashville, TN",
    startDate: "2021-08",
    endDate: "2024-05",
    current: false,
    description: "Conducted advanced research in quantum optics and photonics, developing software solutions for quantum diamond microscopy and contributing to cutting-edge scientific publications.",
    responsibilities: [
      "Developed and maintained Python-based control software for quantum diamond microscopy experiments",
      "Implemented data acquisition and analysis pipelines for quantum sensing applications",
      "Collaborated with interdisciplinary research teams on quantum optics projects",
      "Contributed to scientific publications and research presentations",
      "Optimized experimental protocols and automated measurement systems",
      "Maintained and improved laboratory equipment and software infrastructure"
    ],
    technologies: ["Python", "MATLAB", "LabVIEW", "Git", "Data Analysis", "Scientific Computing", "Quantum Optics"],
  },
  {
    id: "vanderbilt-ta",
    title: "Teaching Assistant",
    company: "Vanderbilt University",
    location: "Nashville, TN",
    startDate: "2022-01",
    endDate: "2024-05",
    current: false,
    description: "Supported undergraduate physics courses by leading lab sessions, grading assignments, and providing one-on-one tutoring to help students master complex physics concepts.",
    responsibilities: [
      "Led laboratory sessions for undergraduate physics courses",
      "Provided one-on-one tutoring and academic support to students",
      "Graded assignments, lab reports, and exams with detailed feedback",
      "Assisted professors in developing course materials and lab experiments",
      "Held regular office hours to support student learning",
      "Mentored students in experimental techniques and data analysis"
    ],
    technologies: ["Physics", "Laboratory Techniques", "Data Analysis", "Teaching", "Mentoring"],
  },
];

// Instructions for adding more experience:
// 1. Copy an existing experience object
// 2. Update the id to be unique (e.g., "company-role-year")
// 3. Fill in all fields with your job details
// 4. Use "Present" for endDate if currently employed
// 5. Set current: true for your current position
// 6. Add relevant technologies you used in the role
// 7. List 4-6 key responsibilities that showcase your impact

// Made with Bob
