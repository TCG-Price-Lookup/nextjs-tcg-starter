import { CardTile, type TcgCard } from "@/components/CardTile";

export function ResultsGrid({ cards }: { cards: TcgCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cards.map((card) => (
        <CardTile key={card.id} card={card} />
      ))}
    </div>
  );
}
