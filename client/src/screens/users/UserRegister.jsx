import { useState } from 'react'
import { Button, TextField } from '@mui/material'

export default function UserRegister({ handleRegister, handleImageUpload }) {
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
    const uploaded_url = await handleImageUpload(e.target.files[0])
    setFormData(prevState => ({
      ...prevState,
      image_url: uploaded_url.secure_url,
      public_img: uploaded_url.public_id,
    }))
  }

  return (
    <div className='user-register-container'>
      <TextField fullWidth type='file' onChange={handleImage} />
      <div>
        <img src={formData.image_url} />
      </div>
      <form
        className='user-register-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          autoFocus
          required
          fullWidth
          id='user-register-username'
          type='text'
          variant='standard'
          label='Username'
          name='username'
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
          value={email}
          onChange={handleChange}
        />
        {/* <TextField
                type='text'
                label='Image'
                name='image_url'
                value={image_url}
                onChange={handleChange}
            /> */}
        <TextField
          required
          fullWidth
          id='user-register-password'
          type='password'
          variant='standard'
          label='Password'
          name='password'
          helperText='6 character minimum'
          value={password}
          onChange={handleChange}
          inputProps={{ minLength: 6 }}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
