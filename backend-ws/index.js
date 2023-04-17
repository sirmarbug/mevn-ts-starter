const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('message', 'Connection')
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        socket.emit('message', msg)
    });
});

app.use(cors())

app.get('/users', (req, res) => {
    console.log('REQ - users')
    res.status(400).send()
})

server.listen(3000, () => {
    console.log('listening on *:3000');
});
