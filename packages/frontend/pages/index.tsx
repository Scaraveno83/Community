import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import NeonCard from '../components/NeonCard'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto py-12">
          <NeonCard title="Welcome to Neon">
            <p className="mb-4">Starter app with frontend and backend in a monorepo.</p>
            <div className="flex gap-2">
              <Link href="/register" className="neon-button">Get started</Link>
              <Link href="/login" className="btn">Login</Link>
            </div>
          </NeonCard>
        </div>
      </div>
    </Layout>
  )
}
