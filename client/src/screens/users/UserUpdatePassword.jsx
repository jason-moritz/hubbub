import { useState, useEffect } from 'react'
import { Button, TextField, IconButton, InputAdornment } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import './UserUpdatePassword.css'
import BackButton from '../../components/BackButton'

export default function UserUpdatePassword({
  currentUser,
  handleUpdatePassword,
  handlePasswordToggle,
  showPassword,
  setShowPassword,
  passwordError,
  setPasswordError,
  passwordConfirmationError,
  setPasswordConfirmationError,
}) {
  const [formData, setFormData] = useState({
    old_password: '',
    password: '',
    password_confirmation: '',
  })
  const { old_password, password, password_confirmation } = formData

  useEffect(() => {
    setPasswordError(false)
    setPasswordConfirmationError(false)
    setShowPassword(false)
  }, [])

  const handleChange = e => {
    const { name, value } = e.target

    setPasswordError(false)
    setPasswordConfirmationError(false)

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (handleUpdatePassword(currentUser.id, formData)) {
      setPasswordError(false)
      setPasswordConfirmationError(false)
    }
    if (passwordError) {
      setFormData(prevState => ({
        ...prevState,
        old_password: '',
      }))
    } else if (passwordConfirmationError) {
      setFormData(prevState => ({
        ...prevState,
        password: '',
        password_confirmation: '',
      }))
    }
  }

  return (
    <div className='user-register-container'>
      <BackButton location='update' />
      <h1 className='user-form-title'>Update Your Password</h1>
      <form
        className='user-register-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
          id='user-old-password'
          type={showPassword ? 'text' : 'password'}
          variant='standard'
          label='Old Password'
          name='old_password'
          margin='normal'
          error={passwordError}
          helperText={passwordError ? 'Incorrect password' : null}
          value={old_password}
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
        <TextField
          required
          fullWidth
          id='user-new-password'
          type={showPassword ? 'text' : 'password'}
          variant='standard'
          label='New Password'
          name='password'
          margin='normal'
          error={passwordConfirmationError}
          helperText={passwordConfirmationError ? 'Passwords must match' : null}
          value={password}
          onChange={handleChange}
          inputProps={{ minLength: 6, maxLength: 24 }}
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
        <TextField
          required
          fullWidth
          id='user-password-confirmation'
          type={showPassword ? 'text' : 'password'}
          variant='standard'
          label='Confirm Password'
          name='password_confirmation'
          margin='normal'
          error={passwordConfirmationError}
          helperText={passwordConfirmationError ? 'Passwords must match' : null}
          value={password_confirmation}
          onChange={handleChange}
          inputProps={{ minLength: 6, maxLength: 24 }}
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
        <Button type='submit'>Submit</Button>
      </form>
      <br />
      <br />
    </div>
  )
}
