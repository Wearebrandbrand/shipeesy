'use client'
import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const HighImpactHero: React.FC<Page['hero']> = ({ caption, richText, links }) => {
  return (
    <section className="border-b border-[#eceae3] bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          {caption && (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d7788]">
              {caption}
            </p>
          )}

          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

          {/*<h1 className="mt-4 mb-4 max-w-xl text-[46px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#12233d]">
            Boek je eerste internationale zending. Gewoon zelf.
          </h1>
          <p className="mb-6 max-w-md text-[17px] leading-relaxed text-[#46505f]">
            Nog nooit zelf verscheept? Wij begeleiden je stap voor stap — zonder jargon — tot
            alles klaarstaat voor de expediteur.
          </p>*/}


          <div className="flex flex-wrap items-center gap-3">
            {/*<Button size="lg" className="rounded-full bg-[#2f5fd0] text-white">
              Start je boeking →
            </Button>*/}
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex gap-4">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-5 text-[13px] font-medium text-[#6d7788]">
            <CheckPill>Geen ervaring nodig</CheckPill>
            <CheckPill>Uitleg bij elke stap</CheckPill>
            <CheckPill>Vrijblijvende prijs</CheckPill>
          </div>
        </div>

        {/* Route card */}
        <Card className="route relative flex min-h-[320px] flex-col justify-between rounded-2xl border-none bg-gradient-to-br from-[#183560] to-[#28528f] p-7 shadow-xl">
          <div className="flex items-center justify-between">
            <Badge
              variant="outline"
              className="rounded-full border-white/20 bg-white/10 px-3 py-1 text-[12px] font-medium text-white"
            >
              Zeevracht · LCL
            </Badge>
            <span className="text-[13px] font-semibold text-[#9db4d8]">≈ 32 dagen</span>
          </div>

          <div className="relative mt-10 flex items-center justify-between px-2">
            <div className="text-center relative">
              <div className="h-3 w-3 rounded-full bg-white absolute left-0" />
              <div className="mt-6 text-[13px] font-semibold text-white">Rotterdam</div>
              <div className="text-[11px] font-medium text-[#8ba0c4]">NL</div>
            </div>

            <div className="pointer-events-none absolute left-6 right-6 top-1 h-[2px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.45),rgba(255,255,255,.45)_7px,transparent_7px,transparent_14px)]" />

            <div className="absolute left-1/2 top-[-12px] flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-xl bg-[#2f5fd0] shadow-[0_8px_20px_rgba(47,95,208,.5)]">
              <div className="h-3 w-3 rounded-[2px] bg-white rotate-45" />
            </div>

            <div className="text-center relative">
              <div className="h-3 w-3 rounded-full bg-white absolute right-0" />
              <div className="mt-6 text-[13px] font-semibold text-white">Shanghai</div>
              <div className="text-[11px] font-medium text-[#8ba0c4]">CN</div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-3">
            <div>
              <div className="text-[11px] font-medium text-[#8ba0c4]">Indicatieve prijs</div>
              <div className="text-[24px] font-extrabold tracking-[-0.02em] text-white">
                € 1.240
              </div>
            </div>
            <span className="text-[12px] font-medium text-[#8ba0c4]">excl. btw</span>
          </div>
        </Card>
      </div>
    </section>
  )
}

function CheckPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2">
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#e2f4e7] text-[11px] text-[#1c7a3a]">
        ✓
      </span>
      {children}
    </span>
  )
}
