import express from "express";
import {
  getAllBlogs,
  getBlog,
  createdBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/BlogController.js";
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/", createdBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
