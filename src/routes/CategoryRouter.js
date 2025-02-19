const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Lấy danh sách danh mục
router.get("/", CategoryController.getAllCategories);

// Thêm danh mục mới (Chỉ ADMIN)
router.post("/", authMiddleware.authMiddleware, CategoryController.createCategory);

// Cập nhật danh mục (Chỉ ADMIN)
router.put("/:id", authMiddleware.authMiddleware, CategoryController.updateCategory);

// Xóa danh mục (Chỉ ADMIN)
router.delete("/:id", authMiddleware.authMiddleware, CategoryController.deleteCategory);

module.exports = router;
