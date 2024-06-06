import {Router} from "express"
import { getAllUsers, userSignUp,userLogin, userVerify } from "../controllers/user-controller.js"
import {validate, signupValidator,loginValidator } from "../utils/validator.js"
import { verifyToken } from "../utils/tokenmanager.js"
const userRoutes = Router()

userRoutes.get("/", getAllUsers)
userRoutes.post("/signup",validate(signupValidator),userSignUp )
userRoutes.post("/login",validate(loginValidator),userLogin)
userRoutes.post("/auth-status",verifyToken,userVerify)

export default userRoutes
