import React, { createContext, useState } from 'react'


const AuthContext = createContext()
const AuthContextProvider = ({children}) => {

  const [authDetails , setAuthDetails] = useState({isAuth:false, token})
  return (
    <AuthContext.Provider>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider