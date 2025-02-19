const mongoose = require('mongoose') 
const ageSchema = new mongoose.Schema(
    {
        name: {type: String, required: true}, 
        description: {type: String, required: true}
    }, 
    {
        timestamps: true
    }
)

const Age = mongoose.Model('Gender', ageSchema) 
module.exports = Age