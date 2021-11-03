import api from './api-config'


export const userLogin = async (loginData) => {
    const res = await api.post('/auth/login', { authentication: loginData })
    localStorage.setItem('AuthToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
}

export const userRegister = async (registerData) => {
    const res = await api.post('/users', { user: registerData })
    localStorage.setItem('AuthToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
}

export const userVerify = async () => {
    const token = localStorage.getItem('authToken')
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const res = await api.get('/auth/verify')
        return res.data
    }
    return null
}

export const removeToken = () => {
    api.defaults.headers.common.authorization = null
}