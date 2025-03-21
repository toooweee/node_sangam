import { Router } from "express";
import postsController from "./controllers/posts.controller.js";

const router = new Router();

router.post("/posts", postsController.create);
router.get("/posts", postsController.findAll);
router.get("/posts/:id", postsController.findOne);
router.put("/posts/:id", postsController.update);
router.delete("/posts/:id", postsController.delete);

export default router;
