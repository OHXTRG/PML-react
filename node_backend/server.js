const dotenv = require("dotenv");
const path = require("path");
const environment = process.env.NODE_ENV;
console.log(`using environment ${environment}`);
if (environment) {
  const envPath = path.resolve(`.env.${environment}`);
  console.log("custome path:", envPath);
  dotenv.config({
    path: envPath,
  });
} else {
  dotenv.config();
}
const { connectMongoDb } = require("./db/mongoDb");
const app = require("./app");
const initSocket = require("./socket/socket");
const http = require("http");

const server = http.createServer(app);

(async () => {
  try {
    await connectMongoDb(process.env.DB_URL);
    console.log(`Connected with db mongodb`);
    initSocket(server);
    server.listen(process.env.PORT, () =>
      console.log(`server is listening to port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error, "while connecting db ");
  }
})();
