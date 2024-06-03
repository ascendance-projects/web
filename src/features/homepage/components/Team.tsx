'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import staggerChildren from '~/lib/transitions/staggerChildren'
import translate from '~/lib/transitions/translate'

const TEAM = [
  {
    name: 'Romain',
    description: 'Lead dev & manager',
    url: '/team/romain.png',
  },
  {
    name: 'Kévin',
    description: 'Development & Design',
    url: '/team/kevin.png',
  },
  {
    name: 'Hugo H',
    description: 'Server-side development',
    url: '/team/hugoh.png',
  },
  {
    name: 'Hugo D',
    description: 'Back-end & manager',
    url: '/team/hugod.png',
  },
] as const satisfies { name: string; description: string; url: string }[]

export default function Team () {
  return (
    <div className="container py-32">
      <h2 className="mb-32 text-center text-5xl font-bold">Our team</h2>
      <motion.div
        variants={staggerChildren(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="grid gap-16 md:grid-cols-4"
      >
        {TEAM.map(member => (
          <motion.div
            variants={translate}
            key={member.name}
            className="flex flex-col justify-center"
          >
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
