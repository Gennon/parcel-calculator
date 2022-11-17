import mongoose from "mongoose";
import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import server from "./server";

const port = process.env.PORT || 5555;
const databaseURI =
  process.env.DATABASE_URI || "mongodb://localhost:27017/parcel-calculator";

mongoose.connect(databaseURI);
mongoose.connection
  .on("error", console.error.bind(console, "connection error:"))
  .on("connected", console.log.bind(console, "connected to Database:"));

server.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});