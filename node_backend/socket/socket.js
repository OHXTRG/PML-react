const { Server } = require("socket.io");

function initSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: "true",
      methods: ["GET", "POST"],
    },
  });

  const userSockets = new Map();

  io.on("connection", (socket) => {
    console.log(`new socket connected with socket id ${socket.id}`);
    // testing
    socket.on("test", (data) => {
      console.log("working with message " + data);
      io.emit("test", "working from server");
    });

    socket.on("register", (user_id) => {
      userSockets.set(user_id, socket);
      console.log(`user with userId ${user_id} has been registered ..`);
    });

    socket.on("disconnect", () =>
      console.log(`socket disconnected of id ${socket.id} ... ${userSockets}`)
    );
  });
}

module.exports = initSocket;
