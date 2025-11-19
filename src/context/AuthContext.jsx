import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, Gprovider } from '../firebase/firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, Gprovider)
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth()
  if (loading) return <div>Verificando sesión...</div>
  if (!user) return null // handled by route-level redirect
  return children
}

export default AuthContext
