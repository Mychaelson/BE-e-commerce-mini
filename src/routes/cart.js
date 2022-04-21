const { cartController } = require("../controllers");

const router = require("express").Router();

router.get("/", cartController.getCartItems);

router.post("/", cartController.addCart);

router.patch("/:id", cartController.editCartQuantity);

router.delete("/:id", cartController.deleteCartItem);

module.exports = router;
