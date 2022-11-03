import React, {createContext, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [isLoading, setisLoading] = useState(true)
    const [userToken, setuserToken] = useState(null)

    const verify = () =>{
        setuserToken('bharath');
        setisLoading(false)
    }

    const Logout = ()=>{
        setuserToken(null)
        setisLoading(false)
    }
    return(
        <AuthContext.Provider value={{verify,Logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}