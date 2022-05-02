const { productControllers } = require("../controllers");

const router = require("express").Router();

router.get("/", productControllers.getAllProducts);
router.post("/", productControllers.addNewProducts);
router.get("/details/:id", productControllers.getOneProduct);

module.exports = router;
