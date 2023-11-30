import express from "express";
const app = express();
const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/auth", require("./routes/auth"));
app.listen(port, () => {
  console.log("Server active");
});
