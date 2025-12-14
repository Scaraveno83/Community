import React from 'react'
import Layout from '../../components/Layout'
import NeonCard from '../../components/NeonCard'

export default function ForumList() {
  const forums = [
    {id: '1', title: 'General Discussion'},
    {id: '2', title: 'Announcements'}
  ]

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-4">Forums</h1>
        <div className="grid gap-4">
          {forums.map((f) => (
            <NeonCard key={f.id} title={f.title}>
              <p>Sample topic in {f.title}</p>
            </NeonCard>
          ))}
        </div>
      </div>
    </Layout>
  )
}
