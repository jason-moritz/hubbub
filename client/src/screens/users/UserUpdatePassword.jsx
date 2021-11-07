import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import './UserUpdatePassword.css'
import BackButton from '../../components/BackButton'

export default function UserUpdatePassword({
  currentUser,
  handleUpdatePassword,
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
    handleUpdatePassword(currentUser.id, formData)
    setFormData({
      old_password: '',
      password: '',
      password_confirmation: '',
    })
  }

  return (
    <div className='user-register-container'>
      <BackButton location='update' />
      <form
        className='user-register-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
          id='user-old-password'
          type='password'
          variant='standard'
          label='Old Password'
          name='old_password'
          margin='normal'
          error={passwordError}
          helperText={passwordError ? 'Incorrect password' : null}
          value={old_password}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id='user-new-password'
          type='password'
          variant='standard'
          label='New Password'
          name='password'
          margin='normal'
          error={passwordConfirmationError}
          helperText={
            passwordConfirmationError
              ? 'Passwords must match'
              : '6 character minimum'
          }
          value={password}
          onChange={handleChange}
          inputProps={{ minLength: 6, maxLength: 24 }}
        />
        <TextField
          required
          fullWidth
          id='user-password-confirmation'
          type='password'
          variant='standard'
          label='Confirm Password'
          name='password_confirmation'
          margin='normal'
          error={passwordConfirmationError}
          helperText={passwordConfirmationError ? 'Passwords must match' : null}
          value={password_confirmation}
          onChange={handleChange}
          inputProps={{ minLength: 6, maxLength: 24 }}
        />
        <Button type='submit'>Submit</Button>
      </form>
      <br />
      <br />
    </div>
  )
}
