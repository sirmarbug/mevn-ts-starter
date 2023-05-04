import http from 'http'
import app from './src/app'
import {initWebSocket} from "./src/websocket";
import {chatInit} from "./src/websocket/chat";

const port = process.env.PORT || '3000'

const server = http.createServer(app)

initWebSocket(server)
chatInit()

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
