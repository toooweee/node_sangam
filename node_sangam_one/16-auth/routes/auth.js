const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");
const auth = require("../middleware/validateAuth.js");

router.post("/register", auth.validateRegister, authController.register);
router.post(
  "/login",
  auth.validateLogin,
  authController.login.bind(authController),
);

module.exports = router;
