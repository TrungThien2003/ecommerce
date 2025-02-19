const mongoose = require('mongoose'); 
const genderSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true}, 
        description: {type: String, required: false}
    }, 
    {
        timestamp: true
    }
); 

const Gender = mongoose.Model('Gender', genderSchema); 
module.exports = Gender; 