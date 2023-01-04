import React, {useContext, useState, useEffect} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const timeout = setTimeout(()=>setLoading(false),4000)
    return () => clearTimeout(timeout)
  },[])
  return <AppContext.Provider value={{loading}}>
    {children}
  </AppContext.Provider>
}

export const useGenContext = () => {
  return useContext(AppContext)
}

export default AppProvider
