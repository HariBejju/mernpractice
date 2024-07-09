import express from 'express'
import morgan from "morgan"
import appRouter from './routes/index.js'
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"
const app = express()
dotenv.config()
//middlewares
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://merngpt-front-end.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// OPTIONS handler for preflight requests
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://merngpt-front-end.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
});
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
