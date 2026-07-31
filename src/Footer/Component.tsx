import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="bg-[#0f1e33] mt-16 pt-11 pb-8">
      <div className="mx-auto max-w-6xl px-10">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="max-w-xs">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[8px] bg-[#2f5fd0]">
                <div className="h-[10px] w-[10px] rounded-[2px] bg-white rotate-45" />
              </div>
              <span className="text-[17px] font-extrabold text-white">Shipeesy</span>
            </div>
            <p className="text-[13px] leading-relaxed text-[#8ba0c4]">
              Zelf internationaal verschepen, zonder gedoe. Gecertificeerde expediteurs,
              transparante prijzen.
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <div className="mb-1 text-[12px] font-bold uppercase tracking-[0.05em] text-white">
                Platform
              </div>
              <FooterLink href="/boeken">Boeken</FooterLink>
              <FooterLink href="/kennisbank">Kennisbank</FooterLink>
              <FooterLink href="/blogs">Blogs</FooterLink>
            </div>
            <div>
              <div className="mb-1 text-[12px] font-bold uppercase tracking-[0.05em] text-white">
                Bedrijf
              </div>
              <FooterLink href="/over-ons">Over ons</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/voor-expediteurs">Expediteurs</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-[#24384f] pt-3 flex justify-between text-[12px] text-[#6f829d]">
          <span>© 2026 Shipeesy B.V. · KvK 87654321</span>
          <span>Veilig betalen · Algemene voorwaarden</span>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="text-[13px] text-[#cdd5e1]">
      <Link href={href}>{children}</Link>
    </div>
  )
}
