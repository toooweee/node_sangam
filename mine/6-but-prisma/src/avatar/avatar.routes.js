import { Router } from "express";
import avatarController from "./avatar.controller.js";
import upload from "../middlewares/upload.js";
const router = Router();

router.get("/avatar", avatarController.getAvatars);
router.post("/avatar", upload.single("avatar"), avatarController.uploadAvatar);

export default router;
