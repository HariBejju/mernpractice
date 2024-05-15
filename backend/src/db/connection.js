import dotenv from "dotenv"
import {connect,disconnect} from "mongoose"
dotenv.config()
console.log(process.env.MONGODB_URL)
 async function connectToDatabase(){
    try{
        await connect(process.env.MONGODB_URL)

    }catch(error){
        console.log(error)
        throw new Error("couldn't connect to mongodb kanna")
    }
}
async function disconnectFromDatabase(){
    try{
        await disconnect()
    }catch(error){
        console.log(error);
        throw new Error("Could not Disconnect frmom MongoDB")
    }
}
export {connectToDatabase,disconnectFromDatabase }