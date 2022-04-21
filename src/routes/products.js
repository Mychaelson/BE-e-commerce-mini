const productControllers = require("../controllers/products")

const router = require("express").Router()

router.get("/:id", productControllers.getProductById)

router.post("/", productControllers.createProduct)

module.exports = router