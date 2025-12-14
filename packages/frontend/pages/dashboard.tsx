import React from 'react'
import Layout from '../components/Layout'
import NeonCard from '../components/NeonCard'

export default function Dashboard() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <NeonCard title="Dashboard">
          <p>Your app dashboard. This is a protected page in a real app.</p>
        </NeonCard>
      </div>
    </Layout>
  )
}
