import { Card } from "@/components/ui/card"

export const StepsBlock: React.FC = (props) => {
  return (
    <section id="hoe-het-werkt" className="mx-auto max-w-6xl px-10 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d7788]">
        Zo werkt het
      </p>
      <h2 className="mt-3 mb-2 text-[34px] font-extrabold tracking-[-0.02em] text-[#12233d]">
        In 3 stappen geboekt
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-[16px] text-[#6d7788]">
        Elke stap voelt behapbaar. Je weet altijd waar je bent en wat er daarna komt.
      </p>

      <div className="grid gap-5 text-left md:grid-cols-3">
        <StepCard
          step={1}
          title="Vul je zending in"
          description="Type, traject en afmetingen. We rekenen het volume live uit en leggen elke term uit."
        />
        <StepCard
          step={2}
          title="Kies een afvaart"
          description="Vergelijk beschikbare afvaarten op prijs, snelheid of rederij. Wij markeren de beste keuze."
        />
        <StepCard
          step={3}
          title="Rond je boeking af"
          description="Controleer de vooringevulde gegevens, upload je documenten en verstuur. Klaar."
        />
      </div>
    </section>
  )
}

function StepCard({
  step,
  title,
  description,
}: {
  step: number
  title: string
  description: string
}) {
  return (
    <Card className="p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2f5fd0]/8 text-[14px] font-semibold text-[#2f5fd0]">
        {step}
      </div>
      <h3 className="mt-4 mb-2 text-[18px] font-bold text-[#12233d]">{title}</h3>
      <p className="text-[14px] leading-relaxed text-[#6d7788]">{description}</p>
    </Card>
  )
}
