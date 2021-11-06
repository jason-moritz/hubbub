import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { TextField } from '@mui/material'


export default function CommentCreate({ handleCommentCreate }) {
    const [formData, setFormData] = useState({
        content: ''
    })

    const { content } = formData
    const { id } = useParams()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCommentCreate(id, formData)
    }

    return (
        <div>
            <h1>Add your 2 cents!</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    autoFocus
                    multiline={true}
                    rows={10}
                    id='comment'
                    type='text'
                    label='Comment'
                    name='content'
                    value={content}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>        
        </div>
    )
}
