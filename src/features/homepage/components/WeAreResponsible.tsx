export default function WeAreResponsible() {
  return (
    <section className="relative mt-24 overflow-clip py-24">
      <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[#74E2E2]/50" />
      <div className="absolute -z-10 h-32 w-full rounded-[100%] bg-[#74E2E2]/40 blur-[200px]" />

      <div className="container">
        <h2 className="text-center text-5xl font-bold">
          We are{" "}
          <span className="bg-gradient-to-r from-[#74E27F] to-[#74E2E2] bg-clip-text text-transparent">
            responsible
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-4 *:bg-[#041212] *:p-16">
          <div className="col-span-2 rounded-xl">
            <h3 className="text-xl font-bold">Green code</h3>

            <p className="mt-2 max-w-prose text-[#889797]">
              The development of a site or an application with a more ecological
              approach to limit consumption, using less technologies ressources,
              while using modern technologies that match your needs.
            </p>
          </div>
          <div className="rounded-xl">hello</div>
          <div className="rounded-xl">hello</div>
        </div>
      </div>
    </section>
  );
}
