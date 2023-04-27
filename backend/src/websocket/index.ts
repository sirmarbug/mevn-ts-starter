import http from 'http'
import {Server} from 'socket.io'
import {ActiveUser, SocketWithUser} from "../types";
import {verifyTokenOnWebSocket} from "../middlewares/auth";

export let io: Server | null = null

export const initWebSocket = (server: http.Server) => {
  if (io) {
    return
  }

  io = new Server(server, { cors: { origin: '*' } })

  io.use(verifyTokenOnWebSocket)

  console.log('[server] WebSocket init')
}
