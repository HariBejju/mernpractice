import { Router } from "express";
import { verifyToken } from "../utils/tokenmanager.js";
import { validate,chatCompletionValidator } from "../utils/validator.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";

//portected API
const chatRoutes = Router()
chatRoutes.post("/new",validate(chatCompletionValidator),verifyToken, generateChatCompletion)

export default chatRoutes