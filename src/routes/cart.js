const { cartController } = require("../controllers");

const router = require("express").Router();

router.get("/", cartController.getCartItems);

router.post("/", cartController.addCart);

module.exports = router;
