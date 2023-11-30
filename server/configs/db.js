import mongoose from "mongoose";
import bcrypt from "bcryptjs";

async function connectDB() {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;