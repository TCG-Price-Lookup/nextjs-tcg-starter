import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          TCG<span className="text-primary">Lookup</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="https://github.com/TCG-Price-Lookup/nextjs-tcg-starter"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
