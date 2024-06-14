import { Router } from "express";
import { verifyToken } from "../utils/tokenmanager.js";
import { validate,chatCompletionValidator } from "../utils/validator.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";
import { sendChatRequest } from "../../../vite-project/src/helpers/api.js";
import { sendChatsToUser } from "../controllers/chat-controllers.js";

//portected API
const chatRoutes = Router()
chatRoutes.post("/new",validate(chatCompletionValidator),verifyToken, generateChatCompletion)
chatRoutes.get("/all-chats",verifyToken, sendChatsToUser)

export default chatRoutes