import { io } from 'socket.io-client'
import { useChatStore } from '@/stores/chat'

let socket: any = null
let chatStore: any = null

export const initChat = () => {
  chatStore = useChatStore()
}

export const connectChat = () => {
  if (socket) {
    return
  }
  socket = io(import.meta.env.VITE_WS_URL).connect()

  socket.on('connect', () => {
    console.log('connected', socket.id)
  })

  socket.on('disconnect', () => {
    console.log('disconnected', socket.id)
  })

  socket.on('message', (msg: string) => {
    console.log('[WS - Received - message]', msg)
    chatStore.addMessage(msg)
  })
}

export const disconnectChat = () => {
  if (!socket) {
    return
  }
  socket.disconnect()
}

export const sendMessageChat = (msg: string) => {
  console.log('[WS - Send - message]', msg)
  socket.emit('message', msg)
}
