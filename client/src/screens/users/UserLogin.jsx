import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import './UserLogin.css'

export default function UserLogin({
  handleLogin,
  usernameError,
  passwordError,
}) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleLogin(formData)
  }

  return (
    <div className='user-login-container'>
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
          error={usernameError}
          value={username}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id='user-login-password'
          type='password'
          variant='standard'
          label='Password'
          name='password'
          error={passwordError}
          value={password}
          onChange={handleChange}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
