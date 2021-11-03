import { useState } from 'react'
import { TextField } from '@mui/material'


export default function UserRegister({ handleRegister }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        image_url: '',
        password: ''
    })
    const { username, email, image_url, password } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                autoFocus
                type='text'
                label='Username'
                name='username'
                value={username}
                onChange={handleChange}
            />
            <TextField
                type='email'
                label='Email'
                name='email'
                value={email}
                onChange={handleChange}
            />
            <TextField
                type='text'
                label='Image'
                name='image_url'
                value={image_url}
                onChange={handleChange}
            />
            <TextField
                minLength='6'
                type='password'
                label='Password'
                name='password'
                value={password}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}
