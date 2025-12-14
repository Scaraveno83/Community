import React from 'react'
import Link from 'next/link'

export default function NeonSidebar() {
  return (
    <aside className="w-64 bg-white/40 p-4 border-r border-white/10">
      <ul className="flex flex-col gap-2">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/forum">Forum</Link></li>
        <li><Link href="/chat">Chat</Link></li>
      </ul>
    </aside>
  )
}
