import jwt from "jsonwebtoken"
import { COOKIE_NAME } from "./constants.js"

export const createToken = (id,email,expiresIn)=>{
    const payload = {id,email}
    const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn,
    })
    return token
}

export const verifyToken = async(req,res,next)=>{
    console.log("verify")
    const token = req.signedCookies[`${COOKIE_NAME}`]
    if(!token || token.trim() === ""){
        return res.status(401).json({message:"Token not received"})
    }
    return new Promise((resolve,reject)=>{
        return jwt.verify(token,process.env.JWT_SECRET,(err,success)=>{
            if(err){
                reject(err.message)
                return response.status(401).json({message:"Token sethutaan bro "})
            }else{
                console.log("token verfication successful frnds")
                resolve()
                res.locals.jwtData = success
                return next()
            }
        })
    })

}
