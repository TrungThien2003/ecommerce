const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: false },
        parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: false }
    },
    {
        timestamps: true
    }
)

const Category = mongoose.model('Category', categorySchema)
module.exports = Category