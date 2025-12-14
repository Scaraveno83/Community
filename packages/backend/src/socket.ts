import {Server} from 'socket.io'

export function setupSocket(io: Server) {
  io.on('connection', (socket) => {
    console.log('user connected', socket.id)
    socket.on('message', (message: string) => {
      io.emit('message', message)
    })
    socket.on('disconnect', () => console.log('user disconnected', socket.id))
  })
}
