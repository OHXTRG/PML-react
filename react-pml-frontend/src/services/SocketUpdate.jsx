import React, { useEffect, useState } from "react";
import socket from "./socket";
function SocketUpdate() {
  useEffect(() => {
    console.log("in socket update use effect   ");
    socket.on("connect", () => console.log("socket connected"));
    return () => {
      if (socket.connected) {
        console.log("disconnecting socket");
        socket.disconnect();
      }
    };
  }, []);

  return null;
}

export default SocketUpdate;
