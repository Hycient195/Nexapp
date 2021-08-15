import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import dbConnection from './config/dbConnection.js'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 7000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// const __dirname = path.resolve(path.dirname(''))

/* Configuring .env file */
dotenv.config()

/* Starting up server and connecting to database */
app.listen(PORT, ()=>{
    dbConnection()
    console.log(`Server started on port ${PORT}`)
})

app.set('json spaces', 2)

/* Middleware */
app.use(express.json({limit : "30mb", extended : true}))
app.use(express.urlencoded({ limit : "30mb", extended : true}))
app.use(cors({
    origin : '*',
    methods : [ 'GET', 'POST', 'PUT', 'DELETE' ],
}))

app.use('/api/products', productRoute)
app.use('/api/users', userRoute )

// app.use(express.static(path.resolve(`${__dirname}/..`, 'client/build')))
app.use(express.static(path.resolve(`${__dirname}`, 'client/build')))

app.get('*', (req, res)=>{
    res.sendFile(path.resolve(`${__dirname}`, 'client/build', 'index.html'))
})

// console.log(path.resolve(`${__dirname}/..`))


/* For all 404 or invalid URLs */

