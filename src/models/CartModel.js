const mongoose = require('mongoose') 
const cartSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true, uniue: true}, 
        products: [
            {
                productId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product"}, 
                color: {type: String, required: true}, 
                size: {type: String, required: false}, 
                quantity: {type: String, required: false}
            }
        ]
    }
)