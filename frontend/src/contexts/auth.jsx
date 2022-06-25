import { createContext, useState, useEffect, useContext } from 'react'
import api from '../services/api'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@Auth:user')
    const storagedToken = localStorage.getItem('@Auth:token')

    if (storagedUser && storagedToken) {
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`
      setUser(JSON.parse(storagedUser))
    }
  }, [])

  async function signIn(credentials, callback) {
    try {
      const response = await api.post('login', credentials)

      if (response.data.auth?.status) {
        setUser(response.data.user)

        api.defaults.headers['Authorization'] = `Bearer ${response.data.auth.token}`

        localStorage.setItem('@Auth:user', JSON.stringify(response.data.user))
        localStorage.setItem('@Auth:token', response.data.auth.token)

        callback();
      } else {
        console.log(response.data.error)
      }
    } catch (err) {
      console.log(err)
    }
  }

  function signOut(callback) {
    setUser(null)

    localStorage.removeItem("@Auth:user");
    localStorage.removeItem("@Auth:token");

    api.delete("logout")

    callback()
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}