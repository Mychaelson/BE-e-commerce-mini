const { Product } = require("../lib/sequelize");

const productControllers = {
  createProduct: async (req, res) => {
    try {
        const { product_name, price, description, image_url, stock } = req.body

        const newProduct = await Product.create({
            image_url,
            stock,
            product_name,
            price,
            description
        })

        return res.status(201).json({
            message: "Product created",
            result: newProduct
        })
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server error",
      });
    }
  },
  getProductById: async (req,res) => {
      try {
          const { id } = req.params

          const findProductById = await Product.findByPk(id)

          return res.status(200).json({
              message: "Fetch product by id",
              result: findProductById
          })
      } catch (err) {
          console.log(err)
          return res.status(500).json({
              message: "Failed to fetch product by id"
          })
      }
  }
};

module.exports = productControllers;
