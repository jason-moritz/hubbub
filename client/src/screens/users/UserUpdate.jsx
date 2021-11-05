import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'

export default function UserUpdate({ currentUser, handleUpdate }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    image_url: '',
  })
  // const { username, email, image_url, password } = formData
  const { id, username, email, image_url } = currentUser

  useEffect(() => {
    setFormData({
      username: username,
      email: email,
      image_url: image_url,
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
    handleUpdate(id, formData)
  }

  // const handleImage = async (e) => {
  //     const uploaded_url = await handleImageUpload(e.target.files[0])
  //     setFormData(prevState => ({
  //         ...prevState,
  //         image_url: uploaded_url
  //     }))
  // }

  return (
    <div>
      {/* <TextField
            type='file'
            onChange={handleImage}
        />
        <div>
            <img src={formData.image_url} />
        </div> */}
      <Link to='/users/change-password'>Change Password</Link>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          type='text'
          label='Username'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          type='email'
          label='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        {/* <TextField
                type='text'
                label='Image'
                name='image_url'
                value={image_url}
                onChange={handleChange}
            /> */}
        <button>Submit</button>
      </form>
    </div>
  )
}
