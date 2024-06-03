import Image from "next/image";

export default function WeLovePartnerships() {
  return (
    <section className="relative mt-24 overflow-clip py-32">
      <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[#F57270]/50" />
      <div className="absolute -z-10 h-32 w-full rounded-[100%] bg-[#F57270]/40 blur-[200px]" />

      <div className="container">
        <h2 className="text-center text-5xl font-bold">
          We <span className="text-[#F57270]">love</span> partnerships
        </h2>

        <div className="mt-16 flex justify-center">
          <Image
            src="/planet-hoster.png"
            alt="Planet Hoster"
            width={361}
            height={294}
          />
        </div>
      </div>
    </section>
  );
}
