import './App.css'
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Layout from './layouts/Layout'
import UserRegister from './screens/users/UserRegister'
import UserLogin from './screens/users/UserLogin'
import UserUpdate from './screens/users/UserUpdate'
import UserUpdatePassword from './screens/users/UserUpdatePassword'
import MainContainer from './containers/MainContainer'
import {
  registerUser,
  loginUser,
  verifyUser,
  putUser,
  removeToken,
  putUserPassword,
} from './services/users'
import { imageUpload, imageUpdate } from './services/images'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState(false)
  const [emailError, setEmailError] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const handleRegister = async formData => {
    const userData = await registerUser(formData)
    if (userData.username) {
      setCurrentUser(userData)
      history.push('/')
    } else if (userData.data.username) {
      setUsernameError(true)
    } else if (userData.data.email) {
      setEmailError(true)
    }
  }

  const handleLogin = async formData => {
    const userData = await loginUser(formData)
    if (userData.username) {
      setCurrentUser(userData)
      history.push('/')
    } else if (userData.request.status === Number(401)) {
      setPasswordError(true)
    } else {
      setUsernameError(true)
    }
  }

  const handleUpdate = async (id, formData) => {
    const userData = await putUser(id, formData)
    if (userData.username) {
      setCurrentUser(userData)
      history.push('/')
    } else if (userData.data.username) {
      setUsernameError(true)
    } else if (userData.data.email) {
      setEmailError(true)
    }
  }

  const handleUpdatePassword = async (id, formData) => {
    const userData = await putUserPassword(id, formData)
    if (userData.username) {
      setCurrentUser(userData)
      history.push('/')
    } else if (userData.request.status === Number(401)) {
      setPasswordError(true)
    } else if (userData.request.status === Number(422)) {
      setPasswordConfirmationError(true)
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }

  const handlePasswordToggle = () => {
    setShowPassword(prevState => (prevState = !prevState))
  }

  const handleImageUpload = async image => {
    const res = await imageUpload(image)
    return res
  }

  const handleImageUpdate = async (public_url, image) => {
    const res = await imageUpdate(public_url, image)
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
            <Route path='/users/change-password'>
              <UserUpdatePassword
                currentUser={currentUser}
                handleUpdatePassword={handleUpdatePassword}
                handlePasswordToggle={handlePasswordToggle}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                passwordError={passwordError}
                setPasswordError={setPasswordError}
                passwordConfirmationError={passwordConfirmationError}
                setPasswordConfirmationError={setPasswordConfirmationError}
              />
            </Route>
            <Route path='/login'>
              <UserLogin
                handleLogin={handleLogin}
                handlePasswordToggle={handlePasswordToggle}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
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
                handlePasswordToggle={handlePasswordToggle}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
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
                  handleImageUpload={handleImageUpload}
                  usernameError={usernameError}
                  setUsernameError={setUsernameError}
                  emailError={emailError}
                  setEmailError={setEmailError}
                />
              ) : (
                <Redirect to='/login' />
              )}
            </Route>
            <Route path='/'>
              <MainContainer
                currentUser={currentUser}
                handleImageUpload={handleImageUpload}
                handleImageUpdate={handleImageUpdate}
              />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App
