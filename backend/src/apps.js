import express from 'express';
import morgan from "morgan";
import appRouter from './routes/index.js';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

// CORS configuration
const corsOpts = {
    origin: 'https://merngpt-front-end.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type']
};

// Middlewares
app.use(cors(corsOpts));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));

// Debugging middleware
app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    next();
});

// Routes
app.use("/api/v1", appRouter);

export default app;
