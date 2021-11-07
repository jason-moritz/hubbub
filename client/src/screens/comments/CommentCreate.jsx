import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import BackButton from '../../components/BackButton'
import './CommentCreate.css'

export default function CommentCreate({ handleCommentCreate }) {
  const [formData, setFormData] = useState({
    content: '',
  })

  const { content } = formData
  const { id } = useParams()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleCommentCreate(id, formData)
  }

  return (
    <div className='comment-create-container'>
      <BackButton location={`posts/${id}`} />
      <h1>Add your 2 cents!</h1>
      <form
        className='comment-create-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          autoFocus
          required
          fullWidth
          id='comment-create-title'
          type='text'
          variant='standard'
          label='Comment'
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
      <br />
      <br />
    </div>
  )
}
