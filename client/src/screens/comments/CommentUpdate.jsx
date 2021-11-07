import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneComment } from '../../services/comments'
import { Button, TextField } from '@mui/material'
import BackButton from '../../components/BackButton'

export default function CommentUpdate({ handleCommentUpdate }) {
  const [formData, setFormData] = useState({
    content: '',
  })

  const { content } = formData
  const { post_id, id } = useParams()

  useEffect(() => {
    const prefillFormData = async () => {
      const commentData = await getOneComment(post_id, id)
      setFormData({
        content: commentData.content,
      })
    }
    prefillFormData()
  }, [id])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleCommentUpdate(post_id, id, formData)
  }

  return (
    <div className='comment-create-container'>
      <BackButton location={`posts/${post_id}`} />
      <h1>Update your 2 cents!</h1>
      <form
        className='comment-create-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          autoFocus
          required
          fullWidth
          id='comment-update-title'
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
