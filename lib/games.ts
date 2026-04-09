export const GAMES = [
  { slug: "pokemon", name: "Pokémon" },
  { slug: "mtg", name: "Magic: The Gathering" },
  { slug: "yugioh", name: "Yu-Gi-Oh!" },
  { slug: "lorcana", name: "Disney Lorcana" },
  { slug: "one-piece", name: "One Piece" },
  { slug: "flesh-and-blood", name: "Flesh and Blood" },
  { slug: "star-wars-unlimited", name: "Star Wars: Unlimited" },
  { slug: "digimon", name: "Digimon" },
] as const;

export type GameSlug = (typeof GAMES)[number]["slug"];

export function isGameSlug(value: string): value is GameSlug {
  return GAMES.some((g) => g.slug === value);
}

export function gameName(slug: GameSlug): string {
  return GAMES.find((g) => g.slug === slug)!.name;
}
