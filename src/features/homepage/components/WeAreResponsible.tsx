'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import staggerChildren from '~/lib/transitions/staggerChildren'
import translate from '~/lib/transitions/translate'

export default function WeAreResponsible () {
  return (
    <section className="relative mt-24 overflow-x-clip py-32">
      <Image
        src="/neptune.png"
        className="absolute -right-[15%] top-1/3 -z-10"
        alt="Neptune"
        width={741}
        height={734}
      />
      <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[#74E2E2]/50"/>
      <div className="absolute -z-10 h-32 w-full rounded-[100%] bg-[#74E2E2]/40 blur-[200px]"/>

      <div className="container">
        <h2 className="text-center text-5xl font-bold">
          We are{' '}
          <span className="bg-gradient-to-r from-[#74E27F] to-[#74E2E2] bg-clip-text text-transparent">
            responsible
          </span>
        </h2>

        <motion.div
          variants={staggerChildren(0.3)}
          viewport={{once: true}}
          initial="hidden"
          whileInView="visible"
          className="mt-16 grid grid-cols-2 gap-4 *:bg-[#041212] *:p-16"
        >
          <motion.div variants={translate} className="col-span-2 rounded-xl">
            <h3 className="text-xl font-bold">Green code</h3>

            <p className="mt-2 max-w-prose text-[#889797]">
              The development of a site or an application with a more ecological
              approach to limit consumption, using less technologies ressources,
              while using modern technologies that match your needs.
            </p>
          </motion.div>
          <motion.div variants={translate} className="rounded-xl">
            <h3 className="text-xl font-bold">Green hosting</h3>

            <p className="mt-2 max-w-prose text-[#889797]">
              We offer hosting solutions that are more respectful of the
              environment, by using green energy and by reducing the energy
              consumption of our servers.
            </p>
          </motion.div>
          <motion.div variants={translate} className="rounded-xl">
            <h3 className="text-xl font-bold">Green design</h3>

            <p className="mt-2 max-w-prose text-[#889797]">
              We design websites and applications with a more ecological
              approach, by limiting the use of images and animations that
              consume a lot of energy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
