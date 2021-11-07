import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import './PostCreate.css'
import BackButton from '../../components/BackButton'

export default function PostCreate({ handlePostCreate, handleImageUpload }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: '',
    public_img: '',
  })
  const { title, content, image_url } = formData

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    handlePostCreate(formData)
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
    <div className='post-create-container'>
      <BackButton location='posts' />

      <h1>Create a new post!</h1>
      <form
        className='post-create-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          type='file'
          id='post-create-photo-upload'
          label='Image'
          margin='normal'
          color={image_url ? 'success' : 'primary'}
          helperText={
            image_url ? 'Image uploaded successfully!' : 'Upload a photo'
          }
          onChange={handleImage}
        />
        {image_url ? (
          <img
            className='image-preview'
            src={image_url}
            alt='post-attachment-preview'
          />
        ) : null}
        <TextField
          autoFocus
          required
          fullWidth
          id='post-create-title'
          type='text'
          variant='standard'
          label='Title'
          name='title'
          margin='normal'
          value={title}
          onChange={handleChange}
          inputProps={{ minLength: 3, maxLength: 30 }}
        />
        <TextField
          required
          fullWidth
          id='post-create-content'
          type='text'
          variant='standard'
          label='Content'
          name='content'
          margin='normal'
          multiline={true}
          rows={5}
          value={content}
          onChange={handleChange}
          inputProps={{ minLength: 3, maxLength: 240 }}
        />
        <Button type='submit'>
          <span className='button-link'>Submit</span>
        </Button>
      </form>
      <br />
      <br />
    </div>
  )
}
