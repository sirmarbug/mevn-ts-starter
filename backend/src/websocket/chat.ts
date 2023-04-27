import {addActiveUser, io, removeActiveUser, sendBroadcastMessage, sendMessage} from './index'
import {Socket} from "socket.io";
import {SocketWithUser} from "../types";

export const chatInit = () => {
  if (!io) {
    return
  }

  const chatHub = io.of('/')

  chatHub.on('connection', (socket: Socket) => {
    addActiveUser(socket as SocketWithUser)
    // console.log('userid', (socket as SocketWithUser).user.userId)
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
  sendBroadcastMessage('message', message)
  // sendMessage('644a77ac448cb5565c9e0e29', 'message', message)
}
