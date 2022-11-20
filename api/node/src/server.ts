import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Configuration from "./models/Configuration";


const server = express();

// Body Parser middleware
server.use(bodyParser.json());
// CORS middleware
server.use(cors({ origin: true }));

server.get("/", (req, res) => {
  res.send("Hello World!!");
});

server.get("/configuration", async (req, res) => {
  const conf = await Configuration.findOne({}).exec();
  res.send(conf);
});


export default server;