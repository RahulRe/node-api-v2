const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);


    }
})

const getProductById = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product);

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
        


    }
})

const updateProductById = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404);
            throw new Error(`cannot find product by id ${id}`);
        }
        const updatedproduct = await Product.findById(id)
        res.status(200).json(updatedproduct);

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);


    }
})

const deleteProductById = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404);
            throw new Error(`cannot find product by id ${id}`);
            
        }
        
        res.status(200).json(product);

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);


    }
})

const addProduct  = asyncHandler(async(req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);

    }
    catch(error){
        res.status(500);
        throw new Error(error.message);


    }
})
module.exports = {
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    addProduct
}