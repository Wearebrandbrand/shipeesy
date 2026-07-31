import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const FAQBlock: React.FC = (props) => {
  return (
    <section className="mx-auto max-w-3xl px-10 py-14">
    <h2 className="mb-6 text-center text-[28px] font-extrabold tracking-[-0.02em] text-[#12233d]">
      Veelgestelde vragen
    </h2>
    <Accordion type="single" collapsible className="w-full space-y-3">
      <AccordionItem value="lcl-fcl" className="border rounded-xl bg-white px-4">
        <AccordionTrigger className="text-left text-[15px] font-semibold text-[#12233d]">
          Wat is het verschil tussen LCL en FCL?
        </AccordionTrigger>
        <AccordionContent className="pb-4 text-[14px] leading-relaxed text-[#6d7788]">
          LCL (Less than Container Load) is een gedeelde container — je betaalt alleen voor je
          eigen volume. FCL is een volledige container voor jou alleen. Minder dan 15 CBM? Dan
          is LCL meestal het voordeligst.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="incoterm" className="border rounded-xl bg-white px-4">
        <AccordionTrigger className="text-left text-[15px] font-semibold text-[#12233d]">
          Welke incoterm moet ik kiezen?
        </AccordionTrigger>
        <AccordionContent className="pb-4 text-[14px] leading-relaxed text-[#6d7788]">
          Dit lichten we uit in het formulier en in de kennisbank. Meestal is EXW de veiligste
          keuze voor beginners.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="documenten" className="border rounded-xl bg-white px-4">
        <AccordionTrigger className="text-left text-[15px] font-semibold text-[#12233d]">
          Wat als ik mijn documenten nog niet heb?
        </AccordionTrigger>
        <AccordionContent className="pb-4 text-[14px] leading-relaxed text-[#6d7788]">
          Je kunt de boeking tussentijds opslaan en later afronden — je verliest niets.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </section>
  )
}
