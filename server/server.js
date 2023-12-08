import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./configs/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
// import { fileURLToPath } from 'url';
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import fileRoutes from "./routes/FilesRoutes.js";

const port = process.env.PORT || 5500;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

connectDB(); //Connect to MongoDB

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.use("/api/admin", adminRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/upload", uploadRoutes);
  app.use("/api/files", fileRoutes);
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname + "/client", "build", "index.html"))
  );
} else {
  const __dirname = path.resolve();
  app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/files", fileRoutes);

app.listen(port, () => {
  console.log("Server active");
});
