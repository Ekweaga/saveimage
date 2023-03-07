import { onAuthStateChanged ,getAuth} from "firebase/auth";
import { createContext, useContext, useState,useEffect } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const [user,setUser] = useState({})
    const[mode,setMode] = useState(false)

 
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
               setUser(user)
               
           })
       },[auths])
    return(
        <AuthContext.Provider value={{user,mode,setMode}}>
            {children}
        </AuthContext.Provider>
    )
}