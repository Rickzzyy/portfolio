export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "SWH SETS",
    period: "Jul 2025 — Present",
    location: "Remote",
    description: [
      "Leading frontend development on a financial data platform for a Nasdaq-related project, building the entire frontend from scratch.",
      "Developing complex data visualization interfaces and dashboards for real-time financial data.",
      "Working with Angular and TypeScript in a performance-critical, high-stakes environment.",
      "Integrating with backend services using Orval for type-safe API client generation.",
    ],
    tech: ["Angular", "React", "TypeScript", "C#", ".NET", "Java", "Orval", "REST API"],
  },
  {
    role: "Full Stack Developer",
    company: "viaPro SIA",
    period: "Aug 2021 — Jul 2025",
    location: "Riga, Latvia",
    description: [
      "Built a robust Node.js Express API with Microsoft SQL Server, optimizing data retrieval and storage efficiency.",
      "Developed the frontend with React, TypeScript, MobX, Vite.js, and Material-UI, delivering a responsive and user-friendly interface.",
      "Implemented CI/CD pipelines for automated deployment and used Docker for containerization across environments.",
      "Fine-tuned stored procedures and integrated system components to boost database performance.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MobX",
      "Vite",
      "MUI",
      "MS SQL Server",
      "Docker",
    ],
  },
];
