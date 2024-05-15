import Link from "next/link";
import GitHub from "./icons/GitHub";
import Instagram from "./icons/Instagram";
import X from "./icons/X";

export default function Footer() {
  return (
    <footer className="bg-zinc-900/45 py-24">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Navigate  */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Navigate</h2>
            <div className="flex flex-col gap-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/offers">Offers</NavLink>
              <NavLink href="/#about">About us</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Sections</h2>
            <div className="flex flex-col gap-2">
              <NavLink href="/#our-team">Our team</NavLink>
              <NavLink href="/#values">Values</NavLink>
              <NavLink href="/#green-coding">Green coding</NavLink>
              <NavLink href="/#host">Hostinger</NavLink>
            </div>
          </div>

          {/* Logo */}
          <div className="basis-1/2">
            {/* <Logo /> */}
            Ascendance
          </div>
        </div>

        <div className="my-16 flex items-center justify-end gap-8">
          <a href="/">
            <GitHub />
          </a>
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <X />
          </a>
        </div>

        {/* divider */}
        <div className="h-0.5 bg-[#74E2E2]/20 " />

        <div className="mt-16 flex flex-wrap justify-between gap-8">
          <span className="">2023 Ascendance © All rights reserved.</span>

          <div className="inline-flex flex-wrap gap-8">
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NavLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link {...props} className="text-zinc-400">
      {children}
    </Link>
  );
}
