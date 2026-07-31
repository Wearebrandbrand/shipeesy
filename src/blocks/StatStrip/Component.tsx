import React from 'react'

import type { StatStripBlock as StatStripProps } from '@/payload-types'

export const StatStrip: React.FC<StatStripProps> = (props) => {
  return (
    <section className="border-y border-[#eceae3] bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-10 py-6">
        {props.stats.map(stat => (
          <Stat key={stat.label} label={stat.label} value={stat.value} />
        ))}
        {/*<Stat label="zendingen geregeld" value="12.000+" />
        <Stat label="klantbeoordeling" value="4,8/5" />
        <Stat label="bestemmingshavens" value="50+" />
        <Stat label="tot contact expediteur" value="1 werkdag" />*/}
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-[24px] font-extrabold text-[#12233d]">{value}</div>
      <div className="text-[13px] text-[#6d7788]">{label}</div>
    </div>
  )
}
