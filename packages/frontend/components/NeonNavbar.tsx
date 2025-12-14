import React from 'react'
import Link from 'next/link'

export default function NeonNavbar() {
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-neon-100 via-white to-white/40 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-neon-700">Neon</Link>
        <nav className="flex gap-4">
          <Link href="/forum">Forum</Link>
          <Link href="/chat">Chat</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}
