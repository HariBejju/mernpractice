import express from 'express'
import morgan from "morgan"
import appRouter from './routes/index.js'
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"
const app = express()
dotenv.config()
//middlewares
app.use(cors({
    origin: "https://merngpt-front-end.vercel.app",
    methods: ["POST", "GET", "PUT", "DELETE"], // include all methods you plan to use
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json())

//remove it in production
console.log(process.env.COOKIE_SECRET)
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(morgan("dev"))
app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    next();
});

app.use("/api/v1",appRouter)

export default app
