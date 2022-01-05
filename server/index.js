import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import User from './models/userModel.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()

app.use(express.json({ limit: "30mb", extended: true})) // Req.body
app.use(express.urlencoded({ limit: "30mb", extended: true})) 
app.use(cors())

app.use('/users', userRoutes);

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 5000

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
	.catch((error) => console.log(error.message))
