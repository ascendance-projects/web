import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="relative mt-24 overflow-clip py-24">
      <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[#74E2E2]/50" />
      <div className="absolute -z-10 h-32 w-full rounded-[100%] bg-[#74E2E2]/40 blur-[200px]" />

      <div className="container">
        <h2 className="text-center text-5xl font-bold">
          Frequently asked questions
        </h2>

        <div className="mt-24">
          <Accordion>
            {[...Array(5).keys()].map((_, i) => (
              <AccordionItem key={i} value={i}>
                <AccordionTrigger>trigger</AccordionTrigger>
                <AccordionContent>content</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
