const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routes')
const { mongoose, mongo } = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const User = require('./models/UserModel')
const categoryRoutes = require("./routes/CategoryRouter");



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/categories", categoryRoutes);

const port = 3003
routes(app)

try {
    mongoose.connect("mongodb+srv://thienb2110146:1234@cluster0.zb1yuvk.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {


            console.log("Ket noi database thanh cong")
        })
} catch (ex) {
    console.log('ex', ex)
}



app.listen(port, () => console.log(`Listen on port ${port}`))