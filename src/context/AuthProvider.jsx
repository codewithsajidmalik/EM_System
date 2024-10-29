import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


  // the work of auth provider is that local storage se data uthata hai aur sab me baant deta hai



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
 
  
    const [userData, setUserData] = useState(null)

   useEffect(()=>{
    setLocalStorage()
    const {employees} = getLocalStorage()
    setUserData(employees)
   },[])

  return (
    <div>
   <AuthContext.Provider value={[userData,setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider