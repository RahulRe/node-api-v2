require('dotenv').config()
const productRoute = require('./routes/productRotes')
const errorMiddleware = require("./middleware/errorMiddleware")

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json())// for json params
app.use(express.urlencoded({extended:false})) // for form in params
app.use("/api/product",productRoute); // adds /api in between endpoint
app.use(errorMiddleware)
app.use(cors())

app.get("/",(req,res)=>{
    
    res.send("hello from API")
})




mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('connected to mongodb');
    app.listen(3000,()=>{
        console.log("running on port 3000")
    })
})
.catch((error)=>{
    console.log(error);
})