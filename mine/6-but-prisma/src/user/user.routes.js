import { Router } from "express";
import userController from "./user.controller.js";
const router = Router();

router.post("/user", userController.createUser);
router.get("/user", userController.getUsers);
router.get("/user/:idOrEmail", userController.getUser);

export default router;
