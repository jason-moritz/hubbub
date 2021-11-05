import './App.css'
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Layout from './layouts/Layout'
import UserRegister from './screens/users/UserRegister'
import UserLogin from './screens/users/UserLogin'
import UserUpdate from './screens/users/UserUpdate'
import MainContainer from './containers/MainContainer'
import {
  userRegister,
  userLogin,
  userVerify,
  putUser,
  removeToken,
} from './services/users'
import { imageUpload } from './services/images'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await userVerify()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const handleRegister = async formData => {
    const userData = await userRegister(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogin = async formData => {
    const userData = await userLogin(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleUpdate = async (id, formData) => {
    const userData = await putUser(id, formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }

  const handleImageUpload = async image => {
    const res = await imageUpload(image)
    return res
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <div className='App'>
      <ThemeProvider theme={darkTheme}>
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
          <Switch>
            <Route path='/login'>
              <UserLogin handleLogin={handleLogin} />
            </Route>
            <Route path='/register'>
              <UserRegister
                handleRegister={handleRegister}
                handleImageUpload={handleImageUpload}
              />
            </Route>
            <Route path='/update'>
              {currentUser ? (
                <UserUpdate
                  currentUser={currentUser}
                  handleUpdate={handleUpdate}
                />
              ) : (
                <Redirect to='/login' />
              )}
            </Route>
            <Route path='/'>
              <MainContainer
                currentUser={currentUser}
                handleImageUpload={handleImageUpload}
              />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App
