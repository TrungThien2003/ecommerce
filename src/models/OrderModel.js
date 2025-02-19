const mongoose = require('mongoose') 
const orderSchema = new mongoose.Schema(
    {
        orderItems: [{
            productId: {type: mongoose.Types.ObjectId, required: true, ref: "Product"}, 
            name: {type: String, required: true}, 
            price: {type: Number, required: true}, 
            size: {type: String, required: false}, 
            color: {type: String, required: true}
        }], 
        userInformation: {
            userId: {type: mongooose.Schema.Types.ObjectId, required: true}, 
            fullName: {type: String, required: true}, 
            phoneNumber: {type: String, required: true}, 
            address: {type: String, required: true}, 
            email: {type: String, required: false}
        }, 
        total: {type: Number, required: true}
    }   
)

const Order = mongoose.Model('Order', orderSchema); 
