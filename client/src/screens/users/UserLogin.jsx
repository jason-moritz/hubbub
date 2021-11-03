import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'


export default function UserLogin({ handleLogin }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(formData)
    }

    return (
        <div>
            <Link to='/register'>Not a user? Sign up today!</Link>
            <form onSubmit={handleSubmit}>
                <input
                    autoFocus
                    type='text'
                    label='Username'
                    name='username'
                    value={username}
                    onChange={handleChange}
                />
                <input
                    minLength='6'
                    type='password'
                    label='Password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
