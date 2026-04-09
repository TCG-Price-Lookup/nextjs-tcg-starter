import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export interface TcgCard {
  id: string;
  name: string;
  image_url?: string;
  set?: { slug?: string; name?: string };
  game?: { slug?: string; name?: string };
  prices?: {
    raw?: {
      near_mint?: {
        tcgplayer?: { market?: number | null };
      };
    };
  };
}

function formatPrice(value?: number | null): string {
  if (value == null) return "—";
  return `$${value.toFixed(2)}`;
}

export function CardTile({ card }: { card: TcgCard }) {
  const market = card.prices?.raw?.near_mint?.tcgplayer?.market;
  return (
    <Link
      href={`/card/${card.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary hover:shadow-lg"
    >
      <div className="relative aspect-[3/4] bg-muted">
        {card.image_url && (
          <Image
            src={card.image_url}
            alt={card.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-sm font-medium">{card.name}</h3>
          {card.game?.name && (
            <Badge variant="outline" className="shrink-0 text-xs">
              {card.game.name}
            </Badge>
          )}
        </div>
        {card.set?.name && (
          <p className="line-clamp-1 text-xs text-muted-foreground">
            {card.set.name}
          </p>
        )}
        <p className="mt-auto text-sm font-semibold tabular-nums">
          {formatPrice(market)}
        </p>
      </div>
    </Link>
  );
}
