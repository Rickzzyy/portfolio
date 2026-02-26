import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-accent"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-text-secondary">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
