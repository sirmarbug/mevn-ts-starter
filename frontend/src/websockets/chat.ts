import { io } from 'socket.io-client'
import { useChatStore } from '@/stores/chat'
import { info } from '@/utils/logger'

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
    info('connected', socket.id)
  })

  socket.on('disconnect', () => {
    info('disconnected', socket.id)
  })

  socket.on('message', (msg: string) => {
    info('[WS - Received - message]', msg)
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
  info('[WS - Send - message]', msg)
  socket.emit('message', msg)
}
