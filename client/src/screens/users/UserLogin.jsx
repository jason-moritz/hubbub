import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField, IconButton, InputAdornment } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import BackButton from '../../components/BackButton'
import './UserLogin.css'

export default function UserLogin({
  handleLogin,
  handlePasswordToggle,
  usernameError,
  setUsernameError,
  passwordError,
  setPasswordError,
  showPassword,
  setShowPassword,
}) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData

  useEffect(() => {
    setUsernameError(false)
    setPasswordError(false)
    setShowPassword(false)
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setUsernameError(false)
    setPasswordError(false)

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleLogin(formData)
    setFormData(prevState => ({
      ...prevState,
      password: '',
    }))
  }

  return (
    <div className='user-login-container'>
      <BackButton location='' />
      <Link className='user-login-link' to='/register'>
        <Button>Not a user? Sign up today!</Button>
      </Link>
      <form
        className='user-login-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          autoFocus
          required
          fullWidth
          id='user-login-username'
          type='text'
          variant='standard'
          label='Username'
          name='username'
          margin='normal'
          error={usernameError}
          helperText={usernameError ? 'Incorrect username' : null}
          value={username}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id='user-login-password'
          type={showPassword ? 'text' : 'password'}
          variant='standard'
          label='Password'
          name='password'
          margin='normal'
          error={passwordError}
          helperText={passwordError ? 'Incorrect password' : null}
          value={password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handlePasswordToggle}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type='submit'>Login</Button>
      </form>
      <br />
      <br />
    </div>
  )
}
