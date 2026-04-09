import Link from "next/link";

export default function CardNotFound() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Card not found</h1>
      <p className="mt-2 text-muted-foreground">
        That card ID doesn&apos;t exist in our catalog.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Back to search
      </Link>
    </main>
  );
}
