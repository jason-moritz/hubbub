import { useState } from 'react'
import { TextField } from '@mui/material'

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
    <div>
      <TextField type='file' onChange={handleImage} />
      <div>
        <img src={formData.image_url} />
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          type='text'
          label='Username'
          name='username'
          value={username}
          onChange={handleChange}
        />
        <TextField
          type='email'
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
          minLength='6'
          type='password'
          label='Password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
