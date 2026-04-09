import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

function getStoredUser() {
  try {
    const token = localStorage.getItem('token')
    if (!token) return null
    const stored = localStorage.getItem('productor')
    const productor = stored ? JSON.parse(stored) : {}
    return { token, productor }
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(getStoredUser())
  }, [])

  const login = (token, productor) => {
    if (token) localStorage.setItem('token', token)
    if (productor) localStorage.setItem('productor', JSON.stringify(productor))
    setUser({ token: token || user?.token, productor: productor || user?.productor || {} })
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('productor')
    setUser(null)
  }

  const isAuthenticated = !!user?.token
  const productor = user?.productor || {}

  const value = {
    user,
    productor,
    isAuthenticated,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}
