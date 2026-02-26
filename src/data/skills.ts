export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "MUI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      ".NET",
      "C#",
      "REST API",
      "gRPC",
      "MS SQL Server",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "Docker",
      "CI/CD",
      "Vite",
      "Orval",
      "Figma",
      "Linux",
    ],
  },
  {
    title: "Patterns & Practices",
    skills: [
      "Clean Architecture",
      "DDD",
      "CQRS",
      "Microservices",
      "MobX",
      "Claude AI / MCP",
    ],
  },
];
