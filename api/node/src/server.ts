import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


const server = express();

// Body Parser middleware
server.use(bodyParser.json());
// CORS middleware
server.use(cors({ origin: true }));

server.get("/", (req, res) => {
  res.send("Hello World!");
});


export default server;