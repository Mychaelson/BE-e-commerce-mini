const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use("/", (req, res) => {
  res.send("<h1>e-commerce mini</h1>");
});

app.listen(PORT, () => {
  console.log("Listening in Port", PORT);
});
