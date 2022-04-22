const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const { sequelize } = require("./lib/sequelize");
sequelize.sync({ alter: true });

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< Updated upstream
const { productRoutes } = require("./routes");
=======
const {
  productRoutes,
  authRoutes,
  CartRoutes,
  userRoutes,
} = require("./routes");

app.use("/products", productRoutes);
app.use("/user", userRoutes);
app.use("/cart", CartRoutes);
>>>>>>> Stashed changes

app.get("/", (req, res) => {
  res.send("<h1>e-commerce mini</h1>");
});


app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log("Listening in Port", PORT);
});
