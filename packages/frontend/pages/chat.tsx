import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'
import Layout from '../components/Layout'
import NeonCard from '../components/NeonCard'
import NeonButton from '../components/NeonButton'

const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000')

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    socket.on('connect', () => console.log('connected'))
    socket.on('message', (msg: string) => setMessages((m) => [...m, msg]))
    return () => {
      socket.off('message')
      socket.off('connect')
    }
  }, [])

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <NeonCard title="Chat (Sockets Test)">
          <div className="h-64 overflow-auto border p-2 mb-2">
            {messages.map((m, i) => (
              <div key={i}>{m}</div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              className="p-2 rounded border flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <NeonButton
              onClick={() => {
                socket.emit('message', input)
                setInput('')
              }}
            >
              Send
            </NeonButton>
          </div>
        </NeonCard>
      </div>
    </Layout>
  )
}
