import './App.css'
import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Layout from './layouts/Layout'
import UserRegister from './screens/users/UserRegister'
import UserLogin from './screens/users/UserLogin'
import MainContainer from './containers/MainContainer'
import { 
  userRegister, 
  userLogin, 
  userVerify, 
  removeToken 
} from './services/users'


function App() {
  const [user, setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await userVerify()
      setUser(userData)
    }
    handleVerify()
  },[])

  const handleRegister = async (formData) => {
    const userData = await userRegister(formData)
    setUser(userData)
    history.push('/')
  }

  const handleLogin = async (formData) => {
    const userData = await userLogin(formData)
    setUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }

  return (
    <div className="App">
      <Layout
        user={user}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path='/login'>
            <UserLogin
              handleLogin={handleLogin}
            />
          </Route>
          <Route path='/register'>
            <UserRegister
              handleRegister={handleRegister}
            />
          </Route>
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
