const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();

//importing third party modules
const userRouter = require('./routers/users')
const authRouter = require('./routers/auth')
const productRoute = require("./routers/product");
const cartRoute = require("./routers/cart");
const orderRoute = require("./routers/orderd");
const stripeRoute = require("./routers/stripe");

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });


app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log(`backEnd server is ruuing on ${process.env.PORT || 5000} port`)
})