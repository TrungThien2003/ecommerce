const { jwtRefreshToken } = require('../services/JWTokenService');
const userServices = require('../services/UserServices')

//  [Post]
const createUser = async (req, res) => {

    const {name, email, password, confirmPassword} = req.body; 
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const validEmail = regexEmail.test(email)
    console.log(validEmail)
    if(!name || !email || !password || !confirmPassword || !validEmail || !(password == confirmPassword)) 
    {   
        return res.status(200).json({
            status: 'Error',
            message: 'Invalid Inputtttt' , 
            data: {
                name: name, email: email, password: password
            }
        })

    }
    const response = await userServices.createUser(req.body); 
    return res.status(200).json(response)

}

// [Post]

const loginUser = async (req, res) => {
    const {email, password} = req.body; 
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const validEmail = regexEmail.test(email)
    if (!email || !password || !validEmail ) 
    {   
        return res.status(200).json({
            status: 'Error',
            message: 'Invalid Input' , 
            data: {
                email: email, password: password
            }
        })

    }
    const response = await userServices.loginUser(req.body); 
    return res.status(200).json(response)
}

const deleteUser = async (req, res) => {
    const id =  req.params.id; 
    if(id == null){
        return res.status(200).json({
            status: 'Ok', 
            message: "Id is required"
        })
    }
    const respone =await userServices.deleteUser(id); 
    return res.status(200).json(respone)

}

const updateUser = async (req, res) => {
    const id = req.params.id; 
    const data = req.body
    if(id == null){
        return res.status(404).json({
            status: "error", 
            message: "Id is required"
        })
    }
    const user = await userServices.updateUser(id, data)
    return res.status(200).json(user);
}

const refreshToken = async (req, res) => {
    try{
        const token = req.headers.token.split(' ')[1]; 
        if(token == null){
            return res.status(200).json({
                status: "Ok",
                messsage: "The token is required"
            })
        } 
        const response = await jwtRefreshToken(token); 
        return res.status(200).json(response)
    

    }catch(ex){
        return res.status(200).json(ex)
    }
}
module.exports = {createUser, loginUser, deleteUser, updateUser, refreshToken}