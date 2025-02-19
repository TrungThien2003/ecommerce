const Product = require("../models/ProductModel") 
const createProduct = (req) => {
    console.log(req.body)
}

module.exports = {createProduct}