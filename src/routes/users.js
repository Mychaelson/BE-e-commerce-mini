const { userController } = require("../controllers")
const authorizedLoggenInUser = require("../middlewares/authMiddleware")

const router = require("express").Router()

router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
router.get("/refresh-token", authorizedLoggenInUser,userController.keepLogin)



module.exports = router