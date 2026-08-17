// app/shipment/page.tsx
"use client";

import { useState } from "react";
import { cn } from "@/utilities/ui";
import {
  Button,
} from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Input,
} from "@/components/ui/input";
import {
  Label,
} from "@/components/ui/label";
import {
  Switch,
} from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { BoxType, calcBoxCbm, formatCbm } from "@/utilities/calcCBM";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldTitle } from "@/components/ui/field";

type FreightType = "sea" | "air" | "rail";
type Incoterm = "FOB" | "EXW";
type ContainerType = "LCL" | "FCL";
type VolumeMode = "known" | "boxes";

export default function ShipmentPage() {
  const [freightType, setFreightType] = useState<FreightType>("sea");

  const [incoterm, setIncoterm] = useState<Incoterm>("FOB");

  const [containerType, setContainerType] = useState<ContainerType>("LCL");

  const [fromPort, setFromPort] = useState("");
  const [toPort, setToPort] = useState("");

  const [volumeMode, setVolumeMode] = useState<VolumeMode>("known");
  const [cbm, setCbm] = useState("");

  const [isDangerous, setIsDangerous] = useState<"yes" | "no" | "unknown">("no");
  const [stackable, setStackable] = useState<"yes" | "no" | "unknown">("yes");
  const [palletized, setPalletized] = useState<"yes" | "no" | "unknown">("no");

  const [insured, setInsured] = useState(true);
  const [value, setValue] = useState("");

  const showContainerType = freightType === "sea";

  return (
    <>
      {/* Stepper */}
      <section className="mx-auto max-w-4xl flex flex-wrap items-center gap-4 text-sm bg-white p-10">
        <div className="flex items-center gap-2">
          <StepCircle active>1</StepCircle>
          <span>Zending opgeven</span>
        </div>
        <DividerDot />
        <div className="flex items-center gap-2 text-muted-foreground">
          <StepCircle>2</StepCircle>
          <span>Kies een afvaart</span>
        </div>
        <DividerDot />
        <div className="flex items-center gap-2 text-muted-foreground">
          <StepCircle>3</StepCircle>
          <span>Boeking afronden</span>
        </div>
      </section>

      <div className="min-h-screen bg-muted">
        <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8">
          {/* Main card */}
          <h1 className="font-extrabold text-3xl">Wat wil je verschepen?</h1>
          <p className="text-muted-foreground">Vul je zending in — we rekenen mee en leggen elke term uit.</p>
          <div className="space-y-10">
              {/* 1. Type zending */}
              <section className="space-y-3">
                <h2 className="text-lg font-semibold">1 · Type zending</h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  <ChoiceButton
                    label="Zeevracht"
                    description="Voordelig, grotere zendingen"
                    icon="⚓"
                    active={freightType === "sea"}
                    onClick={() => setFreightType("sea")}
                  />
                  <ChoiceButton
                    label="Luchtvracht"
                    description="Snel, urgente zendingen"
                    icon="✈"
                    active={freightType === "air"}
                    onClick={() => setFreightType("air")}
                  />
                  <ChoiceButton
                    label="Treinvracht"
                    description="Balans prijs en tijd"
                    icon="🚆"
                    active={freightType === "rail"}
                    onClick={() => setFreightType("rail")}
                  />
                </div>
              </section>

              {/* 2. Incoterm */}
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">2 · Incoterm</h2>
                  <Tooltip>
                    <TooltipTrigger className="rounded-full bg-primary text-primary-foreground size-6">
                      ?
                    </TooltipTrigger>
                    <TooltipContent>
                      <div>
                        De incoterm bepaalt waar jouw verantwoordelijkheid begint en waar die van je leverancier stopt — en dus wat er in de prijs zit.
                        <br />
                        <br />
                        <b>EXW</b> — de goederen staan nog bij je leverancier; wij regelen het ophalen, exportdocumenten en alles daarna.
                        <br />
                        <b>FOB</b> — je leverancier levert af in de haven van vertrek en regelt de export; wij nemen het vanaf daar over.
                        <br />
                        <br />
                        Twijfel je? Je leverancier heeft dit vaak al op de pro-forma factuur gezet.
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <ChoiceButton
                    label="FOB"
                    description="Van haven naar afleveradres"
                    active={incoterm === "FOB"}
                    onClick={() => setIncoterm("FOB")}
                  />
                  <ChoiceButton
                    label="EXW"
                    description="Van verzendadres naar afleveradres"
                    active={incoterm === "EXW"}
                    onClick={() => setIncoterm("EXW")}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Weet je het niet zeker? Kies <span className="font-semibold">EXW</span> als de
                  goederen nog bij je leverancier liggen.
                </p>
              </section>

              {/* 3. Containertype (only sea) */}
              {showContainerType && (
                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">3 · Containertype</h2>
                    <Tooltip>
                      <TooltipTrigger className="rounded-full bg-primary text-primary-foreground size-6">
                        ?
                      </TooltipTrigger>
                      <TooltipContent>
                        <div>
                          <b>LCL (Less than Container Load)</b> — je deelt een container met andere verladers en betaalt alleen voor je eigen volume. Goedkoper bij kleine zendingen, maar wel extra handling bij het samenvoegen en splitsen.
                          <br />
                          <br />
                          <b>FCL (Full Container Load)</b> — je huurt een hele container. Vanaf ongeveer 15 CBM is dat meestal voordeliger, en je lading wordt onderweg niet omgepakt.
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <ChoiceButton
                      label="LCL"
                      description="Gedeelde container"
                      active={containerType === "LCL"}
                      onClick={() => setContainerType("LCL")}
                    />
                    <ChoiceButton
                      label="FCL"
                      description="Volledige container"
                      active={containerType === "FCL"}
                      onClick={() => setContainerType("FCL")}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Heb je minder dan 15 CBM? Kies dan <span className="font-semibold">LCL</span>.
                  </p>
                </section>
              )}

              {/* 4. Traject */}
              <section className="space-y-3">
                <h2 className="text-lg font-semibold">4 · Traject</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <Label>Vanuit haven</Label>
                    <PortSelect value={fromPort} onChange={setFromPort} placeholder="Kies haven" />
                  </div>
                  <div className="space-y-1">
                    <Label>Naar haven</Label>
                    <PortSelect value={toPort} onChange={setToPort} placeholder="Kies haven" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Typ om te zoeken — de lijst vult automatisch aan (A–Z). Alleen havens die onze
                  expediteurs bedienen zijn kiesbaar.
                </p>
              </section>

              {/* 5. Hoeveel volume? */}
              <VolumeSection
                volumeMode={volumeMode}
                setVolumeMode={setVolumeMode}
                cbm={cbm}
                setCbm={setCbm}
              />

              {/* 6. Eigenschappen van je lading */}
              <section className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold">6 · Eigenschappen van je lading?</h2>
                  <p className="text-sm text-muted-foreground">
                    De expediteur heeft dit nodig om de juiste ruimte en behandeling te regelen.
                  </p>
                </div>

                <FieldGroup>
                  {/* DG */}
                  <FieldLabel htmlFor="dg-yes">
                    <Field orientation="horizontal" className="bg-white rounded-lg">
                      <FieldContent>
                        <FieldTitle className="text-sm font-medium">Gevaarlijke goederen (DG)?</FieldTitle>
                        <FieldDescription>
                          Bijv. accu&apos;s, spuitbussen, verf, batterijen, chemicaliën, parfum of
                          magneten.
                        </FieldDescription>
                        <p className="text-xs text-muted-foreground bg-blue-50 p-2 border-l-4 border-blue-200 rounded-r-lg">
                          <b>Weet je het niet zeker? Vraag het je leverancier.</b> {' '}
                          Zij hebben een MSDS (veiligheidsblad) en weten of je goederen als DG geclassificeerd zijn. Bij DG vragen we in stap 3 een <b>Dangerous Goods-formulier</b> op en zoeken we alleen afvaarten van expediteurs met een DG-certificering.
                        </p>
                      </FieldContent>
                      <Switch
                        size="lg"
                        id="id-yes"
                        checked={isDangerous === "yes"}
                        onCheckedChange={(v) => setIsDangerous(v ? "yes" : "no")}
                      />
                    </Field>
                  </FieldLabel>

                  {/* Stapelbaar */}
                  <FieldLabel htmlFor="stackable">
                    <Field orientation="horizontal" className="bg-white rounded-lg">
                      <FieldContent>
                        <FieldTitle className="text-sm font-medium">Zijn de dozen stapelbaar?</FieldTitle>
                        <FieldDescription>
                          Niet-stapelbare lading neemt meer ruimte in en kan de prijs beïnvloeden.
                        </FieldDescription>
                        <p className="text-xs text-muted-foreground bg-blue-50 p-2 border-l-4 border-blue-200 rounded-r-lg">
                          Weet je het nog niet zeker? Kies je best passende inschatting.
                          <b>
                            Bij niet-stapelbare lading kan de prijs nog wijzigen
                          </b>{" "}
                          — de expediteur bepaalt de definitieve ruimte aan de hand van je paklijst en
                          bevestigt het bedrag daarna.
                        </p>
                      </FieldContent>
                      <Switch
                        size="lg"
                        id="stackable"
                        checked={stackable === "yes"}
                        onCheckedChange={(v) => setStackable(v ? "yes" : "no")}
                      />
                    </Field>
                  </FieldLabel>

                  {/* Gepaletiseerd */}
                  <FieldLabel htmlFor="palletized">
                    <Field orientation="horizontal" className="bg-white rounded-lg">
                      <FieldContent>
                        <FieldTitle className="text-sm font-medium">Is de lading gepaletiseerd?</FieldTitle>
                        <FieldDescription>
                          Op pallets betekent minder handling en een kleiner risico op schade.
                        </FieldDescription>
                      </FieldContent>
                      <Switch
                        size="lg"
                        id="palletized"
                        checked={palletized === "yes"}
                        onCheckedChange={(v) => setPalletized(v ? "yes" : "no")}
                      />
                    </Field>
                  </FieldLabel>
                </FieldGroup>
              </section>

              {/* 7. Waarde en verzekering */}
              <section className="space-y-3">
              <h2 className="text-lg font-semibold">7 · Waarde en verzekering</h2>
                <Card>
                  <CardContent className="flex items-center gap-4">
                    <Switch
                      id="insured"
                      checked={insured}
                      onCheckedChange={(v) => setInsured(!!v)}
                      size="lg"
                    />
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="insured">Ja, verzeker mijn zending</Label>
                      <p className="text-xs text-muted-foreground">
                        Dekking op basis van de opgegeven waarde.
                      </p>
                    </div>
                    <div className="flex flex-col space-y-1 ml-auto w-1/3">
                      <Label htmlFor="value">Waarde (€)</Label>
                      <Input
                        id="value"
                        type="number"
                        min={0}
                        step="0.01"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Bijv. 25000"
                      />
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* CTA */}
              <section className="flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-sm">
                <Button type="button">
                  Bekijk beschikbare afvaarten →
                </Button>
                <p className="text-xs text-muted-foreground">
                  Vrijblijvend · je gegevens worden onthouden in de volgende stappen
                </p>
              </section>
            </div>
          </main>
        </div>
    </>
  );
}

