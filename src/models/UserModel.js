const mongoose = require('mongoose') 

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true}, 
        email: {type: String, required: true, unique: true}, 
        password: {type: String, required: true}, 
        access_token: {type: String, required: false}, 
        refresh_token: {type: String, required: false}, 
        isAdmin: {type: Boolean, default: false, required: true}, 
        phoneNumber: {type: String, required: false},
        roleId: {type: mongoose.Schema.Types.ObjectId,ref:"Role", required: false}
    }, 
    {
        timestamps: true
    }
); 

const User = mongoose.model("Users",userSchema); 
module.exports = User