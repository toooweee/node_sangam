import { Router } from "express";
import avatarController from "../controllers/avatar.controller.js";
const router = new Router();

router.get("", avatarController.getAvatars);

export default router;
