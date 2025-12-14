import React from 'react'
import Layout from '../components/Layout'
import NeonCard from '../components/NeonCard'
import NeonButton from '../components/NeonButton'

export default function Login() {
  return (
    <Layout>
      <div className="max-w-md mx-auto py-12">
        <NeonCard title="Sign In">
          <form className="flex flex-col gap-3">
            <input className="p-2 rounded border" placeholder="Email" />
            <input className="p-2 rounded border" placeholder="Password" type="password" />
            <NeonButton type="submit">Sign In</NeonButton>
          </form>
        </NeonCard>
      </div>
    </Layout>
  )
}
