import { Card } from "@/components/ui/card"

export const FeatureBandBlock: React.FC = (props) => {
  return (
    <section className="bg-[#f3f1ec]">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-11 px-10 py-14 md:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d7788]">
          Geen jargon
        </p>
        <h2 className="mt-3 mb-3 text-[30px] font-extrabold tracking-[-0.02em] text-[#12233d]">
          Elke term wordt uitgelegd
        </h2>
        <p className="mb-6 text-[15px] leading-relaxed text-[#6d7788]">
          LCL, FOB, HS-code? Bij elk veld staat een korte, begrijpelijke uitleg. Twijfel je? Wij
          helpen je de juiste keuze te maken.
        </p>

        <div className="flex flex-col gap-3">
          <FeaturePoint title="Proactieve foutmeldingen">
            velden worden meteen gecontroleerd, niet pas bij versturen.
          </FeaturePoint>
          <FeaturePoint title="Tussentijds opslaan">
            mis je een document? Sla op en rond later af.
          </FeaturePoint>
          <FeaturePoint title="Werkt op je telefoon">
            begin op desktop, maak af onderweg.
          </FeaturePoint>
        </div>
      </div>

      <Card className="flex flex-col gap-4 p-6">
        <div className="flex gap-1 text-[15px] text-[#f5bf4f]">★★★★★</div>
        <p className="text-[17px] font-medium leading-relaxed text-[#28344a]">
          &quot;Ik had nog nooit zelf verscheept. Binnen een kwartier stond mijn eerste boeking
          klaar — zonder één keer te hoeven bellen.&quot;
        </p>
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-[#eef1f6]" />
          <div>
            <div className="text-[14px] font-semibold text-[#12233d]">Marloes de Vries</div>
            <div className="text-[12.5px] text-[#6d7788]">Eigenaar, Studio Noord</div>
          </div>
        </div>
      </Card>
    </div>
    </section>
  )
}

function FeaturePoint({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#e2f4e7] text-[11px] text-[#1c7a3a]">
        ✓
      </span>
      <p className="text-[14px] leading-snug text-[#46505f]">
        <span className="font-semibold text-[#12233d]">{title}</span> — {children}
      </p>
    </div>
  )
}
