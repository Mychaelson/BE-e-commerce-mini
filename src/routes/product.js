const { productControllers } = require("../controllers")

const router = require("express").Router()


router.get("/", productControllers.getAllProducts)
router.post("/", productControllers.addNewProducts)

module.exports = router
