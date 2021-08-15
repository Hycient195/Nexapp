import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    itemName : {
        type : String,
        required : true
    },
    itemPrice : {
        type : Number,
        required : true
    },
    itemQuantity : {
        type : Number,
        required : true
    }, 
    seller : {
        type : String,
        required : true
    },
    itemDetails : {
        type : String,
        required : false
    },
    itemImage : {
        type : String,
        required : false
    }
})

const Product = mongoose.model('product', ProductSchema )
export default Product