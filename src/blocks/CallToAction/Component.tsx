import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <section className="mb-14 px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-[22px] bg-gradient-to-br from-[#12233d] to-[#22406b] px-8 py-10 md:flex-row">
        <div>
          {richText && (
            <RichText
              invertTextColor
              className="mb-0"
              data={richText}
              enableGutter={false}
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </section>
  )
}
