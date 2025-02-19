const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const { generalAccessToken } = require("./JWTokenService")
const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password } = newUser


        try {

            const isExitEmail = await User.findOne({ email: email })

            if (isExitEmail) {
                resolve({
                    status: 'Ok',
                    message: "Email address already being used",
                    data: isExitEmail
                })
            }
            const hashPassword = await bcrypt.hashSync(password, 10);
            console.log("hash", hashPassword)

            const createdUser = await User.create({
                name,
                email,
                password: hashPassword,
            })

            if (createdUser) {
                resolve({
                    status: 'Ok',
                    message: "Successfully create user",
                    data: createUser
                })
            }
        } catch (ex) {
            reject(ex)
        }
    })
}


const loginUser = (user) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = user
        try {
            const isExitedUser = await User.findOne({ email: email })
            if (!isExitedUser) {
                resolve({
                    status: 'Ok',
                    message: "No user found",
                })
            }

            const comparePassword = bcrypt.compareSync(password, isExitedUser.password);
            const accessToken = await generalAccessToken({
                id: isExitedUser.id,
                isAdmin: isExitedUser.isAdmin
            })

            const refreshToken = await generalRefreshToken({
                id: isExitedUser.id,
                isAdmin: isExitedUser.isAdmin
            })

            if (comparePassword) {
                resolve({
                    status: 'Ok',
                    message: "Login succcessfully",
                    access_token: accessToken, 
                    refresh_token
                })
            }
            else {
                resolve({
                    status: 'Ok',
                    message: "Login fail"
                })
            }
        } catch (ex) {
            reject(ex)

        }
    })
}

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const object = await User.findById({ _id: id });
            if (object == null) {
                resolve({
                    status: 'Ok',
                    message: "User not found"
                })
            }
            const deletedObj = await User.deleteOne({_id: id});
            resolve({
                status: "Ok",
                message: "User is deleted successfully",
                data: deletedObj
            })
        } catch (ex) {
            reject(ex)
        }
    })
}

const updateUser = async (id, data) => {

    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findById({ _id: id });
            if (user == null) {
                resolve({
                    status: "Ok",
                    message: "Id is not found"
                })
            }

            const updatedUser = await User.findOneAndUpdate({_id: id}, data)
            resolve({
                status: "Ok",
                message: "Update User Successfully",
                data: updatedUser
            })
        } catch (ex) {
            reject(ex)
        }
    }
        
)


}

const refreshToken = async (token) => {
    return new Promise((resolve, reject) => {
        try{

        }catch(ex){
            reject(ex)
        }
    })

}
module.exports = { createUser, loginUser, deleteUser, updateUser , refreshToken}