const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js");

router.get("/user", userController.getAll);
router.post("/user", userController.create);
router.get("/user/:id");
router.patch("/user/:id");
router.delete("/user/:id");

module.exports = router;
