import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricards Taukuls — Senior Full-Stack Developer",
  description:
    "Senior full-stack developer specializing in React, Next.js, Angular, and .NET. Building high-performance production applications for ambitious teams.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    ".NET",
    "Node.js",
    "Frontend Developer",
    "Web Developer",
  ],
  openGraph: {
    title: "Ricards Taukuls — Senior Full-Stack Developer",
    description:
      "Building high-performance production applications for ambitious teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
