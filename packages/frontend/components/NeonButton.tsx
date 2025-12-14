import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export default function NeonButton({children, ...props}: Props) {
  return (
    <button {...props} className={`neon-button ${props.className || ''}`}>
      {children}
    </button>
  )
}
