import './App.css'
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Layout from './layouts/Layout'
import UserRegister from './screens/users/UserRegister'
import UserLogin from './screens/users/UserLogin'
import UserUpdate from './screens/users/UserUpdate'
import MainContainer from './containers/MainContainer'
import {
  registerUser,
  loginUser,
  verifyUser,
  putUser,
  removeToken,
} from './services/users'
import { imageUpload } from './services/images'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState(false)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  useEffect(() => {
    setUsernameError(false)
    setPasswordError(false)
    setEmailError(false)
    setPasswordConfirmationError(false)
  }, [])

  const handleRegister = async formData => {
    const userData = await registerUser(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogin = async formData => {
    const userData = await loginUser(formData)
    if (userData.username) {
      setCurrentUser(userData)
      history.push('/')
    } else if (userData.includes('401')) {
      setPasswordError(true)
    } else {
      setUsernameError(true)
    }
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
              <UserLogin
                handleLogin={handleLogin}
                usernameError={usernameError}
                setUsernameError={setUsernameError}
                passwordError={passwordError}
                setPasswordError={setPasswordError}
              />
            </Route>
            <Route path='/register'>
              <UserRegister
                handleRegister={handleRegister}
                handleImageUpload={handleImageUpload}
                usernameError={usernameError}
                setUsernameError={setUsernameError}
                passwordError={passwordError}
                setPasswordError={setPasswordError}
                emailError={emailError}
                setEmailError={setEmailError}
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
