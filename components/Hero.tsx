import { SearchForm } from "@/components/SearchForm";
import type { GameSlug } from "@/lib/games";

interface Props {
  defaultQuery?: string;
  activeGame?: GameSlug;
}

export function Hero({ defaultQuery, activeGame }: Props) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Live trading card prices,{" "}
          <span className="text-primary">one API</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Search across Pokémon (English & Japan), MTG, Yu-Gi-Oh, Lorcana, One
          Piece, Flesh and Blood, and Star Wars: Unlimited. Powered by{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            @tcgpricelookup/sdk
          </code>
          .
        </p>
        <div className="mt-8 text-left">
          <SearchForm defaultQuery={defaultQuery} activeGame={activeGame} />
        </div>
      </div>
    </section>
  );
}
