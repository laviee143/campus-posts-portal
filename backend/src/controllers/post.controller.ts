import { Request, Response } from "express";
import Post from "../models/Post";

// Extend Express Request to include authenticated user
export interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: string;
  };
}

/**
 * CREATE POST
 * User must be logged in
 */
export const createPost = async (
  req: Request & { user?: { userId: string; role: string } },
  res: Response
) => {
  try {
    const { title, content, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const post = await Post.create({
      title,
      content,
      category,
      author: req.user!.userId, // ✅ CORRECT
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("CREATE POST ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};


/**
 * GET ALL POSTS
 * Public
 */
export const getPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    console.error("GET POSTS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * UPDATE POST
 * Owner or Admin only
 */
export const updatePost = async (req: AuthRequest, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 🔐 RBAC: Owner OR Admin
    if (
      post.author.toString() !== req.user?.userId &&
      req.user?.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    post.title = req.body.title ?? post.title;
    post.content = req.body.content ?? post.content;
    post.category = req.body.category ?? post.category;

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.error("UPDATE POST ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * DELETE POST
 * Owner or Admin only
 */
export const deletePost = async (req: AuthRequest, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 🔐 RBAC: Owner OR Admin
    if (
      post.author.toString() !== req.user?.userId &&
      req.user?.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await post.deleteOne();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("DELETE POST ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
