// const mongoose = require('mongoose') 

// const productSchema = new mongoose.Schema(
//     {
//         name: {type: String, required: true}, 
//         price: {type: Number, required: true}, 
//         description: {type: String, required: false}, 
//         age: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Age"}, 
//         gender: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Gender"}, 
//         stock: {type: Number, reqiured: true}, 
//         category: {type: mongoose.Types.ObjectId,ref: "Category",  required: true},
//         variants: [                            
//             {
//                 color: {
//                     tenMau : {type: String, required: true},
//                     maMau: {type: String}, required: true},
//                     images: {type: Array, required: true}, 
//                     size: [{
//                         type:{type: String, required: true} ,
//                         quantity: {type: Number, required: true}
//                     }]
//                 }
//             }
//         ]
//     }, 
    
//         /*
//             variants: [
//                 {
//                     color: {
//                         c: "Xanh", 
//                         images: ["./image1.png", "./image2.png", "./image3.pngpng"], 
//                         size: [
//                             {
//                                 type: "S", 
//                                 quantity: 1010

//                             }
//                         ]
//                     }
//                 }
//             ]

//          */

    
//     {
//         timestamp: true, 
//     }
// )
// const Product = mongoose.model('Product', productSchema)

// module.exports = Product ;

