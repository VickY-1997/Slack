import express from "express";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(ENV.PORT, () => {
  connectDB();
  console.log(`The server is running on port ${ENV.PORT}`);
});
