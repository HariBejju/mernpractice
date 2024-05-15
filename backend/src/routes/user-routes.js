import {Router} from "express"
import { getAllUsers, userSignUp } from "../controllers/user-controller.js"

const userRoutes = Router()

userRoutes.get("/", getAllUsers)
userRoutes.post("/signup",userSignUp )

export default userRoutes
