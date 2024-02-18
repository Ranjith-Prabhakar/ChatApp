import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectToMongoDB from "./db/connectToMongodb.js"
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.routes.js'
dotenv.config()
const app = express()

app.use(cookieParser())
app.use(express.json())

const PORT = process.env.PORT || 3000


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.listen(PORT, () => { console.log(`server has been conected on http://localhost:${PORT}`); connectToMongoDB()})