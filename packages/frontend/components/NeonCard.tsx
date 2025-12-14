import React from 'react'

type Props = {title?: string; children?: React.ReactNode}

export default function NeonCard({title, children}: Props) {
  return (
    <div className="bg-white/60 backdrop-blur rounded-xl p-4 shadow-lg">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  )
}
