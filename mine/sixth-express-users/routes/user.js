import { Router } from "express";
import userController from "../controllers/user.controller.js";
const router = new Router();

router.post("/register", userController.createUser);
router.get("", userController.getUsers);
router.get("/:idOrEmail", userController.getUser);

export default router;
