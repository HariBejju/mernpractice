import {createContext, useState,useContext} from 'react'
import { useEffect } from 'react'
const AuthContext = createContext(null)

export const AuthProvider =({children})=>{
    const [user,setUser] = useState(null)
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    useEffect(()=>{

    },[])
    const login = async()=>{};
    const signup = async()=>{}
    const logout = async()=>{}
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


