import { io, Socket } from 'socket.io-client'
import { useChatStore } from '@/stores/chat'
import { error, info } from '@/utils/logger'
import type { WSEvents } from '@/types'

let socket: Socket<WSEvents, WSEvents> | null = null
let chatStore: any = null

export const initChat = () => {
  chatStore = useChatStore()
}

export const connectChat = () => {
  if (socket) {
    return
  }
  socket = io(import.meta.env.VITE_WS_URL, {
    auth: {
      token: localStorage.getItem('token') as string
    }
  }).connect()

  socket.on('connect', () => {
    info('connected', socket?.id)
  })

  socket.on('disconnect', () => {
    info('disconnected', socket?.id)
  })

  socket.on('connect_error', (e) => {
    error('connect_error', e)
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
  if (!socket) {
    return
  }
  info('[WS - Send - message]', msg)
  socket.emit('message', msg)
}
