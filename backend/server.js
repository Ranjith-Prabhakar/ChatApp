import express from "express"
import dotenv from "dotenv"
import authRoutes from './routes/auth.route.js'
import connectToMongoDB from "./db/connectToMongodb.js"
dotenv.config()
const app = express()

app.use(express.json())
const PORT = process.env.PORT || 3000


app.use("/api/auth", authRoutes);
app.listen(PORT, () => { console.log(`server has been conected on http://localhost:${PORT}`); connectToMongoDB()})