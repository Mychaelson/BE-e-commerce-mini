const { Cart, Product } = require("../lib/sequelize");

const cartController = {
  getCartItems: async (req, res) => {
    try {
      const cartItems = await Cart.findAll({
        include: Product,
      });

      if (!cartItems.length) {
        return res.status(400).json({
          message: "No Items Found",
        });
      }

      return res.status(200).json({
        message: "Items in cart",
        result: cartItems,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },
  addCart: async (req, res) => {
    try {
      const { product_id, user_id, quantity = 1 } = req.body;

      const findCart = await Cart.findOne({
        where: {
          product_id,
          user_id,
        },
      });

      if (findCart) {
        await Cart.update(
          {
            quantity: quantity + findCart.dataValues.quantity,
          },
          {
            where: {
              product_id,
              user_id,
            },
          }
        );
      } else {
        await Cart.create({
          product_id,
          user_id,
          quantity,
        });
      }

      return res.status(200).json({
        message: "Added Product to cart",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },
};

module.exports = cartController;
