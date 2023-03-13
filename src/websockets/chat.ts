import { io } from 'socket.io-client'

const socket = io(import.meta.env.VITE_WS_URL)

export const connect = () => {
  socket.connect()
}

export const disconnect = () => {
  socket.disconnect()
}

socket.on('connect', () => {
  console.log('connected', socket.id)
})

socket.on('disconnect', () => {
  console.log('disconnected', socket.id)
})

socket.on('message', (data: string) => {
  console.log('received - message', data)
})

export const sendMessage = (msg: string) => {
  socket.emit('message', msg)
}