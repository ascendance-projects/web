"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  AreaChart,
  CalendarRange,
  EarthLock,
  Gauge,
  Leaf,
  PaintBucket,
} from "lucide-react";

const CARDS = [
  {
    icon: PaintBucket,
    title: "Extravaganza",
    description: "We build websites that are out of ordinary",
  },
  {
    icon: Leaf,
    title: "Green code",
    description: "Our websites are eco-friendly and consume less energy",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Reduce your loading time and increase your conversion rate by 50%",
  },
  {
    icon: AreaChart,
    title: "SEO",
    description: "Boost your website traffic and enhance your visibility",
  },
  {
    icon: EarthLock,
    title: "Security",
    description: "Protect your website from cyber attacks and data breaches",
  },
  {
    icon: CalendarRange,
    title: "Maintenance",
    description:
      "We take care of your website so you can focus on your business",
  },
] as const satisfies CardProps[];

const parentVariant = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} satisfies Variants;

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} satisfies Variants;

export default function Cards() {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container mt-32 grid grid-cols-3 gap-8 pb-32"
    >
      {CARDS.map(card => (
        <motion.div variants={childVariant} key={card.title}>
          <Card {...card} />
        </motion.div>
      ))}
    </motion.div>
  );
}

interface CardProps {
  icon: LucideIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}

function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="group relative flex flex-col gap-4 overflow-clip rounded-3xl p-8 ring ring-zinc-500 transition-all hover:scale-105 hover:ring-emerald-400">
      <div className="absolute -inset-[1000%] -z-10 animate-[spin_10s] bg-[conic-gradient(from_90deg_at_50%_50%,#262626_0%,#161616_50%,#121212_100%)] opacity-0 transition-opacity group-hover:opacity-100" />
      <Icon className="" size={32} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-xl text-zinc-400">{description}</p>
    </div>
  );
}
