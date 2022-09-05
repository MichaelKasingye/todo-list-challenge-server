import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export function DataBaseConnect() {
  const mongoAtlas = process.env.MONGO_URI;
  mongoose
    .connect(mongoAtlas, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("👌 Connected to Mongodb..."))
    .catch((err) => console.log("🚨 failed Server to connect.." + err));
}
