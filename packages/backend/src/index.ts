import express from 'express'
import cors from 'cors'
import http from 'http'
import {Server} from 'socket.io'
import dotenv from 'dotenv'
import {authRouter} from './routes/auth'
import {setupSocket} from './socket'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)
app.get('/api/me', (req, res) => res.json({runtime: 'ok'}))

const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: {origin: '*'}
})

setupSocket(io)

const port = process.env.PORT || 4000
httpServer.listen(port, () => console.log(`Server listening on ${port}`))
