const app = require("./app");
const http = require("http");

const server = http.createServer(app);
server.listen(app.get("port"));

// handle http server error
server.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const port = app.get("port");
  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// console.log("global config:" + JSON.stringify(config));

// Handle http listening
server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log(`Listening on ${bind}`);
});
