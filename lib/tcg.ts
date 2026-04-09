import { TcgLookupClient } from "@tcgpricelookup/sdk";

if (!process.env.TCG_API_KEY) {
  // Fail loud at module-load time in dev. In production the SDK will throw
  // AuthenticationError on first call, which the root error boundary catches.
  console.warn(
    "[nextjs-tcg-starter] TCG_API_KEY is not set. Get a free key at https://tcgpricelookup.com/tcg-api"
  );
}

export const tcg = new TcgLookupClient({
  apiKey: process.env.TCG_API_KEY ?? "",
  retry: { attempts: 3, baseDelayMs: 600 },
});
