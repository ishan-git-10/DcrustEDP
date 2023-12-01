import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./configs/db.js";
import connectDB from "./configs/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
const port = process.env.PORT || 5500;

connectDB(); //Connect to MongoDB

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(port, () => {
  console.log("Server active");
});
