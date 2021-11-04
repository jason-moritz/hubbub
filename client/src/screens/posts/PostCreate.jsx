import { useState } from 'react'
import { TextField } from '@mui/material'

export default function PostCreate({ handlePostCreate }) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image_url: ''
    })
    const { title, content, image_url } = formData
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handlePostCreate(formData)
    }

    return (
        <div>
            <h1>Create a new post!</h1>
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
