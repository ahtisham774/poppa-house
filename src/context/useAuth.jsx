import { createContext, useContext, useEffect, useState } from 'react'
import { getUser, setUser as setInfo } from '../api/apiClient'


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // {
  //   name: 'John Doe',
  //   avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  //   role: 'staff',
  //   id: 'Client-2025-001',
  //   email: 'john.doe@example.com',
  //   phone: '+44 7700 900123'
  // }

  useEffect(() => {

    setUser(getUser())
    setLoading(false)
  }, [])


  const handleUserUpdate = (user) => {
    setUser(user)
    setInfo(user)
    
  }

  

  return (
    <AuthContext.Provider value={{ user,loading,handleUserUpdate, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
