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
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          fullWidth
          required
          type='text'
          variant='standard'
          label='Username'
          name='username'
          value={username}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
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
          fullWidth
          required
          type='password'
          minLength='6'
          variant='standard'
          label='Password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <Button>Submit</Button>
      </form>
    </div>
  )
}
