const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const PORT = process.env.PORT || 5000;

const router = require("./router");
const { EROFS } = require("constants");
const { errorMonitor } = require("stream");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connect", (socket) => {
  console.log("successfully connected!!");

  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) {
      return callback(error);
    }
    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `Welcome ${user.name} to ${user.room}`,
    });

    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has joined!`,
    });
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });

  socket.on("disconnect", () => {
    console.log(`user left!!`);
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`server has started on port - ${PORT}`);
});