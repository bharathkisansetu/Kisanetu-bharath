import React, {createContext, useState, useEffect} from "react";
//import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

     const verify = () =>{
        //setIsLoading(true)
         setUserToken('bharath');
         //AsyncStorage.setItem('userToken', 'bharath')
         setIsLoading(false)
     }

     const Logout = ()=>{
        //setIsLoading(true)
         setUserToken(null)
         //AsyncStorage.removeItem('userToken')
        setIsLoading(false)
     }

    //  const isLoggedIn =async()=>{
    //     try{
    //         setIsLoading(true);
    //         let userToken =await AsyncStorage.getItem('userToken')
    //         setUserToken(userToken)
    //         setIsLoading(false)
    //     }catch(e){
    //         console.log(`isLogged in error $(e)`)
    //     }
    //  }

    //  useEffect(()=>{
    //     isLoggedIn()
    //  })
    return(
        <AuthContext.Provider value={{verify,Logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}