import mongoose from "mongoose";
import { ENV } from "../config/env.js";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(ENV.mongo_url);
    console.log(`Mongodb Connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error in connect database : ${error.message} `);
    process.exit(1);
  }
};
