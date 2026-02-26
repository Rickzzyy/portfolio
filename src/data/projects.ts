export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Financial Data Platform",
    description:
      "Leading frontend development for a Nasdaq-related financial data platform. Built the entire Angular frontend from scratch — complex dashboards, real-time data visualization, and high-performance UI for financial analysts.",
    tech: ["Angular", "TypeScript", "Orval", "REST API"],
  },
  {
    title: "Enterprise Management System",
    description:
      "Full-stack application with React frontend and Node.js backend. Real-time data sync, role-based access control, and optimized SQL Server integration with custom stored procedures and CI/CD pipelines.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MS SQL Server", "Docker"],
  },
  {
    title: "Portfolio",
    description:
      "This site. A minimal dark-themed developer portfolio built with Next.js and Tailwind CSS, featuring smooth Framer Motion animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Rickzzyy/portfolio",
  },
];
