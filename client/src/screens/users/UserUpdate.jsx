import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

export default function UserUpdate({
  currentUser,
  handleUpdate,
  handleImageUpload,
  usernameError,
  setUsernameError,
  emailError,
  setEmailError,
}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    image_url: '',
    public_img: '',
  })
  const [toggle, setToggle] = useState(false)
  const { id, username, email, image_url, public_img } = currentUser

  useEffect(() => {
    setFormData({
      username: username,
      email: email,
      image_url: image_url,
      public_img: public_img,
    })
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setToggle(false)
    handleUpdate(id, formData)
  }

  const handleImage = async e => {
    const { files } = e.target
    const uploaded_img = await handleImageUpload(files[0])
    if (uploaded_img.secure_url) {
      setToggle(true)
      setFormData(prevState => ({
        ...prevState,
        image_url: uploaded_img.secure_url,
        public_img: uploaded_img.public_id,
      }))
    }
  }

  return (
    <div className='user-register-container'>
      <Link className='user-login-link' to='/users/change-password'>
        <Button>Change Password</Button>
      </Link>
      <form
        className='user-register-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          type='file'
          id='user-update-photo-upload'
          label='Image'
          margin='normal'
          color={toggle ? 'success' : 'primary'}
          helperText={
            toggle ? 'Image uploaded successfully!' : 'Upload a new profile pic'
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
          id='user-update-username'
          type='text'
          variant='standard'
          label='Username'
          name='username'
          margin='normal'
          error={usernameError}
          helperText={usernameError ? 'Username is already in use.' : null}
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id='user-update-email'
          type='email'
          variant='standard'
          label='Email'
          name='email'
          margin='normal'
          error={emailError}
          helperText={
            emailError ? 'Account already associated with this email.' : null
          }
          value={formData.email}
          onChange={handleChange}
        />
        <Button type='submit'>Submit</Button>
      </form>
      <br />
      <br />
    </div>
  )
}
