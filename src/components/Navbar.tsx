import Link from 'next/link'

const LINKS = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Offers',
    url: '/offers',
  },
  {
    name: 'About us',
    url: '/#about-us',
  },
  {
    name: 'Contact',
    url: '/#contact',
  },
] as const satisfies { name: string; url: string }[]

export default function Navbar () {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full">
      <div className="container flex w-full items-start justify-between py-6">
        Ascendance
        <ul className="flex gap-4">
          {LINKS.map(link => (
            <li key={link.url}>
              <Link
                className="rounded-full px-3 py-2 transition-all hover:bg-black"
                href={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
