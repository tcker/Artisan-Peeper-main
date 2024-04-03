import path from "path"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import connectDB from "./db.js"
import userRoute from "./routes/userRoute.js"

dotenv.config()
const port = process.env.PORT || 4000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/users", userRoute)

app.listen(port, () => console.log(`API is now online on port ${port}`))


