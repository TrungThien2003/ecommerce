const productServices = require("../services/ProductServices") 

const createProduct = async (req, res) => {
    const response = await productServices.createProduct(req); 
    return res.status(200).json(response);

}

module.exports = {createProduct}