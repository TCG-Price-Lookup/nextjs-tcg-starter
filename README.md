# nextjs-tcg-starter

A polished, one-click-deployable Next.js 16 app showcasing [`@tcgpricelookup/sdk`](https://www.npmjs.com/package/@tcgpricelookup/sdk) — search live trading card prices across 8 games (Pokémon, Pokémon Japan, MTG, Yu-Gi-Oh, Lorcana, One Piece, Flesh and Blood, Star Wars: Unlimited) with a single batched API call.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTCG-Price-Lookup%2Fnextjs-tcg-starter&env=TCG_API_KEY&envDescription=Free%20API%20key%20%E2%80%94%20200%20requests%2Fday%2C%20no%20credit%20card&envLink=https%3A%2F%2Ftcgpricelookup.com%2Ftcg-api)

![Screenshot](./docs/screenshot.png)

## What this is

A real, working Next.js app you can deploy in 60 seconds:

- **Search** — type any card name, hit enter, see live prices across 8 games
- **Card detail pages** — TCGPlayer market + low, eBay 7-day average, set/rarity metadata
- **Per-game browse pages** at `/games/pokemon`, `/games/mtg`, etc. (cached hourly via ISR)
- **Dark mode**, shadcn/ui, Tailwind 4
- **Zero config** beyond a single API key
- **Server components only** — your API key never reaches the browser

## Quickstart (local)

```bash
git clone https://github.com/TCG-Price-Lookup/nextjs-tcg-starter
cd nextjs-tcg-starter
pnpm install
echo "TCG_API_KEY=your_key_here" > .env.local
pnpm dev
```

Get a free API key (200 requests/day, no credit card) at <https://tcgpricelookup.com/tcg-api>.

Open <http://localhost:3000> and search "charizard".

## Architecture

```
URL: /?q=charizard&game=pokemon
   │
   ▼
app/page.tsx (server component)
   │  reads searchParams
   ▼
tcg.cards.search({ q, game, limit: 24 })   ← single SDK call, server-side
   │
   ▼
<ResultsGrid cards={data} />               ← server-rendered HTML
```

All SDK calls live in server components. No API route handlers, no client-side SDK use, no `NEXT_PUBLIC_` env vars. The `TCG_API_KEY` env var stays on your server.

## Routes

| Route | Notes |
|---|---|
| `/` | Search (server component, reads `?q=` and `?game=`) |
| `/card/[id]` | Card detail (server component) |
| `/games/[game]` | Browse 24 cards for a game (ISR, revalidates hourly) |
| `/about` | Static about page |

## How to extend

- **Want a CLI version?** See [`tcglookup`](https://www.npmjs.com/package/tcglookup) on npm.
- **Want a watchlist/portfolio tracker?** See the [50-line tracker tutorial](https://tcgpricelookup.com/blog/build-tcg-price-tracker-javascript).
- **Full SDK docs:** <https://github.com/TCG-Price-Lookup/tcglookup-js>
- **API reference:** <https://tcgpricelookup.com/docs/api-reference>

## License

MIT
