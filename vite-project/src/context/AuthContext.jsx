import {createContext, useState,useContext} from 'react'
import { useEffect } from 'react'
import { CheckAuthStatus, loginUser, logoutuser } from '../helpers/api.js'
const AuthContext = createContext(null)
export const AuthProvider =({children})=>{
    const [user,setUser] = useState(null)
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    useEffect(()=>{
       async function checkStatus(){
        console.log("check status")
        const data = await CheckAuthStatus()
        console.log("data below")
        console.log(data)
        if(data){
            setUser({email:data.email,name:data.name})
            setIsLoggedIn(true)
        }
       } 
       console.log("useeffect check")
       checkStatus()
    },[])

    const login = async(email,password)=>{
        const data = await loginUser(email,password);
        console.log(data)
        if(data){
            setUser({email:data.email,name:data.name})
            setIsLoggedIn(true)
        }
    };
    const signup = async(name,email,password)=>{}
    const logout = async()=>{
        console.log("hi nigga")
        await logoutuser()
        setIsLoggedIn(false)
        setUser(null)
        window.location.reload()
    }
    const value = {
        user,
        isLoggedIn,
        login,
        signup,
        logout
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export const useAuth =()=>useContext(AuthContext);


