import Image from "next/image";

const TEAM = [
  {
    name: "Romain",
    description: "Lead dev & manager",
    url: "/team/romain.png",
  },
  {
    name: "Kévin",
    description: "Development & Design",
    url: "/team/kevin.png",
  },
  {
    name: "Hugo H",
    description: "Server-side development",
    url: "/team/hugoh.png",
  },
  {
    name: "Hugo D",
    description: "Back-end & manager",
    url: "/team/hugod.png",
  },
] as const satisfies { name: string; description: string; url: string }[];

export default function Team() {
  return (
    <div className="container">
      <div className="grid gap-16 md:grid-cols-4">
        {TEAM.map(member => (
          <div key={member.name} className="flex flex-col justify-center">
            <Image
              alt={member.name}
              width={286}
              height={286}
              className="w-full"
              src={member.url}
            />
            <h2 className="mt-4 text-center text-3xl font-bold">
              {member.name}
            </h2>
            <p className="text-center text-xl font-bold text-zinc-400">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
