import api from './api-config'


export const userLogin = async (loginData) => {
    try {
        const res = await api.post('/auth/login', { authentication: loginData })
        localStorage.setItem('authToken', res.data.token)
        api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
        return res.data.user
    } catch (error) {
        throw error
    }
}

export const userRegister = async (registerData) => {
    try {
        const res = await api.post('/users', { user: registerData })
        localStorage.setItem('authToken', res.data.token)
        api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
        return res.data.user
    } catch (error) {
        throw error
    }
}

export const putUser = async (userData) => {
    try {
        const res = await api.post('/users/1', userData)
        localStorate.setItem('authToken', res.data.token)
        api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
        return res.data.user
    } catch (error) {
        throw error
    }
}

export const userVerify = async () => {
    try {
        const token = localStorage.getItem('authToken')
        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const res = await api.get('/auth/verify')
            return res.data
        }
        return null
    } catch (error) {
        throw error
    }
}

export const removeToken = () => {
    api.defaults.headers.common.authorization = null
}