// server.js

const ws = require('ws')

const wss = new ws.Server({ port: 8080 })
wss.on('connection',function connection(ws, req) {
  const ip = req.socket.remoteAddress;
  console.log(ip)
});
wss.on('connection', Server => {

  ws.on('message', message => {
    console.log(Server);
    console.log(`Received message => ${message}`)
  })
  ws.send('Hello! Message From Server!!')
});
