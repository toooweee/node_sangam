const express = require("express");
const authMiddleware = require("../middleware/auth.middleware.js");
const router = express.Router();

router.get("/welcome", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Welcome to the admin page",
  });
});

module.exports = router;
