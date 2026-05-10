import mongoose from "mongoose";
import { config } from "./config.js";

async function connectToDB() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("DB Connected Successfully...!!!");
  } catch (error) {
    console.log("Failed to connect with DB : ", error);
  }
}

export default connectToDB;
