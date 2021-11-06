import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

export default function PostUpdate({
  posts,
  handlePostUpdate,
  handleImageUpdate,
}) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: '',
    public_img: '',
  })
  const { title, content, image_url } = formData
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const currentPost = posts.find(post => post.id === Number(id))
      const { title, content, image_url, public_img } = currentPost
      setFormData({
        title: title,
        content: content,
        public_img: public_img,
      })
    }
    if (posts.length) {
      prefillFormData()
    }
  }, [posts, id])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    handlePostUpdate(id, formData)
  }

  const handleImage = async (public_url, e) => {
    const { files } = e.target
    const uploaded_img = await handleImageUpdate(public_url, files[0])
    setFormData(prevState => ({
      ...prevState,
      image_url: uploaded_img.secure_url,
      public_img: uploaded_img.public_id,
    }))
  }

  return (
    <div className='post-create-container'>
      <h1>Update your post!</h1>
      <form
        className='post-create-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          type='file'
          id='post-update-photo-upload'
          label='Image'
          margin='normal'
          color={formData.image_url ? 'success' : 'primary'}
          helperText={
            formData.image_url
              ? 'Image updated successfully!'
              : 'Upload a photo'
          }
          onChange={handleImage}
        />
        <TextField
          autoFocus
          required
          fullWidth
          id='post-update-title'
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
          id='post-update-content'
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
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
