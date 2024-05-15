
import  {hash} from "bcrypt"
import User from "../models/user.js"

export const getAllUsers =async ( req,res,next)=>{
    try{
        const users = await User.find()
        return res.status(200).json({message:"ok", users})
    }
    catch(error){
        console.log(error)
        console.log("hi")
        return res.status(200).json({message:"api bye aaranda kanna", cause:error.message})
    }
}

export const userSignUp = async(req,res, next)=>{
    try{
        
        const {name, email, password} = req.body
        console.log(name)
        console.log(email)
        console.log(password)
        const hashedPassword = await hash(password,10)
        const user = new User({name,email,password:hashedPassword})
        await user.save()
        return res.status(200).json({message:"OK", id: user._id.toString()})

    }
    catch(error){
        console.log(error)
    }
}