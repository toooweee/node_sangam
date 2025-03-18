const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware.js");
const adminMiddleware = require("../middleware/admin.middleware");

router.get("/welcome", authMiddleware, adminMiddleware, (req, res) => {
  res.json({
    message: "Welcome to the home",
    user: req.userInfo,
  });
});

module.exports = router;
