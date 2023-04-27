import {addActiveUser, io, removeActiveUser} from './index'
import {Socket} from "socket.io";
import {SocketWithUser} from "../types";

export const chatInit = () => {
  if (!io) {
    return
  }

  const chatHub = io.of('/')

  chatHub.on('connection', (socket: Socket) => {
    addActiveUser(socket as SocketWithUser)
    socket.on('disconnect', () => { disconnectListener(socket) });
    socket.on('message', messageListener)
  })
}

const disconnectListener = (socket: Socket) => {
  console.log('A user disconnected');
  removeActiveUser((socket as SocketWithUser).user.userId)
}

const messageListener = (message: string) => {
  console.log('[WS - Receive]', message)
  if (io) {
    io.emit('message', message)
  }
}
