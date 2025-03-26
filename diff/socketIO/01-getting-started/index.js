import express from "express";
import { createServer } from "http";
import * as path from "node:path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;

const io = new Server(server);

app.get("/", (req, res) => {
  const pathToFile = path.join(import.meta.dirname, "index.html");
  res.sendFile(pathToFile);
});

io.on("connection", (socket) => {
  console.log(`a user connected`);
});

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
