import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TextField } from '@mui/material'

export default function PostUpdate({ posts, handlePostUpdate }) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image_url: ''
    })
    const { title, content, image_url } = formData
    const { id } = useParams()

    useEffect(() => {
        const prefillFormData = () => {
            const currentPost = posts.find(post => post.id === Number(id))
            const { title, content, image_url } = currentPost
            setFormData({
                title: title,
                content: content,
                image_url: image_url
            })
        }
        if (posts.length) {
            prefillFormData()
        }
    },[posts, id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handlePostUpdate(id, formData)
    }

    return (
        <div>
            <h1>Update your post!</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    autoFocus
                    type='text'
                    label='Title'
                    name='title'
                    value={title}
                    onChange={handleChange}
                />
                <TextField
                    type='text'
                    label='Content'
                    name='content'
                    value={content}
                    onChange={handleChange}
                />
                <TextField
                    type='text'
                    label='Image'
                    name='image_url'
                    value={image_url}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}