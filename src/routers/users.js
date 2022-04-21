const { userController } = require("../controllers")

const router = require("express").Router()

router.post("/register", userController.registerUser)


module.exports = router