const mongoose = require('mongoose') 
const roleSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true}, 
        description:{type: String, required: true}, 
    }, 
    {
        timestamp: true
    }
); 

const Role = mongoose.Schema('Role', roleSchema); 
module.exports = Role