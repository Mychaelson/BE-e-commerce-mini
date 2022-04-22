const { userControllers } = require("../controllers")

const router = require("express").Router()

router.post("/register", userControllers.registerUser)
router.post("/login", userControllers.loginUser)
router.get("/refresh-token", userControllers.keepLogin)



module.exports = router