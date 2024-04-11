"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";

const parentVariant = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} satisfies Variants;
const childrenVariant = {
  hidden: {
    // clipPath: "rect(0 100%, 100% 100%, 100% 100%, 0 100%)",
    y: 20,
    opacity: 0,
  },
  visible: {
    // clipPath: "rect(0 0, 100% 0, 100% 100%, 0 100%)",
    y: 0,
    opacity: 1,
  },
} satisfies Variants;

export default function Hero() {
  return (
    <motion.header
      variants={parentVariant}
      initial="hidden"
      animate="visible"
      className="bg-stars relative flex h-screen flex-col items-center justify-center overflow-clip bg-blend-hard-light"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -left-40 -z-10 size-[800px]"
      >
        <Image src="/earth.png" alt="" width={961} height={961} />
      </motion.div>
      <div className="absolute left-0 -z-10 h-[400px] w-[700px] rounded-full bg-[#74E2C1]/25 blur-[250px]" />
      <motion.h1
        variants={childrenVariant}
        className="text-3xl font-bold md:text-8xl"
      >
        Ascendance
      </motion.h1>
      <motion.p
        variants={childrenVariant}
        className="mt-2 text-4xl font-bold text-[#99B09B]"
      >
        <span className="text-main">shape</span> your business
      </motion.p>

      <Button asChild variant="default" size="lg" className="mt-8">
        <motion.button variants={childrenVariant}>
          Take off with us
          <ArrowRight className="ml-2" />
        </motion.button>
      </Button>
    </motion.header>
  );
}
