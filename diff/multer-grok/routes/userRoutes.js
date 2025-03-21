import { Router } from "express";
import userController from "../controllers/user.controller.js";
import upload from "../middleware/upload.js";
const router = Router();

router.post("/register", upload.single("avatar"), userController.registerUser);
router.get("/:id", userController.getUserProfile);

export default router;
