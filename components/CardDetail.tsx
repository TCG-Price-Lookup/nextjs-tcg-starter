import Image from "next/image";
import type { Card } from "@tcgpricelookup/sdk";
import { Badge } from "@/components/ui/badge";

function formatPrice(value?: number | null): string {
  if (value == null) return "—";
  return `$${value.toFixed(2)}`;
}

function PriceCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold tabular-nums">{value}</p>
    </div>
  );
}

export function CardDetail({ card }: { card: Card }) {
  const nm = card.prices?.raw?.near_mint;
  const lp = card.prices?.raw?.lightly_played;

  return (
    <div className="grid gap-8 md:grid-cols-[300px_1fr]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-muted">
        {card.image_url && (
          <Image
            src={card.image_url}
            alt={card.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
            priority
          />
        )}
      </div>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{card.game.name}</Badge>
            {card.rarity && <Badge variant="secondary">{card.rarity}</Badge>}
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            {card.name}
          </h1>
          <p className="mt-1 text-muted-foreground">
            {card.set.name}
            {card.number && ` · #${card.number}`}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <PriceCard
            label="TCGPlayer NM Market"
            value={formatPrice(nm?.tcgplayer?.market)}
          />
          <PriceCard
            label="TCGPlayer NM Low"
            value={formatPrice(nm?.tcgplayer?.low)}
          />
          <PriceCard
            label="eBay 7-day Avg"
            value={formatPrice(nm?.ebay?.avg_7d)}
          />
          <PriceCard
            label="TCGPlayer LP Market"
            value={formatPrice(lp?.tcgplayer?.market)}
          />
        </div>
      </div>
    </div>
  );
}
