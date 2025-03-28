const ws = require("ws");
const server = new ws.WebSocketServer({
  port: 3000,
});

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(message);
    socket.send(`${message}`);
  });
});
