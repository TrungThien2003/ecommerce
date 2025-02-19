const mongoose = require('mongoose') 

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true}, 
        price: {type: Number, required: true}, 
        description: {type: String, required: false}, 
        age: {type: String, required: true}, 
        gender: {type: String, required: true}, 
        stock: {type: Number, reqiured: true}, 
        category: {type: mongoose.Types.ObjectId,ref: "Category",  required: true},
        variants: [                            
            {
                color: {
                    tenMau : {type: String, required: true},
                    maMau: {type: String}, required: true},
                    images: {type: Array, required: true}, 
                    size: [{
                        type:{type: String, required: true} ,
                        quantity: {type: Number, required: true}
                    }]
                }], 
            
    
        
    
}, {
    timestamps: true
})
const Product = mongoose.model('Product', productSchema)

module.exports = Product ;

