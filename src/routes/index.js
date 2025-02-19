const userRouter = require('./UserRouter');
const categoryRouter = require("./CategoryRouter");


const routes = (app) => {
    app.use('/user', userRouter);
    // app.use('/product', productRouter);
    app.use("/categories", categoryRouter);
}

module.exports = routes