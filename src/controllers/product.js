const { json } = require("express/lib/response");
const { Op } = require("sequelize");
const { Product } = require("../lib/sequelize");

const productControllers = {
  getAllProducts: async (req, res) => {
    try {
      const { _limit = 4, _sortBy = "", _sortDir = "", _page = 1 } = req.query;

      delete req.query._sortBy;
      delete req.query._page;
      delete req.query._sortDir;
      delete req.query._limit;

      const getProducts = await Product.findAndCountAll({
        where: {
          ...req.query,
          product_name: {
            [Op.like]: `%${req.query.product_name}%`,
          },
        },
        limit: _limit ? parseInt(_limit) : undefined,
        offset: (_page - 1) * _limit,
        distinct: true,
        order: _sortBy ? [[_sortBy, _sortDir]] : undefined,
      });

      if (!getProducts) {
        return res.status(400),json({
          message: "Product not Found"
        })
      }

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
