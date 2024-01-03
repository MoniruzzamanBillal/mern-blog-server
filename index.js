const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const BlogRouter = require("./Routes/BlogRoute");

const port = process.env.port || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/", BlogRouter);

app.get("/", async (req, res) => {
  res.send({ message: " Blog server is running " });
});

app.listen(port, () => {
  console.log(`listening from port ${port} `);
});
