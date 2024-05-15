import app from './apps.js'
import { connectToDatabase } from './db/connection.js'

//connections and listeners
connectToDatabase().then(()=>{
    app.listen(3000,()=>console.log("Server open& DB connected frmds"))
}).catch((err)=>console.log(err))