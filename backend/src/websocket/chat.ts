import { io } from './index'
import {Socket} from "socket.io";
import {SocketWithUser} from "../types";

export const chatInit = () => {
  if (!io) {
    return
  }

  const chatHub = io.of('/')

  chatHub.on('connection', (socket: Socket) => {
    console.log('connection', socket.id)
    console.log('my - user', (socket as SocketWithUser).user)
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
    socket.on('message', (message: string) => {
      console.log('[WS - Receive]', message)
      if (io) {
        io.emit('message', message)
      }
    })
  })
}
