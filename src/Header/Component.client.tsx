// components/site-header.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/#hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/kennisbank", label: "Kennisbank" },
  { href: "/blogs", label: "Blogs" },
  { href: "/over-ons", label: "Over ons" },
]

export function HeaderClient() {
  const pathname = usePathname()

  return (
    <header className="border-b border-[#eceae3] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-10 py-4">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[#2f5fd0]">
              <div className="h-3 w-3 rounded-[2px] bg-white rotate-45" />
            </div>
            <span className="text-[19px] font-extrabold tracking-[-0.02em] text-[#12233d]">
              Shipeesy
            </span>
          </Link>

          <nav className="hidden gap-7 text-[14px] font-medium text-[#46505f] md:flex">
            {navItems.map((item) => {
              const active =
                pathname === item.href || (item.href === "/#hoe-het-werkt" && pathname === "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "text-[#12233d] font-semibold" : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-[14px] font-medium text-[#2f5fd0] hover:underline">
            Inloggen
          </button>
          <Button size="sm" className="rounded-full bg-[#2f5fd0] text-white px-4">
            Start je boeking
          </Button>
        </div>
      </div>
    </header>
  )
}
