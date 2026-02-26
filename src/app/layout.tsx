import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricards Taukuls — Full-Stack Developer",
  description:
    "Senior full-stack developer specializing in React, Next.js, Angular, .NET. Building production apps from scratch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
