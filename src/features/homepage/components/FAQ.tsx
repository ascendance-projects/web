"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import staggerChildren from "~/lib/transitions/staggerChildren";
import translate from "~/lib/transitions/translate";

export default function FAQ() {
  return (
    <section className="relative mt-24 py-32">
      <Image
        src="/neptune-white.png"
        width={1135}
        height={1135}
        alt="Neptune white"
        className="absolute -left-[35%] top-1/3 -z-10"
      />
      {/* <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[#74E2E2]/50" /> */}
      <div className="absolute -z-10 h-32 w-full rounded-[100%] bg-[#74E2E2]/40 blur-[200px]" />

      <div className="container">
        <h2 className="text-center text-5xl font-bold">
          Frequently asked questions
        </h2>

        <motion.div
          variants={staggerChildren(0.2)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="mt-24"
        >
          <Accordion>
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div variants={translate} key={_}>
                <AccordionItem value={i.toString()}>
                  <AccordionTrigger>trigger</AccordionTrigger>
                  <AccordionContent>content</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
