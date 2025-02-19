const mongoose = require('mongoose') 
const genderSchema = new mongoose.Schema(
    {
        name: {type: String, required: true}, 
        description: {type: String, required: true}
    }, 
    {
        timestamps: true
    }
)

const Gender = mongoose.Model('Gender', genderSchema) 
module.exports = Gender