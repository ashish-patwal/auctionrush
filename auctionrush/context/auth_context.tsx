import GUN from 'gun'
import 'gun/sea'
import 'gun/axe'
import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const db = GUN()
  const [user, setUser] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const gun_user = db.user().recall({ sessionStorage: true })
  gun_user.get('alias').on(username => setUser(username))
  db.on('auth', async event => {
    const alias = await gun_user.get('alias')
    setUser(alias)
    console.log(`signed in as ${alias}`)
  })

  const signup = ({ username: identifier, password }) => {
    gun_user.create(identifier, password, ({ err }) => {
      if (err) {
        setError(err)
      } else {
        login({ username: identifier, password })
      }
    })
  }

  const login = ({ username: identifier, password }) => {
    gun_user.auth(identifier, password, ({ err }) => setError(err))
  }

  const logout = () => {
    gun_user.leave()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
