const express = require('express')
const Product = require('../models/productModel')
const {getProducts,getProductById,updateProductById,deleteProductById,addProduct} = require('../controllers/productController')

const router = express.Router()

// get all products
router.get("/",getProducts)

//find by id
router.get("/:id",getProductById)

//update product by id
router.put("/:id",updateProductById)

//delete the product by id
router.delete("/:id",deleteProductById)

//create product
router.post("/",addProduct)

module.exports = router;