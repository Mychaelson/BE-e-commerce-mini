const { userController } = require("../controllers")

const router = require("express").Router()

router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)



module.exports = router