// Helper components

function StepCircle({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-full border text-xs font-medium",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-muted-foreground/40 text-muted-foreground"
      )}
    >
      {children}
    </div>
  );
}

function DividerDot() {
  return <div className="h-px w-20 flex-1 rounded bg-border" />;
}

function ChoiceButton({
  label,
  description,
  icon,
  active,
  onClick,
}: {
  label: string;
  description?: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-full flex-col items-start gap-1 rounded-md border p-3 text-left text-sm transition-colors",
        active
          ? "border-primary bg-primary/5 shadow shadow-primary/20"
          : "border-border hover:border-primary/60 hover:bg-accent"
      )}
    >
      {icon && (
        <span className={cn(
          "text-lg size-10 flex items-center justify-center rounded-xl transition-colors",
          active ? "bg-blue-200" : "bg-slate-200"
        )}>
          {icon}
        </span>
      )}
      <span className="font-medium">{label}</span>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </button>
  );
}

function PortSelect({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  // Dummy data; vervang door echte havens/autocomplete
  const ports = ["Rotterdam", "Antwerpen", "Hamburg", "Shanghai", "Shenzhen"];

  return (
    <Combobox items={ports}>
      <ComboboxInput placeholder="Selecteer een haven" className="bg-white" size={20} />
      <ComboboxContent>
        <ComboboxEmpty>Geen havens gevonden.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

function VolumeSection({
  className,
  volumeMode,
  setVolumeMode,
  cbm,
  setCbm,
}: {
  className?: string;
  volumeMode: VolumeMode;
  setVolumeMode: (mode: VolumeMode) => void;
  cbm: string;
  setCbm: (cbm: string) => void;
}) {
  const [boxes, setBoxes] = useState<BoxType[]>([
    {
      id: crypto.randomUUID(),
      label: "Doostype 1",
      quantity: "",
      length: "",
      width: "",
      height: "",
    },
    {
      id: crypto.randomUUID(),
      label: "Doostype 2",
      quantity: "",
      length: "",
      width: "",
      height: "",
    },
  ])

  const handleBoxChange = (
    id: string,
    field: keyof Omit<BoxType, "id" | "label">,
    value: string
  ) => {
    setBoxes((prev) =>
      prev.map((box) => {
        if (box.id !== id) return box
        const numeric = value === "" ? "" : Number(value.replace(",", "."))
        return { ...box, [field]: isNaN(Number(numeric)) ? box[field] : numeric }
      })
    )
  }

  const handleRemoveBox = (id: string) => {
    setBoxes((prev) => prev.filter((b) => b.id !== id))
  }

  const handleAddBox = () => {
    const index = boxes.length + 1
    setBoxes((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        label: `Doostype ${index}`,
        quantity: "",
        length: "",
        width: "",
        height: "",
      },
    ])
  }

  const totalCbmFromBoxes = boxes.reduce(
    (acc, box) => acc + calcBoxCbm(box),
    0
  )

  const activeTotalCbm =
    volumeMode === "known"
      ? cbm === ""
        ? 0
        : Number(cbm.replace(",", "."))
      : totalCbmFromBoxes

  return (
    <section className={cn("space-y-4", className)}>
      <div className="flex items-baseline gap-3">
        <div>
          <h2 className="text-lg font-semibold">5 · Hoeveel volume?</h2>
          <p className="text-sm text-muted-foreground">
            We hebben alleen het totale volume (CBM) nodig. Weet je dat al? Vul
            het direct in.
          </p>
        </div>
      </div>

      <Tabs
        value={volumeMode}
        onValueChange={(v) => setVolumeMode(v as "known" | "boxes")}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="known"
            className="text-xs sm:text-sm"
          >
            Ik weet mijn CBM
          </TabsTrigger>
          <TabsTrigger
            value="boxes"
            className="text-xs sm:text-sm"
          >
            Reken uit met dozen
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="known"
          className="mt-4"
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">
                Vul je totale volume in
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="flex-1">
                <Label htmlFor="known-cbm">Totaal volume</Label>
                <div className="mt-1 flex items-center gap-2">
                  <Input
                    id="known-cbm"
                    inputMode="decimal"
                    placeholder="Bijv. 12,5"
                    value={cbm}
                    onChange={(e) => setCbm(e.target.value)}
                    className="max-w-[200px]"
                  />
                  <span className="text-sm text-muted-foreground">CBM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="boxes"
          className="mt-4 space-y-4"
        >
          <div className="grid gap-4">
            {boxes.map((box, index) => {
              const boxCbm = calcBoxCbm(box)
              return (
                <Card
                  key={box.id}
                  className="relative"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-sm font-semibold">
                          {`Doostype ${index + 1}`}
                        </CardTitle>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {formatCbm(boxCbm)} CBM
                        </p>
                      </div>
                      {index > 0 && (
                        <Button
                          size="icon"
                          variant="ghost"
                          type="button"
                          onClick={() => handleRemoveBox(box.id)}
                          className="h-7 w-7 text-muted-foreground hover:text-destructive"
                          aria-label="Verwijderen"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label htmlFor={`qty-${box.id}`}>Aantal</Label>
                      <Input
                        id={`qty-${box.id}`}
                        inputMode="numeric"
                        placeholder="Bijv. 6"
                        value={box.quantity === "" ? "" : box.quantity}
                        onChange={(e) =>
                          handleBoxChange(box.id, "quantity", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label htmlFor={`l-${box.id}`}>L (cm)</Label>
                        <Input
                          id={`l-${box.id}`}
                          inputMode="decimal"
                          placeholder="60"
                          value={box.length === "" ? "" : box.length}
                          onChange={(e) =>
                            handleBoxChange(box.id, "length", e.target.value)
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`w-${box.id}`}>B (cm)</Label>
                        <Input
                          id={`w-${box.id}`}
                          inputMode="decimal"
                          placeholder="40"
                          value={box.width === "" ? "" : box.width}
                          onChange={(e) =>
                            handleBoxChange(box.id, "width", e.target.value)
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`h-${box.id}`}>H (cm)</Label>
                        <Input
                          id={`h-${box.id}`}
                          inputMode="decimal"
                          placeholder="40"
                          value={box.height === "" ? "" : box.height}
                          onChange={(e) =>
                            handleBoxChange(box.id, "height", e.target.value)
                          }
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleAddBox}
          >
            + Voeg een ander type doos toe
          </Button>

          <Separator className="my-2" />

          <Card className="flex flex-wrap items-center justify-between gap-2 p-4 bg-blue-100 border-blue-400/20 text-blue-700">
            <p className="text-sm">
              Live berekend volume · {boxes.length} doostypes
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight">
                {formatCbm(totalCbmFromBoxes)}
              </span>
              <span className="text-sm">CBM</span>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
