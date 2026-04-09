import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GAMES, type GameSlug } from "@/lib/games";

interface Props {
  activeGame?: GameSlug;
  query?: string;
}

function buildHref(game: GameSlug | "all", query?: string) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (game !== "all") params.set("game", game);
  const qs = params.toString();
  return qs ? `/?${qs}` : "/";
}

export function GameChips({ activeGame, query }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href={buildHref("all", query)}>
        <Badge variant={activeGame ? "outline" : "default"}>All games</Badge>
      </Link>
      {GAMES.map((g) => (
        <Link key={g.slug} href={buildHref(g.slug, query)}>
          <Badge variant={activeGame === g.slug ? "default" : "outline"}>
            {g.name}
          </Badge>
        </Link>
      ))}
    </div>
  );
}
