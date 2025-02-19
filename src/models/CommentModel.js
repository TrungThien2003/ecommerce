const mongoose = require('mongoose') 

const commentSchema = new mongoose.Schema(
    {
        productId: {type: mongoose.Schema.Types.ObjectId, required: true}, 
        userId: {type: mongoose.Schema.Types.ObjectId, required: true},
        content: {type: String, required: true}, 

    }, 
    {
        timestamp: true
    }
); 

const Comment = mongoose.Model('Comment', commentSchema)
module.exports = Comment