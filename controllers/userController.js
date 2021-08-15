import UserModel from '../models/UserModel.js'
import ProductModel from '../models/ProductModel.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import generateToken from '../utilities/generateToken.js'
import mongoose from 'mongoose'

export const getUsers = asyncHandler(async(req, res) =>{
    const user = await UserModel.find({})

    if(user){
        res.status(200).json(user)
    }else{
        res.status(404)
        throw new Error('Unable to fetch users')
    }
})

const createUser = asyncHandler(async(req, res) =>{

//     const { firstName, lastName, phoneNumber, email, password } = req.body

//     const userExists = await UserModel.findOne({email})
//     if(userExists){

//         res.status(400)
//         throw Error('User already Exists')

//     }else{

//         try {
//             const user = await UserModel.create({
//                 firstName, lastName, phoneNumber, email, password
//             })
//             // console.log(user)
    
//             res.status(200).json({
//                 _id : user._id,
//                 firstName : user.firstName,
//                 lastName : user.lastName,
//                 phoneNumber : user.phoneNumber,
//                 email : user.email,
//                 token : generateToken(user._id)
//             })
//             console.log(`User logged in with token ${generateToken(user_id)}`)
//         } catch (err) {
//             res.status(404)
//             throw new Error('Unable to Create user')
//         }
//     }


    
})



export const signIn = async (req, res) =>{
    const { email, password } = req.body

    console.log(req.body)
    try {
        const existingUser = await UserModel.findOne({ email })

        if(!existingUser) return res.status(404).json({ message : 'User does not exist'})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if(!isPasswordCorrect) return res.status(400).json({message : 'Invalid credentials'})

        const token = jwt.sign({email : existingUser.email, id : existingUser._id}, process.env.JWT_SECRET,{
            expiresIn : '1d'
        })

        res.status(200).json({result : existingUser, token})
    } catch (error) {
        res.status(500).json({message : 'Something went wrong.'})
    }
}

export const signUp = async (req, res)=>{
    const { firstName, lastName, phoneNumber, email, password, confirmPassword } = req.body

    try {
        const existingUser = await UserModel.findOne({ email })

        if(existingUser) return res.status(404).json({message : 'User alredy exists'})

        if(password !== confirmPassword) res.status(400).json({message : 'Passwords do not match'})

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = await UserModel.create({
            firstName, lastName, phoneNumber, email, password : hashedPassword
        })

        const token = jwt.sign({newUser : newUser.email, id : newUser._id}, process.env.JWT_SECRET)

        res.status(200).json({result : newUser, token})
    } catch (error) {
        res.status(500).json({message : 'Something went wrong'})
    }
}

export const addToCart = async (req, res) =>{
    const { itemId, userId } = req.body

    try {
        const product = await ProductModel.findOne({_id : itemId })
        const user = await UserModel.findOne({ _id : userId})

        if(user){
            user.firstName = user.firstName
            user.lastName = user.lastName
            user.phoneNumber = user.phoneNumber
            user.email = user.email
            user.password = user.password
            user.itemImage = user.itemImage
            user.cart = [...user.cart, product]
            const updatedUser = await user.save()
            // console.log(updatedUser)
        }    
 
    } catch (error) {
        
    }
}

export const fetchUserCart = async (req, res) =>{

    const { userId } = req.body
       
    try {
        const { cart } = await UserModel.findOne({_id : userId})
        // console.log(cart)
        res.status(200).json({result : cart})
    } catch (error) {
        console.log(error)
    }
}

export const removeItemFromCart = async (req, res) =>{
    const  {itemIndex}  = req.params
    const {userId} = req.body
    console.log(itemIndex, userId)
    try {
        const user = await UserModel.findById(userId)
        // const cartArray = user.cart

        if(user){
            user.firstName = user.firstName
            user.lastName = user.lastName
            user.phoneNumber = user.phoneNumber
            user.email = user.email
            user.password = user.password
            user.itemImage = user.itemImage
                // const filteredCart = user.cart[itemIndex]
            user.cart = user.cart.filter((item, index)=> index != itemIndex)
            const updatedUser = await user.save()
            // console.log(updatedUser)
        }    
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}
export { createUser }