import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import BackButton from '../../components/BackButton'

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
  const [toggle, setToggle] = useState(false)
  const { title, content } = formData
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const currentPost = posts.find(post => post.id === Number(id))
      const { title, content, image_url, public_img } = currentPost
      setFormData({
        title: title,
        content: content,
        image_url: image_url,
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
    setToggle(false)
    handlePostUpdate(id, formData)
  }

  const handleImage = async (e, public_url) => {
    const { files } = e.target
    const uploaded_img = await handleImageUpdate(public_url, files[0])
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
    <div className='post-create-container'>
      <BackButton location={`posts/${id}`} />
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
          color={toggle ? 'success' : 'primary'}
          helperText={
            toggle ? 'Image updated successfully!' : 'Upload a new image'
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
          inputProps={{ minLength: 3, maxLength: 50 }}
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
          inputProps={{ minLength: 3, maxLength: 400 }}
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
