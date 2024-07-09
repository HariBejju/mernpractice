import express from 'express'
import morgan from "morgan"
import appRouter from './routes/index.js'
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"
const app = express()
dotenv.config()
//middlewares
const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(express.json())
app.use(cors(corsOpts));
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
