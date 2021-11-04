import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TextField } from '@mui/material'


export default function CommentUpdate({ handleCommentUpdate }) {
    const [formData, setFormData] = useState({
        content: ''
    })

    const { content } = formData
    const { id } = useParams()

    useEffect(() => {
        const prefillFormData = () => {

        }
        
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
            
        </div>
    )
}
