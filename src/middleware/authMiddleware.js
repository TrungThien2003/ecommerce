const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    const token = req.headers.token.split(' ')[1] 
    jwt.verify(token, 'access_token', function(err, user){
        if(err){
            return res.status(404).json({
                message: "Invalid Authentication",
                status: "Error" 
            })
        }

        const {payload} = user; 
        if(payload.isAdmin){
            console.log("true")
            next()
        } else{
            return res.status(200).json({
                message: "The authentication failed", 
                status: "Error"
            })
        }
     })

}
module.exports = {authMiddleware}