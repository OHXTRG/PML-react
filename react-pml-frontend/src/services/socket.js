import { io } from "socket.io-client";
console.log(process.env.REACT_APP_SERVER_URL, "server url");
let socket = io(process.env.REACT_APP_SERVER_URL, {
  transports: ["websocket"],
  withCredentials: true,
});

export default socket;
