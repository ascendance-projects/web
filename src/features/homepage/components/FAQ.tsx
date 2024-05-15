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

const QUESTIONS_AND_ANSWERS = [
  {
    question: "How do you ship your websites?",
    answer:
      "Depending on the technology stack, we use different methods to ship websites. For static websites, we can use multiple services like Vercel, Netlify, or GitHub Pages. For dynamic websites, we use services like Hostinger, OVH, or other hosting providers depending on the client's needs and location.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website. A simple landing page can be done in a few days, while a complex web application can take several months. We always provide an estimate before starting the project.",
  },
  {
    question: "Do you provide maintenance services?",
    answer:
      "Yes, we provide maintenance services for all the websites we build. We offer different maintenance plans depending on your needs. We can update the website, add new features, or fix bugs.",
  },
  {
    question: "Could I update the website myself?",
    answer:
      "Yes, we can provide a content management system (CMS) that allows you to update the website yourself. Depending on your needs, we can build one that matches your brand and business.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes, we provide SEO services for all the websites we build. We optimize the website for search engines and help you rank higher in search results. We also offer SEO audits and consulting services.",
  },
  {
    question: "If I need a custom feature later, can you build it?",
    answer:
      "Yes, we can build custom features for your website. We can add new pages, forms, or any other feature you need. We always provide an estimate before starting the work.",
  },
] satisfies {
  question: string;
  answer: string;
}[];

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
          <Accordion type="multiple">
            {QUESTIONS_AND_ANSWERS.map(({ question, answer }, i) => (
              <motion.div variants={translate} key={question}>
                <AccordionItem value={i.toString()}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
