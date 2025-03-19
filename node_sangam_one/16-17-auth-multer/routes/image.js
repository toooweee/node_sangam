const router = require("express").Router();
const imageController = require("../controllers/image.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const adminMiddleware = require("../middleware/admin.middleware.js");
const uploadMiddleware = require("../middleware/image.middleware.js");

router.post(
  "/image",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  imageController.uploadImage,
);

router.get("/image", authMiddleware);

module.exports = router;
