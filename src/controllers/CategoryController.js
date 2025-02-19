const Category = require("../models/CategoryModel");

// Lấy danh sách danh mục
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate("parentCategory");
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

// Thêm danh mục mới (Chỉ ADMIN)
exports.createCategory = async (req, res) => {
    try {
        const { name, description, parentCategory } = req.body;

        if (!name) return res.status(400).json({ message: "Tên danh mục là bắt buộc" });

        const newCategory = new Category({ name, description, parentCategory });
        await newCategory.save();

        res.status(201).json({ message: "Thêm danh mục thành công", category: newCategory });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

// Cập nhật danh mục (Chỉ ADMIN)
exports.updateCategory = async (req, res) => {
    try {
        const { name, description, parentCategory } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { name, description, parentCategory },
            { new: true }
        );

        if (!updatedCategory) return res.status(404).json({ message: "Không tìm thấy danh mục" });

        res.status(200).json({ message: "Cập nhật thành công", category: updatedCategory });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

//  Xóa danh mục (Chỉ ADMIN)
exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);

        if (!deletedCategory) return res.status(404).json({ message: "Không tìm thấy danh mục" });

        res.status(200).json({ message: "Xóa danh mục thành công" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};
