import { tcg } from "@/lib/tcg";
import { isGameSlug } from "@/lib/games";
import { Hero } from "@/components/Hero";
import { ResultsGrid } from "@/components/ResultsGrid";
import { EmptyState } from "@/components/EmptyState";
import type { TcgCard } from "@/components/CardTile";

interface PageProps {
  searchParams: Promise<{ q?: string; game?: string }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const q = params.q?.trim();
  const game = params.game && isGameSlug(params.game) ? params.game : undefined;

  let cards: TcgCard[] = [];
  if (q) {
    const result = await tcg.cards.search({ q, game, limit: 24 });
    cards = result.data as TcgCard[];
  }

  return (
    <>
      <Hero defaultQuery={q} activeGame={game} />
      <main className="mx-auto max-w-6xl px-4 py-12">
        {!q && (
          <EmptyState
            title="Search for any card to get started"
            description="Try 'charizard', 'black lotus', or 'monkey d luffy'. The form above hits the live API."
          />
        )}
        {q && cards.length === 0 && (
          <EmptyState
            title={`No results for "${q}"`}
            description="Try a different spelling, or remove the game filter."
          />
        )}
        {q && cards.length > 0 && <ResultsGrid cards={cards} />}
      </main>
    </>
  );
}
