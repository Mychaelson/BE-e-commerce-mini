const { userController } = require("../controllers")

const router = require("express").Router()

router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
router.get("/refresh-token", userController.keepLogin)



module.exports = router