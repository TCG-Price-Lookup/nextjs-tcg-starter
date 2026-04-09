import { notFound } from "next/navigation";
import { tcg } from "@/lib/tcg";
import { GAMES, isGameSlug, gameName } from "@/lib/games";
import { ResultsGrid } from "@/components/ResultsGrid";
import type { TcgCard } from "@/components/CardTile";

interface PageProps {
  params: Promise<{ game: string }>;
}

export const revalidate = 3600; // ISR: regenerate at most once per hour
export const dynamicParams = false; // unknown slugs → 404

export async function generateStaticParams() {
  return GAMES.map((g) => ({ game: g.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { game } = await params;
  if (!isGameSlug(game)) return {};
  return {
    title: `Browse ${gameName(game)} cards — TCG Price Lookup`,
    description: `Live prices for ${gameName(game)} trading cards via @tcgpricelookup/sdk.`,
  };
}

export default async function GamePage({ params }: PageProps) {
  const { game } = await params;
  if (!isGameSlug(game)) notFound();

  const result = await tcg.cards.search({ game, limit: 24 });
  const cards = result.data as TcgCard[];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">
        Browse {gameName(game)}
      </h1>
      <p className="mb-8 text-muted-foreground">
        24 example {gameName(game)} cards from our catalog. Page regenerates
        hourly.
      </p>
      <ResultsGrid cards={cards} />
    </main>
  );
}
