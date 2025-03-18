const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");
const authValidator = require("../middleware/validateAuth.middleware.js");

router.post("/login", authValidator.validateLogin, userController.login);
router.post(
  "/register",
  authValidator.validateRegister,
  userController.register,
);

module.exports = router;
