import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneComment } from '../../services/comments'
import { TextField } from '@mui/material'


export default function CommentUpdate({ handleCommentUpdate }) {
    const [formData, setFormData] = useState({
        content: ''
    })

    const { content } = formData
    const { post_id, id } = useParams()

    useEffect(() => {
        const prefillFormData = async () => {
            const commentData = await getOneComment(post_id, id)
            setFormData({
                content: commentData.comment
            })
        }
        prefillFormData()
    },[id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCommentUpdate(formData)
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
