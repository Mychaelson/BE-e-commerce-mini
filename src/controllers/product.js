const { Product } = require("../lib/sequelize");

const productControllers = {
  getAllProducts: async (req, res) => {
    try {
      const getProducts = await Product.findAll();

      return res.status(201).json({
        message: "get all product",
        result: getProducts,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
  addNewProducts: async (req, res) => {
    try {
      const newProduct = await Product.create({
        ...req.body,
      });


      return res.status(201).json({
        message: "added new product",
        result: newProduct,
      });
    } catch (err) {
    //   console.log(err);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
};

module.exports = productControllers;
