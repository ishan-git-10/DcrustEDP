import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
const port = process.env.PORT || 5500;

connectDB(); //Connect to MongoDB\

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/users", userRoutes);
app.listen(port, () => {
  console.log("Server active");
});
