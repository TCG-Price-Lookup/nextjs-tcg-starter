"use client";

import { ErrorState } from "@/components/ErrorState";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { name?: string };
  reset: () => void;
}) {
  // The SDK exports typed error classes; we match by .name to avoid a
  // client-side import of the SDK package (which is server-only).
  const isAuthError =
    error.name === "AuthenticationError" ||
    error.message?.toLowerCase().includes("api key");

  if (isAuthError) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-24">
        <ErrorState
          title="API key not configured"
          description="Set the TCG_API_KEY environment variable to a valid key. Get a free one (200 requests/day) at tcgpricelookup.com/tcg-api."
          ctaLabel="Get a free API key"
          ctaHref="https://tcgpricelookup.com/tcg-api"
        />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <ErrorState
        title="Something went wrong"
        description={error.message || "An unexpected error occurred."}
        onRetry={reset}
      />
    </main>
  );
}
