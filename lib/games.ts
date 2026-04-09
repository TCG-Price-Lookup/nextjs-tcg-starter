import type { GameSlug } from "@tcgpricelookup/sdk";

export type { GameSlug };

export const GAMES: ReadonlyArray<{ slug: GameSlug; name: string }> = [
  { slug: "pokemon", name: "Pokémon" },
  { slug: "pokemon-jp", name: "Pokémon Japan" },
  { slug: "mtg", name: "Magic: The Gathering" },
  { slug: "yugioh", name: "Yu-Gi-Oh!" },
  { slug: "onepiece", name: "One Piece" },
  { slug: "lorcana", name: "Disney Lorcana" },
  { slug: "swu", name: "Star Wars: Unlimited" },
  { slug: "fab", name: "Flesh and Blood" },
];

const SLUG_SET = new Set<string>(GAMES.map((g) => g.slug));

export function isGameSlug(value: string): value is GameSlug {
  return SLUG_SET.has(value);
}

export function gameName(slug: GameSlug): string {
  return GAMES.find((g) => g.slug === slug)!.name;
}
