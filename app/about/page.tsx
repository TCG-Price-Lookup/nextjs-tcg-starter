import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About — TCG Price Lookup Next.js Starter",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">About this starter</h1>
      <div className="prose prose-neutral mt-6 dark:prose-invert">
        <p>
          This is a polished, one-click-deployable Next.js 16 app that
          showcases{" "}
          <a href="https://www.npmjs.com/package/@tcgpricelookup/sdk">
            <code>@tcgpricelookup/sdk</code>
          </a>{" "}
          — the official JavaScript client for the TCG Price Lookup API.
        </p>
        <p>
          Search live prices for trading cards across 8 games (Pokémon English,
          Pokémon Japan, Magic: The Gathering, Yu-Gi-Oh!, Disney Lorcana, One
          Piece, Flesh and Blood, Star Wars: Unlimited) using a single batched
          API call. All SDK calls happen in server components — your API key
          never reaches the browser.
        </p>
        <h2>What you get</h2>
        <ul>
          <li>Server-component search via URL params</li>
          <li>Card detail pages with TCGPlayer + eBay prices</li>
          <li>Per-game browse pages with ISR caching</li>
          <li>Dark mode, shadcn/ui primitives, Tailwind 4</li>
          <li>Zero database, zero auth, zero config beyond an API key</li>
        </ul>
        <h2>Get a free API key</h2>
        <p>
          The Free tier includes 200 requests/day — plenty for personal
          projects, demos, and side hustles. No credit card required.
        </p>
      </div>
      <div className="mt-8 flex gap-3">
        <Link href="https://tcgpricelookup.com/tcg-api">
          <Button>Get a free API key</Button>
        </Link>
        <Link href="https://github.com/TCG-Price-Lookup/nextjs-tcg-starter">
          <Button variant="outline">View on GitHub</Button>
        </Link>
      </div>
    </main>
  );
}
