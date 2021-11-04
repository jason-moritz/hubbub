import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneComment } from '../../services/comments'
import { TextField } from '@mui/material'


export default function CommentUpdate({ handleCommentUpdate }) {
    const [formData, setFormData] = useState({
        content: ''
    })

    const { content } = formData
    const { id } = useParams()

    useEffect(() => {
        // const prefillFormData = async () => {
        //     const commentData = await getOneComment()
        // }
        console.log(id)
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
            this is the comment update page
        </div>
    )
}
