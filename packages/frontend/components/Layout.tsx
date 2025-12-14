import React from 'react'
import NeonNavbar from './NeonNavbar'
import NeonSidebar from './NeonSidebar'

type Props = {
  children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <NeonNavbar />
      <div className="flex flex-1">
        <NeonSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
