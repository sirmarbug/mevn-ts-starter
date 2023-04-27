import http from 'http'
import {Server} from 'socket.io'
import {ActiveUser, SocketWithUser} from "../types";
import {verifyTokenOnWebSocket} from "../middlewares/auth";

export let io: Server | null = null

const activeUsers = new Map<string, ActiveUser>()

export const initWebSocket = (server: http.Server) => {
  if (io) {
    return
  }

  io = new Server(server, { cors: { origin: '*' } })

  io.use(verifyTokenOnWebSocket)

  console.log('[server] WebSocket init')
}

export const addActiveUser = (socket: SocketWithUser) => {
  activeUsers.set(socket.user.userId, {
    user: socket.user,
    socketId: socket.id
  })
  console.log('active user:', activeUsers.size)
}

export const getActiveUser = (userId: string): ActiveUser | null => {
  return activeUsers.get(userId) || null
}

export const removeActiveUser = (userId: string) => {
  activeUsers.delete(userId)
  console.log('active user:', activeUsers.size)
}

export const clearActiveUsers = () => {
  activeUsers.clear()
  console.log('active user:', activeUsers.size)
}

export const sendBroadcastMessage = (event: string, message: string) => {
  if(!io) {
    return
  }

  io.emit(event, message)
}
