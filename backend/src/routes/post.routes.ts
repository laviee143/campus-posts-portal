import express from "express";
import {
  createPost,
  getPosts,
  deletePost,
} from "../controllers/post.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", getPosts);
router.post("/", protect, createPost);
router.delete("/:id", protect, deletePost);

export default router;
