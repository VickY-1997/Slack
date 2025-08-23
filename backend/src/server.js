import "../instrument.mjs";
import express from "express";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./config/inngest.js";
import chatRoutes from "./routes/chat.route.js";

import * as Sentry from "@sentry/node";

const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.get("/debug-sentry", (req, res) => {
  throw new Error("My first Sentry error!");
});

app.get("/", (req, res) => {
  res.send("Hi");
});

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);

Sentry.setupExpressErrorHandler(app);

const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log(`The server is running on port ${ENV.PORT}`);
      });
    }
  } catch (error) {
    console.log(`Error in starting server : ${error.message}`);
    process.exit(1);
  }
};

startServer();

export default app;
