const CARDS = [
  {
    title: "Extravagant",
    description: "je sais pas",
  },
  { title: "jsp", description: "je sais pas" },
  { title: "jsp", description: "je sais pas" },
] as const satisfies CardProps[];

export default function Cards() {
  return (
    <div className="container grid grid-cols-3 gap-8 py-24">
      {CARDS.map(card => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}

interface CardProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

function Card({ description, title }: CardProps) {
  return (
    <div className="group relative flex flex-col gap-4 overflow-clip rounded-3xl border border-zinc-600 p-8 transition-all hover:scale-105 hover:border-zinc-700">
      <div className="absolute -inset-[1000%] -z-10 animate-[spin_10s] bg-[conic-gradient(from_90deg_at_50%_50%,#262626_0%,#161616_50%,#121212_100%)] opacity-0 transition-opacity group-hover:opacity-100" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
}
