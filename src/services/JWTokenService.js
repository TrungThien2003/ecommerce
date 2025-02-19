const jwt = require("jsonwebtoken") 

const generalAccessToken = (payload) => {
    const accessToken = jwt.sign(
        {
            payload
        }, 
        'access_token', 
        {expiresIn: '1h'}
    )
    return accessToken
}


const generalRefreshToken = (payload) => {
    const refreshToken = jwt.sign({
        payload
    }, 
    'refresh_token', {expiresIn: '30days'})
}


const jwtRefreshToken = async (token) => {
    return new Promise(async (resolve, reject) => {
        try{
            jwt.verify(token, 'refresh_token', async function(err, user){
                if(err){
                    resolve({
                        status: "Ok", 
                        message: "The authentication failed"
                    })
                }
                const {payload } = user
    
                const access_token = await generalAccessToken({id: payload?.id, isAdmin: payload?.isAdmin })
                resolve({
                    status: "Ok", 
                    message: "Success", 
                    access_token
                })
    
            })
        } catch(ex){
            reject(ex)
        }
        

    })
}
module.exports = {
    generalAccessToken, 
    generalRefreshToken, 
    jwtRefreshToken
}