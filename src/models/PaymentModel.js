const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema(
    {   
        total: {type: Number, required: true}, 
        orderId: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'}
    }, 
    {
        timestamps: true
    }
); 

const Payment = mongoose.Model('Payment', paymentSchema); 
module.exports = Paymeny