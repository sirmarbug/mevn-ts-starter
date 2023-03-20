import { io } from 'socket.io-client'
import { useChatStore } from '@/stores/chat'

const socket = io(import.meta.env.VITE_WS_URL).disconnect()

export const connectChat = () => {
  socket.connect()
}

export const disconnectChat = () => {
  socket.disconnect()
}

socket.on('connect', () => {
  console.log('connected', socket.id)
})

socket.on('disconnect', () => {
  console.log('disconnected', socket.id)
})

socket.on('message', (msg: string) => {
  console.log('[WS - Received - message]', msg)
  const chatStore = useChatStore()
  const { addMessage } = chatStore
  addMessage(msg)
})

export const sendMessageChat = (msg: string) => {
  console.log('[WS - Send - message]', msg)
  socket.emit('message', msg)
}
