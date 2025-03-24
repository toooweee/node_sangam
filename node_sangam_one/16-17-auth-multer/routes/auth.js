const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");
const auth = require("../middleware/validateAuth.js");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register", auth.validateRegister, authController.register);
router.post("/login", auth.validateLogin, authController.login);
router.post("/change-password", authMiddleware, authController.changePassword);

module.exports = router;
