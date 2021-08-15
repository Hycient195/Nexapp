import ProductModel from '../models/ProductModel.js'
import asyncHandler from 'express-async-handler'


/* Fetching all the products in the product list */
const getProductList = asyncHandler(async(req, res)=>{
    const product = await ProductModel.find({})

    if(product){
        let productNames = product.map((p)=> p.itemName)
        res.status(200)
        res.json(productNames)
    }else{
        res.status(404)
        throw new Error('Product deatils unavaliable')
    }
})

const getProductDetailed = asyncHandler(async(req, res) =>{
    const product = await ProductModel.find({})

    if(product){
        res.status(200)
        res.json(product)
    }else{
        res.status(404)
        throw new Error('No products Avaliable')
    }
})
/* Fetching a single product and its details */
const getSingleProductById = asyncHandler(async(req, res)=>{

    // The product ID of the particular product is passed in the url
    const productId = req.params.id
    console.log(productId)
    const foundProduct = await ProductModel.findById(productId)

    if(foundProduct){
        res.status(200)
        res.json(foundProduct)
    }else{
        res.status(404)
        throw new Error('The requested product does not exist')
    }
})

export const addNewProduct = asyncHandler(async(req, res)=>{
    const { itemName, itemPrice, itemQuantity, seller, itemDetails, itemImage } = req.body

    try {
        const product = await ProductModel.create({
            itemName, itemPrice, itemQuantity, seller, itemDetails, itemImage
        })
        res.status(200)
        console.log(product)
        res.json(product)
    } catch (err) {
        res.status(404)
        res.json({message : 'Could not add new product'})
    }

})
export { getProductList, getSingleProductById, getProductDetailed }