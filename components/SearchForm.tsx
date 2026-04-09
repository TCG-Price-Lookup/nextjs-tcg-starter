import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GameChips } from "@/components/GameChips";
import type { GameSlug } from "@/lib/games";

interface Props {
  defaultQuery?: string;
  activeGame?: GameSlug;
}

export function SearchForm({ defaultQuery, activeGame }: Props) {
  return (
    <form action="/" method="GET" className="flex flex-col gap-4">
      {activeGame && <input type="hidden" name="game" value={activeGame} />}
      <div className="flex gap-2">
        <Input
          name="q"
          defaultValue={defaultQuery}
          placeholder="Search 'charizard ex', 'black lotus', 'monkey d luffy'…"
          className="h-12 text-base"
          autoFocus
        />
        <Button type="submit" size="lg">
          Search
        </Button>
      </div>
      <GameChips activeGame={activeGame} query={defaultQuery} />
    </form>
  );
}
