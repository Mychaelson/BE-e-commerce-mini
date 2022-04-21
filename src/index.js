const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const { sequelize } = require("./lib/sequelize")
sequelize.sync({ alter: true })

const app = express();
app.use(cors())
app.use(express.json())

// app.use("/", (req, res) => {
//   res.send("<h1>e-commerce mini</h1>");
// });

const { userRoutes } = require("./routers")
app.use("/user", userRoutes)

app.listen(PORT, () => {
  console.log("Listening in Port", PORT);
});
