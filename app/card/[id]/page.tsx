import { notFound } from "next/navigation";
import { NotFoundError } from "@tcgpricelookup/sdk";
import { tcg } from "@/lib/tcg";
import { CardDetail } from "@/components/CardDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CardPage({ params }: PageProps) {
  const { id } = await params;
  try {
    const card = await tcg.cards.get(id);
    return (
      <main className="mx-auto max-w-6xl px-4 py-12">
        <CardDetail card={card} />
      </main>
    );
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }
}
