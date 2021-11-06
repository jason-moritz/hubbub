import api from './api-config'

export const loginUser = async loginData => {
  try {
    const res = await api.post('/auth/login', { authentication: loginData })
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
  } catch (error) {
    return error.message
  }
}

export const registerUser = async registerData => {
  try {
    const res = await api.post('/users', { user: registerData })
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
  } catch (error) {
    return error.message
  }
}

export const putUser = async (id, userData) => {
  try {
    const res = await api.put(`/users/${id}`, { user: userData })
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
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
