import { Router } from "express";
import avatarController from "./avatar.controller.js";
const router = Router();

router.get("/avatar", avatarController.getAvatars);

export default router;
