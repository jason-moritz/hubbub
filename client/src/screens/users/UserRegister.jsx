import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import './UserRegister.css'

export default function UserRegister({
  handleRegister,
  handleImageUpload,
  usernameError,
  setUsernameError,
  passwordError,
  setPasswordError,
  emailError,
  setEmailError,
}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    image_url: '',
    password: '',
    public_img: '',
  })
  const { username, email, image_url, password } = formData

  const handleChange = e => {
    const { name, value } = e.target

    setUsernameError(false)
    setPasswordError(false)
    setEmailError(false)

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleRegister(formData)
  }

  const handleImage = async e => {
    const { files } = e.target
    const uploaded_img = await handleImageUpload(files[0])
    setFormData(prevState => ({
      ...prevState,
      image_url: uploaded_img.secure_url,
      public_img: uploaded_img.public_id,
    }))
  }

  return (
    <div className='user-register-container'>
      <form
        className='user-register-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          type='file'
          id='user-register-photo-upload'
          label='Image'
          margin='normal'
          color={formData.image_url ? 'success' : 'primary'}
          helperText={
            formData.image_url
              ? 'Image uploaded successfully!'
              : 'Upload a profile pic'
          }
          onChange={handleImage}
        />
        {formData.image_url ? (
          <img className='image-preview' src={formData.image_url} />
        ) : null}
        <TextField
          autoFocus
          required
          fullWidth
          id='user-register-username'
          type='text'
          variant='standard'
          label='Username'
          name='username'
          margin='normal'
          error={usernameError}
          helperText={usernameError ? 'Username is already in use.' : null}
          value={username}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id='user-register-email'
          type='email'
          variant='standard'
          label='Email'
          name='email'
          margin='normal'
          error={emailError}
          helperText={
            emailError ? 'Account already associated with this email.' : null
          }
          value={email}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id='user-register-password'
          type='password'
          variant='standard'
          label='Password'
          name='password'
          margin='normal'
          helperText='6 character minimum'
          value={password}
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
