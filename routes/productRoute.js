import express from 'express'
import authenticator from '../middleware/authenticator.js'

import { getProductList, getSingleProductById, addNewProduct, getProductDetailed } from '../controllers/productController.js'
const router = express.Router()


router.route('/get_products')
    .get(getProductDetailed)

router.route('/add_new_product')
    .post(addNewProduct)

router.route('/list')
    .get(getProductList)

router.route('/:id')
    .get(getSingleProductById)

export default router

//jst some dummt yext